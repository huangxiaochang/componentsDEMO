<template>
	<section>
		<h2 class="title">菜单组件 > 级联选择组件</h2>
		<h3 class="title-item">组件说明</h3>
		<p class="content-item">
			
			<pre>
				data: [
					{
						title: '步骤1',
						id: '1',
						class: 1
					},
					{
						title: '步骤2',
						id: '2',
						class: 1,
						children: [
							{
								title: '步骤21',
								id: '21',
								class: 2,
								children: [
									{
										title: '步骤211',
										id: '211',
										class: 3
									},
									{
										title: '步骤212',
										id: '212',
										class: 3
									}
								]
							},
							{
								title: '步骤22',
								id: '22',
								class: 2,
								children: [
									{
										title: '步骤221',
										id: '221',
										class: 3
									}
								]
							}
						]
					},
					{
						title: '步骤3',
						id: '3',
						class: 1
					}
				]
			</pre>

		</p>
		<h3 class="title-item">示例</h3>
		<p class="content-item">
			实际使用方法如下：
			&lt;pg-steps :steps="data" :active="active" :direction="direction"&gt;&lt;/pg-steps&gt;
			
		</p>
		<p class="content-item">
			
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
				<td class="tr-td">active</td><td class="tr-td">number</td><td class="tr-td">0</td>
			</tr>
			<tr>
				<td class="tr-td">direction</td><td class="tr-td">string</td><td class="tr-td">horizontal/vertical</td>
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
						title: '步骤3',
						id: '3',
						isShowChildren: false,
					},
					{
						title: '步骤3',
						id: '3',
						isShowChildren: false,
					},
					{
						title: '步骤3',
						id: '3',
						isShowChildren: false,
					},
					{
						title: '步骤3',
						id: '3',
						isShowChildren: false,
					},{
						title: '步骤3',
						id: '3',
						isShowChildren: false,
					},
					{
						title: '步骤4',
						id: '3',
						isShowChildren: false,
					},
					{
						title: '步骤4',
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