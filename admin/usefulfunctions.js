
function like(){
  if(myImage.getAttribute('src') === '/icons/heart.svg'){
  document.getElementById('myImage')
    .src="/icons/heart-fill.svg";
  document.getElementById('heart')
    .style.backgroundColor = "#ff0000";
    
   let pot = localStorage.getItem('TITLE')
  let uem = localStorage.getItem('UEM')
var potato = db.collection("posts").doc(pot);
var tomato = db.collection("users").doc(uem).collection("posts").doc(pot);
const increment = firebase.firestore.FieldValue.increment(1);
 potato.update({
    Likes: increment
});
 tomato.update({
    Likes: increment
});
            var lik = localStorage.getItem('LIK')
            var nlik = Number(lik) + 1
            localStorage.setItem('LIK', nlik)

  }
  else {
  document.getElementById('myImage')
    .src="/icons/heart.svg";
  document.getElementById('heart')
    .style.backgroundColor = "#bababa"
    
   let pot = localStorage.getItem('TITLE')
  let uem = localStorage.getItem('UEM')
var potato = db.collection("posts").doc(pot);
var tomato = db.collection("users").doc(uem).collection("posts").doc(pot);
const deincrement = firebase.firestore.FieldValue.increment(-1);
    
 potato.update({
    Likes: deincrement
});
 tomato.update({
    Likes: deincrement
});
            var lik = localStorage.getItem('LIK')
            var nlik = Number(lik) - 1
            localStorage.setItem('LIK', nlik)

  }
}

function hover(color,message,buttonClass,imageClass,imageChange){
  color = str(color)
  message = str(message)
  buttonClass = str(buttonClass)
  imageClass = str(imageClass)
  imageChange = str(imageChange)
  document.getElementById(buttonClass)
  .style.backgroundColor=color
  document.getElementById(imageClass)
  .src=imageChange
  
}