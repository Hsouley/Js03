const myStorage = {
 car: {
   inside: {
     'glove box': 'maps',
     'passenger seat': 'crumbs',
   },
   outside: {
     trunk: 'jack',
   },
 },
};

function gloveBoxContents() {
  // Accéder à la propriété "glove box" de l'objet "myStorage" en utilisant la notation par points
  // ou la notation par crochets
  const gloveBoxContents = myStorage.car.inside['glove box'];
  console.log(gloveBoxContents);
}

gloveBoxContents();
