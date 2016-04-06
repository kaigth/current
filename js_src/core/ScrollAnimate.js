import scroller from "./scroller";
import $ from "js_libs/hobo/dist/hobo.build";

class ScrollAnimate {
  constructor ( element ) {
      this.element = element;

      this.initialize();
  }

  initialize () {
      this.setToCenter();
      this.checkPosition();
      scroller.on('scroll', this.checkPosition.bind(this));
  }

  setToCenter () {
      const offsetPosition = ( window.innerHeight / 2 );

      this.element.eq(0)[ 0 ].style.marginTop = `${offsetPosition}px`;
  }

  checkPosition () {
      this.element.each((element) => {
          const bounds = element.getBoundingClientRect();

          if ( bounds.top < ( window.innerHeight / 1.5 ) && bounds.top > ( window.innerHeight / 4 ) ) {
              $(element).addClass("is-active");

          } else {
              $(element).removeClass("is-active");
          }
      });
  }
}

export default ScrollAnimate;
