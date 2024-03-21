import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Button> = {
  title: 'Demo/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const FirstStory: Story = {
  args: {
    children: 'Click me',
  },
};
