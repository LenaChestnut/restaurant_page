const menuPage = function() {
    const content = document.querySelector("#content");
    
    const title = document.createElement('h1');
    title.textContent = 'Green Dragon';
    content.appendChild(title);

    const grid = document.createElement('div');
    grid.classList.add('grid');
    
    const dishes = ["main", "sides", "drinks"];

    for (let i = 0; i < dishes.length; i++) {
        const card = document.createElement('div');
        const title = document.createElement('h2');
        title.textContent = dishes[i];
        card.classList.add('card');
        card.classList.add(dishes[i]);
        card.appendChild(title);
        grid.appendChild(card);
    }

    content.appendChild(grid);
}

export default menuPage