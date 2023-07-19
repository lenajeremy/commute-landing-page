const isOffline = false;

const assets = isOffline ? {
  images: {
    heroLargeBike: '/images/hero-background.png',
    bikeTyreLarge: '/images/bike-cycle.png',
    gridBikeLarge: '/images/bike-full-image.png',
    gridBikeWithPhone: '/images/phone on bike.png',
    gridPeopleRidingBikes: '/images/people_riding_a_bike.png',
    joinTheRevolutionBike: '/images/prefooter.png',
    womanRidingBike: '/images/bikescene.png'
  }
} : {
  images: {
    heroLargeBike:
      'https://res.cloudinary.com/dln2fgjqx/image/upload/v1683623342/commute-landing-page/hero-background_thoizn.png',
    bikeTyreLarge:
      'https://res.cloudinary.com/dln2fgjqx/image/upload/v1683623342/commute-landing-page/bike-cycle_wxqjp7.png',
    gridBikeLarge:
      'https://res.cloudinary.com/dln2fgjqx/image/upload/v1683623340/commute-landing-page/bike-full-image_ncysth.png',
    gridBikeWithPhone:
      'https://res.cloudinary.com/dln2fgjqx/image/upload/v1683623341/commute-landing-page/phone_on_bike_nhymfr.png',
    gridPeopleRidingBikes:
      'https://res.cloudinary.com/dln2fgjqx/image/upload/v1683623341/commute-landing-page/people_riding_a_bike_cknhsh.png',
    joinTheRevolutionBike:
      'https://res.cloudinary.com/dln2fgjqx/image/upload/v1683623343/commute-landing-page/prefooter_rdwldg.png',
    womanRidingBike:
      'https://res.cloudinary.com/dln2fgjqx/image/upload/v1683623340/commute-landing-page/bikescene_ckzero.png',
    // sample1:
    //   'https://res.cloudinary.com/dln2fgjqx/image/upload/v1683622933/cld-sample-5.jpg',
    // sample2:
    //   'https://res.cloudinary.com/dln2fgjqx/image/upload/v1683622933/cld-sample-3.jpg',
    // sample3:
    //   'https://res.cloudinary.com/dln2fgjqx/image/upload/v1683622932/cld-sample-2.jpg',
    // sample4:
    //   'https://res.cloudinary.com/dln2fgjqx/image/upload/v1683622920/samples/ecommerce/accessories-bag.jpg',
  },
}

export default assets
