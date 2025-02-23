document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            const submenu = this.querySelector('.submenu');
            if (submenu) {
                submenu.style.display = 'block';
                submenu.style.animation = 'fadeIn 0.3s ease-in-out';
            }
        });

        item.addEventListener('mouseout', function() {
            const submenu = this.querySelector('.submenu');
            if (submenu) {
                submenu.style.display = 'none';
            }
        });
    });
});
