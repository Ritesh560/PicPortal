import styles from "@components/styles/Home.module.css"
import Link from "next/link"
// import styles from '@components/styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.main}>
      welcome to the world of <Link href="/abc">PicPortal</Link>
    </div>
  )
}
