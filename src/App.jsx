import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Filipe Oliveira"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor enim voluptas distinctio quas saepe nemo nulla a error eaque, sint, qui quisquam commodi laudantium eum, provident in quam sed. Aperiam."
          />
          <Post
            author="João Silva"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor enim voluptas distinctio quas saepe nemo nulla a error eaque, sint, qui quisquam commodi laudantium eum, provident in quam sed. Aperiam."
          />
        </main>
      </div>
    </div>
  )
}
