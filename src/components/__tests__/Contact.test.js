import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


describe("should load all testcases of contact page", ()=> {   
    //we can use "it" or "test"
     it("Should load contact component",()=> {
        render(<Contact/>);
    
        //querying
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    });
    
    it("Should load button of contact component",()=> {
        render(<Contact/>);
    
        //querying
        const button = screen.getByRole("button");
    
        expect(button).toBeInTheDocument();
    });
    
    it("Should load text of contact component",()=> {
        render(<Contact/>);
    
        //querying
        const text = screen.getByText("Submit");
    
        expect(text).toBeInTheDocument();
    });
    
    it("Should load find placeholder of contact component",()=> {
        render(<Contact/>);
    
        //querying
        const place = screen.getByPlaceholderText("message");
    
        expect(place).toBeInTheDocument();
    });
    
    it("Should load find inputbox of contact component",()=> {
        render(<Contact/>);
    
        //querying
        const inputbox = screen.getAllByRole("textbox");
    
        expect(inputbox.length).toBe(2);
    });

})

