import { useState } from 'react'


function App() {
  const [color,setcolor] = useState("pink")
   
  
  return (
    <div className='h-[100vh] w-[100vw]'
   
      style = {{backgroundColor: color}}
    
  
   >
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'
    >
      <div className='flex flex-wrap justify-center group-[3] shadow-lg bg-white px-2 py-2 rounded-3xl  text-black gap-6'>
        
        <button 
        onClick={()=>setcolor("green")}
        className='outline-none px-4'
        style={{backgroundColor:"green"}}
        >green</button>


    <button
        onClick={()=>setcolor("red")}
        className='outline-none px-4'
        style={{backgroundColor:"red"}}
        >red</button>

<button 
        onClick={()=>setcolor("yellow")}
        className='outline-none px-4'
        style={{backgroundColor:"yellow"}}
        >yellow</button>


<button 
        onClick={()=>setcolor("blue")}
        className='outline-none px-4'
        style={{backgroundColor:"blue"}}
        >blue</button>


<button 
        onClick={()=>setcolor("white")}
        className='outline-none px-4'
        style={{backgroundColor:"white"}}
        >white</button>

      </div>
      </div> 
   </div>
  )
}

export default App