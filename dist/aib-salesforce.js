/*! aib-salesforce - v1.0.0 - 2016-11-25
* https://github.com/ennovative/aib-salesforce#readme
* Copyright (c) 2016 ; Licensed  */
function toggleNavigation() {
    var showClass = " showElement";
    var menuWrapperEl = document.querySelector(".customCommunityNavigationMenu .navigationMenuWrapper");

    if (menuWrapperEl.className.indexOf(showClass) > -1) {
        menuWrapperEl.className = menuWrapperEl.className.replace(showClass, "");
    } else {
        menuWrapperEl.className += showClass;
    }
}

window.onload = function () {
    setTimeout(function() {
        var navigationToggleEl = document.getElementById("navigationToggle");
        var menuCurtainEl = document.querySelector(".customCommunityNavigationMenu .navigationMenuWrapperCurtain a");

        if (navigationToggleEl != null) {
            navigationToggleEl.addEventListener("click",
                function () {
                    toggleNavigation();
                });
        }

        if (menuCurtainEl != null) {
            menuCurtainEl.addEventListener("click",
                function () {
                    toggleNavigation();
                });
        }
    },
    1000);
};