import Head from 'next/head';
import DynamicViewportUnitsComponent from '../components/DynamicViewportUnitsComponent';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <DynamicViewportUnitsComponent />
      </main>
    </div>
  );
}
