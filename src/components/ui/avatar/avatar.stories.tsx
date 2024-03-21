import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Demo/Avatar',
  component: Avatar,
  subcomponents: { AvatarFallback, AvatarImage },
  parameters: {
    filePath: 'src/components/ui/avatar/avatar.stories.tsx',
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    children: <AvatarImage src="https://mui.com/static/images/avatar/1.jpg" />,
  },
};

export const Fallback: Story = {
  args: {
    children: (
      <>
        <AvatarImage src="https://broken-url-1.jpg" />
        <AvatarFallback>JD</AvatarFallback>
      </>
    ),
  },
};

export const CustomSize: Story = {
  render: (props) => (
    <Avatar {...props}>
      <AvatarImage src="https://mui.com/static/images/avatar/1.jpg" />
    </Avatar>
  ),
  args: {
    className: 'w-24 h-24',
  },
};
