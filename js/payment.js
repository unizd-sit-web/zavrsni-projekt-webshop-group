/*
=============
Order Button msg 
=============
 */

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    document.getElementsByClassName('btn-order')[0].addEventListener('click', orderClicked)
}

function orderClicked() {
    alert('Your order is complete!')
    document.location.href="index.html"
    
}