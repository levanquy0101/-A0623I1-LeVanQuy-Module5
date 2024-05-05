let book = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    pages: 100,
    displayInfo() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Pages: ${this.pages}`);
    }
};

book.displayInfo();