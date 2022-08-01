<template>
  <div>
    <div class="bottom" :style="{width:strokeLength,height:strokeWidth,backgroundColor:backcolor}">
      <div
        class="top"
        :style="{width:`${percentage}%`,backgroundColor:precolor,lineHeight:strokeWidth}"
      >{{percentage}}%</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props:{
    'percentage':{
        type:Number,
        default:10
    },
    'stroke-width':{
        type:String,
        default:'40px'
    },
    'stroke-length':{
        type:String,
        default:'800px'
    },
    'backcolor':{
        type:String,
        default:'#d0ecda'
    },
    'precolor':{
        type:String,
        default:'skyblue'
    },
    'border':{
        type:String,
        default:''
    }
  },
  created() {
  },
  methods: {},
  watch:{
    percentage:{
        handler(a){
            if(a===100){
                this.$emit('finished')
            }
        },
        immediate:true,
    }
  }
};
</script>

<style scoped>
.bottom {
  /* width: 1000px; */
  /* height: 40px; */
  /* background-color: #d0ecda; */
  /* border: 1px solid #000; */
  border-radius: 40px;  
  overflow: hidden;
}
.top {
  height: 100%;
  text-align: right;
  color: #fff;
  transition: all 1s;
}
</style>
