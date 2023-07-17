import {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

function Header({title}) {
    return <h1>{title ? title: "default title"}</h1>
}


const Profile = () => (
    <Image  src={"/images/profile.jpg"} height={144} width={144} alt={"seungkyoo"} />
)

export default function HomePage() {



    return (
        <div>
            <Header title={"develop. preview. ship. 🚀"} />

            <h1 className="title">
                Read <Link href={"/posts/first-post"}>this page!</Link>
            </h1>
        </div>
    )
}