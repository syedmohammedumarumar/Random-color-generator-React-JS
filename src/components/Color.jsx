import { useState } from "react";
const Color = () => {
  const [TypeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#00000");

  function randomColorUtility(length){
    return Math.floor(Math.random()*length)
  }

  function handleCreateRandomHexColor(){
    const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let hexColor='#';

    for(let i=0;i<6;i++){
      hexColor+=hex[randomColorUtility(hex.length)]
    }
    setColor(hexColor);
    
  }

  function handleCreateRandomRgbColor(){
    const r=randomColorUtility(256)
    const g=randomColorUtility(256)
    const b=randomColorUtility(256)

    setColor(`rgb(${r},${g},${b})`);

  }

  return (
    <>
      <div className="container p-10 w-screen h-screen bg-black" style={{ backgroundColor: color }}>
        <div className="btns flex justify-center flex-wrap">
          <button className="btn bg-slate-600 rounded-sm border-none mr-3  text-white px-2 py-3" onClick={()=>setTypeOfColor('hex')}>
            Create hex color
          </button>
          <button className="btn bg-slate-600 rounded-sm border-none mr-3  text-white px-2 py-3" onClick={()=>setTypeOfColor('rgb')}>
            Create rgb color
          </button>
          <button className="btn bg-slate-600 rounded-sm border-none mr-3  text-white px-2 py-3" onClick={TypeOfColor === 'hex' ?  handleCreateRandomHexColor:handleCreateRandomRgbColor}>
            Generate random color
          </button>
        
        </div>
        <div className="content flex justify-center items-center text-3xl mt-10 text-white inline-block flex-col " >
            <h3>{TypeOfColor=='rgb' ? 'RGB Color':'Hex Color'}</h3>
            <h1>{color}</h1>
          </div>
      </div>
    </>
  );
};

export default Color;
