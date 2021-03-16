
// getCustomer(1, (customer) => {
//   console.log('Customer: ', customer);
//   if (customer.isGold) {
//     getTopMovies((movies) => {
//       console.log('Top movies: ', movies);
//       sendEmail(customer.email, movies, () => {
//         console.log('Email sent...')
//       });
//     });
//   }
// });

async function sendMailToCustomer() { 
  const customer = await getCustomer(1);
  console.log('Customer: ', customer);
  if (customer.isGold){
    const movies = await getTopMovies();
    console.log('Top movies: ', movies); 
    await sendEmail(customer.email, movies);
    console.log('Email sent...');
  } 
};
sendMailToCustomer();

function getCustomer(id) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve({ 
        id: 1, 
        name: 'Andrea Suarez', 
        isGold: true, 
        email: 'asuaruiz@gmail.com' 
      });
    }, 4000);  
  })
  
}

function getTopMovies() {
  return new Promise ((resolve,reject) => {
    setTimeout(() => {
      resolve(['movie1', 'movie2']);
    }, 4000);
  })
}

function sendEmail(email, movies) {
  return new Promise ((resolve,reject) => {
    setTimeout(() => {
      resolve();
    }, 4000);
  })
}