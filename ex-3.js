//Exercise #3
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};

let getJohnOrders = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve([
          {
            orderId: "001",
            items: ["apple", "banana"],
          },
          {
            orderId: "002",
            items: ["orange", "itim"],
          },
        ]),
      1500
    );
  });
};

// Start coding here
function displayjohnProfile(data) {
  console.log(data);
}
function displayjohnOrder(data) {
  console.log(data);
}
function error(data) {
  console.log(data);
}
getJohnProfile()
  .then(displayjohnProfile)
  .then(getJohnOrders)
  .then(displayjohnOrder)
  .catch(error);
