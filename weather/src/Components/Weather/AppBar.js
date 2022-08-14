import React, { useState, useCallback }from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { SearchCityComponent } from './Home/Autocomplete';
import {AccountSettingsComponent} from "../Account/AccountSettings/AccountSettingsComponent";
import { Stack } from '@mui/material';
import { Link } from "react-router-dom";
import './Home/HomeComponent.css';
import '../AppRouter.css';

import { setIsLoginAction } from '../../Store/App/actions';
import { SwitchComponent } from '../Account/AccountSettings/SwithchComponent';
import { LangSwitch } from './Home/LangSwitch';
import { useTranslation } from 'react-i18next';
import "../i18n";
import { selectCurrentUser } from '../../Store/App/selectors';



export const AppBarComponent = ({onModeChanged}) => {
  const { t } = useTranslation();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const user = useSelector(selectCurrentUser);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const dispatch = useDispatch();

  const onLogOutClicked = useCallback(() => {
    dispatch(setIsLoginAction(false))
  }, [dispatch]);

  return (
    <AppBar position="static" color="transparent" >
      <Container maxWidth="xl" color="transparent">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
            <MenuItem onClick={handleCloseNavMenu}>
            <Link className = "link"  to="/"><Typography textAlign="center">{t("header.home")}</Typography></Link>
            </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link className = "link"  to="/">
                <Button onClick={handleCloseNavMenu}sx={{ my: 2, display: 'block' }}>
                    <Typography variant ="h6">{t("header.home")}</Typography>
                </Button>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 2 }}>
            <SearchCityComponent />
          </Box>
          <Box sx={{display:"flex", flexGrow: 1, direction: "row", justifyContent: "center", alignItems: "center"}}>
            <SwitchComponent 
              onChangeMode={onModeChanged}
            />
            <LangSwitch />
            <Button onClick={onLogOutClicked}sx={{ my: 2, display: 'block' }}>
            <Typography variant ="h6">{t("header.logout")}</Typography>
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user.name} src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={handleCloseUserMenu}>
                <Link className = "link"  to="/account">{t("header.account")}</Link>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu} >
                  <Stack direction ="column">
                    <Typography textAlign="center">{t("header.settings")}</Typography>
                    <AccountSettingsComponent/>
                  </Stack>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

