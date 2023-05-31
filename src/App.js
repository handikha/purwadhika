import { Route, Routes } from "react-router-dom";
import "./index.css";
import Navbar from "./components/navbar";
import Table from "./pages/table";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Table />} />
      </Routes>
    </>
  );
}
