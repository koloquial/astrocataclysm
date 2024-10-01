import Card from "@/components/Card";
import { cardData } from "@/data/cardData";
import Link from "next/link";

const Cards = () => {
    return (
        <div className='page-container'>
            <h1>Astrocataclysm</h1>
            <h4><Link href='/'>Home</Link> / Cards</h4>
            <hr />
            {cardData.map(item => {
                return <Link key={item.id} href={`/articles/cards/${item.id - 1}`}><Card data={item} /></Link>
            })}
        </div>
    )
}

export default Cards;