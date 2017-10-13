<template>
	<section>
		<h2 class="title">菜单组件 > 日历面板组件</h2>
		<h3 class="title-item">组件说明</h3>
		<p class="content-item">
			日历面板组件部分的难点在与日历中的每一个月的日期的变化，本组件对于这部分，主要使用的是js的Date对象的相关方法进行相应的计算，用一个一维数组的数据结构来存储。首先要使用getDay()方法获取每有个月的第一天的星期数。使用new Date(this.currentYear, this.currentMonth, 0).getDate()来获取一个月的天数，然后计算所需要的行数。
		</p>
		<h3 class="title-item">示例</h3>
		<p class="content-item">
			在页面中引入&lt;pg-calendar :styles="styles" :district.sync="district"&gt;&lt;/pg-calendar&gt;
			可以通过传入的styles对象对组件的样式进行调整，比如传入
			<pre>
				styles: {
					'width': '60%'
				}
			</pre>
			来设置组件的宽度
		</p>
		<p class="content-item">
			点击日历的年份或月份，可以弹出年份和月份的选择组件，点击选择之后，会关闭选择器和以选择到的年月进行日历的更新，年月组件中在文档对象document对点击事件进行了监听，如果点击的不是年份和月份选择的区域，会关闭选择的弹出面板。
		</p>
		<h3 class="title-item">效果</h3>
		<p class="content-item">
			效果如下
			
		</p>
		<pg-calendar :styles="styles"></pg-calendar>
	</section>
</template>

<style type="stylesheet/less" lang="less" scoped>
	@import '~src/assets/css/common.less';
</style>
<script type="text/babel">
	import index from './index'
	export default {
		...index
	}
</script>