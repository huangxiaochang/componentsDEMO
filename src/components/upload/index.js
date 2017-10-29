
export default {
    name: 'PgUpload',
    props: {
        multiple: {
            type: Boolean,
            default: true,
        },
        accept: {isShowUpload
            type: String,
            default() {
                return '*'
            }
        },
        files: {
            type: Array,
            default() {
                return []
            }
        },
        tip: {
            type: String,
            default: ''
        },
        folderType: {
            type: String,
            default: '11'
        },
        isImgFile: {
            type: Boolean,
            default: true // true为图片 false为其他
        }
    },
    data() {
        return {
            fileList: [],
            isShowUpload: true
        }
    },
    watch: {
        files() {
            const tempFiles = []
            this.files.forEach((item) => {
                if (item != '' && item != null) {
                    tempFiles.push({
                        imgUrl: item,
                        isSuccess: true
                    })
                }
            })
            this.fileList = tempFiles
        },
        fileList() {
            if (!this.multiple && this.fileList.length > 0) {
                this.isShowUpload = false
            }
            else {
                this.isShowUpload = true
            }
        }
    },
    methods: {
        handleClick() {
            this.$refs.input.click()
        },
        handleChange(e) {
            const files = e.target.files
            if (!files)
                return

            this.uploadFiles(files)
            this.$refs.input.value = null
        },
        uploadFiles(files) {
            let postFiles = Array.prototype.slice.call(files)
            if (postFiles.length === 0)
                return
            if (!this.multiple)
                postFiles = postFiles.slice(0, 1)

            postFiles.forEach(file => {
                this.upload(file)
            })
        },
        upload(file) {
            if (!this.isImgFile) {
                if (file.size / 1024 / 1024 > 10) {
                    this.$message.error(file.name + '超过10M的限制！')
                    return
                }
            }
            if (this.multiple) {
                this.fileList.push({
                    isSuccess: false,
                    imgUrl: file
                })
            }
            else {
                this.fileList = []
                this.fileList.push({
                    isSuccess: false,
                    imgUrl: file
                })
            }
            //在这里进行上传文件到服务器
            // ajax.uploadImg(file, this.folderType).then((result) => {
            //     this.handleSuccess(result, file)
            // }).catch((error) => {
            //     this.$message.error('上传失败')
            //     this.fileList.forEach((item, index) => {
            //         if (file == item.imgUrl) {
            //             this.fileList.splice(index, 1)
            //         }
            //     })
            // })
            // 模拟服务器返回的数据,实际的项目中，
            // 服务器会返回图片在服务器中存储的相对路劲，
            // 实际项目使用中去掉
            let result = ''
            const rootPath = '/src/assets/img/'
            result = rootPath+'img1.jpg'
            this.handleSuccess(result, file)
        },
        handleSuccess(res, file) {
            const files = this.fileList
            const tempFiles = []
            files.forEach((item) => {
                if (item.isSuccess) {
                    tempFiles.push(item.imgUrl)
                }
                if (file == item.imgUrl) {
                    item.isSuccess = true
                    item.imgUrl = res
                    tempFiles.push(item.imgUrl)
                }
            })
            this.$emit('upload-success', this.multiple ? tempFiles : (tempFiles[0] ? tempFiles[0] : ''))
        },
        handleRemove(file) {
            this.fileList.splice(this.fileList.indexOf(file), 1)
            const tempFiles = []
            this.fileList.forEach((item) => {
                if (item.isSuccess) {
                    tempFiles.push(item.imgUrl)
                }
            })
            this.$emit('upload-success', this.multiple ? tempFiles : (tempFiles[0] ? tempFiles[0] : ''))
        }
    }
}