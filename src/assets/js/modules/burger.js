import { Sidemenu } from "./sidemenu.js"

export const burgerMenu = (selector, menu) => {
    const burger = document.querySelector(selector)
    const sidemenu = new Sidemenu({ menu, burger })

    if (!burger) return null

    burger.addEventListener("click", () => {
        burger.classList.toggle("active")

        sidemenu.toggle()
    })
}
