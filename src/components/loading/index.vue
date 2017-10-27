<template>
	<div>
		<!-- 第一种类型 -->
		<div class="loading-wrape">
			<span class="loading-first"></span>
			<span class="title">{{title}}</span>
		</div>
		<!-- 第二种类型 -->
		<div class="loading-wrape">
			<div class="loading-second right">
				<div class="load right-circle"></div>
			</div>
			<div class="loading-second left">
				<div class="load left-circle"></div>
			</div>
			<span class="title">{{title}}</span>
		</div>
		<!-- 第三种类型 -->
		<div class="loading-wrape">
			<div class="loading-three">
				<span class="circle first"></span>
				<span class="circle second"></span>
				<span class="circle three"></span>
				<span class="title">{{title}}</span>
			</div>
		</div>
		<!-- 第四种类型 -->
		<div class="loading-wrape">
			<ul class="loading-four">
				<li class="line" v-for="(item,index) in 12" :class="[index === active ? 'active-line' : '']"></li>
				<!-- <li class="active-line"></li> -->
			</ul>
			<span class="title">{{title}}</span>
		</div>
	</div>
	
</template>

<style type="stylesheet/css" lang="less" scoped>
	@import '~src/assets/css/common.less';
	/*所有类型公共样式*/
	.title {
		display: block;
		margin: 0 auto;
		font-size: 14px;
		color: #20A0FF;
	}
	.loading-wrape {
		position: relative;
		display: inline-block;
		vertical-align: top;
		width: 100px;
		height: 100px;
		border: 1px solid #ddd;
		text-align: center;
		background-color: rgba(0, 0, 0, 0.2);
	}
	/*第一种类型*/
	.loading-first {
		width: 50px;
		height: 50px;
		margin: 0 auto;
		margin-top: 5px;
		display: block;
		border: 2px solid transparent;
		border-radius: 50%;
		border-right-color: #20A0FF;
		-webkit-animation: load-first 2s linear infinite;
	}
	@keyframes load-first {
		0% {
			-webkit-transform: rotate(0);
		}
		50% {
			-webkit-transform: rotate(180deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
		}
	}

	/*第二种类型*/
	.loading-second {
		position: absolute;
		top: 20px;
		width: 30px;
		height: 100px;
		overflow: hidden;
		.load {
			width: 57px;
			height: 57px;
			border: 2px solid transparent;
			border-radius: 50%;
			position: absolute;
			top: 0px;
			-webkit-transform: rotate(45deg);
			-moz-transform: rotate(45deg);
		}
		.right-circle {
			border-top: 2px solid green;
			border-right: 2px solid green;
			right: 0;
			-webkit-animation: load-second_right 3s linear infinite;
			-moz-animation: load-second_right 3s linear infinite;
		}
		.left-circle {
			border-bottom: 2px solid green;
			border-left: 2px solid green;
			left: 0;
			-webkit-animation: load-second_left 3s linear infinite;
			-moz-animation: load-second_left 3s linear infinite;
		}
	}
	.right {
		right: 20px;
	}
	.left {
		left: 20px;
	}
	@keyframes load-second_right {
		0%{
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
        }
        50%,100%{
            -webkit-transform: rotate(225deg);
            -moz-transform: rotate(225deg);
        }
	}
	@keyframes load-second_left {
		0%, 50%{
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
        }
        100%{
            -webkit-transform: rotate(225deg);
            -moz-transform: rotate(225deg);
        }
	}

	/*第三种类型的样式*/
	.loading-three {
		width: 80px;
		height: 20px;
		text-align: center;
		margin: 0 auto;
		margin-top: 40px;
		.circle {
			display: inline-block;
			width: 20px;
			height: 20px;
			background-color: #20A0FF;
			border-radius: 50%;
			-webkit-transform: scale(0.5);
			-webkit-animation: load-three 1s linear infinite;
		}
	}
	@keyframes load-three {
		0% {
			-webkit-transform: scale(0.5);			
		}
		50% {
			-webkit-transform: scale(1);

		}
		100% {
			-webkit-transform: scale(0.5);

		}
	}
	/*第四种类型*/
	.loading-four {
		width: 50px;
		height: 50px;
		text-align: center;
		margin: 5px auto;
		position: relative;
		// .active-line {
		// 	display: inline-block;
		// 	width: 2px;
		// 	height: 8px;
		// 	background-color: rgba(235, 245, 255, 0.8);
		// 	position: absolute;
		// 	top: 0;
		// 	-webkit-transform-origin: center 25px;
		// 	// -webkit-animation: load-four 1s linear infinite;
		// }
		.line {
			display: inline-block;
			width: 2px;
			height: 8px;
			background-color: rgba(32, 160, 255, 0.8);
			position: absolute;
			top: 0;
			-webkit-transform-origin: center 25px;
			&.active-line {
				background-color: rgba(235, 245, 255, 0.8);
			}
			&:nth-child(1) {
				transform:  rotate(30deg);
				// -webkit-animation: load-even 1s linear infinite;
			}
			&:nth-child(2) {
				transform:  rotate(60deg);
				// -webkit-animation: load-odd 1s linear infinite;
			}
			&:nth-child(3) {
				transform:  rotate(90deg);
				// -webkit-animation: load-even 1s linear infinite;
			}
			&:nth-child(4) {
				transform:  rotate(120deg);
				// -webkit-animation: load-odd 1s linear infinite;
			}
			&:nth-child(5) {
				transform:  rotate(150deg);
				// -webkit-animation: load-even 1s linear infinite;
			}
			&:nth-child(6) {
				transform:  rotate(180deg);
				// -webkit-animation: load-odd 1s linear infinite;
			}
			&:nth-child(7) {
				transform:  rotate(210deg);
				// -webkit-animation: load-even 1s linear infinite;
			}
			&:nth-child(8) {
				transform:  rotate(240deg);
				// -webkit-animation: load-odd 1s linear infinite;
			}
			&:nth-child(9) {
				transform:  rotate(270deg);
				// -webkit-animation: load-even 1s linear infinite;
			}
			&:nth-child(10) {
				transform:  rotate(300deg);
				// -webkit-animation: load-odd 1s linear infinite;
			}
			&:nth-child(11) {
				transform:  rotate(330deg);
				// -webkit-animation: load-even 1s linear infinite;
			}
			&:nth-child(12) {
				transform:  rotate(360deg);
				// -webkit-animation: load-odd 1s linear infinite;
			}
		}
	}

</style>

<script type="text/babel">
	import index from './index.js'
	export default {
		...index
	}
</script>