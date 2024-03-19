import { BasicButtonGroup } from './ButtonGroup.jsx';

export default {
  title: 'Demo/ButtonGroup',
  component: BasicButtonGroup,
  args: {
    values: ['One', 'Two', 'Three'],
  },
  parameters: {
    filePath: 'src/components/ButtonGroup/ButtonGroup.stories.tsx',
  },
};

export const Default = {};

export const Outlined = {
  args: {
    variant: 'outlined',
    values: ['Two', 'One'],
  },
};
