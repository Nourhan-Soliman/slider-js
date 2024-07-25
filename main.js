// Get Slider Items Array from [ES6 Feature]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// Get Number Of Slides
var slidesCount = sliderImages.length;

// Set Current Slide
var currentSlide = 1;

// Slide Number Element
var slideNumberElement = document.getElementById('slide-number');

// Previous and Next Buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

nextButton.onclick= nextSlide;
prevButton.onclick= prevSlide;


// creat main  ul element
var paginationElement =document.createElement ('ul')

// set element id 

paginationElement.setAttribute('id' , 'pagination-ul')

// creat the li 

  for(var i =1 ; i<=slidesCount ; i++)
{
// creat item element lis
var paginationItem =document.createElement ('li')

// set  attribute

paginationItem.setAttribute('data-index' , i)

//  set item content

paginationItem.appendChild(document.createTextNode(i));

// append items to the main ul list 


paginationElement.appendChild(paginationItem);

}
//  add the created ul to the main page

document.getElementById('indicators') .appendChild(paginationElement);

//  get the new created ul
var paginationCreatedUl=document.getElementById('pagination-ul');
// Get pagination bullets array
var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// Trigger the checker function
theChecker();

// Loop through bullets items
for (var i = 0; i < paginationsBullets.length; i++) {
    paginationsBullets[i].onclick = function() {
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();
    }
}

// Next Slide Function
function nextSlide() {
    if (nextButton.classList.contains('disabled')) {
        return false;
    } else {
        currentSlide++;
        theChecker();
    }

    console.log("next");
}


// Previous Slide Function
function prevSlide() {
    if (prevButton.classList.contains('disabled')) {
        return false;
    } else {
        currentSlide--;
        theChecker();
    }
}

function theChecker() {
    // Set the Slide Number
    slideNumberElement.textContent = 'Slide' + (currentSlide ) + ' of ' + (slidesCount);


    removeAllActive();
    
    // Set Active Class on Current Slide
    sliderImages[currentSlide-1].classList.add('active');

    // Set Active Class on Current Pagination Item
    paginationCreatedUl.children[currentSlide-1].classList.add('active');

    // Check if Current Slide is The First
if (currentSlide == 1) { 

    // Add Disabled Class on Previous Button
    prevButton.classList.add('disabled');
} else {
    // Remove Disabled Class From Previous Button
    prevButton.classList.remove('disabled');
}


    // Check if Current Slide is The last
    if (currentSlide == slidesCount) { 

        // Add Disabled Class on next Button
        nextButton.classList.add('disabled');
    } else {
        // Remove Disabled Class From next Button
        nextButton.classList.remove('disabled');
    }
    
    
}


// Remove All Active Classes From Images and Pagination Bullets
function removeAllActive() {
    // Loop through all images and remove the 'active' class
    sliderImages.forEach(function (img) {
        img.classList.remove('active');
    });

    // Loop through all pagination bullets and remove the 'active' class
    paginationsBullets.forEach(function (bullet) {
        bullet.classList.remove('active');
    });
}



