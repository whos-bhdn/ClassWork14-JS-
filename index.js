const form1 = document.forms.form1
// console.log(form1)
// form1.elements.inp1.addEventListener('input', (e) => {
    // form1.elements.btn.innerText = e.target.value
    // console.log(e.target.value)
// })

const forms = document.forms;
const formsArray = [...forms];
formsArray.forEach( form => {
    form.elements.inp1?.addEventListener('input', (e) => {
        form.elements.btn.innerText = e.target.value;
        form.elements.inp2.value = e.target.value;
    })

    if(form.name === 'form3'){
        form.addEventListener('input', (e) => {
            for (let i = 0; i < form.elements.length; i++) {
               if(form.elements[i].checked){
                   document.body.style.background = form.elements[i].value
               }
            }
        }) 
    }
    if(form.name === 'form4') {
        form.elements.send.addEventListener('click', (e) => {
            if(form.elements.pass1.value !== form.elements.pass2.value){
                console.log('not match')
            } else {document.body.style.background = 'green'}
        })
     }
    if(form.elements.email.value.includes('@')) {
        console.log('Email is right')
    }
})


// form4.elements.pass1.addEventListener('input', (e) => {
//     form
// })

