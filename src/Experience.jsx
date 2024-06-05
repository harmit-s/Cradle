import { OrbitControls, Float, Text, Sparkles } from '@react-three/drei';
import { Physics } from '@react-three/rapier'
import { useState } from 'react'
import Homepage from './Homepage'
import Level1 from './Level1'
import Level2 from './levels/2'
import Level3 from './levels/3'
import Level4 from './levels/4'
import Level5 from './levels/5'
import Level6 from './levels/6'
import Leaderboard from './Leaderboard';

export default function Experience() {
    const [level, setLevel] = useState(0)
    const [score, setScore] = useState(6000);

    const handleLevelComplete = (newScore) => {
        setScore(newScore);
        setLevel(level + 1);
    };

    const restartLevel = () => {
        setLevel(level === 1 ? 0 : 1);
        setTimeout(() => {
            setLevel(level);
        }, 0)
    }

    const skipLevel = () => {
        setScore(score - 1000);
        setLevel(level + 1);
    };

    const handleStartGame = () => {
        setLevel(1); 
    };

    const leaderboardPage = () => {
        setLevel(7);
    }


    return <>

        <OrbitControls />
        <ambientLight intensity={.4} />
        <Physics debug>
            {level === 0 && <Homepage startGame={handleStartGame} leaderboard={leaderboardPage} />}
            {level === 1 && <Level1 setLevel={setLevel} setScore={setScore} />}
            {level === 2 && <Level2 setLevel={setLevel} setScore={setScore} />}
            {level === 3 && <Level3 setLevel={setLevel} setScore={setScore} />}
            {level === 4 && <Level4 setLevel={setLevel} setScore={setScore} />}
            {level === 5 && <Level5 setLevel={setLevel} setScore={setScore} />}
            {level === 6 && <Level6 setLevel={setLevel} setScore={score} />}
            {level === 7 && <Leaderboard setLevel={setLevel} />}

            {level >= 1 && level <= 5 && (
                <Float
                    speed={4}
                    floatIntensity={3}>
                    <Text
                        font="./fonts/bangers-v20-latin-regular.woff"
                        fontSize={1}
                        color="indigo"
                        position-y={14}
                        position-x={12}
                        textAlign="right"
                    >Health Score: {score}  </Text>
                </Float>
            )}

            {level >= 1 && level <= 6 && (
                <Text
                    font="./fonts/bangers-v20-latin-regular.woff"
                    fontSize={1}
                    color="black"
                    position-x={-22}
                    textAlign="center"
                    onClick={restartLevel}
                >Restart Level</Text>
            )}

            {level  >= 1 && level <= 5 && (
                <Text
                    font="./fonts/bangers-v20-latin-regular.woff"
                    fontSize={1}
                    color="red"
                    position={[-22, -3, 0]}
                    textAlign="center"
                    onClick={skipLevel}
                >Skip Level (-1000)
                </Text>
            )}
            <Sparkles
                size={8}
                scale={[20, 8, 20]}
                position-y={2}
                speed={2}
                count={40}
            />
        </Physics>
    </>
}