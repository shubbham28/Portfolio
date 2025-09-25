import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Skills from '../components/Skills';

// Updated expectations based on current skills.json
const expectations = [
  { name: 'Python (OOP, SOLID, PEP8)', level: 'Expert', classFrag: 'text-green-300' },
  { name: 'MongoDB', level: 'Intermediate', classFrag: 'text-blue-300' },
  { name: 'Hadoop', level: 'Beginner', classFrag: 'text-neutral-300' },
];

describe('Skills component', () => {
  test('renders representative skills with correct color classes based on level', () => {
    render(<Skills />);
    expectations.forEach(exp => {
      const chip = screen.getByText((content) => content.trim().startsWith(exp.name));
      expect(chip).toHaveAttribute('data-skill-level', exp.level);
      expect(chip.className).toContain(exp.classFrag);
    });
  });
});
