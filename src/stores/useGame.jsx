import { create } from 'zustand';

const useGame = create((set) => ({
  score: 5000,
  showCubes: Array(10).fill(true), // Initialize showCubes array
  isLevelComplete: false,
  setShowCubes: (newShowCubes) => set({ showCubes: newShowCubes }),
  decrementScore: (points) => set((state) => ({ score: state.score - points })),
  setIsLevelComplete: (isLevelComplete) => set({ isLevelComplete }),
  checkLevelCompletion: (redCubePosition, blackCubePosition, blackCube2Position, planePosition) => {
    if (
      redCubePosition.y >= blackCubePosition.y &&
      blackCubePosition.y >= planePosition.y &&
      redCubePosition.y >= blackCube2Position.y
    ) {
      set({ isLevelComplete: true });
    }
  },
}));

export default useGame;