import { render, screen, fireEvent } from "@testing-library/react";
import Card from "./index";


describe("Card component", () => {
    const mockUserData = {
        id: 1,
        name: 'John Doe',
        username: 'john_doe_123',
        email: 'john.doe@example.com',
        address: {
            street: '123 Main Street',
            suite: 'Apt 456',
            city: 'Cityville',
            zipcode: '12345',
            geo: {
            lat: '40.7128',
            lng: '-74.0060',
            },
        },
        phone: '123-456-7890',
        website: 'www.johndoe.com',
        company: {
          name: 'ABC Inc.',
          catchPhrase: 'Catch me if you can',
          bs: 'Strategizing the business world',
        },
      };
    it('should render Card component with user data', () => {
        const onDeleteCard = jest.fn();
        render(<Card onDeleteCard={onDeleteCard} data={mockUserData} />);
        expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
        expect(screen.getByText(/john.doe@example.com/i)).toBeInTheDocument();
        expect(screen.getByText(/123-456-7890/)).toBeInTheDocument();
        expect(screen.getByText(/ABC Inc./)).toBeInTheDocument();
        expect(screen.getByText(/Catch me if you can/)).toBeInTheDocument();
        expect(screen.getByText(/Strategizing the business world/)).toBeInTheDocument();
    });
    it("should work the onDeleteCard", () => {
      const onDeleteCard = jest.fn();
      render(<Card onDeleteCard={onDeleteCard} data={mockUserData} />);
      const buttonElement = screen.getByText("Delete");
      fireEvent.click(buttonElement)
      expect(onDeleteCard).toHaveBeenCalled();
    });
});