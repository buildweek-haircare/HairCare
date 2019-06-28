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
    console.log(this.box);
    this.element.addEventListener('click', () => this.btnOn());
}

btnOn(){
    const btn = document.querySelectorAll('.btn-on');

    btn.forEach(box => box.classList.remove("activeOn"));

    const stInfo = document.querySelectorAll('.st-infoBox');

    stInfo.forEach( st => st.style.display = "none");

    this.element.classList.add('activeOn');

    this.box.forEach(boxes => boxes.selectBox());
}
}

class StBox {
    constructor(btnElement){
        this.btnElement = btnElement;
    }

    selectBox(){
        this.btnElement.style.display = "inline-block";
    }
}

// Start by selecting all boxes to link to the class obj
let btn = document.querySelectorAll('.btn-on');
btn.forEach(tab => new InfoBox(tab));