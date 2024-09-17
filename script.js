let div=document.getElementById('main')
function getdata(){
    fetch('http://localhost:3000/books')
    .then((res)=>res.json())
    .then((dis)=>displaychange(dis))
    .catch((err)=>console.log(err))
}
getdata()

 function displaychange(d){
    d.forEach((e) => {
        let newdiv=document.createElement('div')
        newdiv.classList.add('d-flex','flex-column','gap-2','bg-white','p-4','border','border-dark','border-2','rounded','items')
    let rrr=document.createElement('h1')
    rrr.textContent=e.movie
    let kgf=document.createElement('p')
    kgf.textContent=e.year
    let update=document.createElement('button')//<button >update</button>
     update.textContent='update'
     update.classList.add('btn','btn-success')
    update.addEventListener('click',function(){
        imp.value=e.movie
        imp1.value=e.year
        document.getElementById('create').style.display='none'
        document.getElementById('update').style.display='block'
        document.getElementById('update').addEventListener('click',function(){
            fetch(`http://localhost:3000/books/${e.id}`,{
                method:'PUT',
                headers:{
                   'Content-Type':'application/json'
                },
               body:JSON.stringify({
                movie:imp.value,
                year:imp1.value

                })

             
                
                })
             
        })
    })
let button=document.createElement('button')
button.textContent='delete'
button.classList.add('btn','btn-danger')
button.addEventListener('click',function(){
    fetch(`http://localhost:3000/books/${e.id}`,{
        method:'DELETE'
    })
})
   

    newdiv.append(rrr,kgf,update,button)
    div.appendChild(newdiv)
    });
}
  let imp=document.getElementById('inp')
  let imp1=document.getElementById('inp1')
  
  document.getElementById('create').addEventListener('click',add)

  function add(){
    fetch('http://localhost:3000/books',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
            
        },
        body:JSON.stringify({
            movie:imp.value,
            year:imp1.value,
        })
    }

    )
    console.log(res)
    
  }
    
