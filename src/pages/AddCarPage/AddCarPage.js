import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";

const AddCarPage = (props) => {
  const [user, token] = useAuth();
  const navigate = useNavigate();

  const initialValues = {
    make: "",
    model: "",
    year: "",
  };

  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    postNewCar,
    initialValues
  );

  async function postNewCar() {
    try {
      let response = await axios.post(
        "https://localhost:5001/api/cars",
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Make:{" "}
          <input
            type="text"
            name="make"
            value={formData.make}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Model:{" "}
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Year:{" "}
          <input
            type="text"
            name="year"
            value={formData.year}
            onChange={handleInputChange}
          />
        </label>
        <button>Add New Car</button>
      </form>
    </div>
  );
};

export default AddCarPage;
