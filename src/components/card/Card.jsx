import styles from "./Card.module.css";
import Image from "next/image";
import Link from "next/link";
const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)} - {""}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/`}>
          <h1>{item.title}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur ipsa perspiciatis deserunt odio porro quidem vitae dicta
            repellendus, a repellat impedit necessitatibus ea! Maxime officiis
            sunt id ullam quo eum?
          </p>
        </Link>
        <div className={styles.desc} />
        <Link href={`/`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
