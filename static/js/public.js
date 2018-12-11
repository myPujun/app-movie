
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
    Vue.prototype.localGet = function (key, exp){
        let data = localStorage.getItem(key);
        let dataObj = JSON.parse(data)
        if(data){
            if (new Date().getTime() - dataObj.time > exp) {
                console.log(' 信息已过期 ')
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
}





