import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Faq";
import ManageFaq from "../pages/ManageFaq";

const CustomRoutes = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq/:id" element={<ManageFaq />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default CustomRoutes;
