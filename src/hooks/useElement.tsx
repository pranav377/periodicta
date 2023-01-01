import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useCallback, useEffect, useState } from "react";
import { ElementProps } from "../components/Elements/Element";

export const useElement = (props: ElementProps) => {
  const {
    name,
    summary,
    symbol,
    category,
    number,
    model,
    atomicMass,
    discoveredBy,
    source,
  } = props;

  const [infoOpen, setInfoOpen] = useState(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  const handleUserBackClick = useCallback(() => {
    history.pushState(null, document.title, location.href);

    setInfoOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener("popstate", handleUserBackClick, false);
    return () => {
      window.removeEventListener("popstate", handleUserBackClick, false);
    };
  }, [handleUserBackClick]);

  return {
    name,
    summary,
    symbol,
    category,
    number,
    model,
    atomicMass,
    discoveredBy,
    source,
    infoOpen,
    setInfoOpen,
    matches,
  };
};
