// Test away!
import React from 'react';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';
import Display from '../display/Display';

test('Defaults to unlocked and open', () => {
  const display = render(<Display />);
  display.getByText(/open/i);
  display.getByText(/unlocked/i);
});


test("displays 'Closed' if the closed prop is true and 'Open' if otherwise", () => {
  const display = render(<Display locked={true} closed={true} />);
  display.getByText(/locked/i);
  display.getByText(/closed/i);
})

test('when locked or closed use the red-led class', () => {
  const display = render(<Display locked={true} closed={true} />);
  const locked = display.getByText(/locked/i);
  const closed = display.getByText(/closed/i);
  expect(locked.classList.contains('red-led')).toBe(true);
  expect(closed.classList.contains('red-led')).toBe(true);
})

test('when unlocked or open use the green-led class', () => {
  const display = render(<Display locked={false} closed={false} />);
  const locked = display.getByText(/unlocked/i);
  const closed = display.getByText(/open/i);
  expect(locked.classList.contains('green-led')).toBe(true);
  expect(closed.classList.contains('green-led')).toBe(true);
})