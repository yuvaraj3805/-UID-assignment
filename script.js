
    const target = document.getElementById('target');
    let isHovered = false;

    target.addEventListener('click', () => {
      if (isHovered) {
        alert('Button Clicked! Redirecting to About Us page.');
        window.location.href = 'about.html';
      } else {
        alert('Button Clicked! Redirecting to Calculator page.');
        window.location.href = 'calculator.html';
      }
    });

    target.addEventListener('mouseover', () => {
      target.style.backgroundColor = 'lightgreen';
      isHovered = true;
    });

    target.addEventListener('mouseout', () => {
      target.style.backgroundColor = 'lightblue';
      isHovered = false;
    });
  