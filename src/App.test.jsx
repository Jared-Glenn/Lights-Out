import { render } from "@testing-library/react";
import App from "./App";

// Smoke Test
it('it renders without crashing', () => {
  render(<App />);
});
