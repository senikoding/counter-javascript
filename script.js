let $dec = document.getElementById('decrement');
let $res = document.getElementById('reset');
let $inc = document.getElementById('increment');
let $num = document.getElementById('num');

let num  = 0;

$dec.addEventListener('click',()=>{
    num = num - 1;
    $num.innerHTML = num;
})

$res.addEventListener('click',()=>{
    num = 0;
    $num.innerHTML = num;
})

$inc.addEventListener('click',()=>{
    num = num + 1;
    $num.innerHTML = num;
})



