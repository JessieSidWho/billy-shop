require('dotenv');

module.exports = {
  clientID: process.env.clientID,
  APIkey: process.env.APIkey,
  receiverEmail: process.env.REACT_APP_EMAILJS_RECEIVER,
  template: process.env.REACT_APP_EMAILJS_TEMPLATEID,
  userID: process.env.REACT_APP_EMAILJS_USERID
}