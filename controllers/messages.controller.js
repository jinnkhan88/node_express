const path = require("path");

function getMessage(req, res) {
  res.render("messages", {
    title: "My Friends are very clever",
    friend: "Elon Musk"
  });
  // res.send("<ul><li>Hellooo Albert!</li></ul>");
}

function postMessage(req, res) {
  console.log("Updating messages....");
}

module.exports = {
  getMessage,
  postMessage
};
