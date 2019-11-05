const utils = require('../app/bookshop_utils');

describe("utils.addVAT", () => {
  test("returns 36 when passed 30", () => {
    expect(utils.addVAT(30)).toBe(36);
  });
  
  test("returns 120 when passed 100", () => {
    expect(utils.addVAT(100)).toBe(120);
  });

  test("returns 118.8 when passed 99", () => {
    expect(utils.addVAT(99)).toBe(118.8);
  });

});

describe("utils.getFullName", () => {
  test("returns Haruki Murakami when passed Haruki and Murakami", () => {
    expect(utils.getFullName("Haruki", "Murakami")).toBe("Haruki Murakami");
  });
});

describe("utils.makeHalfPrice", () => {
  test("returns the price with a 50% discount applied", () => {
    expect(utils.makeHalfPrice(88)).toBe(44);
  });
});

describe("utils.countBooks", () => {
  test("returns the total number of books in the array", () => {
   expect(utils.countBooks(["Harry Potter", "Norwegian Wood", "Malta Travelguide"])).toBe(3);
  });
});

describe("utils.isInStock", () => {
  test("returns true if the title is in stock", () => {
    const book = {
      title: "The Stone Diaries",
      author: "Carol Shields",
      yearOfPublication: 1993,
      quantity: 9
    };
  
    expect(utils.isInStock(book)).toBe(true);
  });
})

describe("utils.isInStock", () => {
  test("returns false if the title is not in stock", () => {
    const book = {
      title: "The Diaries",
      author: "Carol",
      yearOfPublication: 1992,
      quantity: 0
    };
  
    expect(utils.isInStock(book)).toBe(false);
  });
})

describe("utils.getTotalOrderPrice", () => {
  test("returns price multiplied by quantity plus VAT", () => {
    expect(utils.getTotalOrderPrice(100, 2)).toBe(240);
  });
});

