import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { counterAtom } from './store/atoms/counter'
import './App.css'

function App () {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  )
}

function Counter () {
  return (
    <div>
      <ShowValue />
      <Increment />
      <Decrement />
    </div>
  )
}

function ShowValue () {
  const value = useRecoilValue(counterAtom)
  return <div>{value}</div>
}

function Increment () {
  const setValue = useSetRecoilState(counterAtom)
  return (
    <button
      onClick={() => {
        setValue(n => n + 1)
      }}
    >
      Increase
    </button>
  )
}

function Decrement () {
  const setValue = useSetRecoilState(counterAtom)
  return (
    <button
      onClick={() => {
        setValue(n => n - 1)
      }}
    >
      Decrease
    </button>
  )
}

export default App
