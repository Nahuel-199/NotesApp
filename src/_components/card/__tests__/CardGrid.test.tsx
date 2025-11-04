import { screen } from "@testing-library/react";
import { renderWithProviders } from "@/test-utils/renderWithProviders";
import CardGrid from "../CardGrid";

describe("CardGrid", () => {
  it("renderiza correctamente cuando no hay frases", () => {
    renderWithProviders(<CardGrid />);
    expect(screen.getByText(/no hay frases/i)).toBeInTheDocument();
  });
});
