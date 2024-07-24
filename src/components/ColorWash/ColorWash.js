import React, {useEffect, useMemo, useState} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadSlim} from "@tsparticles/slim";

const ColorWash = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const options = useMemo(
        () => ({
            autoPlay: true,
            // background: {
            //   color: { value: "#ffffff" },
            //   image: "",
            //   position: "",
            //   repeat: "",
            //   size: "",
            //   opacity: 1,
            // },
            backgroundMask: {
                composite: "destination-out",
                // cover: { color: { value: "#fff" }, opacity: 1 },
                enable: false,
            },
            clear: true,
            defaultThemes: {},
            delay: 0,
            fullScreen: {enable: true, zIndex: -2},
            detectRetina: true,
            duration: 0,
            fpsLimit: 120,
            interactivity: {
                detectsOn: "window",
                events: {
                    onClick: {enable: false, mode: []},
                    onDiv: {selectors: [], enable: false, mode: [], type: "circle"},
                    onHover: {
                        enable: false,
                        mode: [],
                        parallax: {enable: false, force: 2, smooth: 10},
                    },
                    resize: {delay: 0.5, enable: true},
                },
                modes: {},
            },
            manualParticles: [],
            particles: {
                bounce: {horizontal: {value: 1}, vertical: {value: 1}},
                collisions: {
                    absorb: {speed: 2},
                    bounce: {horizontal: {value: 1}, vertical: {value: 1}},
                    enable: false,
                    maxSpeed: 60,
                    mode: "bounce",
                    overlap: {enable: true, retries: 0},
                },
                color: {
                    value: [
                        "hsla(120, 95%, 40%, 0.9)",
                        "hsla(36, 97%, 70%, 1)",
                        "hsla(267, 93%, 70%, 0.95)",

                    ],
                    animation: {
                        h: {
                            count: 0,
                            enable: false,
                            speed: 1,
                            decay: 0,
                            delay: 0,
                            sync: true,
                            offset: 0,
                        },
                        s: {
                            count: 0,
                            enable: false,
                            speed: 1,
                            decay: 0,
                            delay: 0,
                            sync: true,
                            offset: 0,
                        },
                        l: {
                            count: 0,
                            enable: false,
                            speed: 1,
                            decay: 0,
                            delay: 0,
                            sync: true,
                            offset: 0,
                        },
                    },
                },
                effect: {close: true, fill: true, options: {}, type: []},
                groups: {},
                move: {
                    angle: {offset: 0, value: 90},
                    attract: {
                        distance: 200,
                        enable: false,
                        rotate: {x: 3000, y: 3000},
                    },
                    center: {x: 50, y: 50, mode: "percent", radius: 0},
                    decay: 0,
                    distance: {},
                    direction: "bottom-left",
                    drift: 0,
                    enable: true,
                    gravity: {
                        acceleration: 9.81,
                        enable: false,
                        inverse: false,
                        maxSpeed: 50,
                    },
                    path: {
                        clamp: true,
                        delay: {value: 0},
                        enable: false,
                        options: {},
                    },
                    outModes: {default: "out"},
                    random: false,
                    size: false,
                    speed: 3,
                    spin: {acceleration: 0, enable: false},
                    straight: false,
                    trail: {enable: false, length: 10, fill: {}},
                    vibrate: false,
                    warp: false,
                },
                number: {
                    density: {enable: false, width: 1920, height: 1080},
                    limit: {mode: "delete", value: 0},
                    value: 25,
                },
                opacity: {
                    value: {min: 0.15, max: 0.15},
                    animation: {
                        count: 0,
                        enable: false,
                        speed: 3,
                        decay: 0,
                        delay: 0,
                        sync: false,
                        mode: "auto",
                        startValue: "random",
                        destroy: "none",
                    },
                },
                reduceDuplicates: false,
                shadow: {
                    blur: 0,
                    color: {value: "#000"},
                    enable: true,
                    offset: {x: 0, y: 0},
                },
                shape: {
                    close: true,
                    fill: true,
                    options: {},
                    type: "circle",
                },
                size: {
                    value: {min: 400, max: 700},
                    animation: {
                        count: 0,
                        enable: true,
                        speed: 300,
                        decay: 0,
                        delay: 0,
                        sync: false,
                        mode: "auto",
                        startValue: "random",
                        destroy: "none",
                    },
                },
                stroke: {width: 0},
                zIndex: {value: 0, opacityRate: 1, sizeRate: 1, velocityRate: 1},
                destroy: {
                    bounds: {},
                    mode: "none",
                    split: {
                        count: 1,
                        factor: {value: 3},
                        rate: {value: {min: 4, max: 9}},
                        sizeOffset: true,
                    },
                },
                roll: {
                    darken: {enable: false, value: 0},
                    enable: false,
                    enlighten: {enable: false, value: 0},
                    mode: "vertical",
                    speed: 25,
                },
                tilt: {
                    value: 0,
                    animation: {enable: false, speed: 0, decay: 0, sync: false},
                    direction: "clockwise",
                    enable: false,
                },
                twinkle: {
                    lines: {enable: false, frequency: 0.05, opacity: 1},
                    particles: {enable: false, frequency: 0.05, opacity: 1},
                },
                wobble: {distance: 5, enable: false, speed: {angle: 50, move: 10}},
                life: {
                    count: 0,
                    delay: {value: 0, sync: false},
                    duration: {value: 0, sync: false},
                },
                rotate: {
                    value: 0,
                    animation: {enable: false, speed: 0, decay: 0, sync: false},
                    direction: "clockwise",
                    path: false,
                },
                orbit: {
                    animation: {
                        count: 0,
                        enable: false,
                        speed: 1,
                        decay: 0,
                        delay: 0,
                        sync: false,
                    },
                    enable: false,
                    opacity: 1,
                    rotation: {value: 45},
                    width: 1,
                },
                links: {
                    blink: false,
                    color: {value: "#fff"},
                    consent: false,
                    distance: 100,
                    enable: false,
                    frequency: 1,
                    opacity: 1,
                    shadow: {blur: 5, color: {value: "#000"}, enable: false},
                    triangles: {enable: false, frequency: 1},
                    width: 1,
                    warp: false,
                },
                repulse: {
                    value: 0,
                    enabled: false,
                    distance: 1,
                    duration: 1,
                    factor: 1,
                    speed: 1,
                },
            },
            pauseOnBlur: true,
            pauseOnOutsideViewport: true,
            responsive: [],
            smooth: false,
            style: {
                filter: "blur(50px)",
            },
            themes: [],
            zLayers: 100,
            name: "Big Particles",
            motion: {disable: false, reduce: {factor: 4, value: true}},
        }),
        [],
    );

    if (init) {
        return (
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
            />
        );
    }

    return <></>;
};
export default ColorWash;
