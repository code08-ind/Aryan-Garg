$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
});
$('.navbar-nav>li>a , .navbar-nav>li>button').on('click', function () {
    $('.navbar-collapse').toggle();
});
$('.navbar-toggler').on('click', function () {
    $('.navbar-collapse').toggle();
});

var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
};

window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1500,
    distance: '25rem',
    delay: 800
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1400,
    distance: '25rem',
    delay: 800
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1400,
    distance: '25rem',
    delay: 700
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1400,
    distance: '25rem',
    delay: 700
});

$("li .btn-dark").click(function () {
    $("nav").addClass("bg-dark");
    $("nav").removeClass("bg-light");
    $("nav ul.navbar-nav li.nav-item button.bt1").addClass("btn-light");
    $("nav ul.navbar-nav li.nav-item button.bt1").removeClass("btn-dark");
    $("nav ul.navbar-nav li.nav-item button.bt1").css({
        "color": "black",
    });
    $("nav ul.navbar-nav li.nav-item button.bt2").addClass("btn-dark");
    $("nav ul.navbar-nav li.nav-item button.bt2").removeClass("btn-light");
    $("nav ul.navbar-nav li.nav-item button.bt2").css({
        "color": "white",
        "border": "2px solid white",
    });
    $("nav ul.navbar-nav li.nav-item a.nav-link").css({
        "color": "white",
    });
    $("a.navbar-brand span#heading").css({
        "color": "white",
    });
    $("#first,.about").css({
        "background-color": "#200f21",
    });
    $("#about").css({
        "color": "#ff8ba0",
    });
    $("#first").css({
        "color": "#e41f7b",
    });
    $(".filter").css({
        "filter": "invert(100%)",
    });
    $(".more,#skills").css({
        "color": "#7579E7",
        "background-color": "#1B1B2F"
    });
    $(".projects,#second").css({
        "color": "white",
        "background-color": "black"
    });
    $(".back").css({
        "color": "black",
        "background-color": "grey"
    });
    $(".third").css({
        "color": "#ffc60b",
    });
    $(".fourth").css({
        "box-shadow": "5px 10px 10px -5px white",
    });
    $(".contact").css({
        "background-color": "#646464",
    });
    $("#contact").css({
        "color": "#fff",
    });
    $(".new").css({
        "background-color": "#343434",
    });
    $(".icon").css({
        "color": "white",
    });
    $(".card-content>h3").css({
        "color": "red",
    });
    $(".card-content>span").css({
        "color": "yellow",
    });
    $(".foot").css({
        "color": "#ebd4d4",
        "background-color": "#463333"
    });
    $("div>a>.fa-arrow-circle-up").css({
        "color": "white",
        "background-color": "#463333"
    });
});

$("li .btn-light").click(function () {
    $("nav").addClass("bg-light");
    $("nav").removeClass("bg-dark");
    $("nav ul.navbar-nav li.nav-item button.bt1").addClass("btn-dark");
    $("nav ul.navbar-nav li.nav-item button.bt1").removeClass("btn-light");
    $("nav ul.navbar-nav li.nav-item button.bt1").css({
        "color": "white",
    });
    $("nav ul.navbar-nav li.nav-item button.bt2").addClass("btn-light");
    $("nav ul.navbar-nav li.nav-item button.bt2").removeClass("btn-dark");
    $("nav ul.navbar-nav li.nav-item button.bt2").css({
        "color": "black",
        "border": "2px solid black",
    });
    $("nav ul.navbar-nav li.nav-item a.nav-link").css({
        "color": "black",
    });
    $("a.navbar-brand span#heading").css({
        "color": "black",
    });
    $("#first,.about").css({
        "background-color": "#d6e0f0"
    });
    $("#about").css({
        "color": "black",
    });
    $(".filter").css({
        "filter": "invert(0%)",
    });
    $("#first").css({
        "color": "black",
    });
    $(".more,#skills").css({
        "color": "black",
        "background-color": "white"
    });
    $(".projects,#second").css({
        "color": "black",
        "background-color": "rgb(255,250,240)"
    });
    $(".back").css({
        "color": "black",
        "background-color": "rgb(255,250,240)"
    });
    $(".third").css({
        "color": "#0f3057",
    });
    $(".fourth").css({
        "box-shadow": "5px 10px 10px -5px black",
    });
    $(".contact").css({
        "background-color": "white",
    });
    $("#contact").css({
        "color": "black",
    });
    $(".new").css({
        "background-color": "#9ed7f8",
    });
    $(".icon").css({
        "color": "#3498db",
    });
    $(".card-content>h3").css({
        "color": "#3498db",
    });
    $(".card-content>span").css({
        "color": "white",
    });
    $(".foot").css({
        "color": "black",
        "background-color": "#ebd4d4"
    });
    $("div>a>.fa-arrow-circle-up").css({
        "color": "black",
        "background-color": "#ebd4d4"
    });
});