import Image from 'next/image';
import styles from './page.module.css';
import ClickMe from '../components/ClickMe';
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <ClickMe />
      </div>
    </main>
  );
}
