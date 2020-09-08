let userid=document.getElementById("userid");
let coursename=document.getElementById("coursename");
let fee=document.getElementById("fee");
let name=document.getElementById("name");
let email=document.getElementById("email");
let phone=document.getElementById("phone");
let package=document.getElementById("package");
let score=document.getElementById("score");
let addBtn = document.getElementById("addBtn");


let database=firebase.database();
let rootref=database.ref('users');

addBtn.addEventListener('click',(e)=>{
e.preventDefault();
rootref.child(userid.value).set({
    coursename:coursename.value,
    fee:fee.value,
    name:name.value,
    email:email.value,
    contact:phone.value,
    package:package.value,
    score:score.value
    });
    location.reload();
});











































// var database = firebase.database();
// let userid=document.getElementById("userid").value;


















































// let name=document.getElementById("name").value;
// let coursename=document.getElementById("coursename").value;
// let fee=document.getElementById("fee").value;
// let details=document.getElementById("details").value;
// let score=document.getElementById("score").value;
// let addBtn = document.getElementById("addBtn");
// addBtn.addEventListener("click", function(e) {
//     e.preventDefault();
// writeData(userid,name,coursename,fee,details,score);
// });
// function writeData(userid,name,coursename,fee,details,score){
//     database.ref('users/' + userid).set({
//         nameofuser:name,
//         course:coursename,
//         feeofcourse:fee,
//         detailsofcourse:details,
//         scoreofcourse:score
//     })
//     // getData();
// }
// // function getData(){
// //     firebase.database().ref('/').once('value',function(snapshot){
// //             snapshot.forEach(function(childSnapshot) {
// //               var childkey=childSnapshot.key;
// //               var childdata=childSnapshot.val();
// //               document.getElementById("data").innerHTML=childdata['name']+" ,"+childdata['age'] 
// //             });

// //     })
// // }
