const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer está definido como falso para representar uma resposta sem sucesso de um servidor
  let responseFromServer = false;

  if(responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

makeServerRequest.catch(error => {
  console.log(error);
});