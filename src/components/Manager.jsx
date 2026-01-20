import React, { useState, useRef, useEffect } from "react";
import eye from "../assets/eye.png";
import hiddeneye from "../assets/hidden.png";

const Managger = () => {
  const ref = useRef();
  const [eyeimage, setEyeimage] = useState(true);
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");

    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
    // else{
    //     passwordArray=[]
    // }
  }, []);

  const showPassword = () => {
    alert("showpassword");
    //   setEyeimage();
    //   ref.current.src = "src/assets/hidden.png";
  };
  const savePassword = () => {
    setPasswordArray([...passwordArray, form]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
    console.log(passwordArray);
    setForm({ site: "", username: "", password: "" });
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-77.5 w-77.5 rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>
      <div className=" mycontainer">
        <h1 className="text-4xl text font-bold text-center py-2 border border-white w-32">
          <span className="text-green-500">&lt;</span>
          Password-Manager
          <span className="text-green-500">OP/&gt;</span>
        </h1>
        <p className="text-green-900 text-center py-2 border border-white w-32 text-lg">
          Your Password Manger
        </p>

        <div className="text-white flex flex-col p-4 gap-8 items-center">
          <input
            className="rounded-full border text-black p-4 py-1  border-green-500 w-full"
            type="text"
            placeholder="Enter website URL"
            name="site"
            id=" "
            value={form.site}
            onChange={handleChange}
          />
          <div className="flex w-full gap-8 ">
            <input
              className="rounded-full border text-black p-4 py-1  border-green-500 w-full"
              type="text"
              placeholder="Enter username"
              name="username"
              id=""
              value={form.username}
              onChange={handleChange}
            />
            <div className="relative flex justify-center items-center">
              <input
                className="rounded-full border text-black p-4 py-1 overflow-hidden  border-green-500 w-full"
                type="text"
                placeholder="Enter password"
                name="password"
                id=""
                value={form.password}
                onChange={handleChange}
              />
              <span
                className="absolute right-1.5 top-1.5 text-black "
                onClick={() => {
                  setEyeimage(!eyeimage);
                }}
              >
                {eyeimage ? (
                  <img className="w-6" src={eye} alt="sfdsdf" />
                ) : (
                  <img className="w-6" src={hiddeneye} alt="sfdsdf" />
                )}
              </span>
            </div>
          </div>

          <button
            onClick={savePassword}
            className="flex justify-center items-center gap-2 bg-green-600 hover:bg-green-500 rounded-full px-8 py-2 w-fit"
          >
            <lord-icon
              src="https://cdn.lordicon.com/ueoydrft.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
        <div className="passwords">
          <h2 className="font-bold text-2xl py-4">Your password</h2>
          {passwordArray.length === 0 && <div>No passwords to show</div>}
          {passwordArray.length != 0 && (
            <table className="table-auto w-full rounded-md overflow-hidden">
              <thead className="bg-green-800 text-white ">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Passwords</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {passwordArray.map((items, index) => {
                  return (
                    <tr key={index}>
                      <td className="text-center py-2 border border-white w-32">
                        <a href={items.site} target="_blank">

                        {items.site}
                        </a>
                      </td>
                      <td className="text-center py-2 border border-white w-32">
                        {items.username}
                      </td>
                      <td className="text-center py-2 border border-white w-32">
                        {items.password}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Managger;
