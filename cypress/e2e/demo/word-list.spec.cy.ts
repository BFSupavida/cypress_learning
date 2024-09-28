const { _ } = Cypress;

describe("word list", () => {
  beforeEach(() => {
    cy.visit("http://172.20.10.5:3000/cypress/word-list");
  });
  it("adds word", () => {
    //การทดสอบควรใส่หลายคำทั้งสั้นยาว
    const wordList = [
      "short-word",
      "medium-medium-word",
      "very-long-long-long-word",
    ];
    //below loop wordList
    for (const word of wordList) {
      cy.get('[data-testid="my-word-input"]').type(word);
      cy.get('[data-testid="add-word-button"]').click();
    }

    //expect result
    for (const [index, word] of wordList.reverse().entries()) {
      //index ของ array เริ่มต้นที่ 0 แต่ index ของ li เริ่มต้นที่ 1
      cy.get(`[data-testid="word-list-item-${index + 1}"]`).should(
        "have.text",
        _.truncate(word, { length: 15 })
      );
    }
  });
});
