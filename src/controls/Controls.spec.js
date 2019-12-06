// Test away!

import React from 'react';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';
import Controls from '../Controls/Controls';

test('Cannot be closed or opened if it is locked', () => {
    const controls = render(<Controls locked={true} />);
    const toggleClosed = controls.getByTestId(/close-button/i);
    expect(toggleClosed).not.toBeEnabled();
  });

  test('provide buttons to toggle the closed and locked states.', () => {
    const controls = render(<Controls />);
    controls.getByTestId(/close-button/i);
    controls.getByTestId(/lock-button/i);
});

test('text changes to reflect the state the door will be in if clicked', () => {
    const { getByText } = render(<Controls locked={false} closed={false} />);
    getByText(/lock gate/i);
    getByText(/close gate/i);
})


test('the closed toggle button is disabled if the gate is locked', () => {
    const controls = render(<Controls locked={true} />);
    const toggleClosed = controls.getByTestId(/close-button/i);
    expect(toggleClosed).not.toBeEnabled();
});

test('the locked toggle button is disabled if the gate is open', () => {
    const controls = render(<Controls closed={false} />);
    const toggleLocked = controls.getByTestId(/lock-button/i);
    expect(toggleLocked).not.toBeEnabled();
});