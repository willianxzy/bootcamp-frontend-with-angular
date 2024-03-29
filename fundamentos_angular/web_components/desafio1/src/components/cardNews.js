class CardNews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"})
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());

    }

    build(){
        //construindo elemento principal
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        //construindo elemento filho cardLeft
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        // appendChild cardLeft
        const autor = document.createElement("span");
        autor.textContent = "by " + (this.getAttribute("autor") || "anonymous")

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title")
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content")

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        //construindo elemento filho cardRight
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");

        // appendChild cardRight
        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/default-photo.webp";
        newsImage.alt = "Foto da Noticia";
        cardRight.appendChild(newsImage);


        //pendurando os elementos filhos no componentRoot
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles(){
        const style = document.createElement("style")
            style.textContent = `
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Segoe UI', sans-serif;
            }
            
            .card{
                margin: 5px 0 0 0;
                width: 80%;
                display: flex;
                flex-direction: row;
                padding-left: 10px;
                box-shadow: 8px 9px 22px 1px rgba(0,0,0,0.76);
                -webkit-box-shadow: 8px 9px 22px 1px rgba(0,0,0,0.76);
                -moz-box-shadow: 8px 9px 22px 1px rgba(0,0,0,0.76);
                justify-content: space-between;
            }
            
            .card_left > span{
                font-weight: 400;
            }
            
            .card_left{
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            .card_left > a{
                margin-top: 15px;
                font-size: 25px;
                text-decoration: none;
            }
            
            .card_left > p {
                color: grey;
            }

            .card_right > img {
                weight: 100%;
                height: 100%;
            }
            `;
        return style
    }
}

customElements.define("card-news", CardNews);