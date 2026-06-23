import Head from 'next/head';
import Link from 'next/link';
import { getAllPostIds, getPostData } from '../../lib/posts';
import styles from './post.module.css';

export default function Post({ postData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{postData.title} - Karishma Mhatre</title>
        <link rel="icon" href="/images/profile.png" />
      </Head>

      <header className={styles.header}>
        <Link href="/blog"><a>All posts</a></Link>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>{postData.title}</h1>
        <time className={styles.date}>{postData.date}</time>
        <article
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
        * { box-sizing: border-box; font-family: 'Lato', sans-serif; }
      `}</style>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  return { props: { postData } };
}
