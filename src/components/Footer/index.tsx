import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { usePlayer } from 'hook/usePlayer'

import styles from './styles.module.scss'

export const Footer = () => {
  const { player } = usePlayer()

  return (
    <footer className={styles.container}>
      <div className={styles.player__info}>
        <div>
          <strong>CLUB</strong>
          <h3>{player.club}</h3>
        </div>
        <div>
          <strong>POSITION</strong>
          <h3>{player.position}</h3>
        </div>
      </div>

      <div>
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className={styles.player__gallery}
        >
          {player.gallery.map((image, index) => (
            <SwiperSlide key={image}>
              <div className={styles.image}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <img src={image} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </footer>
  )
}
