<template>
	<div class="loading-wrape">
		<div class="wrape right">
			<div class="load right-circle"></div>
		</div>
		<div class="wrape left">
			<div class="load left-circle"></div>
		</div>
	</div>
</template>

<style type="stylesheet/css" lang="less" scoped>
	@import '~src/assets/css/common.less';
	.loading-wrape {
		position: relative;
		width: 120px;
		height: 120px;
		border: 1px solid #ddd;
		.wrape {
			position: absolute;
			top: 0;
			width: 60px;
			height: 120px;
			overflow: hidden;
		}
		.right {
			right: 0;
		}
		.left {
			left: 0;
		}
	}
	.load {
		width: 110px;
		height: 110px;
		border: 5px solid transparent;
		border-radius: 50%;
		position: absolute;
		top: 0px;
		-webkit-transform: rotate(45deg);
		-moz-transform: rotate(45deg);
	}
	.right-circle {
		border-top: 5px solid green;
		border-right: 5px solid green;
		right: 0;
		-webkit-animation: load_right 5s linear infinite;
		-moz-animation: load_right 5s linear infinite;
	}
	.left-circle {
		border-bottom: 5px solid green;
		border-left: 5px solid green;
		left: 0;
		-webkit-animation: load_left 5s linear infinite;
		-moz-animation: load_left 5s linear infinite;
	}
	@keyframes load_right {
		0%{
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
        }
        50%,100%{
            -webkit-transform: rotate(225deg);
            -moz-transform: rotate(225deg);
        }
	}
	@keyframes load_left {
		0%, 50%{
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
        }
        100%{
            -webkit-transform: rotate(225deg);
            -moz-transform: rotate(225deg);
        }
	}
</style>

<script type="text/babel">
	import index from './index.js'
	export default {
		...index
	}
</script>