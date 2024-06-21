import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import "@fontsource/roboto/700.css";
import { principalData } from "../../services/data";
import { columns } from "./columns";

export default function DataGridDemo() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const getFullData = async () => {
      const data = await principalData();
      setRows(data);
    };

    getFullData();
  }, []);

  return (
    <Box
      sx={{
        marginTop: 0.8,
        position: "relative",
        width: "100%",
        height: "100%",
        color: "#000",
        left: 0,
        padding: 2.5,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "url(https://github.com/Tati20h/pharma/blob/main/src/assets/img/logo.png?raw=true)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.5,
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
        pageSizeOptions={[1]}
      />
    </Box>
  );
}
