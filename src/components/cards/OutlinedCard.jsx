import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/700.css";
import logo from "../../assets/img/logo.png";
import { SeeMore } from "../buttons/SeeMore";

const orange = "#DC7633 ";
const black = "#010101";
const gray = "#f5f5f5";

export default function OutlinedCard({ results }) {
  const MAX_TEXT_LENGTH = 70;

  const truncateText = (text) => {
    if (text.length <= MAX_TEXT_LENGTH) {
      return text;
    }
    return text.slice(0, MAX_TEXT_LENGTH) + "...";
  };

  return (
    <Grid
      container
      spacing={3}
      justifyContent="space-evenly"
      alignItems="center"
      style={{ padding: 50, gap: 20 }}
    >
      {results.length > 0 ? (
        results.map((res) => {
          return (
            <Box className="box" sx={{ minWidth: 300, height: "100%" }}>
              <Card
                variant="outlined"
                style={{ background: gray, color: black, opacity: 0.9 }}
              >
                <React.Fragment>
                  <div>
                    <img
                      className="icon"
                      src={logo}
                      alt="animation"
                      color="white"
                      width={120}
                    />
                  </div>

                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {truncateText(res.brand_name)}
                    </Typography>
                    <Typography
                      variant="h6"
                      style={{ color: orange }}
                      component="div"
                    >
                      {truncateText(res.generic_name)}
                    </Typography>
                    {res.route
                      ? res.route.map((r) => {
                          return (
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                              {r}
                            </Typography>
                          );
                        })
                      : ""}
                    <Typography variant="body2">{res.dosage_form}</Typography>
                  </CardContent>
                  <SeeMore id={res.product_ndc} />
                </React.Fragment>
              </Card>
            </Box>
          );
        })
      ) : (
        <span>No hay resultados</span>
      )}
    </Grid>
  );
}
