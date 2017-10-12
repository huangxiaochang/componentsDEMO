<template>
	<div class="calendar" :style="styles">
		<!-- 日历的头部-->
		<div class="header">
			<!--     年份和月份 前后箭头 -->
			<ul class="month" :style="styles">
				<li class="arrow pre-btn" @click="pre(currentYear, currentMonth)"><</li>
				<li class="year-month">
					<span>{{currentYear}}</span>
					<span>{{currentMonth}}月</span>
				</li>
				<li class="arrow next-btn" @click="next(currentYear, currentMonth)">></li>
			</ul>
			<!-- 星期 -->
			<ul class="week">
				<li class="week-item">一</li>
				<li class="week-item">二</li>
				<li class="week-item">三</li>
				<li class="week-item">四</li>
				<li class="week-item">五</li>
				<li class="week-item" style="color: red;">六</li>
				<li class="week-item" style="color: red;">日</li>
			</ul>
		</div>
		<!-- 日期 -->
		<ul class="day-wrape">
			<li class="day-item" v-for="day in dayList" @click="pick(day)">
				<span v-if="day.getMonth()+1 != currentMonth" class="other-month">{{day.getDate()}}</span>
				<span v-else>
					<span v-if="day.getFullYear() == nowYear && day.getMonth() == nowMonth && day.getDate() == nowDay" class="today">{{day.getDate()}}</span>
					<span v-else class="title">{{day.getDate()}}</span>
				</span>
			</li>
		</ul>
	</div>
</template>
<style type="stylesheet/less" lang="less" scoped>
	@import '~src/assets/css/common.less';
	.calendar {
		width: 80%;
        margin: 10px auto;
        box-shadow: 4px 5px 5px rgba(0,0,0,0.14);
        border-radius: 10px;
        overflow: hidden;
	}
	.header {
		width: 100%;
        background: #00B8EC;
		// background-color: #84f0b2;
		color: #fff;
	}
	.month {
		font-size: 0;
		position: relative;
		padding: 10px 0;
		.arrow {
			position: absolute;
			width: 30px;
			height: 30px;
			font-size: 28px;
			text-align: center;
			cursor: pointer;
			top: 50%;
			margin-top: -15px;
			&.pre-btn {
				left: 2%;
			}
			&.next-btn {
				right: 2%;
			}
		}
		.year-month{
			width: 100%;
			margin: 0 auto;
			text-align: center;
			font-size: 16px;
			span {
				display: block;
				margin: 5px auto;
				width: 50px;
				cursor: pointer;
			}
		}
	}
	.week {
		width: 100%;
		padding: 10px 0;
		font-size: 0;
		.week-item {
			display: inline-block;
			font-size: 16px;
			text-align: center;
			width: 14.28%;
		}
	}
	.day-wrape {
		width: 100%;
		.day-item {
			display: inline-block;
			text-align: center;
			width: 14.2%;
			margin: 0;
			padding: 0;
			.title {
				display: inline-block;
				cursor: pointer;
				color: #000;
				font-size: 14px;
			}
			.other-month {
				display: inline-block;
				cursor: pointer;
				color: #ccc;
				font-size: 14px;				
			}
			.today {
				display: inline-block;
				cursor: pointer;
				width: 20px;
				height: 20px;
				background-color: red;
				color: #fff;
				border-radius: 50%;
				font-size: 14px;				
			}
			&:hover {
				background-color: rgba(205, 215, 225, 0.5);
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