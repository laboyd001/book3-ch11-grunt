console.log("howdy")

fetch("http://localhost:3000/food")
.then( (foodData) => foodData.json() )
.then ((realData) => {
  console.table(realData)
  let foodList = document.querySelector("#foodList")
  realData.forEach((food) => {
    foodList.innerHTML += `<p> ${food.name}</p>`
  });
})

fetch("http://localhost:3000/drink")
.then( (drinkData) => drinkData.json() )
.then ((realData) => {
  console.table(realData)
})




