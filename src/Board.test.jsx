import { render, fireEvent } from "@testing-library/react";
import Board from "./Board";

// Smoke Test
it('it renders without crashing', () => {
  render(<Board nrows={3} ncols={3} chanceLightStartsOn={100}/>);
});

// Snapshot Test
it("matches snapshot", () => {
  const {asFragment} = render(<Board nrows={3} ncols={3} chanceLightStartsOn={100}/>);
  expect(asFragment()).toMatchSnapshot();
});