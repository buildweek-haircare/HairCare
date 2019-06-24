// dropdown functionality
class Navdown {
  constructor(element) {
    this.element = element;

    this.button = this.element.querySelector("div");

    this.content = this.element.querySelector(".dropdown-content");

    this.button.addEventListener("click", () => {
      this.toggleContent();
    });
  }

  toggleContent() {
    this.content.classList.toggle("dropDown-hidden");
  }
}

let dropdowns = document
  .querySelectorAll(".dropdown")
  .forEach(dropdown => new Navdown(dropdown));
