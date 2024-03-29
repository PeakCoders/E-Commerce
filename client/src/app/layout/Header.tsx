import { ShoppingCart } from '@mui/icons-material';
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  Switch,
  Toolbar,
  Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

const rightLinks = [
  {
    title: 'login',
    path: '/login',
  },
  {
    title: 'register',
    path: '/register',
  },
];

const midLinks = [
  {
    title: 'catalog',
    path: '/catalog',
  },

  {
    title: 'about',
    path: '/about',
  },

  {
    title: 'contact',
    path: '/contact',
  },
];

const navStyles = {
  color: 'inherit',
  typography: 'h6',
  '&:hover': {
    color: 'grey.500',
  },
  '&.active': {
    color: 'text.secondary',
  },
  textDecoration: 'none',
};

const Header = ({ darkMode, handleThemeChange }: Props) => {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box display="flex" alignItems="center">
          <Switch
            color="secondary"
            checked={darkMode}
            onChange={handleThemeChange}
          />
          <Typography
            variant="h6"
            component={NavLink}
            to="/home"
            sx={navStyles}
          >
            E-SHOP
          </Typography>
        </Box>

        <Box display="flex" alignItems="center">
          <List sx={{ display: 'flex' }}>
            {midLinks.map(({ title, path }) => (
              <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>

        <Box display="flex" alignItems="center">
          <IconButton size="large" sx={navStyles}>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <List sx={{ display: 'flex' }}>
            {rightLinks.map(({ title, path }) => (
              <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
