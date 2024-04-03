// Sticky Navbar
$(window).scroll(function() {
    if ($(this).scrollTop() > 45) {
        $('.navbar').addClass('sticky-top shadow-sm');
    } else {
        $('.navbar').removeClass('sticky-top shadow-sm');
    }
});

const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

// Apply dark mode class if enabled
if (isDarkMode) {
    document.body.classList.add('dark-mode');
}

// Dark mode toggle function
function toggleDarkMode() {
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark-mode');

    // Store dark mode preference in local storage
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}

// Attach click event to the dark mode toggle button
document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);
// Back to top button
$(window).scroll(function() {
    if ($(this).scrollTop() > 10) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
});


// Skills
$('.skill').waypoint(function() {
    $('.progress .progress-bar').each(function() {
        $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
}, {
    offset: '80%'
});



// Testimonials carousel
$(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 25,
    dots: false,
    loop: true,
    nav: true,
    navText: [
        '<i class="bi bi-chevron-left"></i>',
        '<i class="bi bi-chevron-right"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        992: {
            items: 2
        }
    }
});