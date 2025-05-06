let Book = {
    title: "Atomic Habits",
    author: "James Clear",
    year: 2019,
    isAvailable: true,
    borrow: function() {
        this.isAvailable = false;
        console.log("Book is not Available");
    },
    publisher: {
        name: "Avery Publishing Group",
        location: {
            city: "New York ",
            country: "USA",
        }
    }


}

console.log(Book);
console.log(Book.title);

Book.year = new Date().getFullYear();
console.log(Book);

delete Book.author;
console.log(Book);

Book.borrow();
console.log(Book);

console.log(Book.publisher);
console.log(Book.publisher.location.city);