const sum = require("./sum");

describe("sum", () => {
  it("1 + 2 should return 3", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });

  it("1 + (-2) should return -1", () => {
    const result = sum(1, -2);
    expect(result).toBe(-1)
  });

  it("'1' + (-2) should return -1", () => {
    const result = sum("1", -2);
    expect(result).toBe(-1);
  });
});
