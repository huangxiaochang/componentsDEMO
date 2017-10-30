<template>
    <div class="upload-wrape">
        <!-- 图片上传 -->
        <ul v-if="isImgFile" class="img-wrape">
            <li v-for="file in fileList" class="img-item">               
                <img :src="file.imgUrl" class="img" v-if="file.isSuccess">
                <!-- 图片上传失败 -->
                <div class="isFail" v-else>
                    <i class="img-icon iconfont icon-wenjianshangchuanico-shangchuanshibai"></i>
                </div>
                <div class="del-btn" @click="handleRemove(file)" v-if="file.isSuccess">
                <!-- 删除的按钮 -->
                    <i class="img-icon iconfont icon-changyonggoupiaorenshanchu"></i>
                </div >
                <!-- 加载动画 -->
                <div class="loading-wrape" v-if="file.isSuccess === false">
                    <span class="loading-first"></span>
                    <span class="title">加载中</span>
                </div>
            </li>
        </ul>
        <!-- 其他文件上传 -->
        <ul class="other-wrape" v-if="!isImgFile && fileList.length !== 0">
            <li v-for="file in fileList" class="other-item">
                <i class="file-icon iconfont icon-wenjian" v-if="file.isSuccess"></i>
                <span class="file-name" v-if="file.isSuccess">{{file.imgUrl}}</span>
                <span class="file-name" v-else>加载中</span>
                <i class="success-icon iconfont icon-shangchuanchenggong" v-if="file.isSuccess"></i>
                <i class="fail-icon iconfont icon-wenjianshangchuanico-shangchuanshibai" v-else></i>
                <i class="del-icon iconfont icon-guanbi" v-if="file.isSuccess" @click="handleRemove(file)"></i>
            </li>
        </ul>
        <!-- 上传按钮 -->
        <div class="upload-btn" @click="handleClick">
            <i class="img-icon iconfont icon-add"></i>
            <input 
                type="file" 
                name="file" 
                class="input" 
                @change="handleChange" 
                ref="input" 
                :multiple="multiple"
                :accept="accept">
                <span class="tip">{{ tip }}</span>
        </div>
    </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~src/assets/css/common.less';
    .upload-wrape {
        padding: 8px;
        position: relative;
        z-index: 0;
    }
    .img-wrape {
        position: relative;
        display: inline-block;
        margin: 0;
        padding: 0;
        list-style: none;
        z-index: 1;
    }

    .img-item {
        display: inline-block;
        position: relative;
        width: 100px;
        height: 100px;
        margin-right: 5px;
        z-index: 5;

        .img {
            width: 100%;
            height: 100%;
            position: absolute;
            display: inline-block;
            z-index: 20;
            &:hover+.del-btn {
                z-index: 30;
                display: inline-block;
            }
        }
        .del-btn {
            width: 100%;
            height: 100%;
            display: none;
            background-color: rgba(0,0,0,0.5);
            position: absolute;
            z-index: 10;
            
            &:hover {
                z-index: 30;
                cursor: pointer;
                display: inline-block;
            }
        }
        .isFail {
            display: inline-block;
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.2);
            z-index: 40;
            
        }
    }
    .other-wrape {
        display: inline-block;
        height: 100px;
        width: 300px;
        vertical-align: top;
        position: relative;
        background-color: rgba(0,0,0,0.1);
        overflow-y: hidden;
        .other-item {
            width: 100%;
            height: 30px;
            line-height: 30px;
            text-align: left;
            .fail-icon {
                font-size: 30px;
                display: inline-block;
                width: 20px;
            }
            .file-name {
                display: inline-block;
                width: 200px;
                //.lineClamp(1);
            }
            .success-icon, .fail-icon, .del-icon {
                color: #67C23A;
                position: absolute;
                right: 8px;
                z-index: 10;
            }
            .fail-icon {
                color: red;
                font-size: 20px;
                width: 20px;
            }
            .del-icon {
                display: none;
            }
            &:hover .del-icon {
                z-index: 20;
                cursor: pointer;
                display: inline-block;
            }
            &:hover .success-icon {
                display: none;
            }
        }
        &:hover {
            overflow-y: scroll;
        }
    }
    .upload-btn {
        width: 98px;
        height: 98px;
        border: 1px dotted rgb(144,145,155);
        cursor: pointer;
        position: relative;
        display: inline-block;
        vertical-align: top;
        .input {
            display: none;
        }
        .tip {
            color: red;
            font-size: 12px;
            .lineClamp(1);
            position: absolute;
            width: 100%;
            text-align: center;
            bottom: 10px;
        }
        &:hover {
            border-color: #409EFF;
            //border-width: 1.4px;
        }
        &:hover .img-icon {
            color: #409EFF;
        }
    }
    .img-icon {
        font-size: 40px;
        width: 40px;
        height: 40px;
        //color: #409EFF;
        color: rgb(144,155,166);
        display: inline-block;    
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -20px;
        margin-left: -20px;
    }

    /*加载动画样式*/
    .loading-wrape {
        position: absolute;
        display: inline-block;
        width: 100px;
        height: 100px;
        border: 1px solid #ddd;
        text-align: center;
        //background-color: rgba(0, 0, 0,.8);
        background-color: #5A5E66;
        z-index: 50;
        .title {
            width: 100%;
            display: block;
            font-size: 14px;
            color: #20A0FF;
            margin: 5px 0;
            text-align: center;
        }
    }
    
    .loading-first {
        width: 50px;
        height: 50px;
        margin: 0 auto;
        margin-top: 8px;
        display: block;
        border: 2px solid transparent;
        border-radius: 50%;
        border-right-color: #20A0FF;
        -webkit-animation: load-first 2s linear infinite;
    }
    @keyframes load-first {
        0% {
            -webkit-transform: rotate(0);
        }
        50% {
            -webkit-transform: rotate(180deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
        }
    }
    /*滚动条样式*/
        .other-wrape::-webkit-scrollbar {/*滚动条整体样式*/
            width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
            height: 4px;
        }
        .other-wrape::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
            border-radius: 5px;
            -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
            background: rgba(0,0,0,0.2);
        }
        .other-wrape::-webkit-scrollbar-track {/*滚动条里面轨道*/
            -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0);
            border-radius: 0;
            background: rgba(0,0,0,0);
        }
</style>

<script type="text/babel">
    import upload from './upload'
    export default {
        ...upload
    }
</script>
