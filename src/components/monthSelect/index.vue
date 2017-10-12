<template>
	<div  class="wrape">
		<!-- 派发的内容 -->
		<div class="calendar_slot" @click="showDate">
	        <slot></slot>
	    </div>
	    <div class="calendar">
	    	<div class="year-month" :style="styles" v-if="show">
				<!--     年份 前后箭头 -->
				<ul class="year" :style="styles">
					<li class="arrow pre-btn" @click="pre(currentYear)"><</li>
					<li>
						{{currentYear}}
					</li>
					<li class="arrow next-btn" @click="next(currentYear)">></li>
				</ul>
					<!-- 月份 -->
				<ul class="month">
					<li class="month-item" v-for="month in monthList" @click="pick(month)">
						<span v-if="currentYear === nowYear && month.value === nowMonth.toString()" class="nowMonth">{{ month.text }}</span>
						<span v-else class="other-month">{{ month.text }}</span>
					</li>
				</ul>
			</div>
	    </div>
	</div>
</template>
<style type="stylesheet/less" lang="less" scoped>
	@import '~src/assets/css/common.less';
	.wrape, .calender {
		position: relative;
		z-index: 0;
	}
	.calender {
		height: 300px;
	}
	.year-month {
		width: 300px;
		position: absolute;
		left: 0;
        top: 20px;
        padding: 15px 20px 20px 20px;
        border-radius: 10px;
        border: 1px solid rgba(205, 215, 225, 0.5);
        overflow: hidden;
        z-index: 999;
	}
	.year {
		width: 100%;
        background: #00B8EC;
		color: #fff;
		position: relative;
		padding: 15px 0;
		text-align: center;
		.arrow {
			display: inline-block;
			width: 20px;
			height: 20px;
			position: absolute;
			top: 50%;
			margin-top: -10px;
			cursor: pointer;
		}
		.pre-btn {
			left: 10px;
		}
		.next-btn {
			right: 10px;
		}
	}
	.month {
		width: 100%;
		font-size: 0;
		.month-item {
			display: inline-block;
			font-size: 16px;
			width: 25%;
			text-align: center;
			padding: 8px;
			box-sizing: border-box;
			&:hover {
				background-color: rgba(205, 215, 225, 0.5);
			}
			.nowMonth {
				display: inline-block;
				height: 100%;
				width: 100%;
				cursor: pointer;
				background-color: rgba(5, 190, 255, 0.5);
			}
			.other-month {
				display: inline-block;
				height: 100%;
				width: 100%;
				cursor: pointer;
			}
		}
	}
</style>
<script type="text/babel">
	import index from './index'
	export default {
		...index
	}
</script>