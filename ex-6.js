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
async function displayJohn () {
  try {
  const displayJohnProfile = await getJohnProfile();
  console.log(displayJohnProfile);
  
  const displayJohnOrders = await getJohnOrders();
  console.log(displayJohnOrders);
  } catch (error) {
    console.log(
     {
        errorCode: 500,
        message: '👿 Failed to request data from server'
     }
    )
  }
};

displayJohn();