                  import React from 'react';

                  export default function EmployeeListItems( {
                  name , 
                  image ,
                  title ,
                  descrption, 
                  calloffice, 
                  callmobile, 
                  sms ,
                  email,
                  }) {
                  return (
                  <div>
                  <div className='styledEmploee'>
                  <h4>Employee</h4>
                  </div>
                  
                  <img style={{width:50,height:50,borderRadius:50/2,
                  }}

                  src={image} 
                  alt={image}/>


                  
                  <p><strong>{name}</strong></p>
                  <p>{title }</p>
                  <p>{descrption}</p>
                  <p>{calloffice}</p>
                  <p>{callmobile}</p>
                  <p>{sms }</p>
                  <p>{email}</p>
                  </div>
                  
                  );
                  }
