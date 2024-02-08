/*function signature/sample */
function calculateMoney(ticketSale) {
    if(typeof ticketSale !== "number" || ticketSale<0 ){
        return "please input number"
    }else{
        const stuff = 50 * 8;
        const cost = 500 + stuff
         const total =( ticketSale * 120 ) - cost;
          return total;
    }
    }
    const total = calculateMoney(2);
    console.log(total)