import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Cart.module.css';

export default function CartPage() {
  return (
    <>
      <Head>
        <title>Cart — FireDream</title>
      </Head>
      <Navbar cartCount={0} />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>YOUR CART</h1>
          <p className={styles.empty}>Your cart is empty.</p>
          <Link href="/#products" className={styles.back}>← Keep Shopping</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
