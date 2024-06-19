import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const blue = "#3498DB ";
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
    <section className="data">
      {results.length > 0 ? (
        results.map((res) => {
          return (
            <Box className="box" sx={{ minWidth: 275 }}>
              <Card
                variant="outlined"
                style={{ background: gray, color: blue, opacity: 0.9 }}
              >
                <React.Fragment>
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
                      style={{ color: blue }}
                      component="div"
                    >
                      {truncateText(res.generic_name)}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {res.route[0]}
                    </Typography>
                    <Typography variant="body2">{res.dosage_form}</Typography>
                  </CardContent>

                  <Link to={`/result/${res.product_ndc}`}>
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
