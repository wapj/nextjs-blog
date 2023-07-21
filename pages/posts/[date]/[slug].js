export async function getServerSideProps({params}) {
    const {date, slug} = params;
    return {
        props: {
            date,
            slug
        }
    }
}

function Greet(props) {
    return (
        <h1> hello, {props.date} | {props.slug}</h1>
    )
}

export default Greet;