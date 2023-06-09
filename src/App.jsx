import { Header } from './components/Header';
import { Post } from './Post';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <Post 
        author="Filipe Oliveira"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor enim voluptas distinctio quas saepe nemo nulla a error eaque, sint, qui quisquam commodi laudantium eum, provident in quam sed. Aperiam."
      />
      <Post
        author="João Silva"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor enim voluptas distinctio quas saepe nemo nulla a error eaque, sint, qui quisquam commodi laudantium eum, provident in quam sed. Aperiam."
      />
    </div>
  )
}
