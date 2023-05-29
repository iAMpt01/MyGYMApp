import React,{Fragment, useState} from "react";
//am folosit usestate pt a definii o stare interna denumita abonament,
//si pentru a o actualiza prin intermediul functiei setabonament

const Input = () => {

  const [Abonament, setAbonament]=useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try{
     const body = {Abonament};
     const response = await fetch("http://localhost:8000/Abonament", {
     method:"POST",
     headers: { "Content-Type": "application/json"},
     body : JSON.stringify(body)
     });
     
     window.location= "/";
    }catch (err) {
        console.error(err.message);
    }
  };

    return (
      //permite returnarea mai multor elemente fara a fi nevoie de sa fie inconjurata de un elemnet parinte 
        <Fragment> 
        <h1  className="text-center mt-5">Introduceti o programare</h1>
    <form className="d-flex mt-5" onSubmit={onSubmitForm}>
    <input type="text"className="form-control" 
    value={Abonament}
    onChange={e => setAbonament(e.target.value)}
    />
    <button className="btn btn-success">Add</button>
    </form>
    </Fragment>
        );
};

export default Input;