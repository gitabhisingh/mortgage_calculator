import addComma from "../addComma";

describe('addComma function', () => {
  it('Should return 0 for zero', () => {
    expect(addComma(0)).toBe('0');
  });

  it('Should return no commas for 2 digit number', () => {
    expect(addComma(10)).toBe('10');
  });

  it('Should return no commas for 3 digit number', () => {
    expect(addComma(100)).toBe('100');
  });

  it('Should return 1 comma for 4 digit number', () => {
    expect(addComma(1000)).toBe('1,000');
  });

  it('Should add 1 comma to hundreds place for 5 digit number', () => {
    expect(addComma(15000)).toBe('15,000');
  });

  it('Should add 1 comma to hundreds place for 6 digit number', () => {
    expect(addComma(150000)).toBe('150,000');
  });

  it('Should 2 commas for 7 digit number', () => {
    expect(addComma(1500000)).toBe('1,500,000');
  });

  it('Should add 3 commas for 8 digit number', () => {
    expect(addComma(15000000)).toBe('15,000,000');
  });
});