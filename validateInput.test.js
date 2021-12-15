const validateInput = require("./validateInput");

describe("validateInput", () => {
  it("should return false", () => {
    const input = "a";
    expect(validateInput(input)).toBe(false);
  });

  it("should return false", () => {
    const input = 1.5;
    expect(validateInput(input)).toBe(false);
  });

  it("should return true", () => {
    const input = 1;
    expect(validateInput(input)).toBe(true);
  });
});
