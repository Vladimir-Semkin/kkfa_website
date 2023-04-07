import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AdbIcon from '@mui/icons-material/Adb';
import { RootState, useAppDispatch } from '../../store';
import { logoutAdmin } from '../Admin/types/auth.slice';
import style from './Navbar.module.css';
import { ClassNames } from '@emotion/react';

// import Tooltip from '@mui/material/Tooltip';
// import { Link } from '@mui/material';

// const pages = ['Фотогалерея', 'Календарь', 'Документы'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar(): JSX.Element {
  const dispatch = useAppDispatch();
  const { admin } = useSelector((store: RootState) => store.auth);

  // const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
  //   null
  // );
  // const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
  //   null
  // );
  // const handleCloseNavMenu = (): void => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = (): void => {
  //   setAnchorElUser(null);
  // };
  const navigate = useNavigate();

  return (
    // <AppBar
    //   sx={{ backgroundColor: 'rgba(25, 118, 210, 0.3)' }}
    //   className={style.navBar}
    // >
    <Container
      sx={{ backgroundColor: 'rgba(25, 118, 210, 0.3)' }}
      className={style.navBar}
    >
      <div className={style.contayner}>
        {'id' in admin && (
          <div className={style.admin}>
            <div>
              <Link className={style.link} to="/lk">
                ЛИЧНЫЙ КАБИНЕТ
              </Link>
            </div>
            {/* <div>
                <Link
                  className={style.link}
                  to="/"
                  onClick={() => dispatch(logoutAdmin())}
                >
                  ВЫХОД
                </Link>
              </div> */}
          </div>
        )}
        <div className={style.navigation}>
          <Button onClick={() => navigate('/')} style={{ color: 'white' }}>
            На главную
          </Button>
          <Button onClick={() => navigate('/docs')} style={{ color: 'white' }}>
            Документы
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
          {'id' in admin && (
            <div className={style.exit}>
              <Link
                className={style.link}
                to="/"
                onClick={() => dispatch(logoutAdmin())}
              >
                ВЫХОД
              </Link>
            </div>
          )}
        </div>
      </div>
    </Container>
    // </AppBar>
  );
}
export default NavBar;
