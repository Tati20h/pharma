import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>

    <Link to="/result">
      <Button size="small">Learn More</Button>
    </Link>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <section className="data">
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card}</Card>
      </Box>
    </section>
  );
}
