import React, { useState } from "react";

const App = () => {
  const [naam, setNaam] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [user, setUser] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setNaam("");
    setEmail("");
    setImage("");
    setUser([...user, { naam, email,image }]);
    console.log(user);
  };

  const deleteUser = (i)=>{
    const copyUser = [...user]
    copyUser.splice(i,1)
    setUser(copyUser)
  }

  let renderImage = <h3 className=" font-semibold text-slate-400 ">No User Available</h3>

  if(user.length>0){
    renderImage = user.map(function(elem,idx){
      return <div key={idx} className="m-6 text-center px-7 py-6 bg-white w-[21%] rounded-md flex flex-col items-center">
        <img className="mb-3 h-24 w-24 rounded-full object-cover object-center" src={elem.image} alt="" />
        <h2 className="text-xl font-semibold">{elem.naam}</h2>
        <h5 className="text-sm font-semibold text-slate-500 mb-2">{elem.email}</h5>
        <p className="text-sm leading-4 font-semibold text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsam perferendis.</p>
        <button onClick={()=>{
          deleteUser(idx)
        }} className="bg-red-600 font-bold text-white px-3 text-sm rounded-sm mt-4 py-1">Remove It</button>
      </div>
    })
  }
  return (
    <>
      <form className="px-9 py-3 text-center mb-6" onSubmit={submitHandler}>
        <input
          required
          value={naam}
          onChange={(e) => {
            setNaam(e.target.value);
          }}
          className="bg-slate-50 border px-4 py-2 rounded-md text-base m-3"
          type="text"
          placeholder="Enter name"
        />
        <input
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          className="bg-slate-50 border px-4 py-2 rounded-md text-base m-3"
          type="email"
          placeholder="Enter Email"
        />
        <input
          required
          type="text"
          value={image}
          className="bg-slate-50 border px-4 py-2 rounded-md text-base m-3"
          placeholder="Enter image"
          onChange={(e)=>{
            setImage(e.target.value)
          }}
        />
        <button className="bg-blue-400 text-white font-semibold px-4 py-2 text-base m-5 rounded-md">
          Submit
        </button>
      </form>
      <div className="p-7 bg-slate-100 flex flex-wrap">
        {renderImage}
      </div>
    </>
  );
};

export default App;
