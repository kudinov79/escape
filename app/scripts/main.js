let app = {

    initial: function () {

        // menu open function
        this.menuOpenFunc();

        // menu open function
        this.menuCloseFunc();

    },

    menuOpenFunc: function () {
        $('.hamburger').on('click', function () {
            $(this).toggleClass('is-active');
            $('.head-nav-list').toggleClass('active');
        });
    },

    menuCloseFunc: function () {
        $('.head-nav-list').on('click', function () {
            $(this).removeClass('active');
            $('.hamburger').removeClass('is-active');
        });
    }

};

(function () {
    app.initial();
})();
