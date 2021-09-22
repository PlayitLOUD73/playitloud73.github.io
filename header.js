class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <!-- Site Navigation Menu-->
            <ul class="navbar">
                <li><a href="/index.html">Home</a></li>
                <li><a href="/projects/projects.html">Projects</a></li>
                <li><a href="/experience/experience.html">Experience</a></li>
                <li style="float:right;"><a href="/contact/contact.html">Contact</a></li>
            </ul>
        `
    }
}

customElements.define('header-component', Header);