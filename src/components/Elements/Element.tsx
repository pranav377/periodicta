import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useElement } from "../../hooks/useElement";
import InfoDrawer from "./InfoDrawer";
import { memo } from "react";

import "@google/model-viewer";

export interface ElementProps {
  name: string;
  summary: string;
  symbol: string;
  category: string;
  number: number;
  model: string;
  atomicMass: number;
  discoveredBy: string;
  source: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": MyElementAttributes;
    }
    interface MyElementAttributes {
      src: string;
      alt?: string;
      autoplay?: boolean;
      style?: React.CSSProperties;
      "shadow-intensity"?: string;
    }
  }
}

function ColorFromCategory(category: string) {
  if (category.includes("noble")) return "blue";
  if (category.includes("alkaline")) return "orange";
  if (category.includes("alkali")) return "red";
  if (category.includes("transition")) return "#ffa500";
  if (category.includes("polyatomic")) return "green";
  if (category.includes("diatomic")) return "purple";
  if (category.includes("post-transition")) return "cyan";
  if (category.includes("metalloid")) return "#cc5b6f";
  if (category.includes("lanthanide")) return "brown";
  if (category.includes("actinide")) return "grey";
  if (category.includes("unknown")) return "gray";
}

function ElementComponent(props: ElementProps) {
  const data = useElement(props);

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <Box
          sx={{
            height: 140,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: ColorFromCategory(data.category),
            position: "relative",
          }}
        >
          <Typography
            sx={{
              position: "absolute",
              top: 4,
              left: 8,
            }}
            variant="h5"
            component="div"
          >
            {data.number}
          </Typography>
          <Typography variant="h2" component="div">
            {data.symbol}
          </Typography>
          <Typography variant="h5" component="div">
            {data.name}
          </Typography>
        </Box>
        <CardActions>
          <Button
            size="medium"
            fullWidth
            onClick={() => {
              data.setInfoOpen(true);
            }}
          >
            View
          </Button>
        </CardActions>
      </Card>

      <InfoDrawer {...data} />
    </>
  );
}

const Element = memo(ElementComponent);
export default Element;
