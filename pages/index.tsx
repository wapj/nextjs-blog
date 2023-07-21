import Link from 'next/link';
import Image from 'next/image';
import { getSortedPostsData } from "../lib/posts";
import Layout from "../components/layout";
import utilStyles from '../styles/utils.module.css';

function Header({title}) {
    return <h1>{title ? title : "default title"}</h1>
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        }
    }
}

const Profile = () => (
    <Image src={"/images/profile.jpg"} height={144} width={144} alt={"seungkyoo"}/>
)

export default function HomePage({allPostsData}) {
    return (
        <Layout home>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            {title}
                            <br />
                            {id}
                            <br />
                            {date}
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}