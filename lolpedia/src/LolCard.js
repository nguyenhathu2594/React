import React from 'react';
import './LolCard.css';

const LolCard = ({name}) => <article className='LolCard'>
    <h3>{name}</h3>
    <img src={"https://ddragon.leagueoflegends.com/cdn/8.4.1/img/champion/" + name+ ".png"} alt={name}/>
</article>

export default LolCard