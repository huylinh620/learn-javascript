function account(money) {
  let myMoney = money

  return  {
    show: function() {
      return `You have ${myMoney} in account`
    },
    add: function(amount) {
      myMoney += amount
    },
    remove: function(amount) {
      if (amount > myMoney) {
        return 'My money not enought'
      }
      myMoney -= amount
    }
  }
}

const linh = account(20)
console.log(linh.show())
console.log(linh.remove(25))
linh.remove(15)
console.log(linh.show())