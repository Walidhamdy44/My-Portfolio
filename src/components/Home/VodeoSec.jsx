import { useEffect } from "react";
import { gsap } from "gsap";
import videoSrcBlack from "../../Videos/Artemii Lebedev — Art Director & UI Designer(1).mp4";

const VideoSec = () => {
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      gsap.fromTo(
        ".text-small",
        { opacity: 0, y: -50 },
        { opacity: 1, y: 200, duration: 1 }
      );
    } else {
      gsap.fromTo(
        ".text-small",
        { opacity: 0, x: -50 },
        { opacity: 1, x: 200, duration: 1 }
      );
    }

    gsap.fromTo(
      ".video",
      { opacity: 0 },
      { opacity: 1, duration: 2, delay: 0.5 }
    );

    gsap.fromTo(
      ".video video",
      { scale: 1.2 },
      { scale: 1, duration: 2, delay: 0.5 }
    );
  }, []);

  return (
    <div className="w-full bg-black relative overflow-hidden video mh-100">
      <div
        className={`absolute ${
          window.innerWidth <= 768 ? "top-1 left-0" : "top-30 left-0"
        } p-4`}
      >
        <p className="text-small">let's design the future</p>
      </div>
      <div className="">
        <video
          className="w-100"
          autoPlay
          muted
          playsInline={true}
          loop={true}
          key={videoSrcBlack}
          style={{ pointerEvents: "none" }}
        >
          <source src={videoSrcBlack} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default VideoSec;
