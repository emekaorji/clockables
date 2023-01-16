/* eslint-disable no-restricted-globals */
self.addEventListener('message', function (e) {
  // if (e.data === 'run the timer') {
  //   let count = 0;

  //   setInterval((_: any) => {
  //     count += 10;

  //     let ms = count % 1000;
  //     let s = Math.floor(count / 1000) % 60;
  //     let m = Math.floor(count / 60000) % 60;

  //     let time = m + ':' + s + ':' + ms;

  //     self.postMessage(time);
  //   }, 10);
  // }
  self.postMessage('time');
});

export {};
