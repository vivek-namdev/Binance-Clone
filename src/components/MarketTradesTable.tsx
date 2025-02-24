import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default function MarketTradesTable () {

  // - Tab1 - Title : Market Trades
  //          Content - Table with columns (Price(BNB), Amount(ATOM), Time)
  //          Rows with data

  return (
    <TableContainer component={Paper}
      sx={{
        px: 0,
        maxHeight: 400
      }}
    >
      <Table size='small' stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell sx = {{py: '0.7rem', px: '0.3rem', fontSize: 12}} >Price(BNB)</TableCell>
            <TableCell sx = {{py: '0.7rem', px: '0.3rem', fontSize: 12}} align='right'>Amount(ATOM)</TableCell>
            <TableCell sx = {{py: '0.7rem', px: '0.3rem', fontSize: 12}} align='right'>Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sampleData.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell
                sx={{
                  color: ((row.color === 'green') ? 'success.main' : 'error.main'),
                  py: 0, px: '0.3rem', fontSize: 12
                }}
              >
                {row.price}
              </TableCell>
              <TableCell sx = {{py: 0, px: '0.3rem', fontSize: 12}} align='right'>{row.amount}</TableCell>
              <TableCell sx = {{py: 0, px: '0.3rem', fontSize: 12}} align='right'>{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

}

// ===================== SAMPLE DATA ===================================

function createData(
  id: number,
  color: 'red' | 'green',
  price: number,
  amount: number,
  time: string,
) {
  return { id, color, price, amount, time };
}

const sampleData = [
  createData(1, 'red', 0.03899, 13.26, "19:38:44"),
  createData(2, 'green', 0.03899, 13.26, "19:38:44"),
  createData(3, 'red', 0.03839, 13.26, "19:38:44"),
  createData(4, 'red', 0.03899, 13.21, "19:38:44"),
  createData(5, 'green', 0.038956, 13.25, "19:38:44"),
  createData(6, 'red', 0.03899, 13.27, "19:38:44"),
  createData(7, 'green', 0.03829, 13.24, "19:38:44"),
  createData(8, 'green', 0.0381299, 13.26, "19:38:44"),
  createData(9, 'red', 0.03899, 14.26, "19:38:44"),
  createData(10, 'green', 0.03349, 13.26, "19:38:44"),
  createData(11, 'green', 0.07899, 15.26, "19:38:44"),
  createData(12, 'green', 0.034599, 13.26, "19:38:44"),
  createData(13, 'green', 0.03899, 13.26, "19:38:44"),
  createData(14, 'red', 0.03899, 13.26, "19:38:44"),
  createData(15, 'red', 0.03899, 13.26, "19:38:44"),
]
