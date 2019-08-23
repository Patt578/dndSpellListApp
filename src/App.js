import React, { useState, useEffect }  from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Select from 'react-select'
import Button from '@material-ui/core/Button';
import ScrollArea from 'react-scrollbar';

import SpellCard from './components/spellCard/SpellCard';

function App() {
  let defaultUrl = 'http://localhost:3000/';
  
  let spells = [];

  useEffect(()=>{
    fetch(defaultUrl)
    .then(res => res.json())
    .then(data =>{
      spells = data;
     
    })
    .catch(err => console.log(err));   
  
  },[])


  //search stuff
  const [searchVal, setSearchVal] = useState('');

  const [lvl, setLvl] = useState(true);
  const [alph, setAlph] = useState(true);
  const[classes,setClasses] = useState([]);

  const toggleLvl = (e) => setLvl(!lvl);
  const toggleAlph = (e) => setAlph(!alph);


    
  const classArry = [
    {value:{toggleLvl},label:'Level'},
    {value:{toggleAlph},label: 'Alphabetical'},
    {value: 'Bard', label: 'Bard'},
    {value:'Cleric',label: 'Cleric'},
    {value:'Druid',label: 'Druid'},
    {value:'Fighter',label:'Fighter'},
    {value:'Monk', label:'Monk'},
    {value:'Paladin',label:'Paladin'},
    {value:'Ranger',label:'Ranger'},
    {value:'Rogue', label:'Rouge'},
    {value:'Sorcerer',label:'Sorcerer'},
    {value:'Warlock',label:'Warlock'},
    {value:'Wizard',label:'Wizard'},
]

function search(){
  console.log('searching...')
  console.log(spells)

}

function displayAll(){

  return(
    <SpellCard spells={spells}/>
  )

}

  
  return (
    <div className="App">
    <h1>Dnd Spell List 5e</h1>
    <hr/>
    <div className="searchContainer">
        <div className="searchInput">
     <TextField
        margin="0"
        label="Search"
        multiline
        onChange={e => setSearchVal(e.target.value)}
      />
    </div>

    <div className="sortBy">
       
    <Select
    placeholder="sort by"
    isMulti
    name="colors"
    options={classArry}
    className="basic-multi-select"
    classNamePrefix="select"
    onClick={(e)=>{e.stopPropagation()}}
    
  />

    </div>

    <div className="searchButton">
    <Button variant="contained" onClick={search} >
    Search
    </Button>
    </div>


    </div>
    <hr/>
    
 

    <ScrollArea
            speed={0.8}
            className={"area"}
            horizontal={false}
            smoothScrolling

            >

<SpellCard spells={spells}/>

         
          </ScrollArea>

          
    

    </div>
  );
}

export default App;
