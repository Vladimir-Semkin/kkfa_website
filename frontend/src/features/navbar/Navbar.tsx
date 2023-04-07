import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { logoutAdmin } from '../Admin/types/auth.slice';
import style from './Navbar.module.css';
// import Tooltip from '@mui/material/Tooltip';
// import { Link } from '@mui/material';

const pages = ['Фотогалерея', 'Календарь', 'Документы'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar(): JSX.Element {
  const dispatch = useAppDispatch();
  const { admin } = useSelector((store: RootState) => store.auth);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (): void => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (): void => {
    setAnchorElUser(null);
  };
  const navigate = useNavigate();

  return (
    <AppBar
      className={style.navbar}
      position="static"
      sx={{ backgroundColor: 'rgba(25, 118, 210, 0.3);' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              // color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          {'id' in admin && (
            <>
              <div style={{ marginRight: '10px' }}>
                <Link
                  className={style.link}
                  to="/lk"
                >
                  ЛИЧНЫЙ КАБИНЕТ
                </Link>
              </div>
              <div>
                <Link
                  className={style.link}
                  to="/"
                  onClick={() => dispatch(logoutAdmin())}
                >
                  ВЫХОД
                </Link>
              </div>
            </>
          )}

          <Button
            onClick={() => navigate('/docs')}
            style={{ color: 'white' }}
          >
            Документы
          </Button>
          <Button
            onClick={() => navigate('/')}
            style={{ color: 'white' }}
          >
            На главную
          </Button>
          <Button
            onClick={() => navigate('/abouttimeattack')}
            style={{ color: 'white' }}
          >
            time-attack
          </Button>
          <Button
            onClick={() => navigate('/calendar')}
            style={{ color: 'white' }}
          >
            Календарь
          </Button>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

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
            {settings.map((setting) => (
              <MenuItem
                key={setting}
                onClick={handleCloseUserMenu}
              >
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
