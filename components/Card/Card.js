
const Card = ({ data }) => {
    const style = {
        backgroundImage: `url(${data.img})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`
    }
    return (
        <div className='card-container' style={style}>
            {data.holographic && <div className='holographic'></div>}
            
            <div className='card-name'>{data.name}</div>
            <div className='card-rarity-type'>{data.rarity} {data.type}</div>
                
            <div className={`card-abilities ${data.class}`}>
                {data.abilities.map(ability => {
                    return <div><span className='card-ability-name'>{ability.name}</span> — <span className='card-ability-description'>{ability.text}</span></div>
                })}
            </div>

            <div className={`card-footer ${data.class}`}>
                <div>🌌 10</div>
                <div style={{textAlign: 'right'}}>⚔️ 10 🛡️ 10</div>
            </div>
        </div>

    )
}

export default Card;