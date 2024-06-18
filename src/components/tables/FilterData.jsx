import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";


const columns = [
  { field: "id", headerName: "ID", width: 60,  },
  {
    field: "generic_name",
    headerName: "generic Name",
    width: 200,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
  {
    field: "action",
    headerName: "Action",
    sortable: false,
    renderCell: ({ row }: Partial<GridRowParams>) => (
      <a href="https://www.example.com">
        <button>ver mas</button>
      </a>
    ),
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14, action: true },
];

export default function DataGridDemo() {
  return (
   

    <Box sx={{ height:"100%" ,
       width: "100%" ,
     backgroundImage: 'url(https://github.com/Tati20h/pharma/blob/main/src/assets/logo.png?raw=true)',
     backgroundRepeat: 'no-repeat',
     backgroundPosition: 'center' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[15]}
      />
    </Box>
  );
}
