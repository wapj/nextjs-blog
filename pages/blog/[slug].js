import { useRouter } from 'next/router';
import Head from 'next/head';

export default function BlogPost() {
    const router = useRouter();
    const {slug} = router.query;

    return (
        <div>
            <Head>
                <title>승귤의 블로그 | {slug}</title>
                <meta name="description" content={`Read more about ${slug}`} />
                <link rel={"icon"} href={"/favicon.ico"} />
            </Head>

            <main>
                <h1>{slug}</h1>
                블로그 포스트 컨텐츠
            </main>
        </div>
    )
}