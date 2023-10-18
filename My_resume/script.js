document.querySelector('.read-more-button').addEventListener('click', function() {
    var content = document.querySelector('.read-more-content');
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        this.textContent = 'Read less';
    } else {
        content.style.display = 'none';
        this.textContent = 'Read more';
    }
});
