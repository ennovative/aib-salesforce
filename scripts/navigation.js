﻿function toggleNavigation() {
    var showClass = " showElement";
    var menuWrapperEl = document.querySelector(".customCommunityNavigationMenu .navigationMenuWrapper");

    if (menuWrapperEl.className.indexOf(showClass) > -1) {
        menuWrapperEl.className = menuWrapperEl.className.replace(showClass, "");
    } else {
        menuWrapperEl.className += showClass;
    }
}

window.onload = function() {
    var navigationToggleEl = document.getElementById("navigationToggle");
    var menuCurtainEl = document.querySelector(".customCommunityNavigationMenu .navigationMenuWrapperCurtain a");

    console.log(navigationToggleEl);
    if (navigationToggleEl != null) {
        navigationToggleEl.addEventListener("click",
            function() {
                toggleNavigation();
            });
    }

    console.log(menuCurtainEl);
    if (menuCurtainEl != null) {
        menuCurtainEl.addEventListener("click",
            function() {
                toggleNavigation();
            });
    }
};