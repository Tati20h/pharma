import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import WarningAmberTwoToneIcon from '@mui/icons-material/WarningAmberTwoTone';
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import  logo from "../../assets/img/logo.png";

export default function CardAdditionalData() {
  return (
    <section className="data">

   
    <Card sx={{ maxWidth: 345 }}>
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
         <WarningAmberTwoToneIcon fontSize="large"   />
       
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Lizard
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </section>
  );
}
