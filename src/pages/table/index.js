import React, { useRef, useState } from "react";
import Button from "../../components/button";
import { FaTimes } from "react-icons/fa";

import "./style.css";

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
  const search = useRef("");

  const handleAddUserButton = () => {
    const newUser = {
      id: users.length + 1,
      name: capitalizeEach(name.current.value),
      gender: gender.current.value,
      birthdate: birthdate.current.value,
      address: capitalizeEach(address.current.value),
      skills: [skills.current.value],
    };

    if (
      name.current.value.trim() === "" ||
      birthdate.current.value.trim() === "" ||
      gender.current.value.trim() === "" ||
      birthdate.current.value.trim() === "" ||
      address.current.value.trim() === "" ||
      skills.current.value.trim() === ""
    ) {
      alert("Pastikan semua field terisi!");
      return;
    }

    const isDuplicate = users.find((user) => user.name === newUser.name);
    if (isDuplicate) {
      alert(`${newUser.name} sudah terdaftar`);
      return;
    }

    setUsers((prevState) => [...prevState, newUser]);
    handleModalButton();

    // kosongkan field
    name.current.value = "";
    birthdate.current.value = "";
    address.current.value = "";
    skills.current.value = "";
  };

  const [isModalActive, setIsModalActive] = useState(false);
  const handleModalButton = () => {
    setIsModalActive(!isModalActive);
    // kosongkan field
    name.current.value = "";
    birthdate.current.value = "";
    address.current.value = "";
    skills.current.value = "";
  };

  const RenderTableRows = () =>
    users.map((user, index) => (
      <tr
        key={user.id}
        className={`cursor-pointer duration-200 hover:scale-105 hover:shadow-lg ${
          index % 2 === 0 ? null : "bg-slate-100"
        }`}
      >
        <td className="px-4 py-3">{user.id}</td>
        <td className="px-4 py-3">{user.name}</td>
        <td className="px-4 py-3">{user.gender}</td>
        <td className="px-4 py-3">{user.birthdate}</td>
        <td className="px-4 py-3">{user.address}</td>
        <td className="px-4 py-3">{user.skills.join(", ")}</td>
      </tr>
    ));

  const handleSearch = (e) => {
    const query = search.current.value.trim().toLocaleLowerCase();

    const filteredUser = USERS.filter((user) =>
      user.name.toLocaleLowerCase().includes(query)
    );

    setUsers(filteredUser);
  };
  return (
    <div
      className={`relative h-screen ${
        isModalActive ? "overflow-hidden" : null
      }`}
    >
      <div className="container h-[200vh] px-4 py-12">
        <div className="flex items-center justify-between">
          <Button
            type="button"
            isButton
            isPrimary
            label="+ Add User"
            onClick={handleModalButton}
          />
          <div className="w-1/3">
            <input
              ref={search}
              type="text"
              className=" rounded-lg border-slate-300 outline-none placeholder:italic"
              placeholder="Search by Name..."
              onChange={handleSearch}
              autoFocus
            />
          </div>
        </div>
        <div className="mt-4">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="bg-slate-200 p-4 text-left">ID</th>
                <th className="bg-slate-200 p-4 text-left">Name</th>
                <th className="bg-slate-200 p-4 text-left">Gender</th>
                <th className="bg-slate-200 p-4 text-left">Birth Date</th>
                <th className="bg-slate-200 p-4 text-left">Address</th>
                <th className="bg-slate-200 p-4 text-left">Skills</th>
              </tr>
            </thead>
            <tbody>
              <RenderTableRows />
            </tbody>
          </table>
        </div>
        <div
          className={`modal  ${
            isModalActive ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          <div
            className={`w-1/3 rounded-xl bg-slate-100 p-12 duration-200 ${
              isModalActive ? "translate-y-0" : "-translate-y-24"
            }`}
          >
            <div className="flex items-center justify-between">
              <h3 className="">Add User</h3>
              <Button
                className="absolute right-4 top-4 text-2xl text-slate-500 hover:text-dark"
                label={<FaTimes />}
                type="button"
                onClick={setIsModalActive}
              />
            </div>
            <input
              ref={name}
              type="text"
              name=""
              id=""
              className="mt-4 rounded-md border-slate-300 px-3 py-2 text-dark outline-none"
              placeholder="Name"
            />
            <label htmlFor="gender" className="text-dark">
              Choose Gender
            </label>
            <select
              ref={gender}
              type="text"
              name=""
              id="gender"
              className="ml-2 mt-4 rounded-md border border-slate-300 px-3 py-2 text-dark outline-none"
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
              className="mt-4 rounded-md border-slate-300 px-3 py-2 text-dark outline-none"
              placeholder="Birth Date"
            />
            <input
              ref={address}
              type="text"
              name=""
              id=""
              className="mt-4 rounded-md border-slate-300 px-3 py-2 text-dark outline-none"
              placeholder="Address"
            />
            <input
              ref={skills}
              type="text"
              name=""
              id=""
              className="mt-4 rounded-md border-slate-300 px-3 py-2 text-dark outline-none"
              placeholder="Skills"
            />

            <Button
              isButton
              isPrimary
              isBlock
              type="submit"
              className="mt-4 w-full self-start rounded-md px-3"
              label="Add User"
              onClick={handleAddUserButton}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
