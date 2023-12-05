const views = [
    "products_view_grid-extended",
    "products_view_grid",
    "products_view_list"
]

export const handleViewButtons = (selector, productsId) => {
    const buttons = document.querySelectorAll(selector)
    const productsContainer = document.getElementById(productsId)

    if (!productsContainer) return



    buttons.forEach(button => {
        button.addEventListener("click", event => {
            for (let btn of buttons) {
                btn.classList.remove("active")
            }

            event.target.classList.add("active")

            const { view: viewClassname, rating } = event.target.dataset
            
            for (let view of views) {
                if (productsContainer.classList.contains(view)) {
                    productsContainer.classList.remove(view, "products_description")
                }
            }

            productsContainer.className = `${viewClassname} ${rating ? "products_description" : ""}`
        })
    })
}

