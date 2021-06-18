<template>
  <div class="bg-kjColorLight w-screen h-screen fixed z">
    <div class="w-screen h-screen flex items-center justify-center">
      <p class="text-3xl font-bold">Kenneth Jimmy</p>
    </div>

    <div class="full-water">
      <div class="water">
        <div class="splash splash--1"></div>
        <div class="splash splash--2"></div>
        <div class="splash splash--3"></div>
        <div class="splash splash--4"></div>
        <div class="splash splash--5"></div>
        <div class="splash splash--6"></div>
        <div class="splash splash--7"></div>
        <div class="splash splash--8"></div>
        <div class="splash splash--9"></div>
        <svg class="wobble" viewBox="0 0 841.9 73.5">
          <path
            id="trampoline"
            fill="#ED1C24"
            d="M851,79.5H-8V13.4c0,0,243,0,430,0s429,0,429,0V79.5z"
          ></path>
          <animate
            xlink:href="#trampoline"
            attributeName="d"
            begin="5.2s"
            dur="1s"
            fill="freeze"
            keyTimes="0; 0.2; 0.5; 1"
            values="M851,79.5H-8V13.4c0,0,243,0,430,0s429,0,429,0V79.5z; M851,79.5H-8V13.4c0,0,243,10,430,10s429-10,429-10V79.5z; M851,79.5H-8V13.4c0,0,243-4,430-4s429,4,429,4V79.5z; M851,79.5H-8V13.4c0,0,243,0,430,0s429,0,429,0V79.5z;"
          ></animate>
        </svg>
      </div>
    </div>
    <p id="replay" class="text-white text-3xl">
      The conscientious engineer.
    </p>
  </div>
</template>

<style scoped>
.z {
  z-index: 1000;
}
/* * ~~ 3 * Water & Wobble * start: 4sec, dur: 2sec */
.water {
  animation: rising 1.5s 1s both;
  background-color: #607393;
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
}
@keyframes rising {
  0% {
    bottom: -200%;
  }
  100% {
    bottom: -80%;
  }
}
/* * ~~ 4 * Splash & Wobble/Trampoline * start: 5.3sec, dur: ~1sec */
.splash {
  background-color: #607393;
  border-radius: 50%;
  position: absolute;
}
.wobble {
  margin-top: -40px;
  position: absolute;
  width: 100vw;
}
#trampoline {
  fill: #607393;
}
.splash--1 {
  animation-delay: 5.3s;
  animation-duration: 1.4333333333s;
  animation-fill-mode: both;
  animation-name: splash--1;
  height: 14px;
  left: 43%;
  width: 14px;
}
@keyframes splash--1 {
  0% {
    margin: 0;
    opacity: 1;
    padding: 20px;
    top: 0;
  }
  100% {
    margin: 24px;
    opacity: 0;
    padding: -4px;
    top: -47px;
  }
}
.splash--2 {
  animation-delay: 5.3s;
  animation-duration: 1.3666666667s;
  animation-fill-mode: both;
  animation-name: splash--2;
  height: 8px;
  left: 47%;
  width: 8px;
}
@keyframes splash--2 {
  0% {
    margin: 0;
    opacity: 1;
    padding: 4px;
    top: 0;
  }
  100% {
    margin: 5px;
    opacity: 0;
    padding: -20px;
    top: -98px;
  }
}
.splash--3 {
  animation-delay: 5.3s;
  animation-duration: 1.3s;
  animation-fill-mode: both;
  animation-name: splash--3;
  height: 3px;
  left: 46%;
  width: 3px;
}
@keyframes splash--3 {
  0% {
    margin: 0;
    opacity: 1;
    padding: 7px;
    top: 0;
  }
  100% {
    margin: 14px;
    opacity: 0;
    padding: -12px;
    top: -90px;
  }
}
.splash--4 {
  animation-delay: 5.3s;
  animation-duration: 1.2333333333s;
  animation-fill-mode: both;
  animation-name: splash--4;
  height: 3px;
  left: 47%;
  width: 3px;
}
@keyframes splash--4 {
  0% {
    margin: 0;
    opacity: 1;
    padding: 14px;
    top: 0;
  }
  100% {
    margin: 18px;
    opacity: 0;
    padding: -7px;
    top: -89px;
  }
}
.splash--5 {
  animation-delay: 5.3s;
  animation-duration: 1.1666666667s;
  animation-fill-mode: both;
  animation-name: splash--5;
  height: 5px;
  left: 44%;
  width: 5px;
}
@keyframes splash--5 {
  0% {
    margin: 0;
    opacity: 1;
    padding: 9px;
    top: 0;
  }
  100% {
    margin: 12px;
    opacity: 0;
    padding: -21px;
    top: -102px;
  }
}
.splash--6 {
  animation-delay: 5.3s;
  animation-duration: 1.1s;
  animation-fill-mode: both;
  animation-name: splash--6;
  height: 20px;
  left: 44%;
  width: 20px;
}
@keyframes splash--6 {
  0% {
    margin: 0;
    opacity: 1;
    padding: 7px;
    top: 0;
  }
  100% {
    margin: 18px;
    opacity: 0;
    padding: -11px;
    top: -104px;
  }
}
.splash--7 {
  animation-delay: 5.3s;
  animation-duration: 1.0333333333s;
  animation-fill-mode: both;
  animation-name: splash--7;
  height: 7px;
  left: 45%;
  width: 7px;
}
@keyframes splash--7 {
  0% {
    margin: 0;
    opacity: 1;
    padding: 22px;
    top: 0;
  }
  100% {
    margin: 9px;
    opacity: 0;
    padding: -7px;
    top: -85px;
  }
}
.splash--8 {
  animation-delay: 5.3s;
  animation-duration: 0.9666666667s;
  animation-fill-mode: both;
  animation-name: splash--8;
  height: 18px;
  left: 44%;
  width: 18px;
}
@keyframes splash--8 {
  0% {
    margin: 0;
    opacity: 1;
    padding: 12px;
    top: 0;
  }
  100% {
    margin: 6px;
    opacity: 0;
    padding: -15px;
    top: -97px;
  }
}
.splash--9 {
  animation-delay: 5.3s;
  animation-duration: 0.9s;
  animation-fill-mode: both;
  animation-name: splash--9;
  height: 6px;
  left: 45%;
  width: 6px;
}
@keyframes splash--9 {
  0% {
    margin: 0;
    opacity: 1;
    padding: 20px;
    top: 0;
  }
  100% {
    margin: 19px;
    opacity: 0;
    padding: -9px;
    top: -94px;
  }
}
.splash--10 {
  animation-delay: 5.3s;
  animation-duration: 0.8333333333s;
  animation-fill-mode: both;
  animation-name: splash--10;
  height: 9px;
  left: 43%;
  width: 9px;
}
@keyframes splash--10 {
  0% {
    margin: 0;
    opacity: 1;
    padding: 5px;
    top: 0;
  }
  100% {
    margin: 15px;
    opacity: 0;
    padding: -10px;
    top: -92px;
  }
}
/* * ~~ 5 * Water Fullrise * start: 6.5sec, dur: 1sec */
.full-water {
  animation: fullRising 1s 6.5s both;
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
}
@keyframes fullRising {
  0% {
    bottom: 0;
  }
  100% {
    bottom: 80%;
  }
}
/* * Finishing up */
#replay {
  animation: appear 1s 8s both;
  bottom: 10px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  z-index: 999;
}
@keyframes appear {
  0% {
    opacity: 0;
    height: 0;
  }
  100% {
    opacity: 1;
    height: 10px;
  }
}
</style>
