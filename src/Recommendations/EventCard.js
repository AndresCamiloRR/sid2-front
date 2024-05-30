import React, { useContext } from 'react';
import { Box, Typography, Button, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { RemoveRedEye as RemoveRedEyeIcon} from '@mui/icons-material';
import { AppContext } from '../App';
import { useNavigate } from 'react-router-dom';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 800,
  color: theme.palette.text.primary,
}));

const EventCard = ({ event }) => {
  const { setEventGlobal, setReload } = useContext(AppContext);
  const navigate = useNavigate()


  const eventDate = new Date(event.date).toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
      <StyledPaper sx={{ my: 1, mx: 'auto', p: 2 }}>
        <Grid container wrap="nowrap" spacing={2} alignItems="center">
          <Grid item xs={4}>
            <Typography noWrap>{event.title}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography noWrap>{event.location.name}</Typography>
          </Grid>
          <Grid item>
            <Typography noWrap>{eventDate}</Typography>
          </Grid>

        </Grid>
      </StyledPaper>
    </Box>
  );
};

const ActionButton = ({ icon, color, onClick }) => (
  <Button
    sx={{
      width: 'fit-content',
      height: 'fit-content',
      color: color,
      borderRadius: 10,
      '&:hover': {
        color: 'white',
        backgroundColor: color,
      },
    }}
    onClick={onClick}
  >
    {icon}
  </Button>
);

export default EventCard;
