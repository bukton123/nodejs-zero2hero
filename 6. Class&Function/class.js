// class es5
const obj = {
  name: 'wick',
  getName: function () {
    // this.name = 'test'
    console.log(this.name)
  }
}

obj.getName()

// class es6
class Summery {
  constructor (a, b) {
    console.log(a, b)

    this.a = a
    this.b = b
  }

  total () {
    return this.a + this.b
  }

  gg () {

  }

  static getsum (a, b) {
    console.log(a, b)
  }
}


const mySummary = new Summery(1, 2)
console.log(mySummary.total())

Summery.getsum(1,3)

