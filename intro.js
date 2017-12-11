var list = document.getElementById("thelist"); //Ordered list element
var otherlist = document.getElementById("theotherlist"); //Ordered list element
var header = document.getElementById("h"); //Header element
var elements = document.getElementsByTagName("li");//Array of list elements
var elementsCtr = 8; //list counter
var fibCtr = 0;

/* Adds a new list item to the ordered list */
var addElementToList = function(){
    
    var newElement = document.createElement("li"); //create new list element
    newElement.innerHTML = "Anotha element: " + elementsCtr; //add text to element
    elementsCtr++; //increment list counter
    list.appendChild(newElement); //add list element to ordered list

    //add event listener to newly created list elements
    newElement.addEventListener('mouseover', changeHead); 
    newElement.addEventListener('mouseout', revertHead);
    newElement.addEventListener('click', removeElement);
};

/* Adds a new list item to the ordered list */
var addElementToOtherList = function(){
    
    var newElement = document.createElement("li"); //create new list element
    newElement.innerHTML = fibonacci(fibCtr); //add text to element
    fibCtr++; //increment list counter
    otherlist.appendChild(newElement); //add list element to ordered list

    //add event listener to newly created list elements
    newElement.addEventListener('mouseover', changeHead); 
    newElement.addEventListener('mouseout', revertHead);
    newElement.addEventListener('click', removeElement);
};

/* change header to list element that mouse is over */
var changeHead = function(){
    header.innerHTML = this.innerHTML;
};

/* revert header to original */
var revertHead = function(){
    header.innerHTML = "Hello World!";
};

/* remove element when clicked*/
var removeElement = function(){
    this.remove();
};

var fibonacci = function(n) {
    if (n == 0) {
	return 0;
    } else if (n == 1) {
	return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

var changeColor = function(){
    var colors = ['green', 'red', 'blue', 'yellow', 'orange']
    var randColor = Math.floor(Math.random()*5);
    this.setAttribute('class', colors[randColor]);
    console.log(colors[randColor]);
}

document.getElementById("h").addEventListener('mouseover', changeColor);

//add event listener to button
b.addEventListener('click', addElementToList);
b2.addEventListener('click', addElementToOtherList);

//add event listeners to pre written list items
for(i = 0; i < elements.length; i++){
    elements[i].addEventListener('mouseover', changeHead);
    elements[i].addEventListener('mouseout', revertHead);
    elements[i].addEventListener('click', removeElement);
}
