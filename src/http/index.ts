import axios  from "axios";
import {ref} from "vue";
//获取首页Banner轮播图
const json = ref("/json")
export function getBanner() {
    return axios.get(json.value+"/banner.json");
}
