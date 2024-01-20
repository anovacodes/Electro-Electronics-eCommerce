import Swiper from "swiper"
import { Pagination, Autoplay, Navigation, EffectFade, Thumbs, FreeMode } from "swiper/modules"
import SlimSelect from "slim-select"

import { burgerMenu } from "./modules/burger.js"
import { tabs } from "./modules/tabs.js"
import { handleMenuDropdown } from "./modules/mobile-menu-dropdown.js"
import { handleAnimatedDropdown } from "./modules/dropdown.js"
import { handleSidebar } from "./modules/sidebar.js"
import { priceRange } from "./modules/price-range-slider.js"
import { handleViewButtons } from "./modules/viewButtons.js"
import { handleCounter } from "./modules/counter.js"
import { specialOfferCounter } from "./modules/special-offer-counter.js"
import { thumbsSlider } from "./modules/thumbs-slider.js"
import "./modules/map.js"

new SlimSelect({
    select: "#select-1",
    settings: {
        showSearch: false
    }
})

new SlimSelect({
    select: "#select-2",
    settings: {
        showSearch: false
    }
})

new SlimSelect({
    select: "#select-3",
    settings: {
        showSearch: false
    }
})

new SlimSelect({
    select: "#select-country",
    settings: {
        showSearch: false
    }
})

burgerMenu(
    "[data-type='burger']",
    "[data-type='sidemenu']"
)

handleSidebar()
handleViewButtons("[data-type='view-button']", "products-shop")

priceRange({
    id: "price-range-slider-1",
    minInputId: "price-range-input-1",
    maxInputId: "price-range-input-2",
    min: 1,
    max: 2920,
    step: 10,
    startValues: [1, 2000]
})

export function initSwiper(selector, options) {
    if (document.querySelector(selector)) {
        return new Swiper(selector, options)
    }
}

function handleTabsSliders(tabsId) {
    const tabs = document.getElementById(tabsId)

    if (!tabs) return

    const tabsItems = tabs.querySelectorAll(".tabs__item")

    tabsItems.forEach(item => {
        const { id } = item.dataset

        initSwiper(`#products-tab-slider-${id}`, {
            modules: [ Pagination ],
            spaceBetween: 100,
            pagination: {
                el: `#products-tab-slider__pagination-${id}`,
                clickable: true
            }
        })
    })
}

handleTabsSliders("tabs-2")

initSwiper("#hero-slider", {
    modules: [ Pagination, Autoplay, EffectFade ],
    effect: "fade",
    spaceBetween: 100,
    loop: true,
    pagination: {
        el: "#hero-slider__pagination",
        clickable: true
    },
    autoplay: {
        delay: 8000
    }
})

initSwiper("#logos-slider", {
    modules: [ Navigation ],
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: {
        prevEl: "#logos-arrow-prev",
        nextEl: "#logos-arrow-next"
    },
    breakpoints: {
        991: {
            slidesPerView: 5,
            spaceBetween: 50
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        545: {
            slidesPerView: 2,
            spaceBetween: 20
        }
    }
})

initSwiper("#products-slider-1", {
    modules: [ Pagination ],
    spaceBetween: 100,
    pagination: {
        el: "#products-slider__pagination-1",
        clickable: true
    }
})

initSwiper("#products-slider-2", {
    modules: [ Pagination, Navigation ],
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: "#products-slider__pagination-2",
        clickable: true
    },
    navigation: {
        prevEl: "#products-section-arrow-prev",
        nextEl: "#products-section-arrow-next"
    },
    breakpoints: {
        991: {
            slidesPerView: 6
        },
        768: {
            slidesPerView: 5
        },
        640: {
            slidesPerView: 4
        },
        545: {
            slidesPerView: 3
        },
        365: {
            slidesPerView: 2
        }
    }
})

initSwiper("#products-slider-3", {
    modules: [ Pagination ],
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: "#products-slider__pagination-3",
        clickable: true
    },
    breakpoints: {
        991: {
            slidesPerView: 4
        },
        768: {
            slidesPerView: 3
        },
        640: {
            slidesPerView: 3
        },
        545: {
            slidesPerView: 2
        }
    }
})

initSwiper("#products-slider-4", {
    modules: [ Pagination, Navigation ],
    slidesPerView: 1,
    pagination: {
        el: "#products-slider__pagination-4",
        clickable: true
    },
    navigation: {
        prevEl: "#products-section-arrow-prev",
        nextEl: "#products-section-arrow-next"
    },
    breakpoints: {
        768: {
            slidesPerView: 2
        }
    }
})

initSwiper("#products-slider-5", {
    modules: [ Pagination, Navigation ],
    slidesPerView: 1,
    pagination: {
        el: "#products-slider__pagination-5",
        clickable: true
    },
    navigation: {
        prevEl: "#products-section-arrow-prev",
        nextEl: "#products-section-arrow-next"
    },
    breakpoints: {
        768: {
            slidesPerView: 3
        },
        545: {
            slidesPerView: 2
        }
    }
})

initSwiper("#products-slider-6", {
    modules: [ Pagination, Navigation ],
    slidesPerView: 1,
    pagination: {
        el: "#products-slider__pagination-6",
        clickable: true
    },
    navigation: {
        prevEl: "#products-section-arrow-prev",
        nextEl: "#products-section-arrow-next"
    },
    breakpoints: {
        991: {
            slidesPerView: 4
        },
        768: {
            slidesPerView: 3
        },
        545: {
            slidesPerView: 2
        }
    }
})

thumbsSlider(
    "#thumbs-slider-1-1",
    "#thumbs-slider-1-2",
    {
        featuredSliderSettings: {
            modules: [ Thumbs ]
        },
        thumbsSliderSettings: {
            modules: [ Navigation, FreeMode ],
            slidesPerView: 2,
            spaceBetween: 10,
            freeMode: true,
            navigation: {
                prevEl: "#thumbs-left",
                nextEl: "#thumbs-right"
            },
            breakpoints: {
                545: {
                    slidesPerView: 4
                },
                360: {
                    slidesPerView: 3
                }
            }  
        }
    },
    true
)

tabs("tabs-1")
tabs("tabs-2")
specialOfferCounter()

document.addEventListener("click", event => {
    handleMenuDropdown(event)
    handleAnimatedDropdown(event)
    handleCounter(event)
})
