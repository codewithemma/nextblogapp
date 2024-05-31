import styles from "./CategoryList.module.css";
import Link from "next/link";
import Image from "next/image";
const getData = async () => {
  const res = await fetch(
    "https://nextblogapp-seven.vercel.app//api/categories",
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};
const CategoryList = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            key={item._id}
            href="/blog?cat=style"
            className={`${styles.category} ${styles[item.slug]}`}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
