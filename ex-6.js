// Exercise #6
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
async function asynchronousFunction () {
  try {
    const getJohnProfileResponse = await getJohnProfile();
    console.log(getJohnProfileResponse);
    const getJohnOrdersResponse = await getJohnOrders();
    console.log(getJohnOrdersResponse);
    
    
  } catch (error) {
    console.log(error);
    
  }
}

asynchronousFunction();