<template>
    <div class="pg-region">
        <div class="form-item-select state" :style="styles">
            <select v-model="stateRegionID" class="select-item">
                <option disabled value="">省</option>
                <option v-for="stateInfo in stateList" :value="stateInfo.value" :key="stateInfo.value">
                    {{ stateInfo.text }}
                </option>
            </select>
        </div>
        <div class="form-item-select city" :style="styles">
            <select v-model="cityRegionID" class="select-item">
                <option value="">市</option>
                <option v-for="cityInfo in cityList" :value="cityInfo.value" :key="cityInfo.value">
                    {{ cityInfo.text }}
                </option>
            </select>
        </div>
        <div class="form-item-select district" :style="styles">
            <select v-model="districtRegionID" class="select-item">
                <option value="">区</option>
                <option v-for="districtInfo in districtList" :value="districtInfo.value" :key="districtInfo.value">
                    {{ districtInfo.text }}
                </option>
            </select>
        </div>
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~src/assets/css/common.less';
    .pg-region {
        width: 300px;
        text-align: center;
        .form-item-select {
            width: 100px;
        }
        .select-item {
            width: 100%;
            height: 30px;
        }
        .state, .city, .district {
            display: inline-block;
        }
        .state {
            float: left;
        }
        .district {
            float: right;
        }
    }
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>