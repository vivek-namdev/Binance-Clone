import type { Decorator, Preview } from '@storybook/react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { withThemeByClassName } from '@storybook/addon-styling';
import React from 'react';

import { themeSettings } from '../src/app/theme';

/* TODO: update import to your tailwind styles file. If you're using Angular, inject this through your angular.json config instead */
import '../src/app/globals.css';

import '@fontsource/ibm-plex-sans';
import '@fontsource/roboto';


const withTheme: Decorator = (Story, context) => {
  const theme = createTheme(themeSettings(context.globals.theme))

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Story />
    </ThemeProvider>
  );
}

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global Theme for Components',
      defaultValue: 'dark',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark']
      }
    }
  },
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [withTheme],
};

export default preview;
