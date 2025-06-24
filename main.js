document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  document.querySelectorAll('.action-button').forEach(button => {
    button.addEventListener('click', function() {
      const text = this.textContent.trim();
      const original = this.innerHTML;
      this.innerHTML = '<span class="loading"></span> Loading...';
      setTimeout(() => {
        this.innerHTML = original;
        alert(text + ' - Feature coming soon!');
      }, 1500);
    });
  });
});