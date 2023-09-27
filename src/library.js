function createLibrary (name) {
  return { 
    name: name, 
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
}

function addBook(library, book) {
  var genreToShelf = {
    fantasy: "fantasy",
    fiction: "fiction",
    nonFiction: "nonFiction"
  };
  var shelfName = genreToShelf[book.genre];
  library.shelves[shelfName].push(book);
}

function checkoutBook (library, bookName, genre) {
  var genreToShelf = {
    fantasy: "fantasy",
    fiction: "fiction",
    nonFiction: "nonFiction"
  };
  var shelfName = genreToShelf[genre];
  var index = library.shelves[shelfName].findIndex(function(book) {
    return book.title === bookName;
  });
  
  if (index !== -1) {
    library.shelves[shelfName].splice(index, 1);
    return `You have now checked out ${bookName} from the ${library.name}.`;
  }
    else {
    return `Sorry, there are currently no copies of ${bookName} available at the ${library.name}.`;
  }
}

function takeStock (library, genre) {
  var genreToShelf = {
    fantasy: "fantasy",
    fiction: "fiction",
    nonFiction: "nonFiction"
  };
  var shelfName = genreToShelf[genre];
  if (genre !== undefined ) {
    var bookCount = library.shelves[shelfName].length;
    return `There are a total of ${bookCount} ${genre} books at the ${library.name}.`;
  }
  else {
    var totalBookCount = 0;
    Object.keys(library.shelves).forEach(function(key) {
      totalBookCount += library.shelves[key].length;
    });

    return `There are a total of ${totalBookCount} books at the ${library.name}.`;
  }
}


module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};