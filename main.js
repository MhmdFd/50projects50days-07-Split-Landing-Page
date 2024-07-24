const container = document.querySelector('.container')
const left = document.querySelector('.left')
const right = document.querySelector('.right')

left.addEventListener('mouseover', () => container.classList.add('left-hover'))
left.addEventListener('mouseout', () => container.classList.remove('left-hover'))
right.addEventListener('mouseover', () => container.classList.add('right-hover'))
right.addEventListener('mouseout', () => container.classList.remove('right-hover'))