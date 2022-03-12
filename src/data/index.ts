export default {
  recipes: [
    {
      id: 1,
      title: 'Watermelon',
      subtitle: 'Recipes with Anna Grace',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/fictolab.appspot.com/o/sprout%2Fwatermelon.png?alt=media&token=cf2c61b2-5ce5-4918-bc04-bb8bd0e02ddb',
    },
    {
      id: 2,
      title: 'Asparagus',
      subtitle: 'Recipes with Anna Grace',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/fictolab.appspot.com/o/sprout%2Fasparagus.png?alt=media&token=ef611b39-09b0-4a25-8579-45cea2ac1e0e',
    },
  ],

  news: {
    standard: {
      type: 'standard',
      title: 'Organic bar',
      description:
        'Especially suitable for athletes, but also ideal for preventing fatigue and loss of productivity',
      callToAction: 'Shop now',
      callToActionURL: '#',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/fictolab.appspot.com/o/sprout%2Fsnacks.png?alt=media&token=163ce1ac-d710-4a91-ab6e-4c59590d47d4',
    },
    coupon: {
      type: 'coupon',
      title: 'Spring coupon',
      coupon: 'FRUITS2021',
      discount: 10,
      description: 'Gives 10% off all seasonal fruits on your first purchase.',
    },
  },

  saleProducts: [
    {
      id: 1,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/fictolab.appspot.com/o/sprout%2Fblackberry-bluestem.png?alt=media',
      name: 'Blackberry bluestem',
      price: [
        {
          name: 'regular',
          price: 6,
        },
        {
          name: 'sale',
          price: 6 * 0.7,
        },
      ],
      unit: 'pound',
      rate: 5,
    },
    {
      id: 2,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/fictolab.appspot.com/o/sprout%2Fblueberries.png?alt=media',
      name: 'Blueberries',
      price: [
        {
          name: 'regular',
          price: 11,
        },
        {
          name: 'sale',
          price: 11 * 0.7,
        },
      ],
      unit: 'pound',
      rate: 5,
    },
    {
      id: 3,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/fictolab.appspot.com/o/sprout%2Fwhite-grapes-muscat.png?alt=media',
      name: 'White grapes muscat',
      price: [
        {
          name: 'regular',
          price: 9,
        },
        {
          name: 'sale',
          price: 9 * 0.7,
        },
      ],
      unit: 'pound',
      rate: 5,
    },
    {
      id: 4,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/fictolab.appspot.com/o/sprout%2Fyellow-buckthorn.png?alt=media',
      name: 'Yellow buckthorn',
      price: [
        {
          name: 'regular',
          price: 10,
        },
        {
          name: 'sale',
          price: 10 * 0.7,
        },
      ],
      unit: 'pound',
      rate: 4.5,
    },
    {
      id: 5,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/fictolab.appspot.com/o/sprout%2Fwhite-adriatic-figs.png?alt=media',
      name: 'White adriatic figs',
      price: [
        {
          name: 'regular',
          price: 4,
        },
        {
          name: 'sale',
          price: 4 * 0.7,
        },
      ],
      unit: 'pound',
      rate: 4.4,
    },
    {
      id: 6,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/fictolab.appspot.com/o/sprout%2Fnatural-mango.png?alt=media',
      name: 'Natural mango King size',
      price: [
        {
          name: 'regular',
          price: 12,
        },
        {
          name: 'sale',
          price: 12 * 0.7,
        },
      ],
      unit: 'pound',
      rate: 4.5,
    },
    {
      id: 7,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/fictolab.appspot.com/o/sprout%2Fgold-apricots.png?alt=media',
      name: 'Gold apricots Jumbo Limited edition',
      price: [
        {
          name: 'regular',
          price: 5.4,
        },
        {
          name: 'sale',
          price: 5.4 * 0.7,
        },
      ],
      unit: 'pound',
      rate: 4.5,
    },
  ],

  newProducts: [
    {
      id: 10,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/fictolab.appspot.com/o/sprout%2Fraisins-from-red-grapes.png?alt=media',
      name: 'Raisins from red grapes Extra series',
      price: [{ name: 'regular', price: 4 }],
      unit: 'pound',
      rate: 4.5,
    },
    {
      id: 11,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/fictolab.appspot.com/o/sprout%2Fpistachios.png?alt=media',
      name: 'Roasted peeled pistachios',
      price: [{ name: 'regular', price: 10 }],
      unit: 'pound',
      rate: 4.9,
    },
    {
      id: 12,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/fictolab.appspot.com/o/sprout%2Fred-beans.png?alt=media',
      name: 'Red beans',
      price: [{ name: 'regular', price: 7 }],
      unit: 'pound',
      rate: 5,
    },
    {
      id: 13,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/fictolab.appspot.com/o/sprout%2Fassorted.png?alt=media',
      name: 'Assorted: black, red, spotty and string beans',
      price: [{ name: 'regular', price: 9 }],
      unit: 'pound',
      rate: 5,
    },
    {
      id: 14,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/fictolab.appspot.com/o/sprout%2Fblack-beans.png?alt=media',
      name: 'Black beans',
      price: [{ name: 'regular', price: 12 }],
      unit: 'pound',
      rate: 4.9,
    },
    {
      id: 15,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/fictolab.appspot.com/o/sprout%2Fchocolate-apricots.png?alt=media',
      name: 'Chocolate apricots',
      price: [
        {
          name: 'regular',
          price: 2.6,
        },
      ],
      unit: 'pound',
      rate: 4.4,
    },
    {
      id: 16,
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/fictolab.appspot.com/o/sprout%2Fseedless-prune.png?alt=media',
      name: 'Seedless prune',
      price: [
        {
          name: 'regular',
          price: 3,
        },
      ],
      unit: 'pound',
      rate: 4.4,
    },
  ],
}
