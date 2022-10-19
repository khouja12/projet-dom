var likes = Array.from(document.querySelectorAll('.fa-heart'));
var plusBtns=Array.from(document.querySelectorAll('.fa-plus-circle'));
var minusBtns=Array.from(document.querySelectorAll('.fa-minus-circle'));
var cards =Array.from(document.querySelectorAll('.card'));

                         


for(let like of likes)(
like.addEventListener('click', function()
{
    if(like.style.color=="black")
      {like.style.color='red'}

      else
        like.style.color='black'
      

})
)


                         



for(let plusBtn of plusBtns){
  plusBtn.addEventListener('click',function(){
    plusBtn.nextElementSibling.innerHTML++
    total()
  })
}





for (let minusBtn of minusBtns){
  minusBtn.addEventListener('click', function(){
    minusBtn.previousElementSibling.innerHTML>0?
    minusBtn.previousElementSibling.innerHTML -- : 
    null
    total()
  })
}
            




function total(){
  let qute = Array.from(document.querySelectorAll('.qute'));
  let price  = Array.from(document.querySelectorAll('.unitt-price'));
  let s = 0 ; 
  for (i = 0 ; i <price.length ; i ++) {
      s = s+price[i].innerHTML * qute[i].innerHTML 
  }
  document.getElementById('total-price').innerHTML=s
}
console.log(total)
