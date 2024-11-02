import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";

export const Carousel = () => {
  return (
    <StyledSwiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop={true}
    >
      <StyledSwiperSlide>
        <SlideContent>1</SlideContent>
      </StyledSwiperSlide>
      <StyledSwiperSlide>
        <SlideContent>2</SlideContent>
      </StyledSwiperSlide>
      <StyledSwiperSlide>
        <SlideContent>3</SlideContent>
      </StyledSwiperSlide>
      <StyledSwiperSlide>
        <SlideContent>4</SlideContent>
      </StyledSwiperSlide>
      <StyledSwiperSlide>
        <SlideContent>5</SlideContent>
      </StyledSwiperSlide>
      <StyledSwiperSlide>
        <SlideContent>6</SlideContent>
      </StyledSwiperSlide>
      <StyledSwiperSlide>
        <SlideContent>7</SlideContent>
      </StyledSwiperSlide>
      <StyledSwiperSlide>
        <SlideContent>8</SlideContent>
      </StyledSwiperSlide>
      <StyledSwiperSlide>
        <SlideContent>9</SlideContent>
      </StyledSwiperSlide>
      <StyledSwiperSlide>
        <SlideContent>10</SlideContent>
      </StyledSwiperSlide>
    </StyledSwiper>
  );
};

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 300px;

  .swiper-button-next,
  .swiper-button-prev {
    --swiper-navigation-size: 35px;
    color: ${(props) => props.theme.color.primary};
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-pagination-bullet {
    background-color: #fff;
    opacity: 0.7;
  }

  .swiper-pagination-bullet-active {
    background-color: ${(props) => props.theme.color.primary};
    opacity: 1;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    background-color: #ddd;
  }
`;

const SlideContent = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;
