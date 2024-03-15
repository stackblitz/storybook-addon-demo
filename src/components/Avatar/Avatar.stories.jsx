import Avatar from './Avatar';
import PageviewIcon from '@mui/icons-material/Pageview';

export default {
  title: 'Demo/Avatar',
  component: Avatar,
  subcomponents: { PageviewIcon },
};

export const Default = {
  args: {},
};

export const Bigger = {
  args: {
    src: 'https://mui.com/static/images/avatar/1.jpg',
    sx: { width: 72, height: 72 },
  },
};

export const Icon = {
  args: {
    children: <PageviewIcon />,
  },
};
