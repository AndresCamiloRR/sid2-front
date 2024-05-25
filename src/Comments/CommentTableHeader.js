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

const CommentTableHeader = ({handleUser, handleEvent, handleText, handleSelected}) => {
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
                    <FormTextField label={"Usuario"} onFieldChange={handleUser[1]} value={handleUser[0]} selected={handleSelected}/>
                  </Grid>
                  <Grid item xs={5}>
                    <FormTextField label={"Evento"} onFieldChange={handleEvent[1]} value={handleEvent[0]} selected={handleSelected}/>
                  </Grid>
                  <Grid item xs={5}>
                    <FormTextField label={"Comentario"} onFieldChange={handleText[1]} value={handleText[0]} selected={handleSelected}/>
                  </Grid>
                </Grid>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          </Table>
        </TableContainer>
    );
}

export default CommentTableHeader