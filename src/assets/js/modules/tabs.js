export const tabs = id => {
    const tabsBlock = document.getElementById(id)

    if (!tabsBlock) return null

    const tabs = tabsBlock.querySelectorAll(".tabs__tab")
    const tabsItems = tabsBlock.querySelectorAll(".tabs__item")

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            handleTab(tabs, tab, tabsItems)
        })
    })
}

function handleTab(tabs, tab, tabsItems) {
    const { id } = tab.dataset

    tabs.forEach(t => {
        t.classList.remove("active")
    })

    tab.classList.add("active")

    tabsItems.forEach(item => {
        item.classList.remove("active")

        if (item.dataset.id === id) {
            item.classList.add("active")
        }
    })
}

