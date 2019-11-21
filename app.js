var search= document.getElementById('search');
 search.addEventListener('keypress' , e =>{
let searchusers=e.target.value;
username(searchusers);
 });


 let client_ID="Iv1.4c9616568c148c3c";
 let Client_secret="c1b176b89545d20d355007ea0c0d435929fb1ae0";


 function username(searchusers){
 window
 .fetch(`https://api.github.com/users/${searchusers}?clent_id=${client_ID}&client_secret=${Client_secret}`)
 .then(data => {
     data.json().then(user =>{
         console.log(user);
     }).catch(err => console.log(err));
 })
 .catch(err => console.log(err));
 }