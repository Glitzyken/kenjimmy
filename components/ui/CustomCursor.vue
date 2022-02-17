<template>
  <div class="custom-cursor">
    <div
      id="cursor-big"
      class="custom-cursor__ball custom-cursor__ball--big"
    ></div>
    <div
      id="cursor-small"
      class="custom-cursor__ball custom-cursor__ball--small"
    ></div>
  </div>
</template>

<script>
import gsap from 'gsap';

export default {
  props: {
    hoverClass: {
      type: String,
      default: 'cursor-hover'
    }
  },
  mounted() {
    const cursorBig = document.getElementById('cursor-big'),
      cursorSmall = document.getElementById('cursor-small'),
      links = document.getElementsByTagName('a'),
      withClassHover = document.getElementsByClassName(this.hoverClass),
      withHover = [...links, ...withClassHover];

    // Event Listeners
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseHover);
    document.addEventListener('mouseup', onMouseHoverOut);
    document.addEventListener('mouseenter', () => {
      cursorBig.style.opacity = 1;
      cursorSmall.style.opacity = 1;
    });
    document.addEventListener('mouseleave', () => {
      cursorBig.style.opacity = 0;
      cursorSmall.style.opacity = 0;
    });
    withHover.forEach(element => {
      element.addEventListener('mouseover', onMouseHover);
      element.addEventListener('mouseout', onMouseHoverOut);
    });

    // Event Handlers
    function onMouseMove(e) {
      cursorSmall.style.opacity = 1;
      gsap.to(cursorBig, 0.4, {
        x: e.clientX - 18,
        y: e.clientY - 18
      });
      gsap.to(cursorSmall, 0.1, {
        x: e.clientX - 4,
        y: e.clientY - 4
      });
    }
    function onMouseHover() {
      gsap.to(cursorBig, 0.3, {
        scale: 3
      });
    }
    function onMouseHoverOut() {
      gsap.to(cursorBig, 0.3, {
        scale: 1
      });
    }
  }
};
</script>

<style>
@media screen and (min-width: 1100px) {
  /*
  * {
    cursor: none !important;
  }
  */

  .custom-cursor__ball {
    position: fixed;
    top: 0;
    left: 0;
    mix-blend-mode: difference;
    z-index: 99999;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.5s ease;
  }

  .custom-cursor__ball--big {
    content: '';
    width: 25px;
    height: 25px;
    background: white;
    border-radius: 50%;
  }

  .custom-cursor__ball--small {
    content: '';
    width: 4px;
    height: 4px;
    background: #f1515c;
    border-radius: 50%;
  }
}
</style>
