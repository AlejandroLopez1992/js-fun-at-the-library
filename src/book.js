function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns
  }
}

function saveReview(text, reviews) {
  if (!reviews.includes(text)) {
    reviews.push(text) 
  } 
}

function calculatePageCount (bookTitle) {
  var stringLength = bookTitle.length;
  var multipliedLength = stringLength * 20;
  return multipliedLength
}

function writeBook (title, mainCharacter, genre ) {
  return {
    title: title,
    mainCharacter: mainCharacter,
    genre: genre,
    pageCount: calculatePageCount(title)
  }
}

function editBook(book) {
  var pageCount = book.pageCount
  var editedpageCount = pageCount * .75
  book['pageCount'] = editedpageCount
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}