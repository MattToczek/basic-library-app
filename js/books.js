class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this._out = false;
    this.dueDate = null;
    this.customer = null;
  }

  set out(blean){
    this._out = blean;
    if (blean === true) {
      const twoWeeks = new Date
      twoWeeks.setDate(twoWeeks.getDate()+14);
      this.dueDate = twoWeeks;
    } else{
      this.dueDate = null;
    }
  }

  get out(){
    return this._out;
  }

  }
