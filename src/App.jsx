import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('black'); // Hex code for olive color

  return (
    <div className=' w-full h-[100vh] duration-200' style={{ backgroundColor: color }}>

      <div className='justify-center text-center '>
        <h1 className='text-white text-[25px] font-extrabold shadow-md '>Dynamic Background Color Changer</h1>
        </div>
      <div className='fixed justify-center inset-x-0 px-2 flex flex-wrap my-auto mx-auto ' >
        
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white items-center mt-[250px] p-3 rounded'>
          <button onClick={()=>{setColor("red")}} className='px-3 rounded text-white' style={{backgroundColor:"red"}}>
            Red

          </button>
          <button onClick={()=>{setColor("green")}} className='px-3 rounded text-white' style={{backgroundColor:"green"}}>
            green

          </button>
          <button onClick={()=>{setColor("blue")}} className='px-3 rounded text-white' style={{backgroundColor:"blue"}}>
            blue

          </button>
         
          <button  onClick={()=>{setColor("gray")}} className='px-3 rounded text-white' style={{backgroundColor:"gray"}}>
            gray

          </button>
          <button  onClick={()=>{setColor("orange")}} className='px-3 rounded text-white' style={{backgroundColor:"orange"}}>
            orange

          </button>
          
          <button  onClick={()=>{setColor("yellow")}} className='px-3 rounded text-white' style={{backgroundColor:"orange"}}>
            yellow

          </button>
          <button  onClick={()=>{setColor("black")}} className='px-3 rounded text-white' style={{backgroundColor:"black"}}>
            black

          </button>
        </div>

      </div>
      
    </div>
  );
}

export default App;
