// An array of objects that now replace the array of numbers from last session
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

let content = '';

const handleItem = (item) => {
  content += `<img src="https://picsum.photos/id/${item.id}/200/300" alt="Random Lorem Picsum ${item.title}">`;
}

animals.forEach(handleItem);

const gallery = document.querySelector('.gallery');

gallery.innerHTML = content;