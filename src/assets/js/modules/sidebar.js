export const handleSidebar = () => {
    const sidebar = document.querySelector("#sidebar")
    const sidebarButton = sidebar?.querySelector("#sidebar-button")

    if (!sidebar && !sidebarButton) return

    onResize()

    window.addEventListener("resize", onResize)

    sidebarButton.addEventListener("click", () => {
        toggleActive(sidebar)
    })
}

function toggleActive(sidebar) {
    if (sidebar.classList.contains("active")) {
        sidebar.classList.remove("active")

        setTimeout(() => {
            sidebar.classList.add("hidden")
        }, 500)
    } else {
        sidebar.classList.remove("hidden")
        setTimeout(() => {
            sidebar.classList.add("active")
        }, 50)
    }
}

function onResize() {
    if (window.innerWidth > 991 && sidebar.classList.contains("hidden")) {
        sidebar.classList.remove("hidden")
    } else if (window.innerWidth <= 991 && !sidebar.classList.contains("hidden")) {
        sidebar.classList.add("hidden")
    }
}