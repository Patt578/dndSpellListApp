import React, {useEffect} from 'react';
import Card from '@material-ui/core/Card';
import './spellCard.css';

function SpellCard(props) {
    return(
        props.spells.map((x)=>{
          
        return(
        <Card>
            <p>{x.name}</p>
            <p>{x.level}</p>
            <p>{x.school.name}</p>
        </Card>
        )
    })
        
)}

export default SpellCard;