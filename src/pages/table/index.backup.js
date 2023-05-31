import React, { useState, useRef } from "react";
import Button from "../../components/button";

const USERS = [
  {
    id: 1,
    name: "Alice Johnson",
    birthdate: "1995-08-10",
    address: "456 Elm Street, City, State, Country",
    skills: ["Java", "Python", "SQL"],
    gender: "Female",
  },
  {
    id: 2,
    name: "Bob Smith",
    birthdate: "1988-03-25",
    address: "789 Oak Avenue, City, State, Country",
    skills: ["C++", "JavaScript", "HTML"],
    gender: "Male",
  },
  {
    id: 3,
    name: "Emily Davis",
    birthdate: "1992-11-05",
    address: "321 Pine Street, City, State, Country",
    skills: ["Python", "HTML", "CSS"],
    gender: "Female",
  },
  {
    id: 4,
    name: "David Wilson",
    birthdate: "1985-09-18",
    address: "987 Maple Road, City, State, Country",
    skills: ["JavaScript", "React", "Node.js"],
    gender: "Male",
  },
  {
    id: 5,
    name: "Sarah Thompson",
    birthdate: "1997-06-30",
    address: "654 Birch Lane, City, State, Country",
    skills: ["Java", "SQL", "CSS"],
    gender: "Female",
  },
  {
    id: 6,
    name: "Michael Miller",
    birthdate: "1991-02-14",
    address: "789 Walnut Street, City, State, Country",
    skills: ["Python", "JavaScript", "HTML"],
    gender: "Male",
  },
  {
    id: 7,
    name: "Olivia Brown",
    birthdate: "1994-12-01",
    address: "123 Cedar Avenue, City, State, Country",
    skills: ["C++", "Python", "React"],
    gender: "Female",
  },
  {
    id: 8,
    name: "Daniel Anderson",
    birthdate: "1989-07-22",
    address: "456 Oak Street, City, State, Country",
    skills: ["Java", "HTML", "CSS"],
    gender: "Male",
  },
  {
    id: 9,
    name: "Emma Wilson",
    birthdate: "1993-04-12",
    address: "789 Elm Avenue, City, State, Country",
    skills: ["JavaScript", "React", "Node.js"],
    gender: "Female",
  },
  {
    id: 10,
    name: "Christopher Davis",
    birthdate: "1987-10-03",
    address: "321 Pine Street, City, State, Country",
    skills: ["Python", "SQL", "HTML"],
    gender: "Male",
  },
];

const capitalizeEach = (str) =>
  str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

export default function Table() {
  const [users, setUsers] = useState(USERS);
  const name = useRef("");
  const gender = useRef("");
  const birthdate = useRef("");
  const address = useRef("");
  const skills = useRef("");

  const RenderTableRows = () =>
    users.map((user, index) => {
      return (
        <tr
          key={index}
          className={`cursor-pointer duration-200 hover:scale-105 hover:shadow-md ${
            index % 2 === 0 ? "bg-slate-100" : null
          }`}
        >
          <td className="py-4">{user.id}</td>
          <td className="py-4">{user.name}</td>
          <td className="py-4">{user.gender}</td>
          <td className="py-4">{user.birthdate}</td>
          <td className="py-4">{user.address}</td>
          <td className="py-4">{user.skills.join(", ")}</td>
        </tr>
      );
    });

  const addUser = () => {
    if (
      name.current.value === "" ||
      birthdate.current.value === "" ||
      gender.current.value === "" ||
      birthdate.current.value === "" ||
      address.current.value === "" ||
      skills.current.value === ""
    ) {
      alert("Pastikan semua field terisi!");
      return;
    }

    const newUser = {
      id: users.length + 1,
      name: capitalizeEach(name.current.value),
      gender: gender.current.value,
      birthdate: birthdate.current.value,
      address: address.current.value,
      skills: [skills.current.value],
    };

    const getExistName = users.find((user) => user.name === newUser.name);

    if (getExistName) {
      alert(`${newUser.name} sudah terdaftar, silakan masukan nama yang lain!`);
      return;
    }

    // console.log(newUser);
    // setUsers([...users, newUser]);
    // setUser(users.concat(newUser));

    setUsers((prevState) => [...prevState, newUser]); //best

    // kosongkan field
    name.current.value = "";
    birthdate.current.value = "";
    address.current.value = "";
    skills.current.value = "";
  };

  return (
    <>
      <div className="container relative h-screen w-full py-12">
        <div className="flex w-full flex-col items-center justify-center ">
          <table className="w-full table-auto ">
            <thead>
              <tr>
                <th className="py-4 text-left">ID</th>
                <th className="py-4 text-left">Name</th>
                <th className="py-4 text-left">Gender</th>
                <th className="py-4 text-left">Birth Date</th>
                <th className="py-4 text-left">Address</th>
                <th className="py-4 text-left">Skills</th>
              </tr>
            </thead>
            <tbody>
              <RenderTableRows />
            </tbody>
          </table>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-black/50 backdrop-blur-md">
        <div className="w-1/3 rounded-xl bg-white p-12">
          <h3 className="mb-4">Add User</h3>
          <input
            ref={name}
            type="text"
            name=""
            id=""
            className="mt-2 rounded-md p-2 outline-none"
            placeholder="Name"
          />
          <label htmlFor="gender">Choose Gender</label>
          <select
            ref={gender}
            type="text"
            name=""
            id="gender"
            className="srounded-md ml-2 mt-2 rounded-lg border p-2 outline-none"
            placeholder="Gender"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            ref={birthdate}
            type="date"
            name=""
            id=""
            className="mt-2 rounded-md p-2 outline-none"
            placeholder="Birth Date"
          />
          <input
            ref={address}
            type="text"
            name=""
            id=""
            className="mt-2 rounded-md p-2 outline-none"
            placeholder="Address"
          />
          <input
            ref={skills}
            type="text"
            name=""
            id=""
            className="mt-2 rounded-md p-2 outline-none"
            placeholder="Skill"
          />
          <Button
            isButton
            isPrimary
            type="submit"
            className="mt-2 self-start rounded-md"
            label="Add User"
          />

          <Button isButton isSecondary label="Close" type="button" />
        </div>
      </div>
    </>
  );
}
