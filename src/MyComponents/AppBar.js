import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';

import AccountCircle from '@material-ui/icons/AccountCircle';


import MoreIcon from '@material-ui/icons/MoreVert';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory } from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import CommuteIcon from '@material-ui/icons/Commute';
import HistoryIcon from '@material-ui/icons/History';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
}));



export default function PrimarySearchAppBar() {
    const [IsOppen, setIsOpen] = React.useState({ left: false, });

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const history = useHistory();
    const routeDaily = () =>{ 
        let path = `/dailymedicalchecking`; 
        history.push(path);
      }
      const routeHome = () =>{ 
        let path = `/`; 
        history.push(path);
      }
      const routeRouteTo = () =>{ 
        let path = `/routeto`; 
        history.push(path);
      }
      const routeActivityLog = () =>{ 
        let path = `/activitylog`; 
        history.push(path);
      }



    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
            <MenuItem>
                <IconButton color="inherit">
                    <Badge color="secondary">
                        <ExitToAppIcon />
                    </Badge>
                </IconButton>
                <p>Sing Out</p>
            </MenuItem>

        </Menu>
    );

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsOpen({ [anchor]: open });
    };
    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
             
            <ListItem button key='Home' onClick={routeHome}> 
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText primary='Home' />
            </ListItem>
            
            <ListItem button key='Daily Medical Checking' onClick={routeDaily}>
                        <ListItemIcon><NoteAddIcon></NoteAddIcon></ListItemIcon>
                        <ListItemText primary='Daily Medical Checking' />
            </ListItem>
            
                <ListItem button key='Route to' onClick={routeRouteTo}> 
                        <ListItemIcon><CommuteIcon /></ListItemIcon>
                        <ListItemText primary='Route to' />
            </ListItem>
            <ListItem button key='Activity Log' onClick={routeActivityLog}>
                        <ListItemIcon><HistoryIcon /></ListItemIcon>
                        <ListItemText primary='Activity Log' />
            </ListItem>
            </List>
            <Divider />
            <List>
                {['Profile', 'Sing Out'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <AccountCircle /> : <ExitToAppIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <React.Fragment key='left'>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer('left', true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor='left' open={IsOppen['left']} onClose={toggleDrawer('left', false)}>
                            {list('left')}
                        </Drawer>
                    </React.Fragment>
                    <Typography className={classes.title} variant="h6" noWrap>
                        COVID-19 MONITORING
          </Typography>

                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        
                        <IconButton

                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <IconButton 
                        color="inherit"
                        edge="end">
                            <Badge color="secondary">
                                <ExitToAppIcon />
                            </Badge>
                        </IconButton>


                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}