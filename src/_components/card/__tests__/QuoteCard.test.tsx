import { screen, fireEvent, act } from "@testing-library/react";
import { renderWithProviders } from "@/test-utils/renderWithProviders";
import QuoteCard from "../QuoteCard";

describe("QuoteCard", () => {
    const testQuote = {
        id: "1",
        text: "Frase de prueba",
        createdAt: Date.now(),
    };

    it("renderiza la frase correctamente", () => {
        renderWithProviders(<QuoteCard quote={testQuote} />);
        expect(screen.getByText("Frase de prueba")).toBeInTheDocument();
        expect(screen.getByText(new RegExp(new Date(testQuote.createdAt).toLocaleString()))).toBeInTheDocument();
    });
});
