const router = require("express").Router();
const { categories, books, reviews, users } = require("./mock");
const { reply, getById } = require("./utils");

router.get("/categories", (req, res, next) => {
  reply(res, categories);
});

router.get("/books", (req, res, next) => {
  const { categoryId, bookId } = req.query;
  let result = books;

  if (categoryId) {
    const category = getById(categories)(categoryId);
    if (category) {
      result = category.books.map(getById(result));
    }
  }

  if (!categoryId && bookId) {
    result = getById(result)(bookId);
  }
  reply(res, result);
});

router.get("/reviews", (req, res, next) => {
  const { id } = req.query;
  let result = reviews;
  if (id) {
    const book = getById(books)(id);
    if (book) {
      result = book.reviews.map(getById(result));
    }
  }
  reply(res, result);
});

router.get("/users", (req, res, next) => {
  const { id } = req.query;
  const { bookId } = req.query;
  //const {review}
  let result = users;
  if (id) {
    result = getById(users)(id);
  } else if (bookId) {
    result = [];
    const book = getById(books)(bookId);
    book.reviews.forEach((reviewId) => {
      let userId = getById(reviews)(reviewId).user;
      result.push(getById(users)(userId));
    });
  }
  reply(res, result);
});

module.exports = router;
