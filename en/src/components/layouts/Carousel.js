// images
import RamMemory from '../../img/carousel_images/ram_memory.webp';
import RTX_3080 from '../../img/carousel_images/rtx_3080.jpg';
import Ryzen7_5700G from '../../img/carousel_images/ryzen7_5700g.webp';
import PC_and_Laptop from '../../img/carousel_images/pc_and_laptop.jpg';

// dependencies
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import styles from './Carousel.module.css';

SwiperCore.use([Navigation, Pagination]);

function Carousel() {
  const images = [RamMemory, RTX_3080, Ryzen7_5700G, PC_and_Laptop];
  const slides = [];

  for (let index = 0; index < images.length; index++) {
    slides.push(
      <SwiperSlide key={`slide-${index}`} tag="li">
        <img src={images[index]} alt={`Slide ${index}`} />
      </SwiperSlide>
    );
  }

  return (
    <React.Fragment>
      <Swiper
        className={styles.swiper_container}
        id="main"
        tag="section"
        wrapperTag="ul"
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={1}
      >
        {slides}
      </Swiper>
    </React.Fragment>
    // <section className={styles.carousel}>
    //   <button
    //     type="button"
    //     className={styles.slide_arrow}
    //     id="slide-arrow-prev"
    //   >
    //     &#8249;
    //   </button>
    //   <button
    //     type="button"
    //     className={styles.slide_arrow}
    //     id="slide-arrow-next"
    //   >
    //     &#8250;
    //   </button>

    //   <div className={styles.container} id="carouselImg">
    //     <img
    //       src={RamMemory}
    //       alt="The Best Ram Memory for 3rd Generation AMD Ryzen CPUs"
    //     />
    //     <img src={RTX_3080} alt="The Ultimate GPU GeForce RTX 3080" />
    //     <img src={Ryzen7_5700G} alt="A box with CPU Ryzen 7 5700G" />
    //     <img
    //       id={styles.pc_and_laptop}
    //       src={PC_and_Laptop}
    //       alt="3 laptops, a monitor and a pc cabinet with a blue background"
    //     />
    //   </div>
    // </section>
  );
}

export default Carousel;
