export default {
    name: 'PgRegion',
    props: {
        list: Array,
        state: {
            type: String,
            default: ''
        },
        city: {
            type: String,
            default: ''
        },
        district: {
            type: String,
            default: ''
        },
        styles: {
            type: Object,
        },
    },
    data() {
        return {
            stateRegionID: this.state,
            cityRegionID: this.city,
            districtRegionID: this.district,
            stateList: [],
            cityList: [],
            districtList: [],
        }
    },
    mounted() {
        // 获取省列表
        this.getRegionList()
        // 如果开始时，省市区有数据的时候，初始化省市区列表
        if (this.stateRegionID != '') {
            this.getRegionList(this.stateRegionID)
        }
        if (this.cityRegionID != '') {
            this.getRegionList(this.cityRegionID)
        }
    },
    watch: {
        // 清空省市区组件中已有的数据
        state() {
            if (this.state == '') {
                this.stateRegionID = ''
                this.cityRegionID = ''
                this.cityList = []
                this.districtRegionID = ''
                this.districtList = []
            }
        },
        stateRegionID() {
            this.cityRegionID = ''
            this.cityList = []
            this.districtRegionID = ''
            this.districtList = []
            if (this.stateRegionID != '') {
                this.getRegionList(this.stateRegionID)
            }   
           
        },
        cityRegionID() {
            this.districtRegionID = ''
            this.districtList = []
            if (this.cityRegionID != '') {
                this.getRegionList(this.cityRegionID)
            }
        },
        districtRegionID() {
            // 显式更新父组件的state字段
            this.$emit('update:state', this.stateRegionID)
            // 显式更新父组件的city字段
            this.$emit('update:city', this.cityRegionID)
            // 显式更新父组件的district字段
            this.$emit('update:district', this.districtRegionID)
        },
    },
    methods: {
        //获取省、市、区列表
        getRegionList(parentID) {
            if (parentID === 'undefined') {
                parentID = ''
                //这里是请求接口获取省市区列表代码
                // ajax.getRegionList(parentID).then((result) => {
                //     this.stateList = result
                // })
            }
        }
    }
}














