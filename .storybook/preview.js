/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    repositoryUrl: 'https://github.com/stackblitz/storybook-addon-demo',
  },
};

export default preview;
