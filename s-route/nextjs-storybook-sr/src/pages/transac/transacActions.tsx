/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, CircularProgress, Fab } from '@mui/material';
import { useEffect, useState } from 'react';
import { Check, Save } from '@mui/icons-material';
import { green } from '@mui/material/colors';
import Link from 'next/link';
// import { updateStatus } from '../../../actions/user';
// import { useValue } from '../../../context/ContextProvider';

const TransacActions = (props: any) => {
//   const { dispatch } = useValue();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // const handleSubmit = async () => {
  //   setLoading(true);

  //   // const { role, active, _id } = params.row;
  //   // const result = await updateStatus({ role, active }, _id, dispatch);
  //   // if (result) {
  //   //   setSuccess(true);
  //   //   setRowId(null);
  //   // }
  //   setLoading(false);
  // };

    useEffect(() => {
      console.log(props.rowId)
      console.log(props.params)
    if (props.rowId === props.params.id && success) setSuccess(false);
  }, [props.rowId]);

  return (
    <Box
      sx={{
        m: 1,
        position: 'relative',
      }}
      >
          <Fab
          color="primary"
          sx={{
            width: 40,
            height: 40,
            bgcolor: green[500],
            '&:hover': { bgcolor: green[700] },
          }}
          
          >
              {props.params !== null ? (
                  <>
                      <Link href={`transac/${props.params.row.id}/editar`}>
                          {/* Editar */}
              <Check />
                      </Link>
                  </>)
                  : 
                  (<>
                      loading action
                  </>)}
        </Fab>
      {/* {success ? (
        <Fab
          color="primary"
          sx={{
            width: 40,
            height: 40,
            bgcolor: green[500],
            '&:hover': { bgcolor: green[700] },
          }}
        >
          <Check />
        </Fab>
      ) : (
        <Fab
          color="primary"
          sx={{
            width: 40,
            height: 40,
          }}
          disabled={props.params.id !== props.rowId || loading}
          onClick={handleSubmit}
        >
          <Save />
        </Fab>
      )} */}
      {loading && (
        <CircularProgress
          size={52}
          sx={{
            color: green[500],
            position: 'absolute',
            top: -6,
            left: -6,
            zIndex: 1,
          }}
        />
      )}
    </Box>
  );
};

export default TransacActions;
