import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import './style.module.css';

import Card from '.'; // Asegúrate de importar correctamente el componente y sus props

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

const meta: Meta<typeof Card> = {
    component: Card,
    title: "Card"
}
export default meta;

type Story=  StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        data: mockUserData,
        onDeleteCard: action('delete-card'),
    }
} 
