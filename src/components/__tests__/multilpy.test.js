import { multiply } from "../multiply"

test ("multiply should calculate multiplication of two numbers",()=>{
    const result = multiply(4,6);

    //assertion 
    expect(result).toBe(24);
})