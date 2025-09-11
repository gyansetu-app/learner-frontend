import React from "react";
import NavigationButton from "../components/NavigationButton";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlask,
  faAtom,
  faCalculator,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";

const LearnPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="fixed inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/img/schoolbackground.png')" }}
    >
      {/* Faint overlay */}
      <div className="absolute inset-0 bg-white/30"></div>

      {/* Content - Full screen grid */}
      <div className="relative z-10 h-full w-full flex items-center justify-center">
        <div className="relative z-10 h-[50%] w-full grid grid-cols-2 grid-rows-2 p-2 gap-2">
          <NavigationButton
            label="Science"
            icon={
              <FontAwesomeIcon
                icon={faFlask}
                className="text-6xl"
              />
            }
            onClick={() => navigate("/chemistry")}
            className="bg-red-300 hover:bg-red-400 h-full w-full flex flex-col items-center justify-center space-y-4"
          />
          <NavigationButton
            label="Physics"
            icon={<FontAwesomeIcon icon={faAtom} className="text-6xl" />}
            onClick={() => navigate("/physics")}
            className="bg-blue-300 hover:bg-blue-400 h-full w-full flex flex-col items-center justify-center space-y-4"
          />
          <NavigationButton
            label="Maths"
            icon={<FontAwesomeIcon icon={faCalculator} className="text-6xl" />}
            onClick={() => navigate("/maths")}
            className="bg-green-300 hover:bg-green-400 h-full w-full flex flex-col items-center justify-center space-y-4"
          />
          <NavigationButton
            label="Computer"
            icon={<FontAwesomeIcon icon={faDesktop} className="text-6xl" />}
            onClick={() => navigate("/computer")}
            className="bg-yellow-300 hover:bg-yellow-400 h-full w-full flex flex-col items-center justify-center space-y-4"
          />
        </div>
      </div>
    </div>
  );
};

export default LearnPage;
