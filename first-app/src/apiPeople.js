// Call the api randomuser.me to bring fake data
const users = async () => {
    const response = await fetch('https://randomuser.me/api/?results=10');
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    console.log(myJson)
  }

function getUsers() {
    return Promise.resolve('https://randomuser.me/api/?results=10')
    .then(() => undefined)
}