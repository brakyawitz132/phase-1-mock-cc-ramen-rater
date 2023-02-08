// write your code here

let ramenMenu = document.querySelector("#ramen-menu")
let ramenImg = document.querySelector(".detail-image")
let ramenName = document.querySelector(".name")
let restaurant = document.querySelector(".restaurant")
let rating = document.querySelector("#rating-display")
let comment = document.querySelector("#comment-display")

const form = document.querySelector("#new-ramen")



fetch("http://localhost:3000/ramens")
.then(resp => resp.json())
.then(data => {
    data.forEach(ramen => displayRamen(ramen))
})

function displayRamen(ramen) {
    let menuImg = document.createElement("img")
    menuImg.src = ramen.image
    ramenMenu.appendChild(menuImg)

    menuImg.addEventListener("click", () => {
        ramenDetail(ramen)
    })
}

function ramenDetail(indiv) {
    ramenImg.src = indiv.image
    ramenName.textContent = indiv.name
    restaurant.textContent = indiv.restaurant
    rating.textContent = parseInt(indiv.rating)
    comment.textContent = indiv.comment
}

let newRamen = {}
let newName = document.querySelector("#new-name")
let newRestaurant = document.querySelector("#new-restaurant")
let newImg = document.querySelector("#new-image")
let newRating = document.querySelector("#new-rating")
let newComment = document.querySelector("#new-comment")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    newRamen.name = newName.value
    newRamen.restaurant = newRestaurant.value
    newRamen.image = newImg.value
    newRamen.rating = newRating.value
    newRamen.comment = newComment.value
    displayRamen(newRamen)
})


