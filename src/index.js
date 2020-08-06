window.addEventListener('load', () => {
  const imageContainer = document.querySelector('#img-container');
  const choiceContainer = document.querySelector('#choice-container');
  const prevButton = document.querySelector('#prev');
  const nextButton = document.querySelector('#next');

  const images = imageContainer.querySelectorAll('img');
  const imageCount = images.length;
  const end = -500*imageCount;
  console.log(end)
  let position = 0;

  images.forEach((image, i) => {
    image.setAttribute('data-index',i);
    const btn = document.createElement('button');
    btn.setAttribute('data-index', i);
    btn.setAttribute('class', 'choice-btn');
    btn.addEventListener('click', function(e) {
      const index = parseInt(this.dataset.index);
      highlight(index);
      position = index * -500;
      moveSlider(position);
    });
    choiceContainer.appendChild(btn);
  });

  const highlight = (index) => {
    const choiceButtons = document.querySelectorAll('.choice-btn');
    choiceButtons.forEach((el, i) => {
      if (i !== index) {
        el.classList.remove('chosen');  
      } else {
        el.classList.add('chosen');  
      }
    });
  }

  const trackPosition = (position) => {
    const index = position / (-500);
    console.log(index);
    highlight(index);
  }

  const resetPosition = (position) => {
    if (position > 0) {
      return end + 500;
    }

    if (position < end + 500) {
      return 0;
    }
    return position;
  }

  const moveSlider = (position) => {
    imageContainer.style.transform = `translate(${position}px)`;
  }

  prevButton.addEventListener('click', function(e) {
    position += 500;
    trackPosition(position);
    position = resetPosition(position);
    moveSlider(position);
    trackPosition(position);
  });

  nextButton.addEventListener('click', function(e) {
    position -= 500;
    trackPosition(position);
    position = resetPosition(position);
    moveSlider(position);
    trackPosition(position);
  });
  highlight(position); 
});