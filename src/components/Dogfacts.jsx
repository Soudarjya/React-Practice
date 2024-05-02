import React, { useEffect, useState } from "react";

function Dogfacts() {
  const [facts, setfacts] = useState("");
  let url = "https://dog-api.kinduff.com/api/facts";
  async function fetchApi() {
    let data = await fetch(url);
    let prom = await data.json();
    setfacts(prom.facts);
  }
  // useEffect(() => {
  //   fetchApi();
  // }, []);

  return (
    <div className="min-h-48 bg-pink-800 text-yellow-400">
      <button
        type="text"
        placeholder="Get a Fact"
       onClick={fetchApi}
        className="border-black border-2 w-64 text-center bg-slate-400 text-black" >Click here to Get a Fact about dogs</button>
      <div>{facts}</div>
    </div>
  );
}

export default Dogfacts;
