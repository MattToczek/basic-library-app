class Customer {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.currentBook = null;

  }

  checkOut(book){
      this.currentBook = book;
      book.out = true;
      book.customer = this.name;
  }

  checkIn(book){
    this.currentBook = null;
    book.out = false;
    book.customer = null;
  }

}
