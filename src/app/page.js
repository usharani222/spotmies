import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import HomePage from "@/components/homePage";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  );
}
