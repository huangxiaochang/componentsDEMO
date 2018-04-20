<template>
	<section>
		<h2 class="title">菜单组件 > 下载组件</h2>
		<h3 class="title-item">组件说明</h3>
		<p class="content-item">
			在项目中，可能会遇到一些下载的功能，比如导出Excel表等。我们可以借助Blob对象进行下载的操作。Blob对象可以通过window.URL对象生成一个网络地址，然后再借助a标签的download属性来实现下载文件。对于a标签的download属性可以定义下载之后的文件的文件名。
			
			进行下载文件的步骤：
			首先，创建一个Blob对象的方法如下:<br>
			<pre>var blob = new Blob([Obj],{type: 'MIME'}),第一个参数是一个数组，可以存放ArrayBuffer,ArrayBufferView对象，Blob对象和字符串，第二个参数指定文件的类型。</pre>
			<br>
			2.然后通过URL来生成一个下载的URL，如：<br>
			<pre>var url = window.URL.createObjectURL(blob)</pre>
			<br>
			3.创建一个a标签，通过download、href属性定义下载的文件的文件名和URL，并进行模拟点击进行下载，如：<br>
			<pre>
				var a = document.createElement("a")
				a.download = "文件下载.csv"
				a.href = url

				document.body.appendChild(a)
				a.click()
			</pre>
			<br>
			4.下载之后，移除文件的引用:<br>
			<pre>window.URL.revokeObjectURL(url)</pre>
			<br>
			注意：使用a标签的download属性定义文件名的时候，可以注定文件名的后缀，如.csv
		</p>
		<h3 class="title-item">使用示例</h3>
		<p class="content-item">
			<button @click="downloadFile">点击下载文件</button>
		</p>
	</section>
</template>

<style type="stylesheet/less" lang="less" scoped>
	
</style>

<script type="text/babel">
	export default {
		data() {
			return {
				download_data: [
					{
						name: '张三',
						sex: 'man',
						age: 22
					},
					{
						name: '李四',
						sex: 'men',
						age: 23
					}
				]
			}
		},
		methods: {
			downloadFile () {
				let csv = ''
				// 定义表头
				csv += `姓名,性别,年龄\r\n`
				this.download_data.forEach((item) => {
					csv += `${item.name},${item.sex},${item.age}\r\n`
				})
				let blob = new Blob([csv], {type: 'text/csv'})
				let url = window.URL.createObjectURL(blob)
				let a = document.createElement("a")
				a.download = '下载文件.csv'
				a.href = url
				document.body.appendChild(a)
				a.click()
				window.URL.revokeObjectURL(url)
				document.body.removeChild(a)
			}
		}
	}
</script>