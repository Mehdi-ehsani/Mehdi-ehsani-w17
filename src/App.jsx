import { useEffect } from "react"


function App() {
  useEffect(() => {
    fetch("http://localhost:8000/contacts")
       .then(res => res.json())
       .then(data => console.log(data))
  },[])
  return (
    <>
     <h1>Hello World!</h1>
    </>
  )
}

export default App
