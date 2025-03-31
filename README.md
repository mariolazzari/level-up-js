# Level up: JavaScript

By LinkedIn Learning

## Available books

```js
class Book {
  constructor(title, author, isbn, copies) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.copies = copies;
  }

  getAviability() {
    if (this.copies === 0) {
      return "Out of stock";
    } else if (this.copies > 0 && this.copies <= 10) {
      return "Low Stock";
    } else {
      return "In Stock";
    }
  }

  sell(copies = 1) {
    if (this.copies >= copies) {
      this.copies -= copies;
      return `Sold ${copies} copies of ${this.title}.`;
    }

    return `Not enough copies of ${this.title} available.`;
  }

  restock(copies = 1) {
    this.copies += copies;
    return `Restocked ${copies} copies of ${this.title}.`;
  }
}
```

## Movie object

```js
class Movie {
  constructor(title, director, genre, year, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.year = year;
    this.rating = rating;
  }

  getOverview() {
    return `${this.title} is a ${this.genre} film directed by ${this.director}, released in ${this.year}. It has a rating of ${this.rating}.`;
  }
}
```

## Vegetarian dinner

```js
const menu = [
        {
          name: "Chicken parmesan",
          isVegetarian: false,
        },
        {
          name: "Stuffed shells",
          isVegetarian: true,
        },
        {
          name: "Spaghetti and meatballs",
          isVegetarian: false,
        },
        {
          name: "Tiramisu",
          isVegetarian: true,
        },
      ];

    function vegetarianMenu(menu) {
        const menuNode = document.querySelector("#menu");
        const vegetarianOptions = menu.filter(
          option => option.isVegetarian === true
        );
        vegetarianOptions.forEach(option => {
          let dish = document.createElement("li");
          dish.textContent = option.name;
          menuNode.appendChild(dish);
        });
      }

    vegetarianMenu(menu);
```

## Techncal book

```js
class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  // Getter
  get availability() {
    return this.getAvailability();
  }

  // Method
  getAvailability() {
    if (this.numCopies === 0) {
      return "Out of stock";
    } else if (this.numCopies < 10) {
      return "Low stock";
    }
    return "In stock";
  }

  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }

  restock(numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
  }
}

class TechnicalBook extends Book {
  constructor(title, author, ISBN, numCopies, edition) {
    super(title, author, ISBN, numCopies);
    this.edition = edition;
  }

  getEdition() {
    return `${this.title} edition: ${this.edition}`;
  }
}
```

## Private object

```js
const username = Symbol("username");
const password = Symbol("password");

const user = {
  [username]: "mario",
  [password]: "1234566",
  age: 27,
};

console.log(user.username); // undefined
console.log(user.password); // undefined
console.log(user[username]); // mario
```

## Ticking time

```js
const clock = document.querySelector("#clock");

(() => setInterval(() => {
          const date = new Date();
          const tick = date.toLocaleTimeString();

          clock.textContent = tick;
}, 1000))();
```

## Classroom attendance

```js
function getStudents(classroom) {
  const { hasTeachingAssistant, classList } = classroom;

  if (hasTeachingAssistant) {
    const [, , ...students] = classList;
    return students;
  }

  const [, ...students] = classList;
  return students;
}
```

## Dynamic colors

```js
const changeColor = color => () => {
    document.body.style.background = color;
};

const bgColorBlue = changeColor("#0f62f3");
const bgColorPink = changeColor("#ff7eb6");
const bgColorGreen = changeColor("#42be65");

document.querySelector("#blue").addEventListener("click", bgColorBlue);
document.querySelector("#pink").addEventListener("click", bgColorPink);
document.querySelector("#green").addEventListener("click", bgColorGreen);
```

## Coffee calculations

```js
function coffeeDate(coffeeArr) {
  const sum = coffeeArr.reduce(
    (totalCoffees, numCoffees) => (totalCoffees += numCoffees)
  );

  return `The total bill is $${sum * 1.25}`;
}

console.log(coffeeDate([2, 5, 7, 1, 4]));
```

## Food truck

```js
function foodTruckFestival(menus) {
    const flatMenus = menus.flat();

    const combinedMenu = new Set();
    flatMenus.forEach(item => combinedMenu.add(item));

    const menuNode = document.querySelector("#combined-menu");

    for (const item of combinedMenu) {
        const foodNode = document.createElement("li");
        foodNode.innerText = item;
        menuNode.appendChild(foodNode);
    }
}

foodTruckFestival([
    ["Tacos", "Burgers"],
    ["Pizza"],
    ["Burgers", "Fries"],
]);
```

## Train generator

```js
function* getStop() {
    yield "Poughkeepsie";
    yield "Newburgh";
    yield "Peekskill";
    yield "Yonkers";
    yield "Bronx";
    yield "Grand Central";
}

const nycTrainline = getStop();
const nextStopButton = document.querySelector("#next-stop");

nextStopButton.addEventListener('click', () => {
    let currStop = nycTrainline.next();
    if (currStop.done) {
        console.log("We made it!");
        nextStopButton.setAttribute("disabled", true);
    } else {
        console.log(currStop.value);
    }
})
```

## String permutations

```js
function numPermutations(letters) {
  if (letters.length === 1) {
    return 1;
  }
  return letters.length * numPermutations(letters.slice(1));
}

console.log(numPermutations("mario")); // 120
```

## Five friends

```js
async function getUsers() {
    const people = await fetch("https://randomuser.me/api/?results=5");
    const data = await people.json();
    const timeline = document.querySelector("#timeline");

    data.results.forEach(person => {
        const image = document.createElement("img");
        image.src = person.picture.medium;
        timeline.appendChild(image);
    });
}

getUsers();
```

## Urlify

```js
function urlify(blogTitle) {
  const punctuation = /[.,/#!$%^&*;:{}=!\-_`~()'"]/g;
  const blogTitleWithoutPunctuation = blogTitle.replace(punctuation, "");

  return blogTitleWithoutPunctuation.toLowerCase().trim().replaceAll(" ", "-");
}

console.log(urlify("How I Got Into Programming!!!"));
console.log(urlify("I've got a new job :)"));
```

## Password strenght

```js
function checkPassword(password) {
  const oneLower = /(?=.+[a-z])/;
  const oneUpper = /(?=.+[A-Z])/;
  const oneDigit = /(?=.+[0-9])/;
  const oneSpecial = /(?=.+[!@#$%^&*])/;
  const min8 = /(?=.{8,})/;

  const isValid =
    oneLower.test(password) &&
    oneUpper.test(password) &&
    oneDigit.test(password) &&
    oneSpecial.test(password) &&
    min8.test(password);

  return isValid ? "Valid Password" : "Invalid Password";
}

console.log(checkPassword("abc"));
console.log(checkPassword("9Ab!4567"));
```