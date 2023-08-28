export interface SlideProps<Slide> {
  slide: Slide;
  className?: string;
  isActive?: boolean;
  onNextSlide?: () => void;
}
