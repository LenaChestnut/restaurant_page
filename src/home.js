const homePage = function() {
    const content = document.querySelector("#content");
    
    const title = document.createElement('h1');
    title.textContent = 'Green Dragon';
    content.appendChild(title);

    const homeImage = document.createElement('div');
    homeImage.setAttribute('class', 'bg');
    content.appendChild(homeImage);

    const description = document.createElement('p');
    description.textContent = 'The only brew for the brave and true comes from the Green Dragon';
    content.appendChild(description);
    
};

export default homePage