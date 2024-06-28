import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "./Table";
import toast, { Toaster } from 'react-hot-toast';
const Create = () => {
 
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [items, setItems] = useState([]);
  const getData = async () => {
    const res = await axios.get("http://localhost:4000/names");
    setItems(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const create = { name, surname };
  const addHandler = async () => {
    try {
        if(name !== "" && surname !== ""){
            await axios.post("http://localhost:4000/names", create);
            setName("");
            setSurname("");
            getData();
            toast.success(`${name + " " + surname} successfully added`)
        }else{
            toast.error("Check again!")
        }
    } catch (error) {
        toast.error("This didn't work.")
    }
    
  
  };

  return (
    <div className="container w-50 mt-5">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Recipient's firstname"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Recipient's surname"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={(e) => setSurname(e.target.value)}
          value={surname}
        />
        <button
          className="btn btn-success "
          type="button"
          id="button-addon2"
          onClick={addHandler}
        >
          Create +
        </button>
      </div>
      <Table items={items} setItems={setItems}/>
      
    </div>
    
  );
};

export default Create;
