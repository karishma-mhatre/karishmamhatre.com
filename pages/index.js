import Head from 'next/head'
import AboutMe from '../components/AboutMe'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Karishma Mhatre</title>
        <link rel="icon" href="/images/profile.png" />
      </Head>

      <main>
        <AboutMe />
      </main>
      <style jsx>{`
      .container {
          min-height: 100vh;
          padding: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}
      </style>
      <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap');

        * {
          box-sizing: border-box;
          font-family: 'Lato', sans-serif;
        }
      `}</style>
    </div>
  )
}
