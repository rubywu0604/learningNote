console.log(`Before timeout: ${new Date()}`);
const fn = () => {
  console.log(`After timeout: ${new Date()}`);
};

setTimeout(fn, 5000);
console.log(`I happen AFTER timeout`);

// ====================================================================
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1);
}