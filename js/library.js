class Library {
  constructor(books, customers) {
    this.books = [];
    this.customers = [];
  }

  addCustomer(customer){
    this.customers.push(customer);
  }

  addBook(book){
    this.books.push(book);
  }

}
