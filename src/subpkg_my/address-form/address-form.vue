<template>
  <div class="box">
    <uni-list>
      <uni-list-item title="收货人" direction="column">
        <template v-slot:footer>
          <input class="uni-input" placeholder="请填写收货人姓名" v-model="address.receiver" />
        </template>
      </uni-list-item>
      <uni-list-item title="手机号码" direction="column">
        <template v-slot:footer>
          <input class="uni-input" placeholder="请填写收货人手机号码" v-model="address.contact" />
        </template>
      </uni-list-item>
      <uni-list-item title="所在地区" direction="column">
        <template v-slot:footer>
          <uni-data-picker
            :map="{ text: 'name', value: 'code' }"
            @change="tochange"
            placeholder="请选择您所在的地区"
            popup-title="请选择所在地区"
            :localdata="areaDate"
            :value="hxaddress"
          >
          </uni-data-picker>
        </template>
      </uni-list-item>
      <uni-list-item title="详细地址" direction="column">
        <template v-slot:footer>
          <input class="uni-input" placeholder="街道、楼牌号等信息" v-model="address.address" />
        </template>
      </uni-list-item>
      <uni-list-item title="设为默认地址">
        <template v-slot:footer>
          <switch :checked="address.isDefault == 1" @change="switch1Change" />
        </template>
      </uni-list-item>
    </uni-list>

    <button @click="add">保存并使用</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import data from '@/address/address.js'
import { getAddAddressAPI, getAddAddressDetailAPI, getxgAPI } from '@/api/address'

// 获取省市本地数据
const areaDate = ref([])

// 获取选中的省市
const tochange = (e: any) => {
  address.value.cityCode = e.detail.value[0].value
  address.value.provinceCode = e.detail.value[1].value
  address.value.countyCode = e.detail.value[2].value
}

// 默认地址
const switch1Change = (e: any) => {
  if (e.detail.value) {
    address.value.isDefault = 1
  } else {
    address.value.isDefault = 0
  }
}

// 定义新建数据
const address = ref({
  receiver: '',
  contact: '',
  cityCode: '',
  provinceCode: '',
  countyCode: '',
  address: '',
  isDefault: 0,
})
const id = ref('')

// 添加或修改
const add = async () => {
  try {
    if (id.value !== '') {
      const res = await getxgAPI(id.value, {
        ...address.value,
      })
    } else {
      const res = await getAddAddressAPI({
        ...address.value,
      })
      console.log(res)
    }
  } catch (error) {
    console.log(error)
  }
}

// 级联选择器回显
const hxaddress = ref<string[]>([])

// 获取详情
const getdetail = async (id: string) => {
  try {
    const res = await getAddAddressDetailAPI(id)
    console.log(res)
    address.value = res.result
    hxaddress.value = [res.result.cityCode, res.result.countyCode, res.result.provinceCode]
    console.log(hxaddress.value)
  } catch (error) {
    console.log(error)
  }
}

onLoad((query) => {
  areaDate.value = data
  if (query?.id) {
    getdetail(query.id)
    id.value = query.id
    uni.setNavigationBarTitle({ title: '修改地址' })
  } else {
    uni.setNavigationBarTitle({ title: '新建地址' })
  }
})
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  padding: 20rpx;
  background-color: #f4f4f4;
  box-sizing: border-box;

  button {
    background-color: #27ba9b;
    color: #fff;
    border: 0;
    border-radius: 50rpx;
    margin-top: 40rpx;
    width: 100%;
  }

  .uni-list {
    padding: 10rpx;
    box-sizing: border-box;
    border-radius: 20rpx;
  }
}
</style>
