import "./App.css";
import { Suspense, useState } from "react";
import { SometimesSuspend } from "./components/SometimesSuspend";
import { RenderingNotifier } from "./components/RenderingNotifier";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <RenderingNotifier name="outside Suspense" />
      <Suspense fallback={<p>Loading...</p>}>
        <SometimesSuspend />
        <RenderingNotifier name="inside Suspense" />
        <div>
          <button className="border p-1" onClick={() => setCount((c) => c + 1)}>
            {count}
          </button>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
