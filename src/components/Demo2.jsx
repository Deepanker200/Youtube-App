import React, { useEffect, useRef, useState } from 'react'

const Demo2 = () => {

  const [y, setY] = useState(0)
  let x = 0;

  const ref = useRef(0)   //ref={current: 0}

  const i = useRef(null);
  useEffect(() => {
     i.current = setInterval(() => {
      console.log("Namaste React", Math.random());
    }, 1000)

    //this is an example of component did unmount
    return () => clearInterval(i.current)
  },[])

  return (
    <div className='m-4 mt-24 p-2 bg-slate-50 border border-black w-96 h-96'>
      <div className='flex'>
        <button className='p-2 m-2 bg-green-300'
          onClick={() => {
            x = x + 1
            console.log(x);

          }}>Increase X</button>
        <h1 className='font-bold text-xl'>Let= {x}</h1>
      </div>

      <div className='flex'>
        <button className='p-2 m-2 bg-green-300'
          onClick={() => {
            setY(y + 1)

          }}>Increase Y</button>
        <h1 className='font-bold text-xl'>State= {y}</h1>
      </div>


      <div className='flex'>
        <button className='p-2 m-2 bg-green-300'
          onClick={() => {
            ref.current = ref.current + 1;
            console.log(ref.current);

          }}>Increase Ref</button>
        <h1 className='font-bold text-xl'>Ref= {ref.current}</h1>
      </div>

      <button
        onClick={() => {
          clearInterval(i.current)
        }}
        className='bg-red-500 p-2 m-2 text-white font-bold rounded-lg'>Stop Printing</button>

    </div>
  )
}

export default Demo2