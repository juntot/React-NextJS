import Head from 'next/head'
import Image from 'next/image'
// import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data =  await res.json();

  return {
    props: {test: data}
  }
}

export default function Home(props) {
  console.log(props);
  return (
    <>
      <Head>
        <title>Tae</title>
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="John Doe" />
      </Head>
      <div className={styles.container}>
        <h1>Home</h1>
        <ul>
          {props.test.map(data=>{
            return (<li key={data.id}>{data.title}</li>)
          })}
        </ul>
      </div>
    </>
  )
}
