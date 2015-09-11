var RandomUtil = {
  sort: function (flag, list) {
    // false: 异性, true: 同性
    var monkeys = flag ? JSON.parse(JSON.stringify(list.male)) : JSON.parse(JSON.stringify(list.female.concat(list.male)));
    monkeys.sort(function () {
      return Math.random() - Math.random();
    });
    return monkeys;
  },

  divide: function (array, n) {
    var ret = [];
    while (array.length) {
      ret.push(array.splice(0, n));
    }
    return ret;
  }
};

export default RandomUtil;