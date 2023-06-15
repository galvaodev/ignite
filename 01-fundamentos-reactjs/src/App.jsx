import { Post } from "./Post"
import { Header } from "./components/Header"
import './global.css'

function App() {

  return (
    <>
      <Header />
        <Post
          author="João"
          content="Olá, mundo!"
        />
    </>
  )
}

export default App
