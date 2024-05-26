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
import AddCommentIcon from '@mui/icons-material/AddComment';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Groups3Icon from '@mui/icons-material/Groups3';


const drawerWidth = 240;

const SideBar = () => {

    function createEvent(){
        localStorage.setItem('eventGlobal', null)
    }
    function createAttendant(){
        localStorage.setItem('attendantGlobal', null)
    }

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
                        <ListItemButton onClick={createEvent} href={"/CreateEvent"}>
                            <ListItemIcon>
                                <AddIcon sx={{ color: "white" }} />
                            </ListItemIcon>
                            <ListItemText primary={"Crear Evento"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem style={{ paddingTop: "10%" }}>
                        <ListItemButton href='/Attendants'>
                            <ListItemIcon>
                                <PersonIcon sx={{ color: "white" }} />
                            </ListItemIcon>
                            <ListItemText primary={"Asistentes"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem style={{ paddingTop: "10%" }}>
                        <ListItemButton onClick={createAttendant} href='/CreateAttendant'>
                            <ListItemIcon>
                                <PersonAddIcon sx={{ color: "white" }} />
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
                                <AddCommentIcon sx={{ color: "white" }} />
                            </ListItemIcon>
                            <ListItemText primary={"Crear Comentario"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem style={{ paddingTop: "10%" }}>
                        <ListItemButton href='/Recommendations'>
                            <ListItemIcon>
                                <RecommendIcon sx={{ color: "white" }} />
                            </ListItemIcon>
                            <ListItemText primary={"Recomendaciones"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem style={{ paddingTop: "10%" }}>
                        <ListItemButton href='/CreateRecommendation'>
                            <ListItemIcon>
                                <Groups3Icon sx={{ color: "white" }} />
                            </ListItemIcon>
                            <ListItemText primary={"Añadir Participación"} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    );
}

export default SideBar;
