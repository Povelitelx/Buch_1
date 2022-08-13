//
//
// document.getElementById('$').onclick = function() {
//     document.getElementById('#').classList. toggle('burger_nav_on');
// }
//
// document.getElementById("li_click").onclick = function() {
//     document.getElementById('login_signup_absolut').classList. add('login_signup_absolut_two')
// }
//
// document.getElementById("cross_id").onclick = function() {
//     document.getElementById('login_signup_absolut').classList.remove('login_signup_absolut_two')
// }

const burger = document.getElementById('$')
const burgerNav = document.getElementById('#')
const contactUsClick = document.getElementById('contactUsClick')
const contactUsNavPanel = document.getElementById('contactUsNavPanel')
const cross = document.getElementById('cross_id')

burger.onclick = () => {
    burgerNav.classList.toggle('burger_nav_on')
}
contactUsClick.onclick = () => {
    contactUsNavPanel.classList.add('login_signup_absolut_two')
}

contactUsClick.onclick = () => {
    contactUsNavPanel.classList.add('login_signup_absolut_two')
}
cross.onclick = () => {
    contactUsNavPanel.classList.remove('login_signup_absolut_two')
}
// arr[i].push(Math.round(Math.random() * 100))

// let arr = []
//
// const her = (length) => {
//
//
//     for (let i = 0; i < length; i++) {
//        arr.push(Math.round(Math.random() * 100))
//     }
//     return arr
//
// }
//
// console.log(her(10))

// const newArr = arr.filter((item) => {
//     return  item > 10
// })
//
// console.log(newArr)

// const newArr2 = arr.map((item) => {
//     return item * 20 /3
// })
//
// console.log(newArr2)

// arr.forEach((item) => {
//     return item * 20 /3
// })
//
// console.log(arr)






