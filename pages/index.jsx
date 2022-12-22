import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import { Landing } from "../components/Landing";


export default function Home() {
  return (
    <>
      <Head>
        <title>Sarah Gu</title>
        <meta name="description" content="Sarah Gu Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col overflow-hidden text-gray-800 dark:text-gray-100">
        <main>
          
          <Landing/>
        </main>
      </div>
    </>
  );
};


