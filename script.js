const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
const handleScroll = () => {
    sections.forEach((section, index) => {
        if (isInViewport(section)) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
};

window.addEventListener('scroll', handleScroll);
document.querySelector('.menu-icon').addEventListener('click', function() {
  document.querySelector('header').classList.toggle('show-menu');
});
