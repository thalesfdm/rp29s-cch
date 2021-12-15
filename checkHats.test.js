const checkHats = require("./checkHats");

describe("checkHats", () => {
  it("should return 0", () => {
    const n = -1;
    expect(checkHats(n)).toEqual(0);
  });

  it("should return 0", () => {
    const n = 0;
    expect(checkHats(n)).toEqual(0);
  });

  it("should return 0", () => {
    const n = 1;
    expect(checkHats(n)).toEqual(0);
  });

  it("should return 9", () => {
    const n = 4;
    expect(checkHats(n)).toEqual(9);
  });

  it("should return 14833", () => {
    const n = 8;
    expect(checkHats(n)).toEqual(14833);
  });
});
