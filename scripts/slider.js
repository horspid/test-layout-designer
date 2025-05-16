window.addEventListener("load", () => {
  new Snake(".slider", {
    infinite: false,
    slidesToShow: 1,
    speed: 300,
    dots: false,
    arrows: true,
    prevArrow:
      '<button type="button"><img src="img/icons/slider-arrow.svg" /><span>loren ipsum</span></button>',
    nextArrow:
      '<button type="button"><span>loren ipsum</span><img src="img/icons/slider-arrow.svg" /></button>',
    mobileFirst: true,
  });
});
