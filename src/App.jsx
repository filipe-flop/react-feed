import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'Software Developer'
    },
    content: [
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
      {type: 'paragraph', content: 'Quam ab saepe impedit error, magnam quas assumenda recusandae earum animi laboriosam ex nisi perferendis?'},
      {type: 'paragraph', content: 'Pariatur aut itaque molestiae possimus blanditiis ipsa.'},
      {type: 'link', content:'test.design/link'},
      {type: 'link', content: '#hashtag'}
    ],
    publishedAt: new Date('2023-06-27 10:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'UX Designer'
    },
    content: [
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
      {type: 'paragraph', content: 'Quam ab saepe impedit error, magnam quas assumenda recusandae earum animi laboriosam ex nisi perferendis?'},
      {type: 'paragraph', content: 'Pariatur aut itaque molestiae possimus blanditiis ipsa.'}
    ],
    publishedAt: new Date('2023-06-27 11:00:00')
  }
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
