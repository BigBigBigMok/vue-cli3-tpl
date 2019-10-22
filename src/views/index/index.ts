import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { IndexData } from '@/types/views/index.interface'
// import {  } from "@/components" // 组件
@Component({})
export default class About extends Vue {
  @Action GET_DATA_ASYN
 
  created() {
    this.GET_DATA_ASYN()
  }
}