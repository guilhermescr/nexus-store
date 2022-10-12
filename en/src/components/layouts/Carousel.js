import styles from './Carousel.module.css';

import RamMemory from '../../img/carousel_images/ram_memory.webp';
import RTX_3080 from '../../img/carousel_images/rtx_3080.jpg';
import Ryzen7_5700G from '../../img/carousel_images/ryzen7_5700g.webp';
import PC_and_Laptop from '../../img/carousel_images/pc_and_laptop.jpg';

function Carousel() {
  /*
  setTimeout(() => {
    const CAROUSEL_CONTAINER = document.getElementById('carouselImg');
    const CAROUSEL_IMAGES = document.querySelectorAll('#carouselImg img');
    const PREV_BUTTON = document.getElementById('slide-arrow-prev');
    const NEXT_BUTTON = document.getElementById('slide-arrow-next');
    let currentImage = 0;
    let imagePercentage;
    let clickFired = false;

    NEXT_BUTTON.addEventListener('click', () => {
      /* when the next button listener is activated, the scroll listener is activated as well because I'm changing the scroll here.
      So, clickFired state will prevent the scroll event from listening the scroll at the same time of next button listener.
      */
    /*
      clickFired = true;

      if (clickFired) {
        currentImage++;
      }

      if (currentImage === CAROUSEL_IMAGES.length) {
        currentImage = 0;
      }

      // scroll goes to another image
      CAROUSEL_CONTAINER.scrollLeft =
        CAROUSEL_IMAGES[0].clientWidth * currentImage;

      setTimeout(() => {
        clickFired = false;
      }, 1500);
    });

    PREV_BUTTON.addEventListener('click', () => {
      console.log(currentImage, CAROUSEL_IMAGES[0].clientWidth * currentImage);
      clickFired = true;

      if (currentImage === 0) {
        currentImage = CAROUSEL_IMAGES.length;
      } else {
        currentImage--;
      }

      if (currentImage === CAROUSEL_IMAGES.length) {
        currentImage--;
      }

      CAROUSEL_CONTAINER.scrollLeft =
        CAROUSEL_IMAGES[0].clientWidth * currentImage;
    });

    CAROUSEL_CONTAINER.addEventListener('scroll', function () {
      if (clickFired) return;

      // If scroll is the half of an image, the code below updates currentImage.
      imagePercentage = (60 / 100) * CAROUSEL_IMAGES[0].clientWidth;

      for (let index = 0; index < CAROUSEL_IMAGES.length; index++) {
        if (
          CAROUSEL_CONTAINER.scrollLeft <
          CAROUSEL_IMAGES[0].clientWidth / 50
        ) {
          currentImage = 0;
          return;
        }

        if (
          CAROUSEL_CONTAINER.scrollLeft > imagePercentage * index &&
          CAROUSEL_CONTAINER.scrollLeft < CAROUSEL_IMAGES[0].clientWidth * index
        ) {
          imagePercentage = (60 / 100) * (CAROUSEL_IMAGES[0].clientWidth * 2);

          currentImage = index;
        }

        console.log(`CONTAINER SCROLL: ${CAROUSEL_CONTAINER.scrollLeft}
        IMAGE: ${CAROUSEL_IMAGES[0].clientWidth * (currentImage + 1)}
        IMAGE PERCENTAGE: ${imagePercentage}
        CURRENT IMAGE: ${currentImage}`);
      }
    });
  }, 1000);
  */

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
        <img
          src={RamMemory}
          alt="The Best Ram Memory for 3rd Generation AMD Ryzen CPUs"
        />
        <img src={RTX_3080} alt="The Ultimate GPU GeForce RTX 3080" />
        <img src={Ryzen7_5700G} alt="A box with CPU Ryzen 7 5700G" />
        <img
          id={styles.pc_and_laptop}
          src={PC_and_Laptop}
          alt="3 laptops, a monitor and a pc cabinet with a blue background"
        />
      </div>
    </section>
  );
}

export default Carousel;
