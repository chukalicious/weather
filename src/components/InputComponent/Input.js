import { useState } from "react";

const Input = () => {
  const [location, setLocation] = useState("");
  console.log("Input: location: ", location);

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLocation("");
  };

  return (
    <div className="navbar h-[20vh] bg-accent text-primary-content">
      <div className="w-[75%] mx-auto ">
        <form
          onSubmit={handleSubmit}
          className="form-control flex flex-row mx-auto"
        >
          <input
            type="text"
            value={location}
            placeholder="Search a location"
            className="input input-bordered w-[70%] text-primary"
            onChange={handleChange}
          />
          <button className="btn btn-secondary w-[30%] mx-4 py-2">Go!</button>
        </form>
      </div>
    </div>
  );
};

export default Input;
