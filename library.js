class Media{
    constructor(title){
      this._title=title;
      this._isCheckedOut=false;
      this._ratings=[];
    }
    get title(){
      return this._title;
    }
    get isCheckedOut(){
      return this._isCheckedout;
    }
    get ratings(){
      return this._ratings;
    }
    set isCheckedOut(value){
     this._isCheckedOut=value;
    }
    toggleCheckedOutStatus(){
     return !this._isCheckedOut?true:false;
    }
    getAverageRating(){
     return this._ratings.reduce((lator, val)=>
    lator + val)/this._ratings.length;
    }
    addRating(rating){
     this._ratings.push(rating);
     return this._ratings;
    }
    }
    class Book extends Media{
    constructor(author, title, page){
      super(title);
      this._author=author;
      this._page=page;
    }
    get author(){
      return this._author;
    }
    get page(){
      return this._page;
    }
    set newPage(value){
        return this._page.push(value);
    }
    }
    class Movie extends Media{
      constructor(director, title, runTime){
        super(title);
        this._director=director;
        this._runTime=runTime;
      }
      get director(){
        this._director;
      }
      get runTime(){
        this._runTime;
      }
    }
    const book=new Book("Bill Bryson", "A Short Story of Everything", 544);
    book.addRating(4);
    book.addRating(5);
    book.addRating(5);
    book.addRating(3);
    console.log("Array of Element:",book.ratings)
    console.log("Avearage Rating:"+book.getAverageRating());
    const movie=new Movie("Jan de Bont", "Speed", 116);
    book.isCheckedOut=true;
    console.log(book.toggleCheckedOutStatus());
    movie.addRating(1);
    movie.addRating(1);
    movie.addRating(5);
    console.log(movie.getAverageRating());
    console.log(movie);
    
    
    
    