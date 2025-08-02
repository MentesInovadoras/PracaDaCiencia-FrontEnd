import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import StarIcon from '@mui/icons-material/Star';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import Logo from '../../../shared/components/logo';
import { NavLink } from 'react-router-dom';
import SwitchThemeButton from '../../../shared/components/set_theme';


export interface SideBarData {
  label?: string;
  to?: string;
  icon?: React.ReactElement;
}

const drawerWidth = 240;

// Adaptando sideBarOptions para usar a interface SideBarData
const sideBarOptions: SideBarData[] = [
  {
    label: 'Mail',
    to: '/mail',
    icon: <MailIcon />
  },
  {
    label: 'Starred',
    to: '/starred',
    icon: <StarIcon />
  },
  {
    label: 'Send email',
    to: '/send-email',
    icon: <SendIcon />
  },
  {
    label: 'Drafts',
    to: '/drafts',
    icon: <DraftsIcon />
  }
];

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          alignItems: 'space-between',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <br />
        <Logo sizeInPixels={150}/>
        <br />
        <Toolbar />
        <List sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems:'center',
          textAlign: 'center',
          gap: 3,
        }}>
          {sideBarOptions.map((item, index) => (
            <ListItem key={item.label || index} disablePadding sx={{ width:'100%', px:'2' }}>
              <NavLink to={item.to || '/'} style={{textDecoration:'none', width:'100%'}}>
                <ListItemButton sx={{ 
                  display: 'flex', 
                  flexDirection: 'row', 
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  py: 1.5,
                  px: 0
                }}>
                  {item.icon && (
                    <ListItemIcon sx={{ justifyContent: 'center' }}>
                      {item.icon}
                    </ListItemIcon>
                  )}
                  <ListItemText 
                    primary={item.label} 
                    slotProps={{primary: {color: 'info'}}}
                    sx={{textAlign: 'center', margin:'0', '& .MuiListItemText-primary':{fontSize: '1.4rem', fontWeight:'bold'} }} 
                  />
                </ListItemButton>
              </NavLink>
            </ListItem>
          ))}
        </List>
        <SwitchThemeButton/>
      </Drawer>
    </Box>
  );
}