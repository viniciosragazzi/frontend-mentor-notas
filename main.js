let notes = document.querySelectorAll('.numbers .number')
let n ;
notes.forEach((note)=>{
    note.addEventListener('click', (e)=>{
        notes.forEach((note)=>{
            note.classList.remove('selected')
        })
            e.target.classList.add('selected')
             n = e.target.innerText
    })
})


let submit = document.querySelector('.submit')
let screen1 = document.querySelector('.component.home')
let screen2 = document.querySelector('.component.tanks')
let numberSelect = document.querySelector('#number-selected')

submit.addEventListener('click', ()=>{
        screen1.classList.add('none')
        screen2.classList.remove('none')
        numberSelect.textContent = n
})
