import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';

export const mainListItems = (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <WindowOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Category" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AddBusinessOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Products" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Customers" />
        </ListItemButton>
        
    </React.Fragment>
);
