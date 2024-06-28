import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
const Modal = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [update, setUpdate] = useState({
    id: id,
    name: "",
    surname: "",
  });
  const getData = async () => {
    const res = await axios.get(`http://localhost:4000/names/${id}`);
    setUpdate({ ...update, name: res.data.name, surname: res.data.surname });
  };
  useEffect(() => {
    getData();
  }, []);

  const editHandler = async (e) => {
    e.preventDefault();
    const res = await axios.put(`http://localhost:4000/names/${id}`, update);
    setUpdate({ ...update, name: res.data.name, surname: res.data.surname });
    toast.success(`Successfully updated!`)
    navigate("/")
  };
  return (
    <form onSubmit={editHandler} className="container w-50">
      <span>Name:</span>
      <input
        className="mb-2"
        type="text"
        placeholder="Enter name"
        value={update.name}
        onChange={(e) => setUpdate({ ...update, name: e.target.value })}
      />
      <span>Surname:</span>
      <input
        className="mb-2"
        type="text"
        placeholder="Enter surname"
        value={update.surname}
        onChange={(e) => setUpdate({ ...update, surname: e.target.value })}
      />
      <button type="submit" className="btn btn-success">
        Update
      </button>
    </form>
  );
};

export default Modal;
