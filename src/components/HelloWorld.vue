<script setup>
import { ref } from 'vue'
import useClipboard from 'vue-clipboard3'

// defineProps({
//   value: Boolean,
// })

defineEmits(['close'])

const content = ref('https://www.pgyer.com/F2Dd')

const { toClipboard } = useClipboard()

const copy = async () => {
  try {
    await toClipboard(content.value)
    console.log('Copied to clipboard')
    alert('已复制到剪贴板')
  } catch (e) {
    console.error(e)
  }
}
</script>

<template>
  <div class="mask" @click="$emit('close', false)">
    <div class="main">
      <h4>恭喜您申请成功</h4>
      <p style="font-size: 12px; color: #2E2E2E; text-align: left;">复制下面的链接到浏览器打开，下载安装即可</p>
      <div style="display: flex;">
        <input type="text" disabled v-model="content">
        <button @click="copy">点击复制</button>
      </div>
      <p style="font-size: 12px; color: #F4A422; text-align: left;">注：app测试仅限安卓端，目前app重的数据均为虚拟数据，仅限测试使用。</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,0.5);
}

.main {
  /* position: absolute; */
  margin: 0 auto;
  width: 345px;
  /* max-width: min(345px, calc(100% - 30px)); */
  background: rgba(255,255,255,1);
  border-radius: 8px;
  padding: 0 15px;
  box-sizing: border-box;

  input { 
    all: unset;
    flex: 1 1 228px;
    height: 32px;
    margin-right: 5px;
    color: #909090;
    font-size: 14px;
    background: #F4F4F4;
    border-radius: 6px 0px 0px 6px;
  }

  button {
    all: unset;
    flex-shrink: 0;
    width: 78px;
    height: 32px;
    background: #F3644B;
    border-radius: 0px 6px 6px 0px;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
  }
}
</style>
