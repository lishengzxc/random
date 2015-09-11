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
    flag = false;
    if (!n) return;
    if (flag) {

    } else {
      var arr = array.male.concat(array.female).sort(function () {
        return Math.random() - Math.random();
      });
      var ret = [];
      while (arr.length) {
        ret.push(arr.splice(0, n));
      }
      return ret;
    }
  }
};

export default RandomUtil;