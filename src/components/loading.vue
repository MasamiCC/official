<template>
	<!-- 等待中 -->
	<div class="loading_area"></div>
</template>

<style type="text/css">
	.loading_area{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url(../../static/img/loading.gif);
		background-repeat: no-repeat;
		background-position: center center;
		z-index: 999;
		background-color: #FFFFFF;
	}
</style>

<!-- js -->
<script>
  export default {
  }
</script>