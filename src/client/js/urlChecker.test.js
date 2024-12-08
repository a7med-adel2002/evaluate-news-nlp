import { chechForUrl } from "./urlChecker";

describe("Basic function existence tests", () => {
  it("should define postUrl function", () => {
    expect(typeof chechForUrl()).toBe("boolean");
  });
});
