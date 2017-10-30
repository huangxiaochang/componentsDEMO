<template>
	<section>
		<h2 class="title">菜单组件 > 上传组件</h2>
		<h3 class="title-item">组件说明</h3>
		<p class="content-item">
			
		</p>
		<p class="content-item">
			
		</p>
		<h3 class="title-item">使用示例</h3>
		<p class="content-item">
			在实际的应用中引入&lt;pg-upload :multiple="multiple" :accept="accept" :files="files" :tip="tip" :isImgFile="isImgFile" :max="max" @upload-success="uploadSuccess"&gt;&lt;/pg-upload&gt;
		</p>
		
		<h3 class="title-item">效果</h3>
		<p class="content-item">
			效果如下
			
		</p>
		<p class="content-item">
			
		</p>
		
		<pg-pagination :size="pageSize" :total="total"></pg-pagination>
		<table>
			<tr>
				<td class="tr-td">字段</td><td class="tr-td">说明</td><td class="tr-td">类型</td><td class="tr-td">默认值</td>
			</tr>
			<tr>
				<td class="tr-td">multiple</td><td>是否支持上传多张图片</td><td class="tr-td">boolean</td><td class="tr-td">false</td>
			</tr>
			<tr>
				<td class="tr-td">accept</td><td>允许上传的图片类型</td><td class="tr-td">string</td><td class="tr-td">*(所有)</td>
			</tr>
			<tr>
				<td class="tr-td">files</td><td>初始化的文件列表</td><td class="tr-td">array</td><td class="tr-td">[]</td>
			</tr>
			<tr>
				<td class="tr-td">tip</td><td>上传的提示信息</td><td class="tr-td">string</td><td class="tr-td">''</td>
			</tr>
			<tr>
				<td class="tr-td">isImgFile</td><td>是否是图片上传</td><td class="tr-td">boolean</td><td class="tr-td">true</td>
			</tr>
			<tr>
				<td class="tr-td">max</td><td>允许上传的文件的最大尺寸</td><td class="tr-td">number</td><td class="tr-td">10</td>
			</tr>
		</table>
	</section>
</template>

<style type="stylesheet/less" lang="less" scoped>
	@import '~src/assets/css/common.less';
	.tabs {
		width: 60%;
	}
	.tr-td {
		padding: 10px;
	}
	.content {
		padding-left: 10px;
		padding-top: 10px;
	}
	.btn-group {
		margin-bottom: 20px;
	}
</style>

<script type="text/babel">
	export default {
		data() {
			return {
				pageSize: 15,
				total: 200
			}
		},
		methods: {
			
		}
	}
</script>