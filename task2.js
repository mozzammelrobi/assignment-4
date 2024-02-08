/**
 * if the last leter (a, y, i , e , o , u, w) this is good name
 * 
 */

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
