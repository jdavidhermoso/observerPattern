(function () {
    // Module 2 subscription uses the value to change all the 'e' letters for 'y';
    window.blogObserver.subscribe((data) => {
        let newString = data.replace(/e/g, "y")

        let el = document.getElementById('component2Logger');
        el.innerText = `${newString}`;
    });
})();