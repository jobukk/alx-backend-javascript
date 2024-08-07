function getResponseFromAPI(){
    return new Promise((resolve, reject) => {
        // Simulate an asynchronous operation using setTimeout
        setTimeout(() => {
          resolve('Success'); // You can change the resolve value as needed
        }, 1000);
      });
}
const response = getResponseFromAPI();
console.log(response instanceof Promise);
