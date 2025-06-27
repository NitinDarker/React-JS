import Button from "./Components/Button"
import Hero from "./Components/Hero"
import Input from "./Components/Input"

function App() {
  return (
    <>
      <div className="bg-blue-669 h-dvh flex flex-col justify-center items-center antialiased">
        <Hero />
        <Input />
        <Button />
      </div>
    </>
  )
}

export default App
