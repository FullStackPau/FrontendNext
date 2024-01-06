import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from './index';

describe('Button Component', () => {
    it('should render with specified size "full"', () => {
        render(<Button size="full">Click me</Button>);
        const button = screen.getByText('Click me');
        expect(button).toHaveClass("full"); // Make sure the "full" size class is applied
    });
    it('should render with default size "big"', () => {
        render(<Button size='big'>Click me</Button>);
        const button = screen.getByText('Click me');
        expect(button).toHaveClass("big"); // Make sure the "big" size class is applied
    });
    it('should render with specified size "medium"', () => {
        render(<Button size="medium">Click me</Button>);
        const button = screen.getByText('Click me');
        expect(button).toHaveClass("medium"); // Make sure the "medium" size class is applied
    });
    it('should render with specified size "small"', () => {
        render(<Button size="small">Click me</Button>);
        const button = screen.getByText('Click me');
        expect(button).toHaveClass("small"); // Make sure the "small" size class is applied
    });
    it('should render Click me text', () => {
        render(<Button size="small">Click me</Button>);
        const button = screen.getByText('Click me');
        expect(button).toHaveTextContent("Click me"); // Make sure the Text Click me is applied
    });
    it('should fire click event', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click me</Button>);
        const buttonElement = screen.getByText("Click me");
        fireEvent.click(buttonElement)
        expect(handleClick).toHaveBeenCalled();
    });
});
