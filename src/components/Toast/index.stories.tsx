import type { Meta, StoryObj } from '@storybook/react';
import Toast from '.';
import { AppContext } from '@/context/app';
import './style.module.css';


const meta: Meta<typeof Toast> = {
    component: Toast,
    title: 'Toast',
};
export default meta;
type Story=  StoryObj<typeof Toast>;
const mockContext = {
    users:[],
    setUsers: () => {},
    toast: "Toast",
    setToast: () => {}
}
export const Default: Story = {
    decorators: [
        (Story) => (
          <AppContext.Provider value={mockContext}>
            <Story />
          </AppContext.Provider>
        ),
      ],
    args: {
        typeStyle:"error",
    }
} 