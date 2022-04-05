// countdown:

const countdown = (num) => {
  if (num > 0) {
    console.log(num);
    num--;
    countdown(num);
  } else {
    return;
  }
};

countdown(5);
