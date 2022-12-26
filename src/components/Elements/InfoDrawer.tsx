import Drawer from "@mui/material/Drawer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { memo } from "react";

function InfoDrawerComponent(props: {
  infoOpen: boolean;
  setInfoOpen: (value: boolean) => void;
  matches: boolean;
  name: string;
  symbol: string;
  category: string;
  model: string;
  atomicMass: number;
  number: number;
  summary: string;
  discoveredBy: string;
  source: string;
}) {
  const {
    infoOpen,
    setInfoOpen,
    matches,
    name,
    symbol,
    category,
    model,
    atomicMass,
    number,
    summary,
    discoveredBy,
    source,
  } = props;

  return (
    <>
      <Drawer
        anchor={"right"}
        open={infoOpen}
        onClose={() => setInfoOpen(false)}
        PaperProps={{
          sx: { width: matches ? 500 : "100%" },
        }}
      >
        <>
          <Box
            role="presentation"
            sx={{
              p: 1,
            }}
          >
            <Button
              onClick={() => setInfoOpen(false)}
              startIcon={<ArrowBackIcon />}
            >
              Back
            </Button>

            <Box sx={{ p: 2 }}>
              <Chip label={category} color="primary" sx={{ height: 1 }} />
              <Typography variant="h4" component="div">
                {name} ({symbol})
              </Typography>

              <Box
                sx={{
                  width: "100%",
                  height: "30vh",
                }}
              >
                <model-viewer
                  src={model}
                  alt={`Bohr model of ${name}`}
                  autoplay
                  style={{ width: "100%", height: "100%" }}
                  shadow-intensity="1"
                  camera-controls="false"
                  interaction-prompt="auto"
                  interaction-prompt-style="wiggle"
                  interaction-prompt-threshold="0.5"
                />
              </Box>
              <Box display="flex" gap={1} color="grey.500">
                <Typography variant="subtitle2" component="div">
                  Atomic Mass: {atomicMass}
                </Typography>
                |
                <Typography variant="subtitle2" component="div">
                  Atomic Number: {number}
                </Typography>
              </Box>

              <Typography variant="body1" component="div">
                {summary}
              </Typography>

              <Box mt={2}>
                <Box display="flex" gap={1}>
                  <Typography variant="body2" component="div">
                    Discovered by:
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component="div"
                    color="grey.500"
                  >
                    {discoveredBy}
                  </Typography>
                </Box>
              </Box>

              <Button
                variant="contained"
                endIcon={<ArrowForward />}
                sx={{
                  mt: 1,
                  backgroundColor: "grey.900",
                  color: "white",
                  borderRadius: 5,
                }}
                href={source}
                target="_blank"
              >
                Know More
              </Button>
            </Box>
          </Box>
        </>
      </Drawer>
    </>
  );
}

const InfoDrawer = memo(InfoDrawerComponent);
export default InfoDrawer;
