 
  const menu = [{
    id: "item1",
    itemName: "Butter Roti",
    rate: 20,
    taxes: [{
      name: "Service Charge",
      rate: 10,
      isInPercent: true,
    }, {
      name: "GST",
      rate: 18,
      isInPercent: true,
    }],
    category: {
      categoryId: "C2"
    }
  }, {
    id: "item2",
    itemName: "Paneer Butter Masala",
    rate: 120,
    taxes: [{
      name: "Service Charge",
      rate: 10,
      isInPercent: true,
    }, {
      name: "GST",
      rate: 18,
      isInPercent: true,
    }, {
      name: "Service Tax",
      rate: 10,
      isInPercent: true,
    }],
    category: {
      categoryId: "C4"
    }
  }, {
    id: "item3",
    itemName: "Masala Dosai",
    rate: 50,
    taxes: [{
      name: "GST",
      rate: 18,
      isInPercent: true,
    }, {
      name: "Service Tax",
      rate: 10,
      isInPercent: true,
    }],
    category: {
      categoryId: "C3"
    }
  }, {
    id: "item4",
    itemName: "Dosai Platter",
    rate: 150,
    taxes: [{
      name: "Service Tax",
      rate: 10,
      isInPercent: true,
    }],
    category: {
      categoryId: "C1"
    }
  }];

  const bill = {
    id: "B1",
    billNumber: 1,
    openTime: "06 Nov 2020 14:19",
    customerName: "CodeQuotient",
    billItems: [{
      id: "item2",
      quantity: 3,
      discount: {
        rate: 10,
        isInPercent: false,
      }
    }, {
      id: "item1",
      quantity: 9,
      discount: {
        rate: 10,
        isInPercent: true,
      }
    }, {
      id: "item4",
      quantity: 2,
      discount: {
        rate: 15,
        isInPercent: true,
      }
    }]}