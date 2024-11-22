import { Navigation } from "swiper/modules"
import { initSwiper } from "../index.js"

export class ProductModal {
    isClosing = false

    constructor() {
        this.modal = document.querySelector("#product-modal")

        this.init()
    }

    init() {
        if (!this.modal) return null

        this.modal.addEventListener("click", event => {
            const { closable } = event.target.dataset

            if (closable) {
                this.close()
            }
        })
    }

    get isActive() {
        return this.modal.classList.contains("active")
    }

    onClose() {
        if (this.isClosing) return null

        this.isClosing = true

        this.modal.classList.add("hidden")

        setTimeout(() => {
            this.modal.classList.remove("hidden")
            this.isClosing = false
            this.swiper.destroy()

            document.body.style.overflow = 'unset'
        }, 500)
    }

    open(initialSlide = 1) {
        document.body.style.overflow = "hidden"

        this.swiper = initSwiper("#product-modal-slider", {
            modules: [Navigation],
            spaceBetween: 100,
            initialSlide: initialSlide - 1,
            navigation: {
                prevEl: "#product-modal-left",
                nextEl: "#product-modal-right"
            }
        })

        this.modal.classList.add("active")
    }

    close() {
        this.onClose()
        this.modal.classList.remove("active")
    }
}

