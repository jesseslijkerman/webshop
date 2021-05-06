var aantal = document.querySelector('.aantal')
var add = document.querySelector('.addtocart')

var afrekenen = document.querySelector('#hide')
var afrekenen2 = document.querySelector('#fakelink')

var scorekeeper = 0

function addToCart(){
    scorekeeper = scorekeeper + 1
    aantal.textContent = scorekeeper

    afrekenen.textContent = "Je hebt het product 'Nike Air Force 1' aan je winkelmand toegevoegd"
    afrekenen2.textContent = "Klik hier om af te rekenen."
}

add.addEventListener('click', addToCart)