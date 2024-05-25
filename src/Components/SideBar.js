import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import EventIcon from '@mui/icons-material/Event';
import RecommendIcon from '@mui/icons-material/Recommend';
import CommentIcon from '@mui/icons-material/Comment';

const drawerWidth = 240;

const SideBar = () => {
    return (
        <Box sx={{ display: 'flex', zIndex: 1 }}>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        backgroundColor: '#55B8A1',
                        color: 'white'
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List>
                    <ListItem>
                        <ListItemButton href='/'>
                            <ListItemIcon>
                                <EventIcon sx={{ color: "white" }} />
                            </ListItemIcon>
                            <ListItemText primary={"Eventos"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem style={{ paddingTop: "10%" }}>
                        <ListItemButton href='/CreateEvent'>
                            <ListItemIcon>
                                <AddIcon sx={{ color: "white" }} />
                            </ListItemIcon>
                            <ListItemText primary={"Crear Evento"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem style={{ paddingTop: "10%" }}>
                        <ListItemButton href='/Attendants'>
                            <ListItemIcon>
                                <RecommendIcon sx={{ color: "white" }} />
                            </ListItemIcon>
                            <ListItemText primary={"Asistentes"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem style={{ paddingTop: "10%" }}>
                        <ListItemButton href='/CreateAttendant'>
                            <ListItemIcon>
                                <RecommendIcon sx={{ color: "white" }} />
                            </ListItemIcon>
                            <ListItemText primary={"Crear Asistente"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem style={{ paddingTop: "10%" }}>
                        <ListItemButton href='/Comments'>
                            <ListItemIcon>
                                <CommentIcon sx={{ color: "white" }} />
                            </ListItemIcon>
                            <ListItemText primary={"Comentarios"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem style={{ paddingTop: "10%" }}>
                        <ListItemButton href='/CreateComment'>
                            <ListItemIcon>
                                <CommentIcon sx={{ color: "white" }} />
                            </ListItemIcon>
                            <ListItemText primary={"Crear Comentario"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem style={{ paddingTop: "10%" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <RecommendIcon sx={{ color: "white" }} />
                            </ListItemIcon>
                            <ListItemText primary={"Recomendaciones"} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    );
}

export default SideBar;
