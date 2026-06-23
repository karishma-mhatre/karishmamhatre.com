import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts';
import styles from './blog.module.css';

export default function Blog({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog - Karishma Mhatre</title>
        <link rel="icon" href="/images/profile.png" />
      </Head>

      <header className={styles.header}>
        <Link href="/"><a>Back</a></Link>
        <h1 className={styles.title}>Blog</h1>
        <p className={styles.subtitle}>Things I've learned, figured out, or found interesting.</p>
      </header>

      <main className={styles.main}>
        {posts.map(({ slug, title, date, summary }) => (
          <article key={slug} className={styles.card}>
            <Link href={`/blog/${slug}`}>
              <a className={styles.cardLink}>
                <h2 className={styles.postTitle}>{title}</h2>
                <time className={styles.date}>{date}</time>
                {summary && <p className={styles.summary}>{summary}</p>}
              </a>
            </Link>
          </article>
        ))}
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
        * { box-sizing: border-box; font-family: 'Lato', sans-serif; }
      `}</style>
    </div>
  );
}

export async function getStaticProps() {
  const posts = getSortedPostsData();
  return { props: { posts } };
}
