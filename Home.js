document.querySelectorAll('.accordion-question').forEach(button => {
    button.addEventListener('click', () => {
        console.log("Button clicked")
      const item = button.parentNode;
      const isActive = item.classList.contains('active');
      
      // Close all items
      document.querySelectorAll('.accordion-item').forEach(el => {
        el.classList.remove('active');
      });
      
      // Open clicked item if it wasn't active
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });