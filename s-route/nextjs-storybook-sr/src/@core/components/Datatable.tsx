import { DataGrid} from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { DatatableProps } from '../types/datatable';

const Datatable: React.FC<DatatableProps> = ({
    columns,
    rows,
    paginationModel,
}) => {
    return (
        <>
        <Paper sx={{ height: 400, width: '100%' }}>
            <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            sx={{ border: 0 }}
            />
        </Paper>
        </>
    )
}

export default Datatable
