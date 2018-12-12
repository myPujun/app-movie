
exports.install = function (Vue,options){
    //缓存网络图片
    Vue.prototype.getImages = function (_url){
        if (_url !== undefined) {
            let _u = _url.substring(7);
            return 'https://images.weserv.nl/?url=' + _u;
        }
    }
    //WEB存储数据
    Vue.prototype.localSet = function (key, val){
        var curTime = new Date().getTime();
        localStorage.setItem(key, JSON.stringify({ data: val, time: curTime }))
    }
    //WEB获取数据
    Vue.prototype.localGet = function (key){
        let data = localStorage.getItem(key);
        let dataObj = JSON.parse(data)
        if(data){
            //超过5分钟删除key里的数据
            if (new Date().getTime() - dataObj.time > 1000 * 60 * 5) {  
                localStorage.removeItem(key)
                return false
            } else {
                var dataObjDatatoJson = dataObj.data
                return dataObjDatatoJson
            }
        }else{ 
            return false
        }
    }
    //滑动到底部加载数据
    Vue.prototype.scroll = function(message) {
        this.$nextTick(() => {
            window.onscroll = () => {
                // 距离底部时加载一次
                let content = message.content
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
                if ((window.innerHeight + scrollTop) - 44 == content.clientHeight) {
                    this.isloading = true
                    message.MovieStart += message.addList.length
                    let url = message.url
                    this.$http.get(url).then(res => {
                        let list = res.data.subjects
                        list.forEach((item, index) => {
                            message.addList.push(item)
                        })
                        this.isloading = false
                    })
                }
            }
        })
    }
}





