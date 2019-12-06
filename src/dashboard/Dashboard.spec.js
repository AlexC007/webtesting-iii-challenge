// Test away
import React from 'react';
import { render } from '@testing-library/react';
import Display from '../display/Display';
import Controls from '../controls/Controls';
import Dashboard from './Dashboard';

test('Shows the controls and display', () => {
    render(<Controls />);
    render(<Display />);

  });
