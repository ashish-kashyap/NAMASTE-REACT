import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search 
 *  - RestaurantContainer
 *      -  RestaurantCard
 *          - Img
 *          - Name of Res, Star Rating, cuisine, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 * 
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {  
    const { resData } = props; 

    const {
      name,
      cuisines,
      avgRating,
      costForTwo,
    } = resData?.info;
    const { deliveryTime } = resData?.info.sla;

    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img 
                className="res-logo"
                alt="res-logo" 
                src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + 
                    resData.info.cloudinaryImageId
                }
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
};

const resList = [
                  {
                    "info": {
                      "id": "952476",
                      "name": "Doklam",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/4/51ae05df-c9b6-4fbb-b476-14c7ce3e1889_952476.JPG",
                      "locality": "Jadavpur",
                      "areaName": "Jadavpur",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Chinese",
                        "Fast Food"
                      ],
                      "parentId": "73795",
                      "avgRatingString": "NEW",
                      "promoted": true,
                      "adTrackingId": "cid=18361112~p=0~adgrpid=18361112#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=952476~eid=155f50f6-9f6a-41b1-be23-e6fe9d2671d7~srvts=1726076822767~collid=69584",
                      "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 4.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-09-11 23:30:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "isNewlyOnboarded": true,
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-e170167a-4176-446b-90a3-c746555851fe"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/kolkata/doklam-jadavpur-rest952476",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_byName"
                  },
                  {
                    "info": {
                      "id": "903303",
                      "name": "Baskin Robbins - Ice Cream Desserts",
                      "cloudinaryImageId": "f90686b53f14b32ac36c4165048d5cc9",
                      "locality": "Kolkata Municipal Corporation",
                      "areaName": "Kasba",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Desserts",
                        "Ice Cream"
                      ],
                      "avgRating": 4.8,
                      "veg": true,
                      "parentId": "5588",
                      "avgRatingString": "4.8",
                      "totalRatingsString": "53",
                      "sla": {
                        "deliveryTime": 14,
                        "lastMileTravel": 0.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "10-15 mins",
                        "lastMileTravelString": "0.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-09-12 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Green%20Dot%20Awards/Best%20In%20Ice%20cream.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        "header": "20% OFF",
                        "shortDescriptionList": [
                          {
                            "meta": "Use SWIGGYIT",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                          }
                        ],
                        "descriptionList": [
                          {
                            "meta": "20% off up to ₹50 | Use code SWIGGYIT",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                          }
                        ]
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Ice%20cream.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "isNewlyOnboarded": true,
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-e170167a-4176-446b-90a3-c746555851fe"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/kolkata/baskin-robbins-ice-cream-desserts-municipal-corporation-kasba-rest903303",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_byName"
                  },
                  {
                    "info": {
                      "id": "830564",
                      "name": "Olio - The Wood Fired Pizzeria",
                      "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/12/4e70f5c7-4c96-49ac-9dae-15a90cfac90c_7326b059-aac8-4b5b-8e92-fb98b8e181c3.jpg_compressed",
                      "locality": "Gariahat",
                      "areaName": "Rash Behari Avenue",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Fast Food",
                        "Snacks",
                        "Beverages"
                      ],
                      "avgRating": 4.3,
                      "parentId": "11633",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "797",
                      "promoted": true,
                      "adTrackingId": "cid=18332823~p=1~adgrpid=18332823#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=830564~eid=2727d4da-1887-4543-99ee-e2424cbb1a76~srvts=1726076822767~collid=69584",
                      "sla": {
                        "deliveryTime": 27,
                        "lastMileTravel": 1.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "1.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-09-12 05:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        "header": "₹125 OFF",
                        "shortDescriptionList": [
                          {
                            "meta": "Use FLAT125",
                            "discountType": "Flat",
                            "operationType": "RESTAURANT"
                          }
                        ],
                        "descriptionList": [
                          {
                            "meta": "Flat ₹125 off on orders above ₹249 | Use code FLAT125",
                            "discountType": "Flat",
                            "operationType": "RESTAURANT"
                          }
                        ]
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-e170167a-4176-446b-90a3-c746555851fe"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/kolkata/olio-the-wood-fired-pizzeria-gariahat-rash-behari-avenue-rest830564",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_byName"
                  },
                  {
                    "info": {
                      "id": "20509",
                      "name": "Santa Delivers By EatVerse",
                      "cloudinaryImageId": "jyrpjfil0yweo4hjpwgt",
                      "locality": "Near Ballygunge Station",
                      "areaName": "South Kolkata",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Kebabs",
                        "Mughlai",
                        "Biryani",
                        "Chinese"
                      ],
                      "avgRating": 4.5,
                      "parentId": "524977",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "9.8K+",
                      "sla": {
                        "deliveryTime": 27,
                        "lastMileTravel": 1.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "1.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-09-12 04:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        "header": "₹125 OFF",
                        "shortDescriptionList": [
                          {
                            "meta": "Use FLATDEAL",
                            "discountType": "Flat",
                            "operationType": "RESTAURANT"
                          }
                        ],
                        "descriptionList": [
                          {
                            "meta": "FLAT125 off | Use FLATDEAL",
                            "discountType": "Flat",
                            "operationType": "RESTAURANT"
                          }
                        ]
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-e170167a-4176-446b-90a3-c746555851fe"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/kolkata/santa-delivers-by-eatverse-near-ballygunge-station-south-kolkata-rest20509",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_byName"
                  },
                  {
                    "info": {
                      "id": "379886",
                      "name": "The Brooklyn Creamery - Healthy Ice Cream",
                      "cloudinaryImageId": "505081b9de86c76c208fa086826a53f0",
                      "locality": "Bally Gunge",
                      "areaName": "South Kolkata",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Desserts",
                        "Ice Cream",
                        "Healthy Food"
                      ],
                      "avgRating": 4.4,
                      "veg": true,
                      "parentId": "236673",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "567",
                      "promoted": true,
                      "adTrackingId": "cid=18332027~p=2~adgrpid=18332027#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=379886~eid=b90f52fd-7640-4457-a6d3-9ce3efa2b8d0~srvts=1726076822767~collid=69584",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 2.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "2.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-09-11 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ],
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "brand",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        "header": "₹125 OFF",
                        "shortDescriptionList": [
                          {
                            "meta": "Use FLAT125",
                            "discountType": "Flat",
                            "operationType": "RESTAURANT"
                          }
                        ],
                        "descriptionList": [
                          {
                            "meta": "Flat ₹125 off on orders above ₹249 | Use code FLAT125",
                            "discountType": "Flat",
                            "operationType": "RESTAURANT"
                          }
                        ]
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "brand"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-e170167a-4176-446b-90a3-c746555851fe"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/kolkata/the-brooklyn-creamery-healthy-ice-cream-bally-gunge-south-kolkata-rest379886",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_byName"
                  },
                  {
                    "info": {
                      "id": "13927",
                      "name": "Wow! Momo",
                      "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/19/9d54282a-9209-489d-acd6-1cce138cacd0_c35c157c-9cbf-4919-830a-0fc0099c2df4.png",
                      "locality": "Kasba",
                      "areaName": "Kasba",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Tibetan",
                        "Healthy Food",
                        "Asian",
                        "Chinese",
                        "Snacks",
                        "Continental",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.5,
                      "parentId": "1776",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "23K+",
                      "sla": {
                        "deliveryTime": 19,
                        "lastMileTravel": 0.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15-20 mins",
                        "lastMileTravelString": "0.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-09-18 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "Rxawards/_CATEGORY-Chinese.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        "header": "60% OFF",
                        "shortDescriptionList": [
                          {
                            "discountType": "FinalPrice",
                            "operationType": "RESTAURANT"
                          }
                        ],
                        "descriptionList": [
                          {
                            "meta": "Get items under 89",
                            "discountType": "FinalPrice",
                            "operationType": "RESTAURANT"
                          },
                          {
                            "meta": "Free Kesar Gulab Jamun [1PC] on orders above ₹349",
                            "discountType": "Freebie",
                            "operationType": "RESTAURANT"
                          }
                        ]
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Chinese.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.9",
                          "ratingCount": "365"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-e170167a-4176-446b-90a3-c746555851fe"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/kolkata/wow-momo-kasba-rest13927",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_byName"
                  },
                  {
                    "info": {
                      "id": "862635",
                      "name": "KULFI MAGIC EXPRESS",
                      "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/15/93075405-8359-49db-af11-78c93940470b_044df442-9d45-4544-b058-2aaba0d094c7.jpg",
                      "locality": "Topsia",
                      "areaName": "Ruby Area",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 3.6,
                      "parentId": "506347",
                      "avgRatingString": "3.6",
                      "totalRatingsString": "19",
                      "promoted": true,
                      "adTrackingId": "cid=18267178~p=3~adgrpid=18267178#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=862635~eid=f587f9ae-ea02-40f6-b7ad-42c0dd2bf5dc~srvts=1726076822767~collid=69584",
                      "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-09-11 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        "header": "30% OFF",
                        "shortDescriptionList": [
                          {
                            "meta": "Use TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                          }
                        ],
                        "descriptionList": [
                          {
                            "meta": "30% off up to ₹75 | Use code TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                          }
                        ]
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "isNewlyOnboarded": true,
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-e170167a-4176-446b-90a3-c746555851fe"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/kolkata/kulfi-magic-express-topsia-ruby-area-rest862635",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_byName"
                  },
                  {
                    "info": {
                      "id": "903302",
                      "name": "Baskin Robbins Happyness Shakes",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/8/95ef9038-7107-4c15-b282-a02234ebcd03_903302.jpg",
                      "locality": "Kolkata Municipal Corporation",
                      "areaName": "Kasba",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Beverages",
                        "Desserts"
                      ],
                      "veg": true,
                      "parentId": "322848",
                      "avgRatingString": "NEW",
                      "sla": {
                        "deliveryTime": 22,
                        "lastMileTravel": 0.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "0.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-09-12 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        "header": "20% OFF",
                        "shortDescriptionList": [
                          {
                            "meta": "Use SWIGGYIT",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                          }
                        ],
                        "descriptionList": [
                          {
                            "meta": "20% off up to ₹50 | Use code SWIGGYIT",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                          }
                        ]
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "isNewlyOnboarded": true,
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-e170167a-4176-446b-90a3-c746555851fe"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/kolkata/baskin-robbins-happyness-shakes-municipal-corporation-kasba-rest903302",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_byName"
                  },
                  {
                    "info": {
                      "id": "446589",
                      "name": "RZ Patisserie",
                      "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/4/0325e643-fe08-4b19-8311-548ccf23976d_f673ccb1-90bf-4de4-9d37-882efeed6947.jpg",
                      "areaName": "Picnic Garden",
                      "costForTwo": "₹1600 for two",
                      "cuisines": [
                        "Bakery"
                      ],
                      "avgRating": 4,
                      "parentId": "268936",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "68",
                      "promoted": true,
                      "adTrackingId": "cid=17567629~p=4~adgrpid=17567629#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=446589~eid=90f107db-b02c-4e99-8521-ffd8fdbcabf2~srvts=1726076822767~collid=69584",
                      "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "2.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-09-11 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        "header": "50% OFF",
                        "shortDescriptionList": [
                          {
                            "meta": "Use TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                          }
                        ],
                        "descriptionList": [
                          {
                            "meta": "50% off up to ₹100 | Use code TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                          }
                        ]
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-e170167a-4176-446b-90a3-c746555851fe"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/kolkata/rz-patisserie-picnic-garden-rest446589",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_byName"
                  }
                
      
    
];

// not using keys (not acceptable) <<<< index as key <<<<<<<< unique id (best practice)
        
    
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {/* <RestaurantCard resData = {resList[0]} />
                <RestaurantCard resData = {resList[1]} />
                <RestaurantCard resData = {resList[2]} />
                <RestaurantCard resData = {resList[3]} />
                <RestaurantCard resData = {resList[4]} />
                <RestaurantCard resData = {resList[5]} />
                <RestaurantCard resData = {resList[6]} />
                <RestaurantCard resData = {resList[7]} />
                <RestaurantCard resData = {resList[8]} />    */
                resList.map((restaurant) => (
                  <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
    
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);