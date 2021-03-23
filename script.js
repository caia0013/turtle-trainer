// Get querySelectors
let maskotUserNameSpan = document.querySelector('#name');

// Get URL
let urlString  = window.location.href;
let url = new URL(urlString);

// find 'name' value in url with searchParams, assign to nameInput
let nameInput = url.searchParams.get('name');

// Check if localStorage is set
if (!localStorage.getItem('name')) {

    // If not set, check nameInput for existing value
    if (nameInput != '') {

        // Add value to local storage
        localStorage.setItem('name',nameInput);

    } else {

        // if no value set in nameInput, added missing value string
        // to localStorage
        localStorage.setItem('name','(name missing)');
    }

    // If localStorage IS set, BUT url param 'name' is also set
} else if (url.searchParams.get('name')) {

    // Update localStorage to new value
    localStorage.setItem('name',nameInput);
}

// Set maskot name call in html paragraph to localStorage value
maskotUserNameSpan.innerHTML = localStorage.getItem('name');



