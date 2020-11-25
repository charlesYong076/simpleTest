const { expect } = require("@jest/globals");
const {handler} = require("./index");

test("My first test", async () => {
    expect(await handler({}, {})).resolves.toBe(2);
})