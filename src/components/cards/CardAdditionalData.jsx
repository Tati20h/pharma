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
  const MAX_TEXT_LENGTH = 420;

  const truncateText = (text) => {
    if (text.length <= MAX_TEXT_LENGTH) {
      return text;
    }
    return text.slice(0, MAX_TEXT_LENGTH) + "...";
  };

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
       alignItems="stretch"
      style={{ padding: 30, gap: 20,  minHeight: "100vh" }}
    >
      {advertisement.length > 0 ? (
        advertisement.map((ad) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  maxWidth: 345,
                 Height:"100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
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
                      style={{ width: '50%', height: 'auto' }}
                    />
                  </div>
                  <WarningAmberTwoToneIcon fontSize="large" />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
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
