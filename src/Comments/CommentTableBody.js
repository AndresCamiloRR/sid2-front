import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CommentAccordion from './CommentAccordion';
import CommentService from '../Services/CommentService';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App';

const CommentTableBody = ({ eventName, text, author }) => {

  const [comments, setComments] = useState([]);
  const { reload, setReload } = useContext(AppContext);

  useEffect(() => {
    setReload(false)
    CommentService.getCommentsFilteres(eventName, text, author)
      .then(response => {
          setComments(response)
      })
  }, [eventName, text, author, reload]); // <-- Array vacío como segundo argumento

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#46ad95',
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <TableContainer component={Paper} sx={{
      height: '60vh',
      zIndex: 1,
      width: 1000,
    }}>
      <Table aria-label="customized table">
        <TableBody>
          {comments.map(comment => (
            <StyledTableRow key={comment.id}>
              <StyledTableCell>
                <CommentAccordion comment={comment}/>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CommentTableBody;
