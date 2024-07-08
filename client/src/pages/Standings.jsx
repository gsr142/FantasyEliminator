import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getUsers } from "../utils/API";
function createData(name, totalPoints, week1, week2, week3, week4) {
  return { name, totalPoints, week1, week2, week3, week4 };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 5.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 5.0),
  createData("Eclair", 262, 16.0, 24, 6.0, 7.0),
  createData("Cupcake", 305, 3.7, 67, 4.3, 5.8),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 7.0),
];

const data = getUsers();
console.log(data);
export default function Standings() {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Total Points</TableCell>
              <TableCell align="right">Week 1</TableCell>
              <TableCell align="right">Week 2</TableCell>
              <TableCell align="right">Week 3</TableCell>
              <TableCell align="right">Week 4</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.totalPoints}</TableCell>
                <TableCell align="right">{row.week1}</TableCell>
                <TableCell align="right">{row.week2}</TableCell>
                <TableCell align="right">{row.week3}</TableCell>
                <TableCell align="right">{row.week4}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
