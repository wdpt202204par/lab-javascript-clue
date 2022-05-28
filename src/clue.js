// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: 'Entrepreneur',
    description: 'tall',
    age: 22,
    image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    color: 'blonde'
  },
  {
    firstName: 'Joseph',
    lastName: 'Strong',
    occupation: 'Car Driver',
    description: 'fat',
    age: 22,
    image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'blonde'
  },
  {
    firstName: 'Joshua',
    lastName: 'String',
    occupation: 'Homeless',
    description: 'little',
    age: 53,
    image: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
    color: 'red'
  },
  {
    firstName: 'Jean',
    lastName: 'London',
    occupation: 'Astronaut',
    description: 'tall',
    age: 43,
    image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'dark'
  },
  {
    firstName: 'Lucy',
    lastName: 'York',
    occupation: 'Student',
    description: 'middle weight',
    age: 18,
    image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    color: 'blonde'
  },
  {
    firstName: 'Francis',
    lastName: 'Durn',
    occupation: 'Retirement',
    description: 'dwarf',
    age: 78,
    image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
    color: 'white'
  }
];

// une array de fonctions contenant les caractéristiques des personnages.


// Rooms Array

const roomsArray = [
  {name: 'saloon'},
  {name: 'garden'},
  {name: 'parking'},
  {name: 'bathroom'},
  {name: 'hall'},
  {name: 'pool'},
  {name: 'bedroom'},
  {name: 'kitchen'},
  {name: 'toilets'},
  {name: 'car'},
  {name: 'laundry'},
  {name: 'city'},
  {name: 'river'},
  {name: 'mountain'},
  {name: 'highway'}
];

// Weapons Array

const weaponsArray = [
  {
    name: 'machine gun',
    weight: 3,
  },
  {
    name: 'gun',
    weight: 2,
  },
  {
    name: 'knife',
    weight: 0.5,
  },
  {
    name: 'katana',
    weight: 3.5,
  },
  {
    name: 'tank',
    weight: 35000,
  }, 
  {
    name: 'sword',
    weight: 5,
  },
  {
    name: 'aircraft',
    weight: 15000,
  }, 
  {
    name: 'hand',
    weight: 0,
  }, 
  {
    name: 'fork',
    weight: 0.5,
  } 
];


// ITERATION 2

function selectRandom(array) {
  if(array === 0) return undefined;
  const selectedElement = Math.trunc(Math.random () * array.lenght);
  return array[selectedElement];
};

// Math.trunc ramère le résultat a sa décimale, ce qui revient à un Rounddown.
// la notion de array.lenght comprend-t-elle qu'il s'agit de l'array  entre "()" de pickMystery ?

function pickMystery() {
  const suspect = selectRandom(suspectsArray);
  const room = selectRandom(roomsArray);
  const weapon = selectRandom(weaponsArray);

  return {suspect: suspect, room: room, weapon: weapon};
};


/* ci-après ma première version :

function pickMystery() {
selectRandom.suspectsArray; selectRandom.roomsArray; selectRandom.weaponsArray
}

*/


// ITERATION 3

function revealMystery() {

    return `${pickMystery.suspect.firstName} ${PickMystery.suspect.lastName} killed Mr. Boddy using the ${PickMystery.weapon} in the ${PickMystery.room}!`

};




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    suspectsArray,
    roomsArray,
    weaponsArray,
    pickMystery,
    revealMystery,
    selectRandom
  };
}
