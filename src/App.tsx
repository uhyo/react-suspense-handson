import { Suspense } from 'react';
import './App.css'

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const AlwaysSuspend: React.VFC = () => {
  throw sleep(1000);
}

function App() {
  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <AlwaysSuspend />
      </Suspense>
    </div>
  )
}

export default App
