import combinatePrefix from "./index";

describe(" Combinate Prefix", () => {
  it("should generate combinations correctly for provided prefixes", () => {
    const prefixes = ["c", "n", "s"];
    const expectedCombinations = ["c", "cn", "cns", "cs", "n", "ns", "s"];

    const result = combinatePrefix(prefixes);

    expect(result).toEqual(expectedCombinations);
  });

  it("should handle an empty array of prefixes", () => {
    const prefixes: string[] = [];
    const result = combinatePrefix(prefixes);

    expect(result).toEqual([]);
  });

  it("should handle a single prefix", () => {
    const prefixes = ["c"];
    const expectedCombinations = ["c"];

    const result = combinatePrefix(prefixes);

    expect(result).toEqual(expectedCombinations);
  });

  it("should handle different prefixes", () => {
    const prefixes = ["a", "b", "c"];
    const expectedCombinations = ["a", "ab", "abc", "ac", "b", "bc", "c"];

    const result = combinatePrefix(prefixes);

    expect(result).toEqual(expectedCombinations);
  });

  it("should handle duplicate prefixes", () => {
    const prefixes = ["x", "x", "y", "z"];
    const expectedCombinations = [
      "x",
      "xx",
      "xxy",
      "xxyz",
      "xxz",
      "xy",
      "xyz",
      "xz",
      "x",
      "xy",
      "xyz",
      "xz",
      "y",
      "yz",
      "z",
    ];

    const result = combinatePrefix(prefixes);

    expect(result).toEqual(expectedCombinations);
  });
});
