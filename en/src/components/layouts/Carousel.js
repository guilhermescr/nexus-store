import styles from './Carousel.module.css';

import RamMemory from '../../img/carousel_images/ram_memory.webp';
import RTX_3080 from '../../img/carousel_images/rtx_3080.jpg';
import Ryzen7_5700G from '../../img/carousel_images/ryzen7_5700g.webp';
import Keyboard_VideoGame_Controller from '../../img/carousel_images/keyboard_with_a_playstation_controller.jpg';

function Carousel() {
  setTimeout(() => {
    const CAROUSEL_CONTAINER = document.getElementById('carouselImg');
    const CAROUSEL_IMAGES = document.querySelectorAll('#carouselImg img');
    const PREV_BUTTON = document.getElementById('slide-arrow-prev');
    const NEXT_BUTTON = document.getElementById('slide-arrow-next');
    let currentImageScroll = 0;

    NEXT_BUTTON.addEventListener('click', () => {
      currentImageScroll++;

      CAROUSEL_CONTAINER.scrollLeft =
        CAROUSEL_IMAGES[0].clientWidth * currentImageScroll;
    });
    PREV_BUTTON.addEventListener('click', () => {
      if (currentImageScroll !== 0) {
        currentImageScroll--;
      }

      CAROUSEL_CONTAINER.scrollLeft =
        CAROUSEL_IMAGES[0].clientWidth * currentImageScroll;
    });
  }, 1500);

  return (
    <section className={styles.carousel}>
      <button
        type="button"
        className={styles.slide_arrow}
        id="slide-arrow-prev"
      >
        &#8249;
      </button>
      <button
        type="button"
        className={styles.slide_arrow}
        id="slide-arrow-next"
      >
        &#8250;
      </button>

      <div className={styles.container} id="carouselImg">
        <img src={RamMemory} alt="Ram Memory Image" />
        <img src={RTX_3080} alt="GPU RTX 3080 Image" />
        <img src={Ryzen7_5700G} alt="CPU Ryzen 7 5700G Image" />
        <img
          src={Keyboard_VideoGame_Controller}
          alt="A RGB keyboard with a playstation controller and a headphone"
        />
      </div>
    </section>
  );
}

export default Carousel;
