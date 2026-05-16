import { useEffect, useState } from "react";

export const BREAKPOINTS = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
} as const;

export type BreakpointState = {
  mobile: boolean;
  tablet: boolean;
  desktop: boolean;
  /** Sidebar + main side-by-side (≥ md) */
  sideLayout: boolean;
  /** Wide sidebar (≥ xl) */
  wideSidebar: boolean;
  width: number;
};

const getState = (width: number): BreakpointState => ({
  mobile: width < BREAKPOINTS.md,
  tablet: width >= BREAKPOINTS.md && width < BREAKPOINTS.xl,
  desktop: width >= BREAKPOINTS.xl,
  sideLayout: width >= BREAKPOINTS.md,
  wideSidebar: width >= BREAKPOINTS.xl,
  width,
});

const defaultState = getState(
  typeof window !== "undefined" ? window.innerWidth : BREAKPOINTS.xl
);

export default function useBreakpoint(): [
  boolean,
  boolean,
  boolean,
  number,
  BreakpointState,
] {
  const [state, setState] = useState<BreakpointState>(defaultState);

  useEffect(() => {
    const update = () => setState(getState(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return [
    state.mobile,
    state.tablet,
    state.desktop,
    state.width,
    state,
  ];
}
