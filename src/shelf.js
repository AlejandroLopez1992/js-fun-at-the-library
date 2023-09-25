function shelfBook (book, shelf) {
  if (shelf.length <= 2) {
    shelf.unshift(book);
  }
}


function unshelfBook(bookName, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookName) {
      shelf.splice(i, 1);
      break;
    }
  }
}

function listTitles(shelf) {
  var titles = shelf.map(function(book) {
    return book.title;
  });
  return titles.join(", ");
}

function searchShelf (shelf, bookName) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookName) {
      return true;
    } 
  }
  return false;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};