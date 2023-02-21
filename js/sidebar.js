
const sidebar = document.querySelector(".sidebar");
const toggleSidebar = document.querySelector(".toggle-sidebar");
const text = document.querySelectorAll(".text");
const items = document.querySelectorAll(".sidebar-item")
const search = document.querySelector(".search-box")

search.addEventListener("click", () => {
    sidebar.classList.remove("sidebar-closed")
    text.forEach((txt) => {
        txt.classList.remove("text-closed")
    })
})

toggleSidebar.addEventListener("click", () => {
    toggleSidebar.classList.toggle("toggle-sidebar-closed")
    sidebar.classList.toggle("sidebar-closed");
    text.forEach((txt) => {
        txt.classList.toggle("text-closed");
    });
    items.forEach((item) => {
        item.classList.toggle(".sidebar-item-closed")
    })
});