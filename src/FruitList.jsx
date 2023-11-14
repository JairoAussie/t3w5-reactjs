// Array of fruit names:

let someFruit = [
    "mangoes",
    "pears",
    "oranges",
    "bananas",
    "strawberries",
    "apples"
  ];
export default function FruitList () {
    let fruitListItems = someFruit.map((fruit => <li>{fruit}</li>))
    return fruitListItems;
}

//   module.exports = FruitList