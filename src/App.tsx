import { Suspense } from 'react';
import './App.css'

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const AlwaysSuspend: React.VFC = () => {
  throw sleep(1000);
}

const SuspenseError: React.VFC = () => {
  return (
    <div>
      <p>読み込み中...</p>
    </div>
  )
}

function App() {
  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      {/* <Suspense fallback={<p>Loading...</p>}> */}
      <Suspense fallback={<SuspenseError />}>
        {/* ↓表示されない */}
        <p>ここは表示される？</p>
        <AlwaysSuspend />
      </Suspense>
    </div>
  )
}

export default App
