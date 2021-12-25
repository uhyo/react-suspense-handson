import { Suspense } from "react";
import "./App.css";
import { AlwaysSuspend } from "./components/AlwaysSuspend";

function App() {
  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <AlwaysSuspend />
      </Suspense>
    </div>
  );
}

export default App;
