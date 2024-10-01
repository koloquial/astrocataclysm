import Link from "next/link"

const Articles = () => {
    return (
        <div className='page-container'>
        <h1>Astrocataclysm</h1>
        <h4><Link href='/'>Home</Link> / Articles</h4>
        <hr />
        <Link href='/articles/cards'>Cards</Link>
    </div>
    )
}

export default Articles;