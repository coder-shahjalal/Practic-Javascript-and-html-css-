/* --------======-=========--------deliveryCost-------==========---==============================---- */
let defultDeliveryCost = 0; /*  ------------Defult velue  ------------ */

/*  -========main function start  ============ */
function deliveryCost(bookOrder) {
  /*  ------declear Delivery charge ----- */

  let deliveryCostFistSolt = 100; /* 1-100 delivery cost  */
  let deliveryCostSecondSolt = 80; /* 101-200 delivery cost  */
  let deliveryCostthirdSolt = 50; /* 201-unlimited  delivery cost  */

  /*  ------fist solt  Delivery charge function ------- */
  function firstDeliveryCostCal(firstSoltCal) {
    let firstSoltCalCost = firstSoltCal * deliveryCostFistSolt;
    defultDeliveryCost = firstSoltCalCost;
    return defultDeliveryCost;
  }

  /*  -------second solt  Delivery charge function ------- */
  function secondDeliveryCostCal(secondSoltCal) {
    let firstSoltDeliveryCost = firstDeliveryCostCal(deliveryCostFistSolt);
    let secondSoltSeparationFirstSolt = secondSoltCal - 100;
    let secondSoltCalCost =
      secondSoltSeparationFirstSolt * deliveryCostSecondSolt;
    let secondSoltCalCostTotal = secondSoltCalCost + firstSoltDeliveryCost;
    deliveryCostSecondSolt = secondSoltCalCostTotal;
    return deliveryCostSecondSolt;
  }

  //   /*  -----fist condition function ------ */

  if (bookOrder <= 100) {
    const fistDeliveryCostTotal = firstDeliveryCostCal(bookOrder);
    defultDeliveryCost = fistDeliveryCostTotal;
    return defultDeliveryCost;
  } else if (bookOrder <= 200) {
    /*  ------fsecond condition function ------- */
    const secondDeliveryCostTotal = secondDeliveryCostCal(bookOrder);
    defultDeliveryCost = secondDeliveryCostTotal;
    return defultDeliveryCost;
  } else if (bookOrder >= 201) {
    /*  -------third  condition function -------- */
    let thirdSoltSeparationFirstSecond = bookOrder - 200;
    let thirdSoltDeliveryCost =
      thirdSoltSeparationFirstSecond * deliveryCostthirdSolt;
    const secondDeliveryCostTotal = secondDeliveryCostCal(200);
    let totalThirdSoltDeliveryCost = Math.round(
      thirdSoltDeliveryCost + secondDeliveryCostTotal
    );
    defultDeliveryCost = totalThirdSoltDeliveryCost;
    return defultDeliveryCost;
  }
}

/*  -=========main function end   ============================================== */

const OrderDeliveryTotalCost = deliveryCost(300); /*  order quntity   */
console.log(OrderDeliveryTotalCost);
