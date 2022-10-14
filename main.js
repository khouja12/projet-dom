var likes = Array.from(document.querySelectorAll('.fa-heart'));

// var log =document.getElementsByClassName('log');



for(let like of likes)(
like.addEventListener('click', function()
{
    if(like.style.color=="black")
      {like.style.color='red'}

      else
        like.style.color='black'
      

})
)









 






// console.log("like")


// for (let fav of favs)(
//     fav.addEventListener ('click',function(){
//     if (fav.style.color== "black")
//     {fav.style.color='red'}
//     else{
//         fav.style.color = 'black'
//     }
//     }));