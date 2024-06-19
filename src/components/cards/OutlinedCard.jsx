import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function OutlinedCard({ results }) {
  return (
    <section className="data">
      {results.length > 0 ? (
        results.map((res) => {
          return (
            <Box sx={{ Width: 370 }}>
              <Card >
                <React.Fragment>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {res.generic_name}
                    </Typography>
                    <Typography variant="h5" component="div">
                      {res.brand_name}
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
              </Card>
            </Box>
          );
        })
      ) : (
        <span>No hay resultados</span>
      )}
    </section>
  );
}
