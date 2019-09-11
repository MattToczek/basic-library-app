class Library {
  constructor(books, customers) {
    this.books = [];
    this.customers = [];
    this.dailyFine = .1;
  }

  addCustomer(customer){
    this.customers.push(customer);
  }

  addBook(book){
    this.books.push(book);
  }

  chargeFine(){
    const now = new Date();

    const lateCustomers = this.customers.filter(customer => (customer.currentBook !== null && customer.currentBook.dueDate < now)
    );

    for(let customer of lateCustomers){
      const dateDiff = new Date(now - customer.currentBook.dueDate);
      const daysLate = dateDiff.getDate();
      customer.balance += this.dailyFine * daysLate;
    }
  }

}
