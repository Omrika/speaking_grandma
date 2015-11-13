var grandma = document.getElementById("grandma")
grandma.addEventListener("click", myFunction);

function moveRight() {
  grandma.style.position = 'relative'; 
  grandma.style.left = (parseInt(grandma.style.left) || 0) + 40 + 'px';
}

function hear() {
    if (parseInt(grandma.style.left) === 200) {
       document.getElementById('one').innerHTML = 'NO, NOT SINCE 1938!';
       grandma.removeEventListener("click", myFunction)     
    } 
    else if (parseInt(grandma.style.left) === 160)
    {
        document.getElementById('two').innerHTML = "WHAT DID YOU EAT?"
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
