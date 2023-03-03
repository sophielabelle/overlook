const fetchData = (data) => {
  return fetch(`http://localhost:3001/api/v1/${data}`)
  .then(res => res.json())
  .catch(error => console.log(`Issue at: ${error}`))
};

export const promises = () => {
  const customersData = 
  return Promise.all([fetchData('customers'), fetchData('rooms'), fetchData('bookings')])
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
