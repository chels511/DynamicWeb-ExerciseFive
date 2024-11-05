const express = require("express");
const router = express.Router();
const firestore = require("firebase/firestore");
const db = firestore.getFirestore();

router.get("/", (request, response) => {
  const postsQuery = firestore.getDocs(firestore.collection(db, "posts"));
  const postsArray = [];

  postsQuery
    .then((res) => {
      res.forEach((post) => {
        if (!post) response.send("Data does not exist");
        postsArray.push({ id: post.id, ...post.data() });
      });
      response.send(postsArray);
    })
    .catch((error) => {
      console.log(error);
      return response.send(error);
    });
});

module.exports = router;
