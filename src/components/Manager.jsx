import React, { useState } from "react";
import { useRef } from "react";

const Managger = () => {
  const ref = useRef();
  const [eyeimage, setEyeimage] = useState(true);

//   const showPassword = () => {
//     alert("showpassword");
//     setEyeimage();
//     ref.current.src = "src/assets/hidden.png";
//   };
  return (
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-77.5 w-77.5 rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>
      <div className=" mycontainer">
        <h1 className="text-4xl text font-bold text-center">
          <span className="text-green-500">&lt;</span>
          Password-Manager
          <span className="text-green-500">OP/&gt;</span>
        </h1>
        <p className="text-green-900 text-center text-lg">
          Your Password Manger
        </p>

        <div className="text-white flex flex-col p-4 gap-8 items-center">
          <input
            className="rounded-full border text-black p-4 py-1  border-green-500 w-full"
            type="text"
            placeholder="Enter website URL"
            name=""
            id=" "
          />
          <div className="flex w-full gap-8 ">
            <input
              className="rounded-full border text-black p-4 py-1  border-green-500 w-full"
              type="text"
              placeholder="Enter username"
              name=""
              id=""
            />
            <div className="relative flex justify-center items-center">
              <input
                className="rounded-full border text-black p-4 py-1 overflow-hidden  border-green-500 w-full"
                type="text"
                placeholder="Enter password"
                name=""
                id=""
              />
              <span
                className="absolute right-1.5 top-1.5 text-black "
                onClick={() => {
                  setEyeimage(!eyeimage);
                }}
              >
                {eyeimage ? (
                  <img className="w-6" src="src/assets/eye.png" alt="sfdsdf" />
                ) : (
                  <img
                    className="w-6"
                    src="src/assets/hidden.png"
                    alt="sfdsdf"
                  />
                )}
              </span>
            </div>
          </div>

          <button className="flex justify-center items-center gap-2 bg-green-600 hover:bg-green-500 rounded-full px-8 py-2 w-fit">
            <lord-icon
              src="https://cdn.lordicon.com/ueoydrft.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Managger;
