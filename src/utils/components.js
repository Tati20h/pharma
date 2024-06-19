import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const columns = [
  { field: "id", headerName: "ndc", width: 60 },
  {
    field: "name",
    headerName: "Generic Name",
    width: 500,
    editable: false,
  },
  {
    field: "labeler",
    headerName: "Labeler",
    width: 150,
    editable: false,
  },
  {
    field: "brand",
    headerName: "Brand Name",
    width: 150,
    editable: false,
  },
  {
    field: "category",
    headerName: "Category",
    width: 150,
    editable: false,
  },
  {
    field: "dosageForm",
    headerName: "Dosage",
    type: "number",
    width: 110,
    editable: false,
  },
  {
    field: "type",
    headerName: "Type",
    sortable: false,
    width: 160,
  },
  {
    field: "route",
    headerName: "Route Administration",
    sortable: false,
    width: 160,
  },
  {
    field: "action",
    headerName: "Action",
    sortable: false,
    renderCell: ({ row }: Partial<GridRowParams>) => (
      <Link to="/result">
        <Button size="small" variant="outlined" href="https://www.google.com/">
          See more
        </Button>
      </Link>
    ),
  },
];
