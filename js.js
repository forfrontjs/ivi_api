let new_one = document.querySelectorAll('.new__one')
let new_all = document.querySelector('.new__all')


const showCards= ()=>{
    fetch('http://localhost:3000/films')
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        for(i = 0; i <=6; i++){
            new_all.innerHTML += `
            <div class="new__one">
                <div class="new__back"></div>
                <h4 class="new__one__title">${data[i].title}</h4>
                <p class="new__pod">Подписка</p>
            </div>
            `
        }
    })
}

showCards()