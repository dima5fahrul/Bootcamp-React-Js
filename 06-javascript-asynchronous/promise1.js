// Question 1
console.log("--------------------Question 1--------------------");
const myCountPromise = (param) => {
  return new Promise((resolve, reject) => {
    if (param !== undefined) {
      setTimeout(() => {
        const result = param * 2;
        resolve(result);
      }, 2000);
    } else {
      reject("Maaf tidak ada nilai dalam parameter");
    }
  });
};

myCountPromise(2)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
