import { Suspense } from "react";
import "./App.css";
import { DataLoader1, DataLoader2 } from "./components/DataLoader";

function App() {
  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <DataLoader1 />
        <DataLoader2 />
      </Suspense>
    </div>
  );
}

export default App;
