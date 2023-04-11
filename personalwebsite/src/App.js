import "./App.css";
import React from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import {
  Navigate,
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import HomePage from "./pages/HomePage/homePage.js";
import Contact from "./pages/Contact/contact";
function AppWrapper() {
  const options = {
    particles: {
      number: {
        value: 15,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"],
        // value: ["aaff00", "#00ffff", "#ff66a3", "#ffff1a"],
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.8,
      },
      size: {
        value: { min: 1, max: 4 },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#808080",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out",
      },
    },
    background: {
      color: {
        // value: "#121121",
        value: "#061b25",
        // value: "#212121",
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1,
          },
        },
        push: {
          quantity: 5,
        },
      },
    },
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  return (
    <div>
      <Particles options={options} init={particlesInit} className="particles" />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

const App = () => (
  <Router>
    <AppWrapper />
  </Router>
);
export default App;
