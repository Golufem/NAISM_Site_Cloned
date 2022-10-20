const popup =document.getElementById('colored');
const popupmother = document.getElementById('popup')
console.log(popup);
popup.addEventListener('click',function remove(event){
    popup.style.display= "block";
 //    popup.style.zIndex= "-5";
     
 })
popupmother.addEventListener('click',function remove(event){
   popupmother.style.display= "none";
//    popup.style.zIndex= "-5";
    
})

console.log(popupmother);

