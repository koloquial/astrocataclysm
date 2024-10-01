import { cardData } from "@/data/cardData";
import Link from "next/link";
import { toUpperCaseEveryWord, toUpperCaseFirstLetter } from "@/functions/capitalize";

export default async function CardArticle({ params }) {
    const { id } = params;
    const card = cardData[id] || null;

    if (!card) {
        return <div>Card not found</div>;
    }

    return (
        <div className='page-container'>
          <h1>Astrocataclysm</h1>
          <h4><Link href='/'>Home</Link> / <Link href='/articles'>Articles</Link> / <Link href='/articles/cards'>Cards</Link> / {id}</h4>
          <hr />
          <h2>{card.name}</h2>

        
 <div className='float-image'><img src={card.img} alt={card.name} /></div>
               
         
                
          
       
        {Object.keys(card.article).map(title => {
            if(title !== 'references'){
                return (
                    <>
                    <h4 key={title}>{toUpperCaseEveryWord(title)}</h4>
                    <p>{card.article[title]}</p>
                    </>
                )
            }else{
                <h4 key={title}>{toUpperCaseEveryWord(title)}</h4>
                return <ul key={title}>{card.article[title].map(reference => {
                    return <li key={reference}>{reference}</li>
                })}</ul>
            }
           
        })}
         

        </div>
    );
}
