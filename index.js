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




    function checkName(name){
        if(typeof name !== 'string'){
            return "invalid"
        }
        else{
            const lastCharecter = ['a', 'e', 'i', 'o', 'u', 'w'];
            if(lastCharecter.includes(name.slice(-1).toLowerCase())){
                return "Good Name"
            }
            else{
                return "Bad Name"
            }
        }
      
    }
    



    function deleteInvalids(array){
        const result = [];
        if(!Array.isArray(array)){
            return "Invalid Array"
        }
        for(const number of array){
            if(typeof number === 'number' && !isNaN(number)){
                result.push(number);
            }
        }
        return result;
    }



    
    function password(obj) {
        if(typeof obj.birthYear !== 'number' || obj.birthYear.toString().length !== 4){
            return "invalid"
        }
       const name = obj.name;
       const birthYear = obj.birthYear;
       const siteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
       const genaratedPassword = siteName + '#'  + name + '@' + birthYear;
       return genaratedPassword;
    }




    function monthlySavings(arr , livingCost){
        if(!Array.isArray(arr) || typeof livingCost !== 'number'){
            return "Invalid Input"
        }  
        let totalIncome  =  0;
       
       for(const salary of arr){
       
        totalIncome  += salary;
    
        if(salary>=3000){
            const tax = salary * 20 / 100;
            const totalCost = tax + livingCost;
            totalIncome  -= totalCost;
        }
       }
    
    return totalIncome <=0 ? "earn more" :  totalIncome;
    }