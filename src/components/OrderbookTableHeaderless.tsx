import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

interface OrderbookRow {
  id : number,
  color: 'red' | 'green',
  price : number,
  amount : number,
  total : number
}

export default function OrderbookTableHeaderless ({ data }: {
  data : OrderbookRow[]
}) {

  // - Tab1 - Title : Market Trades
  //          Content - Table with columns (Price(BNB), Amount(ATOM), Time)
  //          Rows with data

  return (
    <TableContainer component={Paper}
      sx={{
        maxHeight: {
          xs: 150,
          md: 'none'
        },
      }}
    >
      <Table size='small' stickyHeader>
        <TableBody>
          {sampleData.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell
                sx={{
                  color: ((row.green === true) ? 'success.main' : 'error.main'),
                  py: 0,
                  px: '0.3rem',
                  fontSize: 12
                }}
              >
                {row.price}
              </TableCell>
              <TableCell align='right'
                sx={{
                  py: 0,
                  px: '0.3rem',
                  fontSize: 12
                }}
              >{row.amount}</TableCell>
              <TableCell align='right'
                sx={{
                  py: 0,
                  px: '0.3rem',
                  fontSize: 12
                }}
              >{row.time}</TableCell>
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
  green: boolean,
  price: number,
  amount: number,
  time: string,
) {
  return { id, green, price, amount, time };
}

const sampleData = [
  createData(1, true, 0.03899, 13.26, "19:38:44"),
  createData(2, true, 0.03899, 13.26, "19:38:44"),
  createData(3, true, 0.03839, 13.26, "19:38:44"),
  createData(4, true, 0.03899, 13.21, "19:38:44"),
  createData(5, true, 0.038956, 13.25, "19:38:44"),
  createData(6, true, 0.03899, 13.27, "19:38:44"),
  createData(7, true, 0.03829, 13.24, "19:38:44"),
  createData(8, true, 0.0381299, 13.26, "19:38:44"),
  createData(9, true, 0.03899, 14.26, "19:38:44"),
  createData(10, true, 0.03349, 13.26, "19:38:44"),
  createData(11, true, 0.07899, 15.26, "19:38:44"),
  createData(12, true, 0.034599, 13.26, "19:38:44"),
  createData(13, true, 0.03899, 13.26, "19:38:44"),
  createData(14, true, 0.03899, 13.26, "19:38:44"),
  createData(15, true, 0.03899, 13.26, "19:38:44"),
]
