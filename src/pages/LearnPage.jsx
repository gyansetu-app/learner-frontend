import React from "react";
import NavigationButton from "../components/NavigationButton";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask, faAtom, faCalculator, faDesktop, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const LearnPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="fixed inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/img/schoolbackground.png')" }}
    >
      {/* Faint overlay */}
      <div className="absolute inset-0 bg-white/30"></div>

      {/* Back button */}
      <button
        onClick={() => {
          if (window.history.length > 1) {
            navigate(-1);
          } else {
            navigate("/"); // fallback to home page
          }
        }}
        className="absolute top-4 left-4 z-20 p-2 bg-white/70 rounded-full hover:bg-white/90 shadow"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="text-xl" />
      </button>

      {/* Content - Full screen grid */}
      <div className="relative z-10 h-full w-full flex items-center justify-center">
        <div className="relative z-10 h-[50%] w-full grid grid-cols-2 grid-rows-2 p-2 gap-2">
          <NavigationButton
            label="Science"
            icon={<FontAwesomeIcon icon={faFlask} style={{ fontSize: "2.5rem" }} />}
            onClick={() => navigate("/learn/chemistry")}
            className="bg-red-300 hover:bg-red-400 h-full w-full flex flex-col items-center justify-center space-y-4"
          />
          <NavigationButton
            label="Physics"
            icon={<FontAwesomeIcon icon={faAtom} className="text-6xl" />}
            onClick={() => navigate("/learn/physics")}
            className="bg-blue-300 hover:bg-blue-400 h-full w-full flex flex-col items-center justify-center space-y-4"
          />
          <NavigationButton
            label="Maths"
            icon={<FontAwesomeIcon icon={faCalculator} className="text-6xl" />}
            onClick={() => navigate("/learn/maths")}
            className="bg-green-300 hover:bg-green-400 h-full w-full flex flex-col items-center justify-center space-y-4"
          />
          <NavigationButton
            label="Computer"
            icon={<FontAwesomeIcon icon={faDesktop} className="text-6xl" />}
            onClick={() => navigate("/learn/computer")}
            className="bg-yellow-300 hover:bg-yellow-400 h-full w-full flex flex-col items-center justify-center space-y-4"
          />
        </div>
      </div>
    </div>
  );
};

export default LearnPage;
