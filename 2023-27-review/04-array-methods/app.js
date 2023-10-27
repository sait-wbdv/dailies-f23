const animals = [
  {
    id:           40,
    title:        'Kitten'
  },
  {
    id:           237,
    title:        'Puppy'
  },
  {
    id:           433,
    title:        'Bear'
  },
  {
    id:           577,
    title:        'Moose'
  },
  {
    id:           582,
    title:        'Coyote'
  },
  {
    id:           593,
    title:        'Tiger'
  },
  {
    id:           659,
    title:        'Husky'
  },
  {
    id:           718,
    title:        'Wolf'
  },
  {
    id:           783,
    title:        'Monkey'
  },
  {
    id:           790,
    title:        'Elk'
  },
  {
    id:           837,
    title:        'Bulldog'
  },
  {
    id:           1024,
    title:        'Bird'
  },
  {
    id:           1025,
    title:        'Pug'
  },
  {
    id:           1074,
    title:        'Big Cat'
  },
  {
    id:           1084,
    title:        'Walrus'
  }
];

/*******/
/* Map */
/*******/
const mapItem = (item) => {
  return item.title;
}
console.log(animals.map(mapItem));

/*********/
/* Filter */
/*********/

/* Verbose */
// const filterItem = (item) => {
//   if (item.id > 1000) {
//     return true;
//   } else {
//     return false;
//   }
// }

/* Shorter */
// const filterItem = (item) => {
//   return item.id > 1000
// }

/* One-liner */
const filterItem = (item) => item.id > 1000

console.log(animals.filter(filterItem));

/********/
/* Find */
/********/
const findItem = (item) => {
  return item.title === 'Kitten';
}

console.log(animals.find(findItem));

/********************************/
/* Find with Anonymous Function */
/********************************/
console.log(animals.find((item) => {
  return item.title === 'Kitten';
}));
