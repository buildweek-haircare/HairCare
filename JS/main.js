// here will go the core functionality of our home-site

class InfoBox {
constructor(element){
    this.element = element;
    this.infoData = this.element.dataset.tab;
    console.log(this.infoData);

    if(this.infoData === "all"){
        this.box = document.querySelectorAll('.st-infoBox');
        // console.log(` Show data called ${this.box}`);
    } else {
        this.box = document.querySelectorAll(`.st-infoBox[data-tab='${this.infoData}']`);
    }

    this.box = Array.from(this.box).map(st => new StBox(st));
    this.element.addEventListener('click', () => this.btnOn());
}

btnOn(){
    const btn = document.querySelectorAll('.btn-on');

    btn.forEach(box => box.classList.remove("activeOn"));

    const stInfo = document.querySelectorAll('st-infoBox');

    stInfo.forEach( sec => sec.style.display = "none");

    this.element.classList.add('activeOn');

    this.st.forEach(tab => tab.selectBox());
}
}

class StBox {
    constructor(btnElement){
        this.btnElement = btnElement;
    }

    selectBox(){
        this.btnElement.style.display = "flex";
    }
}

// Start by selecting all tabs to link to the class obj
let btn = document.querySelectorAll('.btn-on');
btn.forEach(tab => new InfoBox(tab));