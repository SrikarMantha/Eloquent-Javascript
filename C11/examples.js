// CALLBACKS
setTimeout(() => console.log("Tick"), 500); // 500 is the number of milliseconds

// PROMISES
let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`));

function storage(nest, name) {
  return new Promise(resolve => {
    nest.readStorage(name, result => resolve(result));
  });
}
storage(bigOak, "enemies").then(value => console.log("Got", value));

// FAILURE
new Promise((_, reject) => reject(new Error("Fail")))
  .then(value => console.log("Handler 1"))
  .catch(reason => {
    console.log("Caught failure " + reason);
    return "nothing";
  })
  .then(value => console.log("Handler 2", value));
