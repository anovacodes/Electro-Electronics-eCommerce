import Swiper from "swiper"

import { ProductModal } from "./product-modal.js"

export const thumbsSlider = (
    featuredSliderSelector, 
    thumbsSliderSelector, 
    { 
        featuredSliderSettings,
        thumbsSliderSettings
    },
    withModal = false
) => {
    const exists1 = document.querySelector(featuredSliderSelector)
    const exists2 = document.querySelector(thumbsSliderSelector)

    if (!exists1 || !exists2) return

    const thumbsSlider = new Swiper(thumbsSliderSelector, thumbsSliderSettings)
    const featuredSlider = new Swiper(
        featuredSliderSelector, 
        Object.assign(featuredSliderSettings, {
            thumbs: {
                swiper: thumbsSlider
            }
        })
    )

    if (withModal) {
        const images = exists1.querySelectorAll("[data-type='featured-image']")
        const modal = new ProductModal()

        images.forEach(image => {
            image.addEventListener("click", event => {
                const { id: initialSlide } = event.target.dataset

                modal.open(initialSlide)
            })
        })
    }
}




