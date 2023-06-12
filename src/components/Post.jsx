import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/filipe-flop.png" />
                    <div className={styles.authorInfo}> 
                        <strong>Filipe Oliveira</strong>
                        <span>Software Engineer</span>
                    </div>
                </div>

                <time title="11 de Junho às 21:57" dateTime="2023-06-11 21:58:00">Publicado há 1h</time>
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
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe um comentário"
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}

