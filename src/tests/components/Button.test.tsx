import { render } from '@testing-library/react';
import Button from '../../Button';
import React from 'react';

describe('Button', () => {
  it('renders', () => {
    render(
      <Button
        text="hello"
        onClick={() => {
          console.log('Click');
        }}
      />,
    );
  });
});
