const express = require("express");
const firebase = require("firebase/app");
const app = express();
const port = 3000;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "exercise-five-733a7.firebaseapp.com",
  projectId: "exercise-five-733a7",
  storageBucket: "exercise-five-733a7.firebasestorage.app",
  messagingSenderId: "937743119909",
  appId: "1:937743119909:web:efa232ff4ee8c4de55f1cc",
};

firebase.initializeApp(firebaseConfig);

const indexRoute = require("./routes/index.js");
const createPostRoute = require("./routes/createPost.js");
const singlePostRoute = require("./routes/singlePost.js");

app.use("/", indexRoute);
app.use("/create", createPostRoute);
app.use("/post", singlePostRoute);
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Exercise Five app listening on port ${port}`);
});

module.exports = app;
