
                            import './App.css';
                        
                            import EmployeeList from "./components/EmployeeList";
                            //     import imageOne from "./image/image_one.jpg"
                            //     import imageTwo from "./image/image_two.jpg"
                            //     import imageThree from "./image/image_three.jpg"
                            //     import imageFour from "./image/image_four.jpg"
                            //     import imagefive from "./image/image_five.jpg"
                            //     import imagesix from "./image/image_six.jpg"


                            const Employee=[
                            {
                            id:"1",
                            name: "Ayenew",
                            image :"https://images.pexels.com/photos/5198239/pexels-photo-5198239.jpeg?auto=compress&cs=tinysrgb&w=600" , //imageOne,

                            title: "Front-End ",
                            descrption:"trying hard",
                            calloffice:"202-668-0900",
                            callmobile:"209-098-9878",
                            sms:"456-098-0987",
                            email:"ayregff@gmail.com",

                            },

                            {
                            id: "2",
                            name: "Zelalem",
                            image: "https://images.pexels.com/photos/2696299/pexels-photo-2696299.jpeg?auto=compress&cs=tinysrgb&w=600",//imageTwo,
                            title: "Front-End",
                            descrption:"Hard working",
                            calloffice:"202-668-0900",
                            callmobile:"209-098-9878",
                            sms:"456-098-0987",
                            email:"ayregff@gmail.com",
                            },

                            {
                            id:"3",
                            name: "Lilise",
                            image:"https://images.pexels.com/photos/7606074/pexels-photo-7606074.jpeg?auto=compress&cs=tinysrgb&w=600",//imageThree,
                            title: "Both-End",
                            descrption:"Perfict",
                            calloffice:"202-668-0900",
                            callmobile:"209-098-9878",
                            sms:"456-098-0987",
                            email:"ayregff@gmail.com",
                            },

                            {
                            id:"4",
                            name: "Kebede",
                            image:"https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=600",//imageFour,
                            title: "computer",
                            descrption:"Nice",
                            calloffice:"202-668-0900",
                            callmobile:"209-098-9878",
                            sms:"456-098-0987",
                            email:"ayregff@gmail.com",
                            },

                            {
                            id:"5",
                            name: "Belay",
                            image: "https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=600",//imagefive,
                            title: "Back-End",
                            descrption:"Nice working",
                            calloffice:"202-668-0900",
                            callmobile:"209-098-9878",
                            sms:"456-098-0987",
                            email:"ayregff@gmail.com",
                            },

                            {
                                id:"6",
                                name: "Mulu",
                                image: "https://images.pexels.com/photos/3799115/pexels-photo-3799115.jpeg?auto=compress&cs=tinysrgb&w=600",// imagesix,
                                title: "computer Eng",
                                descrption:"Hard working Perfect",
                                calloffice:"202-668-0900",
                                callmobile:"209-098-9878",
                                sms:"456-098-0987",
                                email:"ayregff@gmail.com",
                                },
                            ];

                            function App(){
                            return (
                            <div className='App'>
                            <div className='Home_Page'>
                            <div className='Employee_Directory'>
                            <h3>Employee Directory</h3> 
                            </div> 
                            <div className='search_bar'>
                            <input type="text" placeholder='search'></input>
                            </div>
                            <div className='Employee_List'>
                            {Employee.map(({name,image,title,descrption,calloffice,callmobile,sms,email},index) => {
                            return (

                            <div className='Employee_ListItems'>
                            <EmployeeList 
                            name ={name}
                            image={image}
                            title={title}
                            descrption={descrption}
                            calloffice={calloffice}
                            callmobile={callmobile}
                            sms={sms}
                            email={email}

                            />

                            </div>


                            );
                            })}
                            </div>
                             </div>
                             </div>
                             
                             

                             );
                            
                            }
                            export default App