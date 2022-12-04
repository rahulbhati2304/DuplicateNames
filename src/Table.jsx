import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  redColor: {
    backgroundColor: "red",
  },
  yellowColor: {
    backgroundColor: "yellow",
  },
  greenColor: {
    backgroundColor: "green",
  },
}));
const rows = [
  "Rahul",
  "Rahul",
  "Surbhi",
  "Surbhi",
  "Surbhi",
  "Surbhi",
  "Mukesh",
  "Mukesh",
  "Mukesh",
  "Mukesh",
  "Mukesh",
  "Mukesh",
  "Mukesh",
  "Mukesh",
  "Mukesh",
  "Mukesh",
  "Mukesh",
  "Mukesh",
  "Mukesh",
  "Mukesh",
  "Mukesh",
];

export default function BasicTable() {

    const [array, setArray] = useState([]);
    const classes = useStyles();

    useEffect(() => {
     let array = rows.filter((currValue, currIndex) =>( rows.indexOf(currValue) === currIndex))
        setArray(array);
    }, [])

    return (
      <Container maxWidth='xl'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Name</TableCell>
                <TableCell align="center">No. of times duplicated</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {array.map((row) => (
                <TableRow
                  className={clsx({
                    [classes.redColor]:
                      rows.filter((item) => item === row).length < 3,
                    [classes.yellowColor]:
                      rows.filter((item) => item === row).length > 3 &&
                      rows.filter((item) => item === row).length < 10,
                    [classes.greenColor]:
                      rows.filter((item) => item === row).length > 10,
                  })}
                  key={row}
                >
                  <TableCell align="right" component="th" scope="row">
                    {row}
                  </TableCell>
                  <TableCell align="center">
                    {rows.filter((item) => item === row).length}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    );
}
