import React, { useState } from 'react';
import {useDatePicker} from '@react-aria/datepicker'


const DatePicker = () => {
    const[fromclicked,setFromclicked] = useState(false);
    const[toclicked,setToclicked] = useState(false);
    const[dispCalandar,setDispCalandar] = useState(false);

    function Clickedfromdate(){
        console.log('clicked');
        setFromclicked(true);
        setDispCalandar(true);
    }
  
  const [date, setDate] = useState({justdate: null,justtime: null});

  return (
    <div className='p-10'>
        <div onClick={Clickedfromdate} className={`${fromclicked ? `border-blue-500`:``} w-60 relative h-14 border-1 rounded-xl cursor-pointer` }>
            {/* Calendar posistion absolute */}
            <div className='absolute h-80 w-120 border-1 top-14 rounded-xl z-10 bg-white border-blue-500'></div>
            
        </div>
    </div>
  );
};

export default  DatePicker ;
