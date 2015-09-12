var RandomUtil = {
  sort: function (list) {
    var monkeys = JSON.parse(JSON.stringify(list));
    Object.keys(monkeys).forEach(function (cur) {
      monkeys[cur].sort(function () {
        return Math.random() - Math.random();
      });
    });
    return monkeys;
  },

  divide: function (flag, array, n) {
    if (!n || n <= 0) return;
    var ret = [];
    if (flag) {
      while (array.male.length) {
        ret.push(array.male.splice(0, n));
      }
      while (array.female.length) {
        ret.push(array.female.splice(0, n));
      }
    } else {
      var arr = array.male.concat(array.female).sort(function () {
        return Math.random() - Math.random();
      });
      while (arr.length) {
        ret.push(arr.splice(0, n));
      }
    }
    return ret;
  }
};

export default RandomUtil;