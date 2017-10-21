<template>
	<div class="content-wrape" :style="styles">
		<div class="slot-wrape" @click="showPack">
			<slot></slot>
		</div>
		<div class="date-time-wrape">
			<div class="date-time" v-if="show">
				<div class="header">
					<div class="select-date-time">
						<input type="text" class="date-select" v-model="date" readonly>
						<pg-time-pack :value.sync="time">
							<input type="text" class="time-select" v-model="time" readonly>
						</pg-time-pack>
					</div>
					
					<!--     年份和月份 前后箭头 -->
					<ul class="month">
						<li class="arrow pre-btn" @click="pre(currentYear, currentMonth)"><</li>
						<li class="year-month">
							<pg-month-select :value.sync="yearMonth" class="month-select">
								<span>{{currentYear}}</span>
								<span>{{currentMonth}}月</span>
							</pg-month-select>
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
				<div class="btn-group">
					<span @click="close">取消</span><span class="save" @click="save">确定</span>
				</div>
			</div>
			
		</div>
	</div>
</template>
<style type="stylesheet/less" lang="less" scoped>
	@import '~src/assets/css/common.less';
	.date-time-wrape, .content-wrape {
		position: relative;
		text-indent: 0;
		width: 320px;
	}
	.date-time {
		position: absolute;
		display: inline-block;
		width: 320px;
	}
	.header {
		width: 100%;
    background: #00B8EC;
		color: #fff;
	}
	.select-date-time {
		position: relative;
		width: 100%;
		top: 10px;
		font-size: 0;
		height: 30px;
		.date-select, .time-select {
			display: inline-block;
			height: 30px;
			width: 150px;
			font-size: 14px;
			border: none;
			margin-left: 5px;
			cursor: pointer;
			text-align: center;
		}
	}
	
	.month {
		font-size: 0;
		position: relative;
		margin-top: 10px;
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
			z-index: 10;
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
			position: relative;
			z-index: 0;
			span {
				display: block;
				margin: 5px auto;
				width: 50px;
				cursor: pointer;
			}
			.month-select {
				width: 90%;
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
				background-color: rgba(255, 0, 0, 0.5);
				color: #fff;
				border-radius: 50%;
				font-size: 14px;				
			}
			&:hover {
				background-color: rgba(205, 215, 225, 0.5);
			}
		}
	}
	.btn-group {
		width: 100%;
		height: 30px;
		display: fixed;
		bottom: 0;
		font-size: 16px;
		text-align: right;
		span {
			cursor: pointer;
			display: inline-block;
			height: 30px;
			line-height: 30px;
		}
		.save {
			color: #58B7FF;
			margin: 0 10px;
		}
	}
</style>
<script type="text/babel">
	import index from './index.js'
	export default {
		...index
	}
</script>