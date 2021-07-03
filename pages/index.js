import styles from '../styles/Home.module.css'
import Link from 'next/link';
import NavBar from '../components/Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <h4>Welcome to my website</h4>
      <p>It is a basic website of nextjs with strapi</p>
    </div>
  )
}
