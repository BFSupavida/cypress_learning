describe('Nember', () => {

describe("Addition", () => {
    context("when some operands are number", () => {
        it("add two positive numbers correctly", () => {
            expect(1 + 1).to.eq(2);
            expect(3 + 2).to.eq(5);
          });
        
          it("add two negative numbers correctly", () => {
            expect(-1 + -1).to.eq(-2);
            expect(-3 + -2).to.eq(-5);
          });
    })
 

  it("add positive numbers and string correctly", () => {
    expect(1 + '1').to.eq('11');
    expect(3 + '2').to.eq('32');
  });

  it("add negative numbers and string correctly", () => {
    expect(-1 + '-1').to.eq('-1-1');
    expect(-3 + '-2').to.eq('-3-2');
  });
});

describe("Multiplication", () => {
  it("add two negative numbers correctly", () => {
    expect(1 * 1).to.eq(1);
    expect(3 * 2).to.eq(6);
  });

  it("add two negative numbers correctly", () => {
    expect(-1 * -1).to.eq(1);
    expect(-3 * -2).to.eq(6);
  });
});

})
