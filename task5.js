function monthlySavings(arr , livingCost){
    if(!Array.isArray(arr) || typeof livingCost !== 'number'){
        return "Invalid Input"
    }  
    let totalIncome  =  0;
   
   for(const salary of arr){
   
    totalIncome  += salary;

    if(salary>=3000){
        const tax = salary * 0.2;
        const totalCost = tax + livingCost;
        totalIncome  -= totalCost;
    }
   }

return totalIncome <=0 ? "earn more" :  totalIncome;
}
const earnMoney = monthlySavings([1000, 2000, 3000] , 5000  )
console.log( earnMoney)