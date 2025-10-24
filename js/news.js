document.addEventListener('DOMContentLoaded', function () {
    const newsItems = document.querySelectorAll('.news-item');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('newsSearch');
    const paginationButtons = document.querySelectorAll('.pagination-btn');

    // Filter news by category
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter items
            newsItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Search functionality
    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();

        newsItems.forEach(item => {
            const title = item.querySelector('.news-title').textContent.toLowerCase();
            const excerpt = item.querySelector('.news-excerpt').textContent.toLowerCase();
            const category = item.getAttribute('data-category');

            if (title.includes(searchTerm) || excerpt.includes(searchTerm) || category.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });

    // Pagination functionality
    paginationButtons.forEach(button => {
        button.addEventListener('click', function () {
            if (this.classList.contains('active')) return;

            // Update active pagination button
            paginationButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // In a real application, this would load the appropriate page
            // For this demo, we'll just show a message
            if (!this.classList.contains('next')) {
                const pageNum = this.textContent;
                alert(`Loading page ${pageNum}... (This is a demo - in a real application, new content would load here)`);
            } else {
                alert('Loading next page... (This is a demo - in a real application, new content would load here)');
            }
        });
    });

    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;

            // Show loading state
            const submitBtn = this.querySelector('.btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Subscribing...';
            submitBtn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                alert(`Thank you for subscribing with ${email}! You will now receive updates about the PM Laptop Scheme.`);
                emailInput.value = '';

                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    // Read More links - in a real site these would navigate to full articles
    const readMoreLinks = document.querySelectorAll('.news-read-more');
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const newsTitle = this.closest('.news-item').querySelector('.news-title').textContent;
            alert(`This would open the full article: "${newsTitle}" (This is a demo - in a real application, you would be taken to the full article page)`);
        });
    });
});