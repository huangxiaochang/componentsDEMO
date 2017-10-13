<template>
	<section>
		<h2 class="title">菜单组件 > 省市区</h2>
		<h3 class="title-item">组件说明</h3>
		<p class="content-item">
			省市区的组件，需要请求接口进行获取省、市、区每一个下拉框中的数据，他们的关系是联动的，即要根据选择的省才能获取到对应的市，根据选择的市，才能获取得到相应的区的列表。次省市区组件是基于vue2.0以上的版本进行开发的，使用了双向的数据绑定sync的API。在页面中使用到的地方直接绑定相应的字段即可
		</p>
		<h3 class="title-item">示例</h3>
		<p class="content-item">
			在页面中引入&lt;pg-region :state.sync="state" :city.sync="city" :district.sync="district"&gt;&lt;/pg-region&gt;
			然后menuList可以传入,开始时的省市区的回写不需要进行额外的处理，只需要把相应的省市区的ID赋值给data中的state、city和district字段即可。
			
		</p>
		<p class="content-item">
			在实际的项目中使用的时候，要对组件的
        getRegionList(parentID) {//这里是请求接口}
        进行对应的替换。基于最大程度满足项目的使用，本组件提供了根据项目需求进行样式的调整的接口，可用传入styles进行修改组件的样式。styles希望的是一个对象，它的格式和css的样式的编写的格式是一样的。
		</p>
		<h3 class="title-item">效果</h3>
		<p class="content-item">
			效果如下
			
		</p>
		<pg-region :state.sync="state" :city.sync="city" :district.sync="district" :styles="style"></pg-region>
	</section>
</template>

<style type="stylesheet/less" lang="less" scoped>
	@import '~src/assets/css/common.less';

</style>

<script type="text/babel">
	import index from './index.js'
	export default {
		...index
	}
</script>