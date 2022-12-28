 import React from 'react';
 import "./SearchBar.css";
 import App from '../App';
 import './App.css'
 import SearchIcon from '@mui/icons-material/Search';
 function SearchBar({placeholder,data}) {
   return (
     <div className='search'>
      <div className='searchInputs'>
        <input type='text' placeholder={placeholder}/>
        <div className='searchIcon'><searchIcon /></div>
        </div>
        <div className='dataResult'></div>
        {data.map((value,key)=>{
          return(
            <p>{value.title}</p>
          )
        }
        )}
       
     </div>
   );
 }
 export default SearchBar;