describe("first", () => {
  it("shall do some magic", () => {
    console.log("PORT:", process.env.__EMULATOR_PORT__);
    console.log({ emulatorHash });
    expect(true).toBe(true);
  });
});
