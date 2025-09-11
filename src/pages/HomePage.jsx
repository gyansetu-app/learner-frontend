import { Navbar, NavbarContent, NavbarItem } from "@heroui/react";
import NavigationButton from "../components/NavigationButton";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool, faTrophy, faMap } from "@fortawesome/free-solid-svg-icons";

function HomePage() {
  const navigate = useNavigate();

  const userName = "Team Agni";
  const coins = 250; // mock value
  const dailyStreak = "5 days"; // example streak count

  return (
    <div
      className="relative min-h-screen flex flex-col justify-between bg-cover bg-center overflow-hidden bg-white/50"
      style={{ backgroundImage: "url('/img/background.png')" }}
    >
      {/* Top Navbar */}
      <Navbar
        position="static"
        isBlurred={false}
        className="bg-transparent shadow-none h-14 px-0"
      >
        <NavbarContent justify="start" className="flex items-center gap-2">
          <NavbarItem>
            <span className="px-3 py-1 rounded-xl bg-black/50 text-white text-sm font-medium">
              Welcome, {userName}
            </span>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end" className="flex items-center gap-2">
          {/* Coins */}
          <NavbarItem>
            <div className="flex items-center gap-1 px-3 py-1 rounded-xl bg-black/50 text-sm font-medium">
              <span className="text-yellow-400 text-lg">🪙</span>
              <span className="text-white font-semibold">{coins}</span>
            </div>
          </NavbarItem>

          {/* Daily Login Streak */}
          <NavbarItem>
            <div
              className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-500 text-white font-bold text-sm hover:bg-red-600 cursor-pointer"
              onClick={() => console.log("Daily streak clicked")}
            >
              {dailyStreak}
            </div>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* Navigation Buttons */}
      <div className="flex-1 flex flex-col items-center mt-16 gap-4 px-6 w-full max-w-md mx-auto">
        {/* Full-width button */}
        <NavigationButton
          label="LEARN"
          icon={<FontAwesomeIcon icon={faSchool} />}
          onClick={() => navigate("/learn")}
          className="bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform rounded-xl py-3"
        />

        {/* Two side-by-side buttons */}
        <div className="flex w-full gap-3">
          <NavigationButton
            label="LEADERBOARD"
            icon={<FontAwesomeIcon icon={faTrophy} />}
            onClick={() => console.log("Leaderboard clicked")}
            className="flex-1 w-0 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform rounded-xl py-3"
          />
          <NavigationButton
            label="MAP"
            icon={<FontAwesomeIcon icon={faMap} />}
            onClick={() => console.log("Progress clicked")}
            className="flex-1 w-0 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform rounded-xl py-3"
          />
        </div>

        {/* Mascot Image */}
        <img
          src="public\img\mascotWave.png"
          alt="Mascot Wave"
          className="mt-40 w-full max-w"
        />
      </div>
    </div>
  );
}

export default HomePage;
