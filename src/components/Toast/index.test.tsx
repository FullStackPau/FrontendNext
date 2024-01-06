import { render, screen } from '@testing-library/react';
import { AppContext } from '@/context/app';
import Toast from '.';

const customRender = (ui: any, { providerProps, ...renderOptions }: any) => {
  return render(
    <AppContext.Provider value={providerProps}>
      {ui}
    </AppContext.Provider>,
    renderOptions,
  );
};

describe("Toast Render", () => {
  it("should toast context work", () => {
    const mockprops = {
      toast: "Test"
    };

    customRender(<Toast />, { providerProps: mockprops });

    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
