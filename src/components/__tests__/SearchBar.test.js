import { render, screen } from '@testing-library/react';
import SearchBar from '../SearchBar/SearchBar';

describe('Describes the SearchBar component', () => {
  
  beforeEach(() => {
    render(<SearchBar value="Controlled Value" />);
  });
  
  it('renders a search field', () => {
    const searchField = screen.getByTestId('search-field');
    expect(searchField).toBeInTheDocument();
  })

  it('renders with controlled value', () => {
    const searchFieldValue = screen.getByTestId('search-field').value;
    expect(searchFieldValue).toBe("Controlled Value");
  })
})