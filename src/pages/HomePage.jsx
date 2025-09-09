import {
  Navbar,
  NavbarContent,
  NavbarItem,
  User,
  Image,
  ScrollShadow,
  Button,
} from "@heroui/react";

import Hero from "../components/Hero.jsx";
import ModuleCard from "../components/ModuleCard.jsx";

function MainContent({ cards }) {
  return (
    <>
      {/* Main Content */}
      <div>
        <p className="text-3xl p-3">Installed Modules</p>
        {/* Horizontally scrolling cards */}
        <ScrollShadow hideScrollBar>
          <div style={{ display: "flex", gap: "1rem", padding: "0.5rem" }}>
            {cards.map((card, idx) => (
              <ModuleCard card={card} key={idx} />
            ))}
          </div>
        </ScrollShadow>
      </div>
    </>
  );
}

function HomePage() {
  const userName = "PlayerOne";
  const exp = 1200;
  const level = 5;
  const cards = [
    {
      title: "Chemistry",
      desc: "Acids and Bases",
      img: "../public/img/chem_back.png",
      progress: 50,
    },
    {
      title: "Physics",
      desc: "Laws of Motion",
      img: "../public/img/phy_back.png",
      progress: 83,
    },
    {
      title: "Mathematics",
      desc: "Lines and Angles",
      img: "../public/img/math_back.png",
      progress: 10,
    },
  ];

  return (
    <>
      <Navbar position="static" isBlurred={false}>
        <NavbarContent justify="start">
          <NavbarItem>
            <User name={userName} />
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontWeight: "bold" }}>EXP: {exp}</div>
              <div>Level {level}</div>
            </div>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <div style={{ flex: 1, padding: "0rem" }}>
        <Hero />
        <MainContent cards={cards} />
      </div>
    </>
  );
}

export default HomePage;
