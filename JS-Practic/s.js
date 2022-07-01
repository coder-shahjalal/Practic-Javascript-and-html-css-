// function findestLargest(first, second, thred) {
//   if (first > second && first > thred) {
//     // console.log("first is bigger");
//     return first;
//   } else if (second > first && second > thred) {
//     // console.log("second is bigger");
//     return second;
//   } else {
//     // console.log("thred is bigger");
//     return thred;
//   }
// }

// // const lerget = findestLargest(234, 635, 46);
// // console.log(lerget);

// // function findestsmallest(first, second, thred) {
// //   if (first < second && first < thred) {
// //     // console.log("first is bigger");
// //     return first;
// //   } else if (second < first && second < thred) {
// //     // console.log("second is bigger");
// //     return second;
// //   } else {
// //     // console.log("thred is bigger");
// //     return thred;
// //   }
// // }

// // const smallest = findestsmallest(8, 635, 46);
// // console.log(smallest);

// // let phones = [
// //   { phone: "smasung", price: 120000, storage: "120gb", ram: "16gb" },
// //   { phone: "nokia", price: 20000, storage: "120gb", ram: "16gb" },
// //   { phone: "oppo", price: 30000, storage: "120gb", ram: "16gb" },
// //   { phone: "xaomi", price: 50000, storage: "120gb", ram: "16gb" },
// //   { phone: "iphon", price: 10000, storage: "120gb", ram: "16gb" },
// // ];
// // let chepest = phones[0];
// // for (const phone of phones) {
// //   if (phone.price < chepest.price) {
// //     chepest = phone;
// //   }
// // }
// // console.log(chepest.phone);

// /*

// decleair a arrry obeject
// get a variable name and set defoult velo = arry name [0]

// and for of loop
// if codition (n > arry variable){
//   arry varibale = n
// }

// */

// const laptops = [
//   {
//     laptop: "hp",
//     proccesor: "intel3i",
//     hdd: "120gb",
//     ram: "12gb",
//     price: 50000,
//   },
//   {
//     laptop: "dell",
//     proccesor: "amd",
//     hdd: "120gb",
//     ram: "12gb",
//     price: 70000,
//   },
//   {
//     laptop: "fusitusu",
//     proccesor: "intel5i",
//     hdd: "120gb",
//     ram: "12gb",
//     price: 30500,
//   },
//   {
//     laptop: "doyel",
//     proccesor: "intel7i",
//     hdd: "120gb",
//     ram: "12gb",
//     price: 56000,
//   },
//   {
//     laptop: "macbook",
//     proccesor: "amd rayzan 5",
//     hdd: "120gb",
//     ram: "12gb",
//     price: 150000,
//   },
//   {
//     laptop: "lenevo",
//     proccesor: "intel9i",
//     hdd: "120gb",
//     ram: "12gb",
//     price: 45000,
//   },
// ];

// let laptobsBigPrice = laptops[0];
// for (const laptop of laptops) {
//   if (laptop.price > laptobsBigPrice.price) {
//     laptobsBigPrice = laptop;
//   }
// }
// console.log(laptobsBigPrice);

// const cart = [
//   {
//     laptop: "hp",
//     proccesor: "intel3i",
//     hdd: "120gb",
//     ram: "12gb",
//     price: 50001,
//     quntety: 1,
//   },
//   {
//     laptop: "dell",
//     proccesor: "amd",
//     hdd: "120gb",
//     ram: "12gb",
//     price: 70001,
//     quntety: 3,
//   },
//   {
//     laptop: "fusitusu",
//     proccesor: "intel5i",
//     hdd: "120gb",
//     ram: "12gb",
//     price: 30501,
//     quntety: 6,
//   },
//   {
//     laptop: "doyel",
//     proccesor: "intel7i",
//     hdd: "120gb",
//     ram: "12gb",
//     price: 56001,
//     quntety: 5,
//   },
//   {
//     laptop: "macbook",
//     proccesor: "amd rayzan 5",
//     hdd: "120gb",
//     ram: "12gb",
//     price: 150001,
//     quntety: 2,
//   },
//   {
//     laptop: "lenevo",
//     proccesor: "intel9i",
//     hdd: "120gb",
//     ram: "12gb",
//     price: 45001,
//     quntety: 3,
//   },
// ];

// let products = 0;
// for (const product of cart) {
//   const totalProductPrice = product.price * product.quntety;
//   products = products + totalProductPrice;
// }

// console.log(products);
const totalSqrPrice = 0;
function squerFeetPrice(sqr) {
  const fistTenSqurFeetPrice = 50;
  const secondsqurFeetPrice = 100;
  const thirdsqurFeetPrice = 200;

  if (sqr <= 10) {
    let fistSqr = sqr * fistTenSqurFeetPrice;
    return fistSqr;
  } else if (sqr <= 20) {
    let getSqr = sqr - 10;
    let fistTen = 10 * fistTenSqurFeetPrice;
    let secondSqrprice = getSqr * secondsqurFeetPrice;
    let totallUnderTwentyPrice = secondSqrprice + fistTen;
    return totallUnderTwentyPrice;
  } else {
    let
    let getfistSqr = sqr - 10;
    let fistPrices = getfistSqr * secondsqurFeetPrice;
    let getSocenSqr = getfistSqr - 10;
    let secoendSqrPrice = getSocenSqr * secondsqurFeetPrice;
    let thirdSqr = sqr - getSocenSqr;
    let thirdSqrPrice = thirdSqr * thirdsqurFeetPrice;
    const totallthirdPrice = fistPrices + secoendSqrPrice + thirdSqrPrice;
    return totallthirdPrice;
  }
}

const totalsqr = squerFeetPrice(20);
console.log(totalsqr);
