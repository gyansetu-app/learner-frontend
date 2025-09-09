import {
  Navbar,
  NavbarContent,
  NavbarItem,
  User,
  Image,
  Card,
  CardBody,
  CardHeader,
  ScrollShadow,
  Button,
} from "@heroui/react";

import Hero from "./components/Hero.jsx";
import ModuleCard from "./components/ModuleCard.jsx";
import BottomBar from "./components/BottomBar.jsx";

import DefaultLayout from "./layouts/DefaultLayout.jsx";

import HomePage from "./pages/HomePage.jsx";
import ARPage from "./pages/ARPage.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/ar" element={<ARPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
