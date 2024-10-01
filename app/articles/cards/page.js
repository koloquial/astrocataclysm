import Link from "next/link";

const CardArticles = () => {
    return (
<div className='page-container'>
        <h1>Astrocataclysm</h1>
        <h4><Link href='/'>Home</Link> / <Link href='/articles'>Articles</Link> / Cards</h4>
        <hr />
            <Link href='/articles/cards/0'>Elder of the Void</Link>
        </div>
    )
}

export default CardArticles;