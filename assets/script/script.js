
let card_el = document.querySelector('.container');

axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
    .then(response => {
        const cards = response.data;

        let card_elements = '';
        cards.forEach(card => {
            
            const { title, url } = card;

            const markup =
                `
            <div class="card col-4 col-md-6 col-sm">
                <img class="pin" src="./assets/img/pin.svg" alt="">
                <img class="card_img" onclick="on()" src="${url}" alt="">
                <p class="card_txt">${title}</p>
            </div>
            `;
            
            card_elements += markup;
            
        });
        card_el.innerHTML = card_elements

    })

on = () => document.getElementById("overlay").style.display = "flex"
    
off = () => document.getElementById("overlay").style.display = "none";