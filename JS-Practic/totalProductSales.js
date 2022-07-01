/*...======.....totalSales....=================================....  */

let cart = [
  {
    name: "safiq",
    shirt: 1000,
    shirtQuntity: 2,
    pant: 2000,
    pantQuntity: 3,
    shoe: 200,
    shoeQuntity: 2,
  },
  {
    name: "rafiq",
    shirt: 4000,
    shirtQuntity: 3,
    pant: 500,
    pantQuntity: 1,
    shoe: 400,
    shoeQuntity: 4,
  },
  {
    name: "abid",
    shirt: 5000,
    shirtQuntity: 4,
    pant: 1500,
    pantQuntity: 2,
    shoe: 100,
    shoeQuntity: 0,
  },
  {
    name: "jabid",
    shirt: 6000,
    shirtQuntity: 1,
    pant: 2500,
    pantQuntity: 1,
    shoe: 400,
    shoeQuntity: 4,
  },
  {
    name: "kabila",
    shirt: 7000,
    shirtQuntity: 0,
    pant: 3000,
    pantQuntity: 4,
    shoe: 600,
    shoeQuntity: 6,
  },
];
let cartDefult = 0;
function totalSales(salesData) {
  for (const product of salesData) {
    let customerTotalPrice =
      product.shirt * product.shirtQuntity +
      product.pant * product.pantQuntity +
      product.shoe * product.shoeQuntity;

    cartDefult = Math.round(cartDefult + customerTotalPrice);
  }

  return cartDefult;
}

const totalSalesRuslt = totalSales(cart); /* ------call function */
console.log(totalSalesRuslt);
