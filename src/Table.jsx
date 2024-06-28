import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
const Table = ({ items, setItems }) => {

  const deleteHandler = async (id) => {
    try {
        await axios.delete(`http://localhost:4000/names/${id}`);
    const setFiltered = items.filter((item) => item.id !== id);
    setItems(setFiltered);
    toast.success(`Successfully deleted!`)
    } catch (error) {
        toast.error("This didn't work.")
    }
    
  };
console.log(items)
  return (
    <table className="table ">
      <thead className="table-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Options</th>
        </tr>
      </thead>
      <tbody>
        {items?.map((item, index) => (
          <tr key={index}>
            <th scope="row">{item.id}</th>
            <td>{item.name}</td>
            <td>{item.surname}</td>
            <td>
              <Link to={`/edit/${item.id}`}><button className="btn btn-success">Edit</button></Link>
              <button
                className="btn btn-danger ms-1"
                onClick={() => deleteHandler(item.id)}
                
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
