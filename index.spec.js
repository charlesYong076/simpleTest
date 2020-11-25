const { expect } = require("@jest/globals");
const {main} = require("./index");
test("My first test", () => {
    expect(main(1)).toBe(2);
})