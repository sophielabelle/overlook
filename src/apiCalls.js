const fetchData = (info) => {
  return fetch(`http://localhost:3001/api/v1/${info}`)
  .then(res => res.json())
  .catch(error => console.log(`Issue at: ${error}`))
};


export const promises = () => {
  const customers = fetchData('customers'); 
  const rooms = fetchData('rooms');
  const bookings = fetchData('bookings');
  return Promise.all([customers, rooms, bookings]);
}

export const postData = (saveData) => {
  fetch(`http://localhost:3001/api/v1/bookings`, {
    method: 'POST',
    body: JSON.stringify(savedRecipes),
    headers: {
      'Content-Type': 'application/json'
    }  
  })
  .then(response => {
    if(!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data = console.log(data))
  .catch(error => console.log(`Issue at: ${error}`));
}
