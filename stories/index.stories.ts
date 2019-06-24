import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome, Button } from '@storybook/angular/demo';

import {ButtonComponent, ExxcellentComponent} from '@exxcellent/components';

storiesOf('Welcome', module).add('to Storybook', () => ({
  component: Welcome,
  props: {},
}));

storiesOf('Exxcellent', module)
    .add('Example', () => ({
      component: ExxcellentComponent,
      props: {},
    }))
    .add('Button', () => ({
        component: ButtonComponent,
        props: {},
        onClick: action('This was clicked OMG'),
    }));


storiesOf('Button', module)
    .add('with text', () => ({
        component: Button,
        props: {
            text: 'Hello Button',
        },
    }))
    .add(
        'with some emoji',
        () => ({
            component: Button,
            props: {
                text: '😀 😎 👍 💯',
            },
        }),
        { notes: 'My notes on a button with emojis' }
    )
    .add(
        'with some emoji and action',
        () => ({
            component: Button,
            props: {
                text: '😀 😎 👍 💯',
                onClick: action('This was clicked OMG'),
            },
        }),
        { notes: 'My notes on a button with emojis' }
    );

storiesOf('Another Button', module).add('button with link to another story', () => ({
  component: Button,
  props: {
    text: 'Go to Welcome Story',
    onClick: linkTo('Welcome'),
  },
}));
