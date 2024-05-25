import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import FormTextField from './FormTextField';
import MultipleSelect from '../Components/MultipleSelect';

const AttendantTableHeader = ({values, handleUsername, handleName, handleRelations, handleSelected}) => {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: '#46ad95',
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));

      return (
        <TableContainer component={Paper} sx={{
          zIndex: 1,
          width:1000
          }}>
          <Table aria-label="customized table">
          <TableHead sx={{height: '15vh'}}>
            <TableRow>
              <StyledTableCell>
                <Grid container wrap="nowrap" alignItems="center">
                  <Grid item xs={5}>
                    <FormTextField label={"Cédula"} onFieldChange={handleUsername[1]} value={handleUsername[0]} selected={handleSelected}/>
                  </Grid>
                  <Grid item xs={5}>
                    <FormTextField label={"Nombre"} onFieldChange={handleName[1]} value={handleName[0]} selected={handleSelected}/>
                  </Grid>
                  <Grid item>
                    <MultipleSelect label={"Relación"} values={values} onMultipleChange={handleRelations} selected={handleSelected}/>
                  </Grid>
                </Grid>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          </Table>
        </TableContainer>
    );
}

export default AttendantTableHeader