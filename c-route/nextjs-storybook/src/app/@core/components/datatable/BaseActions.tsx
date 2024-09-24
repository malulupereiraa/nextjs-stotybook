/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, CircularProgress, Fab } from "@mui/material";
import { useEffect, useState } from "react";
import { Check, Delete, Edit, Save } from "@mui/icons-material";
import { green, red } from "@mui/material/colors";
import Link from "next/link";

const BaseActions: React.FC<any> = (props: any) => {
  return (
    <Box
      sx={{
        m: 1,
        position: "relative",
      }}
    >
      {props.params !== null ? (
        <>
          <Fab
            color="primary"
            sx={{
              width: 40,
              height: 40,
              bgcolor: green[500],
              "&:hover": { bgcolor: green[700] },
            }}
            className="me-2"
          >
            <Link href={`edit/${props.params.row.id}`}>
              <Edit />
            </Link>
          </Fab>
          <Fab
            color="primary"
            sx={{
              width: 40,
              height: 40,
              bgcolor: red[500],
              "&:hover": { bgcolor: red[700] },
            }}
            onClick={() => {
              props.deleteAction(props.params.row.id);
            }}
          >
            <Delete />
          </Fab>
        </>
      ) : (
        <>loading action</>
      )}
    </Box>
  );
};

export default BaseActions;
