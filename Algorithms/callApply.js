const car1 = {
  brand: 'Porsche',
  getCarDescription: function (cost, year, color){
    console.log(`This car is a ${this.brand}.  The price is $${cost}.  The year is ${year}.  The color is ${color}.\n`)
  }
}

const car2 = {
  brand:'Lamborghini'
}

car1.getCarDescription(80000,2010,'blue')

//Use the call method to change the call context.  First argument is the new object that this should apply to
car1.getCarDescription.call(car2,200000,2013,'yellow' )

const car3 = {
  brand: 'Ford'
}

//Use the apply method
car1.getCarDescription.apply(car3,[35000,2012,'black'])