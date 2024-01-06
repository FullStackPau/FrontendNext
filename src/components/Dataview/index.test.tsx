import { render, screen } from '@testing-library/react';
import Dataview from '.';
describe("Dataview Component", () => {
    it("should render  'Click the button to get users list'", () => {
        render(<Dataview/>);
        expect(screen.getByText("Click the button to get users list")).toBeInTheDocument();
    });
});  