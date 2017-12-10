var list = document.getElementById("thelist"); //Ordered list element
var header = document.getElementById("h"); //Header element
var elements = document.getElementsByTagName("li");//Array of list elements
var elementsCtr = 8 //list counter

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

//add event listener to button
b.addEventListener('click', addElementToList);

//add event listeners to pre written list items
for(i = 0; i < elements.length; i++){
    elements[i].addEventListener('mouseover', changeHead);
    elements[i].addEventListener('mouseout', revertHead);
    elements[i].addEventListener('click', removeElement);
}
