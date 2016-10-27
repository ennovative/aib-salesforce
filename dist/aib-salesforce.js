/*! aib-salesforce - v1.0.0 - 2016-10-27
* https://github.com/ennovative/aib-salesforce#readme
* Copyright (c) 2016 ; Licensed  */
function toggleNavigation() {
    var showClass = " showElement";
    var menuWrapperEl = document.querySelector(".customCommunityNavigationMenu .navigationMenuWrapper");

    if (menuWrapperEl.className.indexOf(showClass) > -1) {
        menuWrapperEl.className.replace(showClass, "");
    } else {
        menuWrapperEl.className += showClass;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var navigationToggleEl = document.getElementById("navigationToggle");
    if (navigationToggleEl) {
        setTimeout(function() {

            navigationToggleEl.addEventListener("click", function () {
                toggleNavigation();
            });

        },
        1000);
        
    }
});