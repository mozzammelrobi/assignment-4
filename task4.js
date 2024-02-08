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
const result = password({ name: 'rahat' , birthYear: 202, siteName:'Facebook' } )
console.log('the password is:', result)