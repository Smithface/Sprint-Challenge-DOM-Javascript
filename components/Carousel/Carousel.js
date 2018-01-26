class CarouselItem {
  constructor(element) {
    this.element = element;
  }

  upNext() {
    this.element.classList.add('Carousel__item-focused');
  }

  goAway() {
    this.element.classList.remove('Carousel__item-focused');
  }
}

class Carousel {
  constructor(element) {
    this.element = element;

    this.items = document.querySelectorAll('.Carousel__item');
    this.items = Array.from(this.items).map(item => new CarouselItem(item));
    console.log('here are items:', this.items);
    
    this.arrowLeft = this.element.querySelector('.Carousel__arrow-left');
    this.arrowRight = this.element.querySelector('.Carousel__arrow-right');

    this.arrowLeft.addEventListener('click', (event) => { // When this works, it will only work for an array of 3 items (I want to adjust this later, once I can get it to work)
      let activeItem = this.currentItem;
      if (activeItem = this.items[0]) {
        activeItem = this.items[2];
      } else if (activeItem = this.items[1]) {
        activeItem = this.items[0];
      } else if (activeItem = this.items[2]) {
        activeItem = this.items[1];
      }
      this.updateActiveItem(activeItem);
      activeItem.upNext();
      event.stopPropagation();
    });

    this.arrowRight.addEventListener('click', (event) => {
      let activeItem = this.currentItem;
      if (activeItem = this.items[0]) {
        activeItem = this.items[1];
      } else if (activeItem = this.items[1]) {
        activeItem = this.items[2];
      } else if (activeItem = this.items[2]) {
        activeItem = this.items[0];
      }

      this.updateActiveItem(activeItem);
      activeItem.upNext();
      event.stopPropagation();
    });
    this.currentItem = this.items[0];
    this.initialize();
  }

  initialize() {
    this.currentItem.upNext();
  }

  updateActiveItem(Item) {
    console.log('This this the item that should go away', this.currentItem);
    this.currentItem.goAway();
    this.currentItem = Item;
  }

}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));