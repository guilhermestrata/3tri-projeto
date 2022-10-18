const btnMobile = document.getElementById('btn-mobile')
const btnMobile2 = document.getElementById('btn-mobile2')
function AddMenu(){
    const nav = document.getElementById('nav')
    nav.classList.add("act")
}
function RemoveMenu(){
    const nav = document.getElementById('nav')
    nav.classList.remove("act")
}
btnMobile.addEventListener('click', AddMenu)
btnMobile2.addEventListener('click', RemoveMenu)