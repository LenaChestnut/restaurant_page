const contactPage = function() {
    const content = document.querySelector("#content");

    const tabLink = document.getElementById('contacts');
    tabLink.classList.add('active');
    
    const title = document.createElement('h1');
    title.textContent = 'Green Dragon';
    content.appendChild(title);

    const address = document.createElement('div');

    address.innerHTML = "<p>Find us at: <br><br>Bywater on the Bywater Road, <br>the building nearest to Hobbiton, <br>one mile south-east from the bridge over the Water that leads to Bag End.</p>";
    address.style.maxWidth = '300px';
    address.style.margin = '0 auto';
    content.appendChild(address);

    const map = document.createElement('img');
    map.setAttribute('src', 'https://i.pinimg.com/originals/17/66/71/1766719ba90c075651066ec6a54b8c21.jpg');
    map.style.width = '90%';
    map.style.maxWidth = '800px';
    map.style.display = 'inline-block';
    map.style.marginBottom = '3rem';
    content.appendChild(map);
}

export default contactPage