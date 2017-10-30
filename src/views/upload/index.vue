<template>
	<section>
		<h2 class="title">菜单组件 > 上传组件</h2>
		<h3 class="title-item">组件说明</h3>
		<p class="content-item">
			在web应用开发中，几乎每一个项目都会有图片上传的需求，所以图片上传的组件的使用非常的频繁，本组件的文件上传分为图片格式的文件上传和其他类型的文件的上传。由isImgFile字段开决定，默认为图片上传模式。此外，multiple字段可以控制在文件上传的时候，是否允许多选以及accept字段控制允许上传的文件的类型等，详细的字段说明见下面的表格。选择上传之后的值，可以通过upload-success事件获取到。
		</p>
		<p class="content-item">
			组件中采用到的字体图标是本项目中的字体图标库，在实际项目中使用，要把组件中的字体图标替换成项目本字体图标库。如果项目没有使用到字体图标，也可以自己使用css对相应的字体图标进行重新的布局和样式，比如组件中的十字架，使用css来实现也比较容易。
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
			由于本项目没有与后端进行数据的交互，所以在此处所见到的效果是使用本地模拟的数据(图片)。在实际的使用中，没选择上传一个文件之后，都会通过请求接口，把相应的文件上传到服务器，然后再由服务器返回文件在服务器中的存储的路径，在本项目的演示中，省略了这一步。所以在实际的使用，需要对本组件进行修改，在组件中都有明确的注释说明，只需要按照说明，去掉或者打开相应的代码，即可在实际的项目中使用。
		</p>
		<!-- <i class="icon iconfont icon-addpeople_fill"></i> -->
		<div class="btn-group">
			<button @click="changeType">{{type}}</button>
			<button @click="changeMultipleType">{{multipleType}}</button>
		</div>
		<pg-upload :multiple="multiple" :accept="accept" :files="files" :tip="tip" :isImgFile="isImgFile" :max="max"></pg-upload>
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
				multiple: false,
				accept: '',
				files: ['chushihua.jpg'],
				tip: '100x100',
				isImgFile: true,
				type: '其他文件上传',
				multipleType: '多传',
				max: 1
			}
		},
		methods: {
			changeType() {
				if (this.isImgFile) {
					this.isImgFile = false
					this.type ='其他文件上传'
					this.files = []
				}
				else {
					this.isImgFile = true
					this.type = '图片上传'
				}
			},
			changeMultipleType() {
				if (this.multiple) {
					this.multiple = false
					this.multipleType = '单传'
				}
				else {
					this.multiple = true
					this.multipleType = '多传'
				}
			},
			uploadSuccess(val) {
				console.log(val)
			}
		}
	}
</script>