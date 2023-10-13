import { render, screen } from '@testing-library/react';
import App from './App';

describe('Describes the App component', () => {
  
  beforeEach(() => {
    render(<App />);
  });
  
  it('renders Hello', () => {
    const linkElement = screen.getByText(/Client/i);
    expect(linkElement).toBeInTheDocument();
  })
  
  it('renders text input', () => {
    const input = screen.getByTestId("search-term");
    expect(input).toBeInTheDocument();
  })
})