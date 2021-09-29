import * as React from 'react';
import { Button } from '@fluentui/react-components';

export const ButtonAppearance = () => (
  <>
    <Button>Default button</Button>
    <Button appearance="primary">Primary button</Button>
    <Button appearance="outline">Outline button</Button>
    <Button appearance="subtle">Subtle button</Button>
    <Button appearance="transparent">Transparent button</Button>
  </>
);
ButtonAppearance.parameters = {
  docs: {
    description: {
      story:
        '- `(undefined)`: the button appears with the default style\n' +
        '- `primary`: emphasizes the button as a primary action.\n' +
        '- `outline`: removes background styling.\n' +
        '- `subtle`: minimizes emphasis to blend into the background until hovered or focused\n' +
        '- `transparent`: removes background and border styling.\n',
    },
  },
};
