import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

interface OrderbookRow {
  id : number,
  color: 'red' | 'green',
  price : number,
  amount : number,
  total : number
}

export default function OrderbookTableFull ({ data } : {
  data : OrderbookRow[]
}) {

  // - Tab1 - Title : Market Trades
  //          Content - Table with columns (Price(BNB), Amount(ATOM), Total)
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
      <Table size="small" stickyHeader>
        <TableHead>
          <TableRow
          >
            <TableCell
            sx={{
              py: 0,
              px: '0.3rem',
              fontSize: 12
            }}
            >
              Price(BNB)
            </TableCell>
            <TableCell align='right'
            sx={{
              py: 0,
              px: '0.3rem',
              fontSize: 12
            }}
            >
              Amount(ATOM)
            </TableCell>
            <TableCell align='right'
            sx={{
              py: 0,
              px: '0.3rem',
              fontSize: 12
            }}
            >
              Total
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell
                sx={{
                  color: ((row.color === 'green') ? 'success.main' : 'error.main'),
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
              >{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

}