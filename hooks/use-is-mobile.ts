import { useEffect, useState } from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // setIsMobile true when the innerWidth of window is less than typical mobile width
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // typical mobile innerWidth
    };
    checkMobile();
    window.addEventListener("resize", checkMobile); // check if mobile width on widow resize
    return () => window.removeEventListener("resize", checkMobile); // clean up
  }, []);
  return isMobile;
};
