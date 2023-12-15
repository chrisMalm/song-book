import { render, screen } from '@testing-library/react';
import App from './App';


describe("App", () => {
  it("should show the div text", () => {
  render(<App />);
    const val = screen.getByTestId("header")
    expect(val).toHaveTextContent("Songs")
  })
})