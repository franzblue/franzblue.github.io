const emailjs = require('emailjs-com');

function contactMe(e) {
    e.preventDefault();

    emailjs.sendForm('service_portfolio', 'portfolio_contact', e.target, 'user_dUDNp4m09uGQMhOjbo2ZP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  module.exports = contactMe; 