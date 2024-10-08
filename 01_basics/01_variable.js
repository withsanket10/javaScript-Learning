const accountId = 144553 
let accountEmail = "sanketkumar.7@sanket.com"
var accountPassword = "Sanket@0987"
accountCity = "Mumbai"

// acccountId = 1234  Not Allowed

accountEmail = "sksk@sk.com"
accountPassword = "San@22020"
accountCity = "Goa"
let accountState

console.log(accountEmail);
/*
Prefer not to use var
Because of issue in block scope and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

