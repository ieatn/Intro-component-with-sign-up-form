const btn = document.getElementById('btn')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    const inputs = document.querySelectorAll('.form-group').value 
    console.log(inputs)
})
