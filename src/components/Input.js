import React, { Fragment, useState } from "react";

const Input = () => {
  const [Abonament, setAbonament] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { Abonament };
      const response = await fetch("http://localhost:8000/Abonament", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <div class="card text-center" style={{ width: "70rem" , color: "-moz-initial" }}>
        <div class="card-body">
          <h5 class="card-title">Fă o programare</h5>
          <p class="card-text">
            Introdu numele însoțit de data si ora la care vrei să vii la sala și noi îți facem automat o programare
          </p>
          <form onSubmit={onSubmitForm}>
            <input
              type="text"
              className="form-control"
              value={Abonament}
              onChange={(e) => setAbonament(e.target.value)}
            />
            <button className="btn btn-success">Add</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Input;
