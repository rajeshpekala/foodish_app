import { sum } from "../sum"

test("sum function should calculate sum of two numbers",()=>{


const result = sum(8,4);
//assertion
expect(result).toBe(12);

})