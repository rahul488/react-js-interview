Array.prototype.cMap = function cMap(cb) {
  const arr = [];
  if (typeof cb !== "function") {
    throw Error(`${cb} is not a function`);
  }
  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i], i, this));
  }
  return arr;
}

[1, 2, 3, 4].map((x) => x * 2);
