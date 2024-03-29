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
        cardRight.appendChild(newsImage);


        //pendurando os elementos filhos no componentRoot
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles(){

    }
}

customElements.define("card-news", CardNews);