                    import EmployeeListItems from "./EmployeeListItems";
                    import { useState } from "react";
                    const EmployeeList =({image,name,title,descrption,callmobile,calloffice,sms,email}) =>{


                    const [isClicked,setIsClicked]=useState(false)
                    return(
                    <>
                    <div className="StyledWrapper">
                    <img style={{width:50,height:50,borderRadius:50/2}}
                    onClick={()=>setIsClicked(!isClicked)}  
                    src={image} 
                    alt={image}/>
                    <strong>{name}</strong>
                    <p>{title}</p>
                    </div>
                    {isClicked &&(
                    <div>
                    <EmployeeListItems
                    name={name}
                    image={image}
                    title={title}
                    descrption={descrption}
                    calloffice={calloffice}
                    callmobile={callmobile}
                    sms={sms}
                    email={email} />
                    </div>
                    )}
                    </>
                    )
                    }
                    export default EmployeeList;

