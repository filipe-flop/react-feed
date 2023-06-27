import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/diego3g.png" />
                    <div className={styles.authorInfo}> 
                        <strong>Diego Fernandes</strong>
                        <span>Software Developer</span>
                    </div>
                </div>

                <time title="06/11/2023 09:56PM" dateTime="2023-06-11 21:56:00">Published 1 hour ago</time>
            </header>

            <div className={styles.content}>
                <p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                
                <p>Quam ab saepe impedit error, magnam quas assumenda recusandae earum animi laboriosam ex nisi perferendis?</p>
                
                <p>Pariatur aut itaque molestiae possimus blanditiis ipsa.</p>

                <p>👉<a href="">test.design/link</a></p>

                <p><a href="">#hashtag</a></p>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Give feedback</strong>

                <textarea
                    placeholder="Comment"
                />

                <footer>
                    <button type="submit">Publish</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
            </div>
        </article>
    )
}

