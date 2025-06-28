function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a, b;
}
// module.exports = "Piyush"; the module will expor Piyush

/* module.exports = add;
 module.exports = sub;

 can't exports like this
 */

// to exports multiple functions....... we can use objects...

module.exports = {
  addFn: add,
  subFn: subtract,
};
