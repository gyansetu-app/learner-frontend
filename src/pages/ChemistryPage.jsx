import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFlask, 
  faAtom, 
  faEye, 
  faGamepad,
  faVial,
  faDroplet,
  faSeedling,
  faBreadSlice,
  faShirt,
  faRecycle,
  faWater,
  faFire,
  faMagnet,
  faLightbulb,
  faPlay,
  faVrCardboard,
  faTrophy,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const ChemistryPage = () => {
  const navigate = useNavigate();

  const chapters = [
    { id: 1, title: "Food: Where Does It Come From?", icon: faBreadSlice, color: "bg-orange-200", completed: true },
    { id: 2, title: "Components of Food", icon: faVial, color: "bg-green-200", completed: true },
    { id: 3, title: "Fibre to Fabric", icon: faShirt, color: "bg-purple-200", completed: false },
    { id: 4, title: "Sorting Materials into Groups", icon: faRecycle, color: "bg-blue-200", completed: false },
    { id: 5, title: "Separation of Substances", icon: faDroplet, color: "bg-cyan-200", completed: false },
    { id: 6, title: "Changes Around Us", icon: faFire, color: "bg-red-200", completed: false },
    { id: 7, title: "Getting to Know Plants", icon: faSeedling, color: "bg-green-300", completed: false },
    { id: 8, title: "Body Movements", icon: faAtom, color: "bg-pink-200", completed: false },
    { id: 9, title: "The Living Organisms", icon: faLightbulb, color: "bg-yellow-200", completed: false },
    { id: 10, title: "Motion and Measurement", icon: faMagnet, color: "bg-indigo-200", completed: false },
    { id: 11, title: "Light, Shadows and Reflections", icon: faEye, color: "bg-teal-200", completed: false },
    { id: 12, title: "Electricity and Circuits", icon: faLightbulb, color: "bg-amber-200", completed: false },
    { id: 13, title: "Fun with Magnets", icon: faMagnet, color: "bg-rose-200", completed: false },
    { id: 14, title: "Water", icon: faWater, color: "bg-blue-300", completed: false },
    { id: 15, title: "Air Around Us", icon: faAtom, color: "bg-gray-300", completed: false },
    { id: 16, title: "Garbage In, Garbage Out", icon: faRecycle, color: "bg-lime-200", completed: false }
  ];

  const activities = [
    { title: "AR Chemistry Lab", icon: faFlask, color: "bg-purple-200", description: "Virtual experiments with AR" },
    { title: "Science Quiz", icon: faTrophy, color: "bg-yellow-200", description: "Test your knowledge" },
    { title: "VR Experience", icon: faVrCardboard, color: "bg-blue-200", description: "Immersive learning" },
    { title: "Interactive Games", icon: faGamepad, color: "bg-green-200", description: "Learn while playing" }
  ];

  return (
    <div 
      className="min-h-screen bg-cover bg-center p-4 relative"
      style={{ backgroundImage: "url('/img/background.png')" }}
    >
      {/* Faint overlay */}
      <div className="absolute inset-0 bg-white/10"></div>

      {/* Back button */}
      <button
        onClick={() => {
          if (window.history.length > 1) {
            navigate(-1);
          } else {
            navigate("/"); // fallback to home
          }
        }}
        className="absolute top-4 left-4 z-20 p-2 bg-white/70 rounded-full hover:bg-white/90 shadow"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="text-xl" />
      </button>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pt-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-200 rounded-full mb-4 shadow">
            <FontAwesomeIcon icon={faFlask} className="text-3xl text-gray-800" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Science Journey</h1>
          <p className="text-lg text-gray-700">Class 6 NCERT Science Chapters</p>
        </div>

        {/* Activity Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {activities.map((activity, index) => (
            <button
              key={index}
              className={`${activity.color} p-4 rounded-xl text-gray-800 font-semibold shadow hover:shadow-md transition`}
            >
              <FontAwesomeIcon icon={activity.icon} className="text-2xl mb-2" />
              <div className="text-sm font-bold">{activity.title}</div>
              <div className="text-xs opacity-90">{activity.description}</div>
            </button>
          ))}
        </div>

        {/* Roadmap */}
        <div className="bg-white/90 rounded-2xl p-6 shadow-md">
          <div className="flex items-center justify-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Learning Roadmap</h2>
            <FontAwesomeIcon icon={faAtom} className="text-2xl text-gray-500 ml-3" />
          </div>
          
          <div className="space-y-4">
            {chapters.map((chapter) => (
              <div key={chapter.id} className="flex items-center">
                <div className={`flex items-center w-full p-4 rounded-xl shadow hover:shadow-md transition ${
                  chapter.completed 
                    ? 'bg-green-100 border border-green-300' 
                    : 'bg-gray-50'
                }`}>
                  <div className={`flex items-center justify-center w-12 h-12 ${chapter.color} rounded-full mr-4 shadow`}>
                    <FontAwesomeIcon icon={chapter.icon} className="text-white text-lg" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center">
                      <span className="text-sm font-semibold text-gray-500 mr-2">Chapter {chapter.id}</span>
                      {chapter.completed && (
                        <span className="text-xs text-green-600 font-medium">Completed</span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">{chapter.title}</h3>
                  </div>
                  <button className={`flex items-center justify-center w-10 h-10 ${
                    chapter.completed ? 'bg-green-500' : 'bg-purple-300'
                  } rounded-full text-white shadow`}>
                    <FontAwesomeIcon icon={faPlay} className="text-sm" />
                  </button>
                </div>
              </div>
            ))}                                                 
          </div>
          
          {/* Progress Bar */}
          <div className="mt-8 bg-gray-200 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-green-400 h-full rounded-full transition-all duration-500"
              style={{ width: `${(chapters.filter(c => c.completed).length / chapters.length) * 100}%` }}
            ></div>
          </div>
          <div className="text-center mt-2 text-gray-700">
            Progress: {chapters.filter(c => c.completed).length} / {chapters.length} chapters completed
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChemistryPage;
