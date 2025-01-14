var fetch = require("node-fetch");
// async function
async function fetchAsync() {
  // await response of fetch call
  let response = await fetch(
    "https://pollysnips.s3.amazonaws.com/bostonEmployeeSalaries.json "
  );
  // only proceed once promise is resolved
  let data = await response.json();
  // only proceed once second promise is resolved
//Test
  return data;
}
// trigger async function
// log response or catch error of fetch promise
//

fetchAsync()
  .then((data) => console.log(data))
  .catch((reason) => console.log(reason.message));
