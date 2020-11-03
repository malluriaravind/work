const calc=require('./calculator');
// writing the test case for addition
describe('Addition', () => {
    // Test case for when adding two numbers sum should be equal to the result
    test('adding two numbers that should be equal to the result',()=>{
        expect(calc.add(2,2)).toBe(4);
        expect(calc.add(2,3)).toBe(5);
        expect(calc.add(10,2)).toBe(12);
        expect(calc.add(4,4)).toBe(8);
    })
    //Test case for when adding two numbers sum should not be equal to the result.
    test('adding two numbers that should not to be equal to the result',()=>{
        expect(calc.add(2,2)).not.toBe(5);
        expect(calc.add(3,6)).not.toBe(8);
        expect(calc.add(4,4)).not.toBe(10);
        expect(calc.add(9,8)).not.toBe(16);
    })
})
//writing the test case for subraction
describe('Subraction', () => {
    //Test case for when subracting two numbers difference should be equal to the result
    test('subracting two numbers that should be equal to the result',()=>{
        expect(calc.subtract(3,6)).toBe(-3);
        expect(calc.subtract(6,3)).toBe(3);
        expect(calc.subtract(5,2)).toBe(3);
        expect(calc.subtract(9,4)).toBe(5);
    })
    //Test case for when subracting two numbers difference should not be equal to the result
    test('subracting two numbers that should not to be  equal to result',()=>{
        expect(calc.subtract(2,-1)).not.toBe(6);
        expect(calc.subtract(2,2)).not.toBe(1);
        expect(calc.subtract(6,2)).not.toBe(5);
        expect(calc.subtract(10,2)).not.toBe(7);
    })
})
//Writing the test cases for multiplication
describe('Multiplication', () => {
    //Test case for when multiplying two numbers product should be equal to the result
    test('multiplying two numbers that should be equal to the result',()=>{
        expect(calc.multiply(2,2)).toBe(4);
        expect(calc.multiply(2,4)).toBe(8);
        expect(calc.multiply(-6,-2)).toBe(12);
        expect(calc.multiply(-2,4)).toBe(-8);
    })
    //Test case for when multiplying two numbers product should not be equal to the result
    test('multiplying two numbers that should not to be equal to  the result',()=>{
        expect(calc.multiply(6,-3)).not.toBe(18);
        expect(calc.multiply(5,-3)).not.toBe(18);
        expect(calc.multiply(-5,-3)).not.toBe(-15);
        expect(calc.multiply(7,-3)).not.toBe(21);
    })
})
//Writing test case for division
describe('Division', () => {
    //Test case for when dividing two numbers quotient should be equal to the result 
    test('dividing two numbers that should be equal to the result',()=>{
        expect(calc.divide(2,2)).toBe(1);
        expect(calc.divide(6,3)).toBe(2);
        expect(calc.divide(25,5)).toBe(5);
        expect(calc.divide(25,-5)).toBe(-5);
    })
    //Test case for when dividing two numbers quotient should not be equal to the result 
    test('dividing two numbers that should not to be equal to the result',()=>{
        expect(calc.divide(5,2)).not.toBe(2);
        expect(calc.divide(6,2)).not.toBe(4);
        expect(calc.divide(9,3)).not.toBe(7);
        expect(calc.divide(15,5)).not.toBe(6);
    })
    //Test case for when dividing two numbers the quotient should be undefined if the denominator is zero
    test('dividing two numbers result should be undefined if the denominator is zero',()=>{
        expect(calc.divide(4,0)).toEqual(Infinity);
        expect(calc.divide(2,0)).toEqual(Infinity);
        expect(calc.divide(14,0)).toEqual(Infinity);
        expect(calc.divide(10,0)).toEqual(Infinity);
    })
    //Test case for when dividing two numbers the quotient should be zero if the numerator is zero
    test('dividing two numbers result should be zero if the numerator is zero',()=>{
        expect(calc.divide(0,4)).toEqual(0);
        expect(calc.divide(0,5)).toEqual(0);
        expect(calc.divide(0,10)).toEqual(0);
        expect(calc.divide(0,46)).toEqual(0);
    })
})
