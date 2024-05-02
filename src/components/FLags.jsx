import React,{useEffect,useRef,useState} from 'react'
function FLags() {
  const [name, setname] = useState('');
  const [flag, setflag] = useState('https://flagsapi.com//shiny/64.png');
    // const [facts, setfacts] = useState('');
    // let url='https://flagsapi.com/BE/flat/64.png';
    // async function fetchApi(){
    //     let data=await fetch(url,{mode:'no-cors'});
    // //     let prom=await data.json();
       
    // console.log(data);
    // // console.log(await data.json());
    // }
    // useEffect(() => {
    //  fetchApi();
    // }, [])/
    const first = useRef()
    const handleSubmit=()=>{
     let rr=first.current.value.slice(0,2);
    //  let m= a.toUppercase();
    let a=rr.toUpperCase();
     setflag(`https://flagsapi.com/${a}/shiny/64.png`)
    }
    
  return (
    <div>
      <h1>Enter the country code</h1>
      <input ref={first} type="text" className='border-black border-2 hover:border-solid'/>
      <input type="submit" className='border-black border-2 hover:border-solid' onClick={handleSubmit}/>
      <div className='mx-auto'>
      
        <img src={flag} className='w-44 h-44 mx-auto'></img>
  
        </div>
    </div>
  )
}

export default FLags