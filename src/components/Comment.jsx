import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/maykbrito.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Mayk Brito</strong>
                            <time title="06/11/2023 09:57PM" dateTime="2023-06-11 21:58:00">1 hour ago</time>

                        </div>

                        <button title="Delete comment">
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Awesome!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Like <span>10</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}