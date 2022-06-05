import roundToFixed from "../roundToFixed";

describe('roundToFixed function', () => {
  it('Should return 0 for zero', () => {
    expect(roundToFixed(0, 0)).toBe("0");
  });

  it('Should return 0 with 1 decimal place for zero', () => {
    expect(roundToFixed(0, 1)).toBe("0.0");
  });

  it('Should return 0 with 2 decimal places for zero', () => {
    expect(roundToFixed(0, 2)).toBe("0.00");
  });

  it('Should return no decimals for 1 digit integer', () => {
    expect(roundToFixed(1, 2)).toBe('1.00');
  });

  it('Should 2 decimals for same value long number', () => {
    expect(roundToFixed(25.45, 2)).toBe('25.45');
  });

  it('Should 2 decimals for long number', () => {
    expect(roundToFixed(10.234551502, 2)).toBe('10.23');
  });

  it('Should 3 decimals for long number', () => {
    expect(roundToFixed(10.234551502, 3)).toBe('10.235');
  });
});