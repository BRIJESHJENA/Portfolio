import { useEffect, useState } from "react";

export default function useBreakpoint() {
  const [mobileView, setMobileView] = useState<boolean>(false);
  const [tabletView, setTabletView] = useState<boolean>(false);
  const [desktopView, setDesktopView] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  const breakpoints = {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400,
    },
  };

  useEffect(() => {
    function checkDeviceWidth() {
      setWindowWidth(window.innerWidth);
      // * mobile devices - less than 768
      if (window.innerWidth < breakpoints.values.md) {
        setMobileView(true);
      } else {
        setMobileView(false);
      }

      // * tablet devices - in between 768 and 1200
      if (
        window.innerWidth >= breakpoints.values.md &&
        window.innerWidth < 1200
      ) {
        setTabletView(true);
      } else {
        setTabletView(false);
      }

      // * desktop devices - above 1200
      if (window.innerWidth >= 1200) {
        setDesktopView(true);
      } else {
        setDesktopView(false);
      }
    }
    window.addEventListener("resize", checkDeviceWidth);
    checkDeviceWidth();

    return () => window.removeEventListener("resize", checkDeviceWidth);
  }, []);

  return [mobileView, tabletView, desktopView, windowWidth];
}
