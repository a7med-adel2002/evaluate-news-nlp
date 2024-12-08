import { handleSubmit } from "./formHandler";

describe("Basic function existence tests", () => {
  it("should define postUrl function", () => {
    expect(handleSubmit).toBeDefined();
  });
});
