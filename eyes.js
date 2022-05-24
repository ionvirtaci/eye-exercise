const balls = document.getElementsByClassName('ball');

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

const ballsArr = Array.from(balls);
for (let i=0; i < ballsArr.length; i++){
  ballsArr[i].style.left = x;
  ballsArr[i].style.top = y;
  ballsArr[i].transform = 'translate(-' + x + ',-' + y + ')';
}

};
