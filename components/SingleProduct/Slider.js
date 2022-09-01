import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

export const Slider = ({ images }) => {
  return (
    <Swiper
      // install Swiper modules
      pagination={true}
      modules={[Pagination]}
      className="mySwiper mt-5"
    >
      {images.map(({ id, altText, mediaItemUrl }) => (
        <SwiperSlide key={id} className="relative max-w-[500px] mb-3">
          <Image
            src={mediaItemUrl}
            alt={altText}
            layout="responsive"
            width="100%"
            height="100%"
            objectFit="contain"
            objectPosition="center"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
