// Call the api randomuser.me to bring fake data
// This code was copy from Oreilly formation by Rap Payne

export async function fetchPeople(number =10, nat=['BR','CA','ES','DE'], gender="all") {
  const url = `https://randomuser.me/api/?results=${number}&nat=${nat.join(",")}&gender=${gender}`
  console.log(url)
  try {
    const fetchResult = await fetch(url);
    const jsonResult = await fetchResult.json();
    return jsonResult.results;
  }
  catch (error) {
    return console.error("Error fetching people", error);
  }
}