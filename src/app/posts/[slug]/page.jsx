import Menu from "@/components/menu/Menu";
import styles from "./SinglePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";
const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src={"/p1.jpeg"} alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>98-38-3890</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          {" "}
          <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ad
              minima, ratione quis deserunt voluptatum dolores nam quos nobis
              autem, provident harum porro illo, aperiam cumque obcaecati! A,
              nulla quia.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ad
              minima, ratione quis deserunt voluptatum dolores nam quos nobis
              autem, provident harum porro illo, aperiam cumque obcaecati! A,
              nulla quia.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
