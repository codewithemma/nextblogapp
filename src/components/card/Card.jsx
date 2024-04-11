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
          <span className={styles.date}>03.45.5593 </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href={`/posts/`}>
          <h1>{item.title}</h1>
          <p>{item.desc}</p>
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
