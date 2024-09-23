const { _ } = Cypress;

describe("Mocha", () => {
  describe("Hooks", () => {
    before(() => {
      //run ก่อนทุก TC 1 ครั้ง
      console.log("Before All");
    });
    beforeEach(() => {
      //run ก่อน TC ทุกอัน
      console.log("Before Each");
    });
    afterEach(() => {
      //run หลังทุก TC
      console.log("After Each");
    });
    after(() => {
      console.log("After");
    });

    it("calculates 1+1 correctly", () => {
      console.log("1+1");
      expect(1 + 1).to.eq(2);
    });
    it("calculates 1+2 correctly", () => {
      console.log("1+2");
      expect(1 + 2).to.eq(3);
    });
  });
  describe("Assertion", () => {
    it("handle assertion correctly", () => {
      expect(1 + 1).to.eq(2);
      expect("hello").to.be.a("string");
      expect([1, 2]).to.be.an("array");
      expect("hello").to.include("hell");
      expect({ name: "Somchai" }).to.have.property("name");
      //expect({age : 24}).to.have.eq({age : 24}); //not eq เพราะเมื่อเราสร้าง ob แต่ละอันมันไม่เท่ากันอยู่แล้ว
      expect({ age: 24 }).to.deep.eq({ age: 24 }); //deep เป็นการ check object ข้างใน
      expect([]).to.be.empty; //check array ว่าว่างไหม
      expect([1, 2, 3]).to.have.lengthOf(3); //check จำนวน array

      //should ตรวจสอบค่า คล้ายกับ expect แต่ไม่ต้องมี to
      cy.wrap(1 + 1).should("eq", 2);
      cy.wrap("hello").should("be.a", "string");
      cy.wrap({ name: "Somchai" }).should("have.property", "name");
      cy.wrap([]).should("be.empty");
    });
  });

  describe("jQuery Selectors", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/cypress/selectors");
    });
    it("selects element", () => {
      cy.get("#outlined").should("contain", "Outlined Button"); //ต้องดูจากข้อความจริงใน inspect
      cy.get(".MuiButton-containedPrimary").should(
        "contain",
        "Contained Button"
      );
      cy.get('button[type="submit"]').should("contain", "Contained Button");
      cy.get(".text-group p:first").should("contain", "H4");
      cy.get(".text-group p").eq(1).should("contain", "Body");
      cy.get('p[data-testid="subtitle"]').should("contain", "Subtitle");
      cy.get(".text-group p:last-child").should("contain", "Caption");
    });
    it("verifies selectors with chai jQuery correctly", () => {
      cy.get("#outlined").should("contain", "Outlined Button");
      cy.get("#outlined").should("have.text", "Outlined Button (#outlined)"); //have.text ใช้ตรวจสอบคำได้ แต่ถ้าใช้ have.text ต้องเรียกตรวจสอบคำทั้งหมด
      cy.get('button[type="submit"]').should("have.attr", "type", "submit");
      cy.get("#outlined").should("be.visible");
      cy.get("#invisible").should("be.hidden"); // = be.not.hidden = be.not.visible
    });
  });

  //should คล้ายกับ expect เพราะไม่ต้องมี to

  //Lodash = libary ที่แนะนำ
  describe("Lodash", () => {
    it("handles Lodash methods correctly", () => {
      const person = {
        name: "Somchai",
        age: 24,
        gender: "male",
      };

      expect(_.omit(person, "name")).to.deep.eq({ age: 24, gender: "male" }); //{age:24} omit = การไม่เลือก
      expect(_.omit(person, ["name", "age"])).to.deep.eq({ gender: "male" });
      expect(_.pick(person, "name")).to.deep.eq({ name: "Somchai" }); // pick การเลือก
      expect(_.pick(person, ["name", "age"])).to.deep.eq({
        name: "Somchai",
        age: 24,
      });
      expect(
        _.merge({ a: 1, b: { c: 2 } }, { a: 3, d: 4, b: { e: 5 } })
      ).to.deep.eq({
        a: 3,
        b: { c: 2, e: 5 },
        d: 4,
      });
      expect(_.times(5, (index) => index)).to.deep.eq([0, 1, 2, 3, 4]);
      expect(_.invert({ a: 1, b: 2 })).to.deep.eq({ 1: "a", 2: "b" }); //กลับ
    });
  });
});

export {};

//chai assertion = ใช้ตรวจสอบ expect

//มาตราฐานที่ดี แนะนำให้เข้าถึงผ่าน data-testid ตั้งแยกขึ้นมา

