import { useLocation } from 'react-router-dom';

export default function Level2() 
{
    const location = useLocation();
    const score = location.state ? location.state.score : 0;

    

    return (
        <>
            

            <Float
                speed={4}
                floatIntensity={3}>
                <Text
                    font="./fonts/bangers-v20-latin-regular.woff"
                    fontSize={1}
                    color="darkblue"
                    position-y={14}
                    position-x={-10}
                    textAlign="left"
                >Level 2: Tender Haze </Text>
            </Float>

            <Float
                speed={4}
                floatIntensity={3}>
                <Text
                    font="./fonts/bangers-v20-latin-regular.woff"
                    fontSize={1}
                    color="indigo"
                    position-y={14}
                    position-x={10}
                    textAlign="right"
                >Health Score: {score}  </Text>
            </Float>
        </>
    );
}