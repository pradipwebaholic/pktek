import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import './VerticalNav.scss'
import {  } from 'react-router-dom';
import {
  
  matchPath,
  useLocation,
  NavLink

} from 'react-router-dom';

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const routeMatch = useRouteMatch(['/private', '/']);
  const currentTab = routeMatch?.pattern?.path;
  return (
    <Box className='vertcalNav' 
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex',height:'100%' }}
    >
      <Tabs value={currentTab}
        orientation="vertical"
        variant="scrollable"
        
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', maxHeight: 'calc(100vh - 80px)'  }}
      >
          <Tab  icon={<PhoneIcon />}  value="/" LinkComponent={NavLink} label="Home" to="/"  />
          <Tab icon={<FavoriteIcon />} LinkComponent={NavLink}  value="/private" label="Dashboard" to="/private/" />
          <Tab icon={<PersonPinIcon />} label="NEARBY" />
      </Tabs>
     
    </Box>
  );
}
function useRouteMatch(patterns) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}
