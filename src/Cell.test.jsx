import { render, fireEvent } from "@testing-library/react";
import Cell from "./Cell";

// Smoke Test
it('it renders without crashing', () => {
  render(<Cell
        key={'1-1'}
        isLit={true}
        flipCellsAroundMe={() => flipCellsAround('1-1')}
      />);
});

// Snapshot Test
it("matches snapshot", () => {
  const {asFragment} = render(<Cell
                                key={'1-1'}
                                isLit={true}
                                flipCellsAroundMe={() => flipCellsAround('1-1')}
                                />);
  expect(asFragment()).toMatchSnapshot();
});