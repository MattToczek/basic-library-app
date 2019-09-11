class Customer {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.currentBook = null;

  }

  checkOut(Book){
      let twoWeeks = new Date
      twoWeeks.setDate(twoWeeks.getDate()+14);
      this.currentBook = Book;
      Book.out = true;
      Book.customer = customer.name;
      Book.dueDate = twoWeeks;
  }

}
