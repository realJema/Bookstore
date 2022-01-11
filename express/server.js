/*
 * Title: de l'heure Api Script
 * author: @realjema
 * date: 08/08/2021
 * description: de l'heure is a music chart website were you find the latest trending music which are voted by its users
 */

const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const mongoose = require("mongoose");

// data schemas
var mods = require("./models");

// Import the library:
var cors = require("cors");
const { response } = require("express");

const app = express();

// Then use it before your routes are set up:
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// function to get the time for every fetch
function getCurrentTime() {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + " " + time;
  return dateTime;
}

// local database
const mongo_uri = "mongodb://localhost:27017/dlheure";

mongoose.connect(
  mongo_uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err) {
    if (err) {
      throw err;
    } else {
      console.log(`Successfully connected to ${mongo_uri}`);
    }
  }
);

app.use(express.static(path.join(__dirname, "public")));

/* * * * * * * * * * * * * * * * * * * * * * * * *
 *                    ROUTES                     *
 * * * * * * * * * * * * * * * * * * * * * * * * */

/*
  Route: /dlheure/api
  Type: GET
  Description: Default route displaying information about api
*/
app.get("/dlheure/api", function (req, res) {
  res.status(200).send("Welcome to the de lheure api!");
});
/*
  Route: /dlheure/api/music
  Type: GET
  Description: get all music
*/
app.get("/dlheure/api/music", function (req, res) {
  mods.Musics.find(function (err, posts) {
    if (err) {
      res.status(401).send("Internal Server Error");
    } else {
      // sending all the posts fetch from the database
      console.log("[" + getCurrentTime() + "] - Music List Data fetched");
      res.status(200).send(posts);
    }
  });
});
/*
  Route: /dlheure/api/artist
  Type: GET
  Description: get all artists
*/
app.get("/dlheure/api/artists", function (req, res) {
  mods.Artists.find(function (err, posts) {
    if (err) {
      res.status(401).send("Internal Server Error");
    } else {
      // sending all the posts fetch from the database
      console.log("[" + getCurrentTime() + "] - Artists List Data fetched");
      res.status(200).send(posts);
    }
  });
});
/*
  Route: /dlheure/api/producers
  Type: GET
  Description: get all producers
*/
app.get("/dlheure/api/producers", function (req, res) {
  mods.Producers.find(function (err, posts) {
    if (err) {
      res.status(401).send("Internal Server Error");
    } else {
      // sending all the posts fetch from the database
      console.log("[" + getCurrentTime() + "] - Producers List Data fetched");
      res.status(200).send(posts);
    }
  });
});
/*
  Route: /dlheure/api/votemusic
  Type: POST
  Description: vote for music
*/
app.put("/dlheure/api/votemusic", function (req, res) {
  const { postId, vote } = req.body;
  // vote is true for upvote and false for down votes 
  if (vote) {
    mods.Musics.updateOne(
      { _id: postId },
      {
        $inc: { upvotes: 1 }
      },
      function (err, posts) {
        if (err) {
          res.status(401).send("Internal Server Error");
        } else {
          // sending all the posts fetch from the database
          console.log("[" + getCurrentTime() + "] - Music Upvote");
          res.status(200).send(posts);
        }
      }
    );
  } else {
    mods.Musics.updateOne(
      { _id: postId },
      {
        $inc: { downvotes: 1 },
      },
      function (err, posts) {
        if (err) {
          res.status(401).send("Internal Server Error");
        } else {
          // sending all the posts fetch from the database
          console.log("[" + getCurrentTime() + "] - Music Downvote");
          res.status(200).send(posts);
        }
      }
    );
  }
});
/*
  Route: /dlheure/api/voteartist
  Type: POST
  Description: vote for music
*/
app.put("/dlheure/api/voteartist", function (req, res) {
  const { postId, vote } = req.body;
  // vote is true for upvote and false for down votes 
  if (vote) {
    mods.Artists.updateOne(
      { _id: postId },
      {
        $inc: { upvotes: 1 }
      },
      function (err, posts) {
        if (err) {
          res.status(401).send("Internal Server Error");
        } else {
          // sending all the posts fetch from the database
          console.log("[" + getCurrentTime() + "] - Artist Upvote");
          res.status(200).send(posts);
        }
      }
    );
  } else {
    mods.Artists.updateOne(
      { _id: postId },
      {
        $inc: { downvotes: 1 },
      },
      function (err, posts) {
        if (err) {
          res.status(401).send("Internal Server Error");
        } else {
          // sending all the posts fetch from the database
          console.log("[" + getCurrentTime() + "] - Artist Downvote");
          res.status(200).send(posts);
        }
      }
    );
  }
});
/*
  Route: /dlheure/api/voteproducers
  Type: POST
  Description: vote for music
*/
app.put("/dlheure/api/voteproducers", function (req, res) {
  const { postId, vote } = req.body;
  // vote is true for upvote and false for down votes 
  if (vote) {
    mods.Producers.updateOne(
      { _id: postId },
      {
        $inc: { upvotes: 1 }
      },
      function (err, posts) {
        if (err) {
          res.status(401).send("Internal Server Error");
        } else {
          // sending all the posts fetch from the database
          console.log("[" + getCurrentTime() + "] - Producer Upvote");
          res.status(200).send(posts);
        }
      }
    );
  } else {
    mods.Producers.updateOne(
      { _id: postId },
      {
        $inc: { downvotes: 1 },
      },
      function (err, posts) {
        if (err) {
          res.status(401).send("Internal Server Error");
        } else {
          // sending all the posts fetch from the database
          console.log("[" + getCurrentTime() + "] - Producer Downvote");
          res.status(200).send(posts);
        }
      }
    );
  }
});

// listening on this port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
