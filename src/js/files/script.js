window.onload = function () {
    document.addEventListener("click", documentActions);
    // Actions (Делегирование событий Click)
    function documentActions(e) {
        const targetElement = e.target;
        if (targetElement.classList.contains("search-form__icon")) {
            document.querySelector(".search-form").classList.toggle("_active");
        } else if (!targetElement.closest(".search-form") && document.querySelector(".search-form._active")) {
            document.querySelector(".search-form").classList.remove("_active");
        }
    }
};
