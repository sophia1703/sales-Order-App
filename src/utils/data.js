 
  export const products = [
    {
      id:10,
      name: "Tea",
      skus: [
        { id: 248, selling_price: 54, max_retail_price: 44 },
        { id: 247, selling_price: 32, max_retail_price: 32 },
        { id: 246, selling_price: 23, max_retail_price: 21 }
      ]
    },
    {
        id: 11,
        name: "Bamboo",
        skus: [
            { id: 111, selling_price: 70, max_retail_price: 80 },
            { id: 112, selling_price: 40, max_retail_price: 50 },
            { id: 113, selling_price: 25, max_retail_price: 30 }
        ]
      },
      {
        id: 12,
        name: "Cycle",
        skus: [
            { id: 121, selling_price: 90, max_retail_price: 110 },
            { id: 122, selling_price: 70, max_retail_price: 100 },
            { id: 123, selling_price: 45, max_retail_price: 90}
        ]
      },
      {
        id: 13,
        name: "stock",
        skus: [
            { id: 131, selling_price: 70, max_retail_price: 80 },
            { id: 132, selling_price: 40, max_retail_price: 50 },
            { id: 133, selling_price: 25, max_retail_price: 30 }
        ]
      },
      {
        id: 14,
        name: "Laptop",
        skus: [
            { id: 141, selling_price: 70, max_retail_price: 80 },
            { id: 142, selling_price: 40, max_retail_price: 50 },
            { id: 143, selling_price: 25, max_retail_price: 30 }
        ]
      },
      {
        id: 15,
        name: "Bluetooth",
        skus: [
            { id: 151, selling_price: 100, max_retail_price: 300 },
            { id: 152, selling_price: 200, max_retail_price: 350 },
            { id: 153, selling_price: 250, max_retail_price: 300 }
        ]
      },
      {
        id: 16,
        name: "Mobile Phones",
        skus: [
            { id: 161, selling_price: 7000, max_retail_price: 8000 },
            { id: 162, selling_price: 4000, max_retail_price: 5000 },
            { id: 163, selling_price: 2005, max_retail_price: 3000 }
        ]
      },
      {
        id: 18,
        name: "Speakers",
        skus: [
            { id: 171, selling_price: 710, max_retail_price: 860 },
            { id: 172, selling_price: 420, max_retail_price: 590 },
            { id: 173, selling_price: 245, max_retail_price: 370 }
        ]
      },
      {
        id: 19,
        name: "Pen Drive",
        skus: [
            { id: 181, selling_price: 70, max_retail_price: 80 },
            { id: 182, selling_price: 40, max_retail_price: 50 },
            { id: 183, selling_price: 25, max_retail_price: 30 }
        ]
      },
      {
        id: 20,
        name: "Monitor",
        skus: [
            { id: 191, selling_price: 7099, max_retail_price: 8000 },
            { id: 192, selling_price: 4099, max_retail_price: 5000 },
            { id: 193, selling_price: 2599, max_retail_price: 3099 }
        ]
      }
 
  ];
  
   
  export const submitSaleOrder = async (formData) => {
    console.log("Submitted Sale Order:", formData);
  };

  const notPaidOrders = [];

  export const saveOrderToData = (order) => {
    notPaidOrders.push(order);
    console.log('Order saved:', order);
    console.log('Not paid orders:', notPaidOrders);
  };
