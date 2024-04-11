import styles from "./Comments.module.css";
import Link from "next/link";
import Image from "next/image";
const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea className={styles.input} placeholder="write a comment..." />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href={"/login"}>Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src={"/p1.jpeg"}
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.username}>83-39-2234</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            perferendis voluptate quidem facilis hic! Voluptates, adipisci
            porro, provident ullam enim deserunt dolorum qui sit nesciunt
            consequatur quisquam necessitatibus laudantium?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;