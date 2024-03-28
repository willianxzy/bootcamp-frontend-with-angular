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

        //construindo elementos filhos
        const cardLeft = document.createElement("div");
        const cardRight = document.createElement("div");

        //atributos card left e card right
        cardLeft.setAttribute("class", "cardLeft");
        cardRight.setAttribute("class", "cardRight");

        //pendurando os elementos filhos no componentRoot
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles(){

    }
}

customElements.define("card-news", CardNews);