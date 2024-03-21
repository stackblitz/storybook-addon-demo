import type { Meta, StoryObj } from '@storybook/react';
import { ReloadIcon } from '@radix-ui/react-icons';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Demo/Button',
  component: Button,
  subcomponents: { ReloadIcon },
  parameters: {
    filePath: 'src/components/ui/button/button.stories.tsx',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Click me',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Click me',
  },
};

export const WithIcon: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <Button {...args}>
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  ),
};
