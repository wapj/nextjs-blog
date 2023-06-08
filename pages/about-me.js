import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>
    <Head>
      <title>승귤은 누구인가?</title>
    </Head>
    <div>
      <h2>승귤은 누구인가?&nbsp;</h2>
      <span>일본에서 외노자로 일하다, 한국으로 건너와 서울찍고 부산찍고 판교에서 일하는 IT인</span>
    </div>

    <div>
      <Link href="/">홈으로</Link>
    </div>
    </Layout>
  );
}
