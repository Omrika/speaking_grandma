var grandma = document.getElementById("grandma")
grandma.addEventListener("click", myFunction);

var grandchild = document.getElementById('grandchild')
grandchild.addEventListener('click', grandChildFunc ) //add function that im gonna call  here)

function moveRight() {
  grandma.style.position= 'relative'; 
  grandma.style.left = (parseInt(grandma.style.left) || 0) + 40 + 'px';
}

function hear() {
    if (parseInt(grandma.style.left) == 200) {
        alert('yes');
    }
}

function myFunction() {
  moveRight()  
  hear()
}



//when i click grandma i want her to move right until she's close enoough to grandchild to hear 
//when she reaches a certain point then the she yell's the right phrase to grandma 
//and then the game is over.

// center the grandchild img. then get the position next to it.. and when 
// the grandma gets to the position next to it. Then do something.
