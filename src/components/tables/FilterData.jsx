import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import "@fontsource/roboto/700.css";
import { principalData } from "../../services/data";
import { columns } from "../../utils/components";

export default function DataGridDemo() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const getFullData = async () => {
      try {
        const data = await principalData();
        setRows(data);
      } catch (error) {
        console.error("Error getting data:", error);
      }
    };

    getFullData();
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "90%",
        height: "90vh",
        color: "#000", // Color de texto oscuro
        left: 60,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "url(https://github.com/Tati20h/pharma/blob/main/src/assets/logo.png?raw=true)",
          backgroundPosition: "bottom center", // Ajustar imagen de fondo a la parte inferior central
          backgroundRepeat: "no-repeat",
          opacity: 0.5, // Ajusta la opacidad aquí
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 15,
            },
          },
        }}
        pageSizeOptions={[15]}
      />
    </Box>
  );
}
