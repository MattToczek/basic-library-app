class Customer {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.currentBook = null;

  }

  checkOut(Book){
      let twoWeeks = new Date(Date.now()+12096e5);
      this.currentBook = Book;
      Book.out = true;
      Book.customer = customer.name;
      Book.dueDate = twoWeeks;
  }

}
