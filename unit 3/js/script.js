var myObject = {
    price: 20.99,
    get_price: function() {
      return this.price;
    }
  };
  var customObject = Object.create(myObject);
  customObject.price = 19.99;
  console.log(customObject);

  delete customObject.price;
  console.log(customObject);
  console.log(customObject.get_price());