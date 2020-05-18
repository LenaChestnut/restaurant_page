const homePage = function() {
    const content = document.querySelector("#content");

    const homeImage = document.createElement('img');
    homeImage.setAttribute('src', "https://images.unsplash.com/photo-1581246152826-4049ee0e666c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80");
    homeImage.setAttribute('alt', 'Cat and coffe mug');
    content.appendChild(homeImage);
    
    const copy = document.createElement('div');
    copy.setAttribute('id', 'copy');
    
    const title = document.createElement('h1');
    title.textContent = 'Cat Cafe';
    copy.appendChild(title);
    
    const description = document.createElement('p');
    description.textContent = 'Coffee, cats and free Wi-Fi. What more do you need?';
    copy.appendChild(description);
        
    content.appendChild(copy);
    
};

export default homePage