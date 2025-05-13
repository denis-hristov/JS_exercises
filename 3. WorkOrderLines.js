function averagePrice(data){
    let price = data.reduce((sum, rec) => sum + rec.PriceTotal,0)
    return price/data.length
}

const data = [
    { id: 1, item: "Laptop", PriceTotal: 1200 },
    { id: 2, item: "Mouse", PriceTotal: 25 },
    { id: 3, item: "Keyboard", PriceTotal: 45 },
    { id: 4, item: "Monitor", PriceTotal: 300 },
    { id: 5, item: "Desk", PriceTotal: 150 }
  ]
console.log(averagePrice(data))