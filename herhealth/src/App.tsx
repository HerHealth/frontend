import { Outlet } from "react-router-dom";
import "./App.css";
// import { useLoadingStore } from "./providers/LoadingProvider";

function App() {
  // const { loading } = useLoadingStore();
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
