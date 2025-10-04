import { useEffect, useMemo, useState } from "react";

export type DeviceProfile = {
  isMobile: boolean;
  pixelRatio: number;
  fogDensity: number;
  useSimpleMaterials: boolean;
  physicsStep: number;
  physicsIterations: number;
  starsCount: number;
  starsFactor: number;
};

const MOBILE_MAX_WIDTH = 820;

const detectMobile = () => {
  if (typeof window === "undefined") return false;
  const agent = window.navigator.userAgent || "";
  const isTouchDevice = "ontouchstart" in window;
  const matchesAgent = /Mobile|Android|iP(ad|hone|od)|IEMobile|BlackBerry|webOS|Opera Mini/i.test(agent);
  return matchesAgent || isTouchDevice || window.innerWidth <= MOBILE_MAX_WIDTH;
};

export default function useDeviceProfile(): DeviceProfile {
  const [isMobile, setIsMobile] = useState<boolean>(() => detectMobile());
  const [pixelRatio, setPixelRatio] = useState<number>(() => {
    if (typeof window === "undefined") return 1;
    return Math.min(window.devicePixelRatio || 1, 1.75);
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setIsMobile(detectMobile());
      setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  return useMemo<DeviceProfile>(() => {
    const cappedDpr = Math.min(pixelRatio, isMobile ? 1.25 : 1.75);
    return {
      isMobile,
      pixelRatio: cappedDpr,
      fogDensity: isMobile ? 0.035 : 0.045,
      useSimpleMaterials: isMobile,
      physicsStep: isMobile ? 1 / 50 : 1 / 60,
      physicsIterations: isMobile ? 8 : 12,
      starsCount: isMobile ? 2600 : 4000,
      starsFactor: isMobile ? 1.8 : 2.5,
    };
  }, [isMobile, pixelRatio]);
}
