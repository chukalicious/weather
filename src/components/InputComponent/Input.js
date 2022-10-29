import { useState, useEffect } from "react";

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
    <div className="hero min-h-[70vh] bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-3xl font-bold pb-4">Enter your location</h1>
          <form className="form-control" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                value={location}
                onChange={handleChange}
                type="text"
                placeholder="Search…"
                className="input input-bordered"
              />
              <button className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Input;
