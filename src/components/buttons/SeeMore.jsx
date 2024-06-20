import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const SeeMore = ({ id }) => {
  return (
    <Link to={`/result/${id}`}>
      <Button size="small" variant="outlined">
        See more
      </Button>
    </Link>
  );
};
