<template>
	<section>
		<h2 class="title">菜单组件 > 级联选择组件</h2>
		<h3 class="title-item">组件说明</h3>
		<p class="content-item">
			在实际的业务之中，级联选择的场景是比较所的，如商品的分类选择等等。本组件的级联选择功能实现最多的级数为三级。此外，本组件还支持小于三级的选择，也就是可以只选择一级或者二级。级联选择的数据结构是一个多维的数组，如下。下一级的数据放在children字段中，如果没有的话，可以为空。本组件同样采用了slot的方式，可以让用户自定义双向绑定数据的内容。每一级选中的那一项的背景为蓝色。
			<pre>
				data: [
					{
						title: '步骤1',
						id: '1',
					},
					{
						title: '步骤2',
						id: '2',
						children: [
							{
								title: '步骤21',
								id: '21',
								children: [
									{
										title: '步骤211',
										id: '211',
									},
									{
										title: '步骤212',
										id: '212',
									}
								]
							},
							{
								title: '步骤22',
								id: '22',
								children: [
									{
										title: '步骤221',
										id: '221',
									}
								]
							}
						]
					},
					{
						title: '步骤3',
						id: '3',
					}
				]
			</pre>

		</p>
		<h3 class="title-item">示例</h3>
		<p class="content-item">
			实际使用方法如下：
			&lt;pg-cascader :dataList="data" :value.sync="value" :id.sync="id"&gt;&lt;/pg-cascader&gt;
			
		</p>
		<p class="content-item">
			可以通过传入value或者id进行初始化，两者的数据类型都是一个数组。
			例如：
			<pre>
				id: ['2','22','221']
			</pre>
			这样首次打开选择面板的时候，会初始化没一级的选中的选型。
		</p>
		<h3 class="title-item">效果</h3>
		<p class="content-item">
			效果如下
			
		</p>
		<pg-cascader :dataList="data" :value.sync="value" :id.sync="id">
			<input type="text" readonly v-model="value">
		</pg-cascader>
		<table>
			<tr>
				<td class="tr-td">字段</td><td class="tr-td">类型</td><td class="tr-td">默认值</td>
			</tr>
			<tr>
				<td class="tr-td">data</td><td class="tr-td">array</td><td class="tr-td">[]</td>
			</tr>
			<tr>
				<td class="tr-td">value</td><td class="tr-td">array</td><td class="tr-td"[]0</td>
			</tr>
			<tr>
				<td class="tr-td">id</td><td class="tr-td">array</td><td class="tr-td">[]</td>
			</tr>
		</table>
	</section>
</template>

<style type="stylesheet/less" lang="less" scoped>
	@import '~src/assets/css/common.less';
	.btn-group {
		margin-bottom: 10px;
	}
	.tr-td {
		padding: 10px;
	}
</style>

<script type="text/babel">
	export default {
		data() {
			return {
				level: '',
				data: [
					{
						title: '步骤1',
						id: '1',
						isShowChildren: false,
						children: [
							{
								title: '步骤211',
								id: '211',
								active: false,
							}
						]
					},
					{
						title: '步骤2',
						id: '2',
						isShowChildren: false,
						children: [
							{
								title: '步骤21',
								id: '21',
								isShowChildren: false,
								children: [
									{
										title: '步骤211',
										id: '211',
										isShowChildren: false,
									},
									{
										title: '步骤212',
										id: '212',
										isShowChildren: false,
									}
								]
							},
							{
								title: '步骤22',
								id: '22',
								isShowChildren: false,
								children: [
									{
										title: '步骤221',
										id: '221',
										isShowChildren: false,
									}
								]
							},
							{
								title: '步骤23',
								id: '23',
								isShowChildren: false,
							}
						]
					},
					{
						title: '步骤3',
						id: '3',
						isShowChildren: false,
					},
					{
						title: '步骤5',
						id: '3',
						isShowChildren: false,
						children: [
							{
								title: '步骤51',
								id: '51',
								isShowChildren: false,
							}
						]
					}
				],
				value: ['步骤2','步骤21','步骤212'],
				// id: ['2','22','221'],
				id: []
			}
		},
		methods: {
		}
	}
</script>