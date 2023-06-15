import { Post } from "./components/Post"
import { Header } from "./components/Header"

import styles from './App.module.css';
import './global.css'
import { Sidebar } from "./components/Sidebar";

function App() {

  return (
    <>
      <Header />
       <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post author="Joao" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum." />
          <Post author="Joao" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum." />
        </main>
      </div>
    </>
  )
}

export default App
