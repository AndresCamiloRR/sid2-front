import * as React from 'react';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import CommentService from '../Services/CommentService';
import { AppContext } from '../App';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 800,
  color: theme.palette.text.primary,
}));

const CommentAccordion = ({ comment }) => {
  const { reload, setReload } = useContext(AppContext);

  const handleDelete = () => {
    CommentService.deleteComment(comment);
    setReload(true);
  };

  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
      <StyledPaper sx={{ my: 1, mx: 'auto', p: 2 }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              {comment.author}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>{comment.eventName}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {comment.text}
              <Button
                className='classes.buttonStyle'
                sx={{
                  width: 'fit-content',
                  height: 'fit-content',
                  color: 'red',
                  borderRadius: 10,
                }}
                onClick={handleDelete}
              >
                <DeleteIcon />
              </Button>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </StyledPaper>
    </Box>
  );
};

export default CommentAccordion;
