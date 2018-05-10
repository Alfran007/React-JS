module.exports = {
  // Load Mock Product Data Into localStorage
  init: function () {
    localStorage.clear();
    localStorage.setItem('product', JSON.stringify([
      {
        id: '0011001',
        name: 'Net Cost Calculator',
        // image: 'heapd_ph.jpg',
        description: '3 Steps to calculate your Net Cost.',
        variants: [
          {
            sku: '123123',
            type: 'India',
            price: 950,
            importfee: 5,
            discount: 10,
            inventory: 1

          },
          {
            sku: '123124',
            type: 'UK',
            price: 955,
            importfee: 3,
            discount: 7.5,
            inventory: 5
          },
          {
            sku: '1231235',
            type: 'US',
            price: 980,
            importfee: 0,
            discount: 2,
            inventory: 3
          }
        ]
      }
    ]));
  }

};