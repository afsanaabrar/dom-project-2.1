const tt=document.getElementById('btn');
tt.addEventListener('click',function(){
    const bgcolor=hex()
    const ty=document.getElementById('input');
    ty.value=bgcolor;
   
    document.body.style.backgroundColor=bgcolor;
// add copy function
 const tr=document.getElementById('btn2')
tr.addEventListener('click',function(){
    navigator.clipboard.writeText(ty.value)
})
})

function hex(){
    const red=Math.floor(Math.random()*255);
    const green=Math.floor(Math.random()*255);
    const yellow=Math.floor(Math.random()*255);
return `#${red.toString(16)}${green.toString(16)}${yellow.toString(16)}`
}