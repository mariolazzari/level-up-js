class Book {
  constructor(title, author, isbn, copies) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.copies = copies;
  }

  getAviability() {
    if (this.copies === 0) {
      return "Out of stock";
    } else if (this.copies > 0 && this.copies <= 10) {
      return "Low Stock";
    } else {
      return "In Stock";
    }
  }

  sell(copies = 1) {
    if (this.copies >= copies) {
      this.copies -= copies;
      return `Sold ${copies} copies of ${this.title}.`;
    }

    return `Not enough copies of ${this.title} available.`;
  }

  restock(copies = 1) {
    this.copies += copies;
    return `Restocked ${copies} copies of ${this.title}.`;
  }
}

const book = new Book(
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  "9780743273565",
  5
);

console.log(book.getAviability()); // Low Stock
console.log(book.sell(3)); // Sold 3 copies of The Great Gatsby.
console.log(book.getAviability()); // Low Stock
console.log(book.restock(10)); // Restocked 10 copies of The Great Gatsby.
console.log(book.getAviability()); // In Stock
console.log(book.sell(20)); // Not enough copies of The Great Gatsby available.
console.log(book.getAviability()); // In Stock
console.log(book.sell(12)); // Sold 12 copies of The Great Gatsby.
