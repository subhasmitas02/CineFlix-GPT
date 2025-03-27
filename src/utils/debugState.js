import { useSelector } from "react-redux";

// DebugState Component to log the state using useSelector
const DebugState = () => {
    const state = useSelector((state) => state);
    console.log("State from useSelector:", state); // Logs the entire Redux state
    return null;
};

// Correct export statements
export default DebugState;