import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { AppContext } from '../App';
import { useContext } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AttendantsService from '../Services/AttendantsService';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 800,
  color: theme.palette.text.primary,
}));

const AttendantCard = ({ attendant }) => {
  const { attendantGlobal, setAttendantGlobal } = useContext(AppContext);
  const { reload, setReload } = useContext(AppContext);

  const handleClick = () => {
    setAttendantGlobal(attendant);
  }

  const handleDelete = () => {
    AttendantsService.deleteAttendant(attendant.username)
    setReload(true)
  }

  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
      <StyledPaper
        sx={{
          my: 1,
          mx: 'auto',
          p: 2,
        }}
      >
        <Grid container wrap="nowrap" spacing={2} alignItems="center">
          <Grid item xs={3}>
            <Typography>{attendant.username}</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography>{attendant.name}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>{attendant.relation}</Typography>
          </Grid>
          <Grid item xs="auto">
            <Grid container spacing={1} justifyContent="flex-end">
              <Grid item>
                <Button
                  className='classes.buttonStyle'
                  sx={{
                    width: 'fit-content',
                    height: 'fit-content',
                    color: '#46ad95',
                    borderRadius: 10,
                    '&:hover': {
                      color: "white",
                      backgroundColor: '#46ad95'
                    }
                  }}
                >
                  <RemoveRedEyeIcon />
                </Button>
              </Grid>
              <Grid item>
                <Button
                  className='classes.buttonStyle'
                  sx={{
                    width: 'fit-content',
                    height: 'fit-content',
                    color: '#46ad95',
                    borderRadius: 10,
                    '&:hover': {
                      color: "white",
                      backgroundColor: '#46ad95'
                    }
                  }}
                  onClick={handleClick}
                >
                  <EditIcon />
                </Button>
              </Grid>
              <Grid item>
                <Button
                  className='classes.buttonStyle'
                  sx={{
                    width: 'fit-content',
                    height: 'fit-content',
                    color: 'red',
                    borderRadius: 10
                  }}
                  onClick={handleDelete}
                >
                  <DeleteIcon />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </StyledPaper>
    </Box>
  );
}

export default AttendantCard;
