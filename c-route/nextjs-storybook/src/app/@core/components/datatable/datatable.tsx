import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { DatatableProps } from "../../types/datatable";

const Datatable: React.FC<DatatableProps> = ({
  columns,
  rows,
  paginationModel,
  checkbox,
  loading,
}) => {
  return (
    <>
      <Paper sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection={checkbox !== undefined ? checkbox : false}
          sx={{ border: 0 }}
          loading={loading}
        />
      </Paper>
    </>
  );
};

export default Datatable;
