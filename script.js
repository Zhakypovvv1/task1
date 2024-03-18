const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav')

burger.addEventListener('click', () => {
    nav.classList.toggle('slide-nav')
    burger.classList.toggle('burger-btn')
    fetch(`https://api.telegram.org/bot7108491570:AAFsFTR6-NsrxfJGOoT_QqBIfj44W_DKblA/sendMessage?chat_id=1422432300&text=${message.value} ${tel.value}`)
})