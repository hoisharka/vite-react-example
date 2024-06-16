import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import './ImageSlider.css'

import { fetchProducts } from '../api/products'

const ImageSlider: React.FC = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading data</div>

  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
      >
        {data.map((slide: any) => (
          <SwiperSlide key={slide.id} className="slide">
            <img src={slide.image} alt={slide.text} />
            <p>{slide.text}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ImageSlider
