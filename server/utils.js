const fs = require('fs');

const readData = (filePath) => {
  return new Promise((res, rej) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        return rej(err);
      }
      try {
        res(JSON.parse(data));
      } catch (e) {
        rej(e);
      }
    });
  });
};

const writeData = (filePath, data) => {
  return new Promise((res, rej) => {
    try {
      fs.writeFile(filePath, JSON.stringify(data), (err) => {
        if (err) {
          return rej(err);
        }
        res();
      });
    } catch (e) {
      rej(e);
    }
  });
};

module.exports = { readData, writeData };
