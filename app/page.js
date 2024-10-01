import './page.css';
import Link from "next/link";

const Splash = () => {
  return (
    <div className='splash-container'>
      <div>
        <h1>Astrocataclysm</h1>
        <p>A Science-fiction Trading Card Game</p>
      </div>
      
      <div className='splash-links'>
        <Link href='/factions'>Factions</Link>
        <Link href='/cards'>Cards</Link>
      </div>
    </div>
  );
}

export default Splash;