import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

// jsdom doesn't implement scrollIntoView; mock it.
window.HTMLElement.prototype.scrollIntoView = function() {};

describe('NavBar navigation', () => {
  test('clicking About scroll button calls scrollIntoView on About section', () => {
    render(<App />);
    const aboutBtn = screen.getByRole('button', { name: /about/i });
    const aboutSection = document.getElementById('about');
    expect(aboutSection).toBeInTheDocument();
    const spy = jest.spyOn(aboutSection, 'scrollIntoView');
    fireEvent.click(aboutBtn);
    expect(spy).toHaveBeenCalled();
  });
});
