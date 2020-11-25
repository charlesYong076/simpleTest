const { expect } = require("@jest/globals");
const {handler} = require("./index");

test("My first test", () => {
    expect(handler({x:1}, {})).resolves.toBe(2);
})