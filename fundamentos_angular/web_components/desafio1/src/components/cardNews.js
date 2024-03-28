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

        const autor = document.createElement("span");
        const linkTitle = document.createElement("a");
        const newsContent = document.createElement("p");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);


        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");



        //pendurando os elementos filhos no componentRoot
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles(){

    }
}

customElements.define("card-news", CardNews);