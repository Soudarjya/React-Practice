import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import {Link } from "react-router-dom";
export default function Form() {
  const [first, setfirst] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // const handleName = (data) => {
  //  console.log('data.examples');
  // };
  // const displayName = () => {
  //   // console.log(inp.current.value);
  // };
   const onSubmit = (data) => {
    setfirst(data.example);
    display.current.className='m-10 text-center'
  };
    const display = useRef();
   const checkDisable=()=>{
    errors.example
    return false;
   }
  // const handleDisplay=() =>{
  //   display.current.className='m-10 text-center'
 // } // console.log(watch("example")); // watch input value by passing the name of it
  // console.log(inp.current.defaultValue);
  return (
    <>
      <div className="min-h-80 bg-slate-300">
        <h1 className="bg-red-300 text-center font-extrabold text-xl">
          This is the form
        </h1>
        <div className="flex justify-center">
          {/* /* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}

            <div className="text-center mt-5 bg-purple-300">
              <h2 className="">Enter Your Name</h2>
              <input
                placeholder="Username"
                type="text"
                {...register("example", {
                  maxLength: {
                    value: 10,
                    message: `Maximum 10 characters are allowed`,
                  },
                  minLength: { value: 3, message: `Minimum 3 characters are required` },
                  required: { value: true, message: "This field is required" },
                })}
                className="border-2 border-black block mb-4 mt-2 mx-auto"
              />
              {/* include validation with required or other standard HTML validation rules */}
              {/* <input className="border-2 border-black" {...register("exampleRequired", { required: true })} /> */}
              {/* errors will return when field validation fails  */}
              {errors.example && <span className="text-red-500">{errors.example.message}</span>}
              <input //disabled={true}
                className="border-2 border-black bg-slate-200 block mx-auto"
                type="submit" //onClick={handleDisplay}
              />
            </div>
          </form>
        </div>
        <div ref={display} className="m-10 text-center hidden ">
          <span className="bg-white">
            Hi {first} Please choose from the following
          </span>
          <Link to="/Flags" className=" block text-blue-800 hover:underline">
            Flags
          </Link>
          <Link to="/Dogfacts" className="text-blue-800 hover:underline">
            Dog Facts
          </Link>
        </div>
      </div>
    </>
  );
}
