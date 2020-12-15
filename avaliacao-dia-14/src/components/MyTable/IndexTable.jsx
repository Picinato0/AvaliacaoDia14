import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function DenseTable({ pessoas }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Pacotes</TableCell>
            <TableCell>Itens</TableCell>
            <TableCell>Preço</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pessoas.map((row) => (
            <TableRow key={row.pacotes}>
              <TableCell>{row.pacotes}</TableCell>
              <TableCell>{row.itens}</TableCell>
              <TableCell>{row.preco}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}