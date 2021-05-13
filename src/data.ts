export default {
  discountedGoods: [
    {
      id: 1,
      imageURL: `${process.env.BASE_URL}img/blackberry-bluestem.png`,
      name: 'Blackberries Bluestem',
      rate: 4.4,
      price: [
        { name: 'regular', price: 6 },
        { name: 'sale', price: 4 },
      ],
      unit: 'lb',
    },
    {
      id: 2,
      imageURL: `${process.env.BASE_URL}img/blueberries.png`,
      name: 'Blueberries',
      rate: 4.4,
      price: [
        { name: 'regular', price: 6 },
        { name: 'sale', price: 4 },
      ],
      unit: 'lb',
    },
    {
      id: 3,
      imageURL: `${process.env.BASE_URL}img/white-grapes-muscat.png`,
      name: 'White grapes muscat',
      rate: 4.4,
      price: [
        { name: 'regular', price: 6 },
        { name: 'sale', price: 4 },
      ],
      unit: 'lb',
    },
    {
      id: 4,
      imageURL: `${process.env.BASE_URL}img/yellow-buckthorn.png`,
      name: 'Yellow buckthorn',
      rate: 4.4,
      price: [
        { name: 'regular', price: 6 },
        { name: 'sale', price: 4 },
      ],
      unit: 'lb',
    },
    {
      id: 5,
      imageURL: `${process.env.BASE_URL}img/assorted.png`,
      name: 'Assorted: black, red, spotty and string beans',
      rate: 4.4,
      price: [
        { name: 'regular', price: 6 },
        { name: 'sale', price: 4 },
      ],
      unit: 'lb',
    },
  ],

  recipes: [
    {
      id: 1,
      title: 'Watermelon',
      subtitle: 'Recipes with Anna Grace',
      imageURL: `${process.env.BASE_URL}img/watermelon.png`,
    },
    {
      id: 2,
      title: 'Asparagus',
      subtitle: 'Recipes with Anna Grace',
      imageURL: `${process.env.BASE_URL}img/asparagus.png`,
    },
  ],

  newAdditions: [
    {
      id: 11,
      imageURL: `${process.env.BASE_URL}img/assorted.png`,
      name: 'Assorted: black, red, spotty and string beans',
      rate: 4.4,
      price: [{ name: 'regular', price: 6 }],
      unit: 'lb',
    },
    {
      id: 12,
      imageURL: `${process.env.BASE_URL}img/black-beans.png`,
      name: 'Black beans',
      rate: 4.4,
      price: [{ name: 'regular', price: 6 }],
      unit: 'lb',
    },
    {
      id: 13,
      imageURL: `${process.env.BASE_URL}img/red-beans.png`,
      name: 'Red beans',
      rate: 4.4,
      price: [{ name: 'regular', price: 6 }],
      unit: 'lb',
    },
    {
      id: 14,
      imageURL: `${process.env.BASE_URL}img/pistachios.png`,
      name: 'Roasted peeled pistachios',
      rate: 4.4,
      price: [{ name: 'regular', price: 6 }],
      unit: 'lb',
    },
    {
      id: 15,
      imageURL: `${process.env.BASE_URL}img/blueberries.png`,
      name: 'Blueberries',
      rate: 4.4,
      price: [{ name: 'regular', price: 6 }],
      unit: 'lb',
    },
  ],
}
