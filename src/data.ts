export default {
  discountedGoods: [
    {
      imageURL: `${process.env.BASE_URL}img/blackberry-bluestem.png`,
      name: 'Blackberries Bluestem',
      rate: 4.4,
      price: [
        { name: 'regular', price: 6 },
        { name: 'sale', price: 4 },
      ],
      unit: '500g',
    },
    {
      imageURL: `${process.env.BASE_URL}img/blueberries.png`,
      name: 'Blueberries',
      rate: 4.4,
      price: [
        { name: 'regular', price: 6 },
        { name: 'sale', price: 4 },
      ],
      unit: '500g',
    },
    {
      imageURL: `${process.env.BASE_URL}img/white-grapes-muscat.png`,
      name: 'White grapes muscat',
      rate: 4.4,
      price: [
        { name: 'regular', price: 6 },
        { name: 'sale', price: 4 },
      ],
      unit: '500g',
    },
    {
      imageURL: `${process.env.BASE_URL}img/yellow-buckthorn.png`,
      name: 'Yellow buckthorn',
      rate: 4.4,
      price: [
        { name: 'regular', price: 6 },
        { name: 'sale', price: 4 },
      ],
      unit: '500g',
    },
    {
      imageURL: `${process.env.BASE_URL}img/assorted.png`,
      name: 'Assorted: black, red, spotty and string beans',
      rate: 4.4,
      price: [
        { name: 'regular', price: 6 },
        { name: 'sale', price: 4 },
      ],
      unit: '500g',
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
}
