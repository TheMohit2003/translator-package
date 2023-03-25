const translate = require('translate-google');

module.exports = function(word, language) {
  return new Promise((resolve, reject) => {
    translate(word, {to: language}).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
};
