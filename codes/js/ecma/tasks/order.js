class Product{
  constructor(id, name, price, categories){
    this.id = id
    this.name = name
    this.price = price || 0.0
    this.categories = categories || []
  }
}

class Order {
  constructor(){
    this.products = []
  }

  addProduct(product){
    this.products.push(product)
  }

  total(){
    return this.products
            .reduce((sum, product) => sum + product.price, 0)
  }

  totalByCategory(category){
    return this.products
            .filter(product => product.categories.includes(category))
            .reduce((sum, product) => sum + product.price, 0)
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
console.log(order.total()) //=> 146
console.log(order.totalByCategory('eletronics')) //=> 120
console.log(order.totalByCategory('office')) //=> 106
