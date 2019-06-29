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
    btn.forEach(box => box.classList.remove("shake"));

    const stInfo = document.querySelectorAll('.st-infoBox');
    const animation = document.querySelectorAll('.bounceIn');

    stInfo.forEach( st => st.style.display = "none");
    animation.forEach(an => an.classList.remove('bounceIn'));

    this.element.classList.add('activeOn');
    this.element.classList.add('shake');

    this.box.forEach(boxes => boxes.selectBox());
}
}

class StBox {
    constructor(btnElement){
        this.btnElement = btnElement;
        this.animationAdd = document.querySelectorAll('.bounceIn');
    }

    selectBox(){
        this.animationAdd.forEach(animation => animation.classList.add('bounceIn'));
        this.btnElement.style.display = "inline-block";
    }
}

// Start by selecting all boxes to link to the class obj
let btn = document.querySelectorAll('.btn-on');
btn.forEach(tab => new InfoBox(tab));