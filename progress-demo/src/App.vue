<template>
  <div>
    <p>默认样式</p>
    <m-progress/>
    <p>percentage  进度  单位：%</p>
    <m-progress :percentage = 50 />
    <p>stroke-width  进度条宽度  单位：px</p>
    <m-progress stroke-width= '20px' />
    <p>stroke-length  进度条长度  单位：px</p>
    <m-progress  stroke-length= '100px' ></m-progress>
    <p>backcolor 背景色</p>
    <m-progress backcolor='green' />
    <p>前景色 precolor</p>
    <m-progress precolor='green' />
    <p>进度100%触发事件</p>
    <m-progress :percentage=100 @finished='finishedFn' />
    <p>动态进度</p>
    <m-progress :percentage=percentage @finished='finishedFn' />
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      percentage:10
    };
  },
  watch: {},
  computed: {},
  methods: {
    finishedFn(){
      console.log('finished');
    }
  },
  created() {
   const go = setInterval(()=>{
      this.percentage+=10
      console.log(this.percentage);
      if(this.percentage===100){
        clearInterval(go)
      }
    },1000)
    

  },
  mounted() {},
};
</script>
<style lang="scss" scoped></style>
