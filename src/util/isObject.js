module.exports = (obj) => Array.isArray(obj) ? false : obj === Object(obj);