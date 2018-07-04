(function () {
    // Module 1 subscription uses the value to change all the 'a' letters for 'x';
    window.blogObserver.subscribe((data) => {
        let newString = data.replace(/a/g, "x");
        let el = document.getElementById('component1Logger');
        el.innerText = `${newString}`;
    });
})();