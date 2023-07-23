function getMessage(req, res) {
  res.send("<ul><li>Hellooo Albert!</li></ul>");
}

function postMessage(req, res) {
  console.log("Updating messages....");
}

module.exports = {
  getMessage,
  postMessage
};
