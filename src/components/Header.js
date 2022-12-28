              import React from 'react';
              import EmployeeListItems from "./EmployeeListItems";



              const Header =({image,name,title,descrption}) =>{

              return(
              <div>
              <img src={image} alt={image}/>
              <strong>{name}</strong>
              {title}
              {descrption}
              </div>
              );
              }
              export default Header;