import React from 'react'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

export default function OrderTable() {
    function createData(name, calories, fat, carbs, protein, price) {
        return {
          name,
          calories,
          fat,
          carbs,
          protein,
          price,
          history: [
            {
              date: '2020-01-05',
              customerId: '11091700',
              amount: 3,
            },
            {
              date: '2020-01-02',
              customerId: 'Anonymous',
              amount: 1,
            },
          ],
        };
      }
      

      const steps = [
        'Order Production Complete',
        'Sent to distributor',
        'Reached Wholesaler',
        'Retailer ',
        'Sold to consumer',
      ];
      
      function Row(props) {
        const { row } = props;
        const [open, setOpen] = React.useState(false);
      
        return (
          <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
              <TableCell>
                <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => setOpen(!open)}
                >
                  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
              </TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <Box sx={{ margin: 1 ,display:"flex"}}>
                    <Typography variant="h6" gutterBottom component="div">
                      History
                    </Typography>
                    <Stepper activeStep={1} alternativeLabel>
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                  </Box>
                </Collapse>
              </TableCell>
            </TableRow>
          </React.Fragment>
        );
      }
      
      Row.propTypes = {
        row: PropTypes.shape({
          calories: PropTypes.number.isRequired,
          carbs: PropTypes.number.isRequired,
          fat: PropTypes.number.isRequired,
          history: PropTypes.arrayOf(
            PropTypes.shape({
              amount: PropTypes.number.isRequired,
              customerId: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
            }),
          ).isRequired,
          name: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
          protein: PropTypes.number.isRequired,
        }).isRequired,
      };
      
      const rows = [
        createData('Karim And Brothers', 159, 6.0, 24, 4.0, 3.99),
        createData('Saleh Traders', 237, 9.0, 37, 4.3, 4.99),
        createData('Sakib Suppliers', 262, 16.0, 24, 6.0, 3.79),
        createData('Nadim Warehouse', 305, 3.7, 67, 4.3, 2.5),
        createData('Asad Traders', 356, 16.0, 49, 3.9, 1.5),
      ];
      
  return (
    <Paper>
    <TableContainer component={Paper}>
    <Table aria-label="collapsible table" stickyHeader>
      <TableHead >
        <TableRow sx={{backgroundColor:"primary"}}>
          <TableCell />
          <TableCell>Distributor</TableCell>
          <TableCell align="right">Total Orders</TableCell>
          <TableCell align="right">Complete Orders&nbsp;(g)</TableCell>
          <TableCell align="right">Pending Orders&nbsp;(g)</TableCell>
          <TableCell align="right">Total Revenue&nbsp;(g)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <Row key={row.name} row={row} />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
    
    </Paper>
  )
}
