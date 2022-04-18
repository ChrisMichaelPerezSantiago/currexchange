const { axios } = require('./packages');

module.exports = opts => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios({ ...opts });
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
