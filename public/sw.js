/* eslint-disable no-restricted-globals */
self.addEventListener('message', function (e) {
  if (e.data === 'startTimer') {
    const date = new Date();
    let currentSecond = date.getSeconds() * 6;
    let currentMinute = date.getMinutes() * 6;
    let currentHour = (date.getHours() + date.getMinutes() / 60) * 30;

    setInterval(() => {
      let time = {
        seconds: currentSecond,
        minutes: currentMinute,
        hours: currentHour,
      };

      currentSecond = currentSecond + 6;
      currentMinute = currentMinute + 6 / 60;
      currentHour = currentHour + 30 / 3600;

      self.postMessage(time);
    }, 1000);
  }
});
