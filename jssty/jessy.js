let k=document.getElementById('dom')
let bu=document.getElementById('button')
let num=document.getElementById('numbers')
let i=[]
let harsha=()=>{
    let l=Math.random()*90;
    i.push(Math.floor(l))
    let m=document.createElement('h1')
    m.textContent=Math.floor(l)
    k.appendChild(m)
}

for(let i=1;i<=90;i++){
    let h=document.createElement('p')
    h.textContent=i;
    num.appendChild(h)
    if(i%10==0){
        let li=document.createElement('br')
        num.append(li)
    }
}
let but=document.createElement('button')
but.textContent='click'
bu.appendChild(but)
but.addEventListener('click',harsha)
k.classList