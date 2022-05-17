import * as React from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import PeopleIcon from '@mui/icons-material/People';
import Typography from '@mui/material/Typography';
import {
    Link as RouterLink,
    Route,
    Routes,
    MemoryRouter,
    useLocation,
} from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';

function Router(props) {
    const { children } = props;
    if (typeof window === 'undefined') {
        return <StaticRouter location="/drafts">{children}</StaticRouter>;
    }

    return (
        <MemoryRouter initialEntries={['/drafts']} initialIndex={0}>
            {children}
        </MemoryRouter>
    );
}

Router.propTypes = {
    children: PropTypes.node,
};

function ListItemLink(props) {
    const { icon, primary, to } = props;

    const renderLink = React.useMemo(
        () =>
            React.forwardRef(function Link(itemProps, ref) {
                return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />;
            }),
        [to],
    );

    return (
        <li>
            <ListItem button component={renderLink}>
                {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
                <ListItemText primary={primary} />
            </ListItem>
        </li>
    );
}

ListItemLink.propTypes = {
    icon: PropTypes.element,
    primary: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

function Content() {
    const location = useLocation();
    return (
        <Typography variant="body2" sx={{ pb: 2 }} color="text.secondary">
            Current route: {location.pathname}
        </Typography>
    );
}

export default function MenuSidebar() {
    return (
        <Router>
            <Box sx={{ width: 360 }}>
                <Routes>
                    <Route path="*" element={<Content />} />
                </Routes>

                <Paper elevation={0}>
                    <List aria-label="main mailbox folders">
                        <ListItemLink to="/dashboard" primary="Dashboard" icon={<DashboardIcon />} />
                        <ListItemLink to="/category" primary="Category" icon={<WindowOutlinedIcon />} />
                        <ListItemLink to="/product" primary="Product" icon={<AddBusinessOutlinedIcon />} />
                        <ListItemLink to="/user" primary="User" icon={<PeopleIcon />} />
                    </List>
                </Paper>
            </Box>
        </Router>
    );
}