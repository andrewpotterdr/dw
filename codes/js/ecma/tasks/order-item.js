if (!String.prototype.padEnd) {
    String.prototype.padEnd = function padEnd(targetLength,padString) {
        targetLength = targetLength>>0; //floor if number or convert non-number to 0;
        padString = String(padString || ' ');
        if (this.length > targetLength) {
            return String(this);
        }
        else {
            targetLength = targetLength-this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
            }
            return String(this) + padString.slice(0,targetLength);
        }
    };
}

if (!String.prototype.padStart) {
    String.prototype.padStart = function padStart(targetLength,padString) {
        targetLength = targetLength>>0; //floor if number or convert non-number to 0;
        padString = String(padString || ' ');
        if (this.length > targetLength) {
            return String(this);
        }
        else {
            targetLength = targetLength-this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
            }
            return padString.slice(0,targetLength) + String(this);
        }
    };
}

class Product {
  constructor(id, name, price, categories){
    this.id = id
    this.name = name
    this.price = price || 0.0
    this.categories = categories || []
  }

  getNameCompact(){
    return this.name.substr(0, 10).padEnd(10)
  }
}

class Item {
  constructor(product){
    this.product = product
    this.quantity = 1
  }

  total(){
    return this.product.price * this.quantity
  }
}

class Order {
  constructor(){
    this.items = {}
  }

  addProduct(product){
    let id = product.id
    if(this.items[id]){
      this.items[id].quantity += 1
    }else{
      this.items[id] = new Item(product)
    }
  }

  getItems(category){
    if(category){
      return Object.values(this.items)
        .filter(item => item.product.categories.includes(category))
    }else{
      return Object.values(this.items)
    }
  }

  total(category){
    return this.getItems(category)
      .reduce((sum, item) => sum + item.total(), 0)
  }

  toString(){
    return  Object.values(this.items)
      .map((item, index) => {
        let number = index+1
        let name = item.product.getNameCompact()
        let quantity = `${item.quantity.toString().padStart(3, '0')} UN`
        let price = Number(item.product.price).toFixed(2).toString().padStart(6)
        let total = Number(item.total()).toFixed(2).toString().padStart(6)
        return `${number} ${name} ${quantity} ${price} ${total}`
      })
      .join('\n')
  }
}

pencil = new Product(1, 'Lápis', 1.5)
pen  = new Product(2, 'Caneta', 3)
notebook = new Product(3, 'Caderno', 20)

order = new Order()
order.addProduct(pencil)
order.addProduct(pencil)
order.addProduct(pen)
order.addProduct(notebook)
console.log(order.total()) //=> 26

pencil = new Product(1, 'Lápis', 1.5, ['office'])
pen  = new Product(2, 'Caneta', 3, ['office'])
notebook = new Product(3, 'Caderno', 20, ['office'])
flashDrive = new Product(4, 'USB Flash Drive', 40, ['eletronics', 'office'])
headPhone = new Product(5, 'Headphone', 40, ['eletronics'])

order = new Order()
order.addProduct(pencil)
order.addProduct(pencil)
order.addProduct(pen)
order.addProduct(notebook)
order.addProduct(flashDrive)
order.addProduct(flashDrive)
order.addProduct(headPhone)
console.log(order.toString())
//=>
// 1 Lápis      002 UN   1.50   3.00
// 2 Caneta     001 UN   3.00   3.00
// 3 Caderno    001 UN  20.00  20.00
// 4 USB Flash  002 UN  40.00  80.00
// 5 Headphone  001 UN  40.00  40.00
console.log(order.total()) //=> 146
console.log(order.total('eletronics')) //=> 120
console.log(order.total('office')) //=> 106
