import { render, screen } from "@testing-library/react";
import React from "react";
import Movie from "./Movie"
import { useQuery } from 'react-query'

jest.mock("react-query");

describe("Movie", () => {
    it("When isLoading is true", () => {
        useQuery.mockReturnValue({
            isLoading: true,
            error: null,
            data: null
        })

        // const { debug } = render(<Movie />);
        // debug();

        render(<Movie />);

        const text = screen.queryByTestId("loading-text").innerHTML;
        expect(text).toBe("Loading...");

        // Assetion

    })
})