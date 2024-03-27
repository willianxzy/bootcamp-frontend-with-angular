class TituloDinamico extends HTMLElement {
    constructor () {
        super();

        const shadow = this.attachShadow({mode: "open"});

        //base component
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute("titulo");

        //estilização component
        const style = document.createElement("style");
        style.textContent = `
        h1 {
            color: red; 
        }
        `;

        //enviar para shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    };
};

customElements.define('titulo-dinamico', TituloDinamico);