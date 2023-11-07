let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Sour Patch Kids", price: 2.99},
    {product: "Skittles", price: 1.99},
    {product: "Hershey's Kisses", price: 4.49},
    {product: "Twizzlers", price: 2.49},
    {product: "Reese's Pieces", price: 3.29},
    {product: "Jelly Belly", price: 4.99}
    ];
   
    let cheap = products.filter(p => p.price < 4)

    //console.log(cheap)

    let candies = products.filter(p => p.product == "M&M")
    
    console.log(candies)


    let findCandy = products.filter(p => p.product == "Sweedish Fish")

    console.log(findCandy)