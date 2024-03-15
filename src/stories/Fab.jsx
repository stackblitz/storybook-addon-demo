import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

export default function FloatingActionButtons({variant = 'primary', label}) {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      {variant === 'primary' && <Fab color="primary" aria-label="add">
        <AddIcon />
        {label}
      </Fab>}

      {variant === 'secondary' && <Fab color="secondary" aria-label="edit">
        <EditIcon />
        {label}
      </Fab>
      }

{variant === 'extended' && 
      <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        {label}
      </Fab>
}
      <Fab disabled aria-label="like">
        <FavoriteIcon />
      </Fab>
    </Box>
  );
}
