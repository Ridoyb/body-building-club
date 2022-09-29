import React, { useEffect, useState } from 'react';
import logo from './../../logo.svg'
import './List.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const List = ({list}) => {
    let totalTime=0;
    for (const item of list) {
        totalTime=totalTime + item.time;
    }

const [breaks, setBreaks]= useState(0)
useEffect(()=>{
    console.log('Break time:', breaks);
}, [breaks]);

const handleButton1 = () =>{
    const btnValue1= document.getElementById('btn-1').value;
    setBreaks(btnValue1);
}
const handleButton2 = () =>{
    const btnValue2= document.getElementById('btn-2').value;
    setBreaks(btnValue2);
}
const handleButton3 = () =>{
    const btnValue3= document.getElementById('btn-3').value;
    setBreaks(btnValue3);
}
const handleButton4 = () =>{
    const btnValue4= document.getElementById('btn-4').value;
    setBreaks(btnValue4);
}
const handleButton5 = () =>{
    const btnValue5= document.getElementById('btn-5').value;
    setBreaks(btnValue5);
}

const notify = () => toast("Exercise Completed!");




    return (
        <div className='list'>
            <div>
                <div className='profile-head'>
                    <div className='profile-name'>
                        <img src={logo} alt="" />
                        <h1>Ridoy</h1>
                    </div>
                    
                </div>
                <div className='profile-info'>
                    <h4>weight: <br></br>55 KG</h4>
                    <h4>Height:<br></br> 5.4</h4>
                    <h4>Age: <br></br>24</h4>
                </div>

                <h3>Add A Break</h3>
                <div className='btn'>
                    <button onClick={handleButton1} id='btn-1' value='5'>5</button>
                    <button onClick={handleButton2} id='btn-2' value='10'>10</button>
                    <button onClick={handleButton3} id='btn-3' value='15'>15</button>
                    <button onClick={handleButton4} id='btn-4' value='20'>20</button>
                    <button onClick={handleButton5} id='btn-5' value='25'>25</button>
                    
                </div>
            </div>
                <h3>Exercise Details</h3>
                <h4 className='exercise-time'>Exercise time: <span>{totalTime} mins</span></h4>
                <h4 className='break-time'>Break Times: {breaks} mins</h4>
            <div>

            <div>
            <button onClick={notify} className='btn-complete'>Activity Completed</button>
            <ToastContainer />
            </div>
            
       </div>
    </div>
    );
};

export default List;