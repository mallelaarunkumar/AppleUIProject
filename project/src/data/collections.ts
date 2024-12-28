export const collections = {
  series10: {
    id: 'series10',
    name: 'Apple Watch Series 10',
    description: 'The most advanced Apple Watch yet.',
    cases: [
      {
        id: 'aluminum-midnight',
        name: 'Aluminum Case Midnight',
        material: 'Aluminum',
        color: 'midnight',
        price: 39900,
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800'
      },
      {
        id: 'titanium-natural',
        name: 'Titanium Case Natural',
        material: 'Titanium',
        color: 'natural',
        price: 79900,
        image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800'
      },
      {
        id: 'stainless-gold',
        name: 'Stainless Steel Gold',
        material: 'Stainless Steel',
        color: 'gold',
        price: 59900,
        image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800'
      }
    ],
    bands: [
      {
        id: 'solo-loop-midnight',
        name: 'Solo Loop Midnight',
        type: 'Solo Loop',
        color: 'midnight',
        price: 4900,
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800'
      },
      {
        id: 'sport-band-black',
        name: 'Sport Band Black',
        type: 'Sport Band',
        color: 'black',
        price: 4900,
        image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800'
      },
      {
        id: 'braided-loop-green',
        name: 'Braided Solo Loop Green',
        type: 'Braided Solo Loop',
        color: 'green',
        price: 9900,
        image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800'
      }
    ]
  }
} as const;