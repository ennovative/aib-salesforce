function toggleNavigation() {
    var showClass = " showElement";
    var menuWrapperEl = document.querySelector(".customCommunityNavigationMenu .navigationMenuWrapper");

    if (menuWrapperEl.className.indexOf(showClass) > -1) {
        menuWrapperEl.className = menuWrapperEl.className.replace(showClass, "");
    } else {
        menuWrapperEl.className += showClass;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var navigationToggleEl = document.getElementById("navigationToggle");
    if (navigationToggleEl) {

        navigationToggleEl.addEventListener("click", function () {
            toggleNavigation();
        });
        
    }
});