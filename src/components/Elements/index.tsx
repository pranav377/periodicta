import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Element from "./Element";
import { elements } from "../../data/data.json";

import { useEffect, memo } from "react";

function ElementsComponent() {
  // doing this for closing drawer on back button click
  useEffect(() => {
    history.pushState(null, document.title, location.href);
  }, []);
  return (
    <>
      <Container sx={{ p: 4 }} maxWidth="md">
        <Grid container spacing={4} display="flex" alignItems={"center"}>
          {elements.map((element) => (
            <Grid item key={element.name} xs={12} sm={6} md={4}>
              <Element
                name={element.name}
                summary={element.summary}
                symbol={element.symbol}
                category={element.category}
                number={element.number}
                model={element.bohr_model_3d}
                atomicMass={element.atomic_mass}
                discoveredBy={element.discovered_by}
                source={element.source}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

const Elements = memo(ElementsComponent);
export default Elements;
