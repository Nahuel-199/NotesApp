import { screen } from "@testing-library/react";
import SearchBar from "../SearchBar";
import { renderWithProviders } from "@/test-utils/renderWithProviders";

test("renderiza input y botón correctamente", () => {
  renderWithProviders(<SearchBar />);
  expect(screen.getByPlaceholderText("Escribe o busca una frase...")).toBeInTheDocument();
  expect(screen.getByText("Agregar")).toBeInTheDocument();
});
