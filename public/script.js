let bob = {
  name: 'Bob',
  balance: 10
}

function add10(a){
  a.balance+= 10; // a is a pointer/reference to bob
}

console.log(bob.balance);//10
add10(bob);
console.log(bob.balance);//20

let obj2 = bob;

//obj2 and bob are the same variable

obj2.name = "Shelly";

console.log(bob.name);//Shelly

//if you need to create a new object and copy its values use Object.assign

let obj3 = {};
Object.assign(obj3, bob);

obj3.name = 'Smith';

console.log(bob.name, obj3.name);//Shelly, Smith

      function drawTable(records) {
        let result = document.querySelector("#result");
        //add html code inside of result
        let html = ' '; // create html string
        for (let record of records) {
          //build html string
          html += `<tr>
          <td>${record.id}</td>
          <td>${record.name}</td>
          <td>${record.brewery_type}</td>
          <td>${record.website_url}</td>    
        </tr>`;
        }
        result.innerHTML = html; //add html string to DOM
      }

      //testing the function
      drawTable([
        {
          id: 1,
          name: "bob's",
          brewery_type: "fire",
          website_url: "https://bobs.com",
        },
      ]);

//function MUST be declared async
// async function getData(url){
//    try{
//      let response = await fetch(url);//1. Send http request and get response
//      let result = await response.json();//2. Get data from response
//      drawTable(result);// 3. Do something with the data
//   }catch(e){
//       console.log(e);//catch and log any errors
//   }
// }
// getData("https://api.openbrewerydb.org/v1/breweries")
// //get client data using navigator

console.log(window.navigator.cookieEnabled);
console.log(window.navigator.onLine);
console.log(navigator.appVersion);
console.log(navigator.userAgent)
console.log(navigator.platform);

//get window metadata using window
console.log(window.location.href);//get full url
console.log(window.location.protocol);
console.log(window.location.hostname);

function redirect(url){
  window.location.assign(url);//redirects the page to another url
}

window.onload = function(event){
   console.log("Page has loaded");
   //do other javascript stuff here
}

