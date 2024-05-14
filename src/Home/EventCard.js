import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: 800,
    color: theme.palette.text.primary,
  }));

const  EventCard = ({event}) => {

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
                <Grid item xs={4}>
                    <Typography noWrap>{event.title}</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography noWrap>{event.location.name}</Typography>
                </Grid>
                <Grid item>
                    <Typography noWrap>{new Date(event.date).toLocaleDateString('es-ES', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric'
                            })}
                    </Typography>
                </Grid>
                <Grid item xs zeroMinWidth textAlign={'right'}>
                    <Button className='classes.buttonStyle' sx={{
                        width:'fit-content', 
                        height:'fit-content', 
                        color:'#46ad95', 
                        borderRadius:10,
                        '&:hover': {
                            color: "white",
                            backgroundColor:'#46ad95'
                          }
                        }}>
                        <RemoveRedEyeIcon/>
                    </Button>
                </Grid>
                </Grid>
            </StyledPaper>
        </Box>
    );
}

export default EventCard