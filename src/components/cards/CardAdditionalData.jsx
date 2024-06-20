import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import WarningAmberTwoToneIcon from "@mui/icons-material/WarningAmberTwoTone";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import logo from "../../assets/img/logo.png";
import "@fontsource/roboto/700.css";

export default function CardAdditionalData({ advertisement }) {
  const MAX_TEXT_LENGTH = 700;

  const truncateText = (text) => {
    if (text.length <= MAX_TEXT_LENGTH) {
      return text;
    }
    return text.slice(0, MAX_TEXT_LENGTH) + "...";
  };

  return (
    <Grid
      container
      spacing={1}
      justifyContent="center"
      alignItems="center"
      style={{ padding: 30, gap: 20 }}
    >
      {advertisement.length > 0 ? (
        advertisement.map((ad) => {
          return (
            <Grid item xs={10} sm={4} md={4}>
              <Card
                sx={{
                  maxWidth: 500,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                }}
              >
                <CardActionArea>
                  <div>
                    <img
                      className="icon"
                      src={logo}
                      alt="animation"
                      color="white"
                      width={120}
                    />
                  </div>
                  <WarningAmberTwoToneIcon fontSize="large" />

                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      {ad.title}
                    </Typography>
                    <br />
                    <Typography variant="body1" color="text.secondary">
                      {truncateText(ad.text)}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })
      ) : (
        <span>NO RESULTS</span>
      )}
    </Grid>
  );
}
