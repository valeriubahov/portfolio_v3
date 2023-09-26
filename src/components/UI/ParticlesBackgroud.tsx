import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

const ParticlesBackgroud: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "bubble",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 80,
              duration: 2,
              opacity: 8,
              size: 15,
              speed: 3,
            },
          },
        },
        particles: {
          color: {
            value: "#64ffda",
            animation: {
              enable: true,
              speed: 20,
              sync: true,
            },
          },
          lineLinked: {
            blink: false,
            consent: false,
            distance: 30,
            enable: true,
            opacity: 0.8,
            width: 1,
          },
          links: {
            color: "#8892b0",
            distance: 150,
            enable: true,
            opacity: 0.1,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            attract: {
              enable: false,
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            bounce: false,
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: true,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: false,
              area: 2000,
            },
            limit: 0,
            value: 250,
          },
          opacity: {
            animation: {
              enable: true,
              minimumValue: 0.5,
              speed: 2,
              sync: false,
            },
            random: false,
            value: 1,
          },
          shape: {
            type: "image",
            image: [
              {
                src: "/react.svg",
              },
              {
                src: "/node.svg",
              },
              {
                src: "/css.svg",
              },
              {
                src: "/html.svg",
              },
              {
                src: "/js.svg",
              },
            ],
          },
          size: {
            animation: {
              enable: false,
              minimumValue: 0.1,
              speed: 40,
              sync: true,
            },
            random: true,
            value: 3,
          },
        },
        retina_detect: false,
        detectRetina: false,
        responsive: [
          {
            maxWidth: 1000,
            options: {
              particles: {
                number: { limit: 70 },
                size: {
                  animation: {
                    enable: false,
                    minimumValue: 0.1,
                    speed: 40,
                    sync: false,
                  },
                  random: true,
                  value: 8,
                },
                opacity: {
                  value: 1,
                },
              },
              interactivity: {
                events: {
                  onHover: {
                    enable: false,
                  },
                },
              },
            },
          },
        ],
      }}
    />
  );
};

export default ParticlesBackgroud;
