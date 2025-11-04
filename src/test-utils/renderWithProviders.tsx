import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { Provider as ChakraProvider } from "@/components/ui/provider";
import { createTestStore } from "./testStore";

export const renderWithProviders = (ui: React.ReactElement, preloadedState = {}) => {
  const store = createTestStore(preloadedState);

  return {
    ...render(<Provider store={store}><ChakraProvider>{ui}</ChakraProvider></Provider>),
    store,
  };
};
