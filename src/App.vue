<template>
  <router-view class="app" />
</template>


<script>
// 定义好rem尺寸为 1px = 0.1rem
(function(doc, win) {
	var docEl = doc.documentElement,
	resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
	recalc = function() {
		var clientWidth = docEl.clientWidth;
		if (!clientWidth) return;
		docEl.style.fontSize = 10 * (clientWidth / 750) + "px";
	};
	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
