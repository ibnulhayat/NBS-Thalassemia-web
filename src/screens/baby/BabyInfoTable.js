import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import TableHead from '@mui/material/TableHead';
import { Button } from 'react-bootstrap';
import EditIcon from '@mui/icons-material/Edit';
import Image from '@mui/icons-material/Image';

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};


export default function BabyInfoTable({rows, callBack}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow key={'0'}>
              <TableCell component="th" scope="row" style={{fontWeight: 600}}>#</TableCell>
              <TableCell style={{fontWeight: 600}}>ID</TableCell>
              <TableCell style={{fontWeight: 600}}>PhoneNumber</TableCell>
              <TableCell style={{fontWeight: 600}}>BabyName</TableCell>
              <TableCell style={{fontWeight: 600}}>DOB</TableCell>
              <TableCell style={{fontWeight: 600}}>BCD</TableCell>
              <TableCell style={{fontWeight: 600}}>TestResult</TableCell>
              <TableCell style={{fontWeight: 600}}>Delivery</TableCell>
              <TableCell style={{fontWeight: 600}}>BabyType</TableCell>
              <TableCell style={{fontWeight: 600}}>Age(Days)</TableCell>
              <TableCell style={{fontWeight: 600}}>M.Name</TableCell>
              <TableCell style={{fontWeight: 600}}>F.Name</TableCell>
              <TableCell style={{fontWeight: 600}}>M.M.Age</TableCell>
              <TableCell style={{fontWeight: 600}}>M.Age</TableCell>
              <TableCell style={{fontWeight: 600}}>F.Age</TableCell>
              <TableCell style={{fontWeight: 600}}>P.Child</TableCell>
              <TableCell style={{fontWeight: 600}}>PCAD</TableCell>
              <TableCell style={{fontWeight: 600}}>SMS Send</TableCell>
              <TableCell style={{fontWeight: 600}}>Status</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {((rowsPerPage > 0 && rows.length > 0)
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row?.id}>
              <TableCell component="th" scope="row"> {
                <EditIcon onClick={()=>callBack('edit',row.id)} style={{cursor: 'pointer', color: '#0e9aee'}}/>}
                {<Image onClick={()=>callBack('image',row.id)} style={{cursor: 'pointer', color: '#0e9aee', marginLeft: 5}}/>}
              </TableCell>
              <TableCell > {row?.CustomId} </TableCell>
              <TableCell > {`${row?.mobileNumber} \n ${row?.mobileNumber2}`} </TableCell>
              <TableCell > {row?.babyName} </TableCell>
              <TableCell > {setValue(row?.babyDob)?formatDate(row?.babyDob):''} </TableCell>
              <TableCell > {setValue(row?.sampleCollectDate)?formatDate(row?.sampleCollectDate):''} </TableCell>
              <TableCell > {setValue(row?.testResult) === 0? 'Unknown':row?.testResult === 1? 'Positive': 'Negative'}</TableCell>
              <TableCell > {setValue(row?.deliveryProcess) === ''? "":row?.deliveryProcess === 0?'Normal': 'Surgical'} </TableCell>
              <TableCell > {setValue(row?.babyType) === ''? "":row?.babyType === 0? 'Boy': 'Girl'} </TableCell>
              <TableCell > {setValue(row?.bloodCollectAge)} </TableCell>
              <TableCell > {row?.babyMotherName} </TableCell>
              <TableCell > {row?.babyFatherName} </TableCell>
              <TableCell > {setValue(row?.motherAgeOfMarriage)} </TableCell>
              <TableCell > {setValue(row?.babyMotherAge)} </TableCell>
              <TableCell > {setValue(row?.babyFatherAge)} </TableCell>
              <TableCell > {setValue(row?.previousAnyChildren)} </TableCell>
              <TableCell > {setValue(row?.ageDifference)} </TableCell>
              <TableCell > {row?.IsSmsSend? "Yes": 'No'} </TableCell>
              <TableCell > {setStatus(row?.UploadStatus)} </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[10, 25, 50, { label: 'All', value: -1 }]}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )
}

function setValue(value){
  try {
      const val = parseInt(value)
      if(isNaN(val) || val < 0) return ''
      else return value
  } catch (error) {
      return ''
  }
}

function formatDate(timestamp) {
  const  date = new Date(parseInt(timestamp)* 1000)
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('/');
}
function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function setStatus(data){
  if(data == 1 || data == 'US_PENDING') return 'PENDING'
  else if( data == 2 || data == 'US_COMPLETED') return "COMPLETED"
  else return 'UNKNOWN'
}