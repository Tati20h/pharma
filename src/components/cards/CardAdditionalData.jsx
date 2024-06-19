import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import WarningAmberTwoToneIcon from "@mui/icons-material/WarningAmberTwoTone";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import logo from "../../assets/img/logo.png";

export default function CardAdditionalData({ advertisement }) {
  return (
    <section className="advt">
      {advertisement.map((ad) => {
        return (
          <Card sx={{ maxWidth: 900 }}>
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
                  {ad.text}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </section>
  );
}
