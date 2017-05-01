import request from 'superagent'

/**
 * @param  {Object} options
 * @return {Promise}
 */
function ajax(options) {
 
    const defaults = {
        type: 'post',
        url: null,
        data: {},
        'Content-Type': 'application/json'
    }
    let promise

    options = Object.assign({}, defaults, options)
    promise = request[options.type](options.url).withCredentials()
    Object.keys(options).forEach(key => {
        if (!key.match(/type|url|data/)) {
            promise.set(key, options[key])
        }
    })

    return new Promise(resolve => {
        promise.send(options.data).then(res => {
            resolve(res.body)
        }).catch(err => {
            console.log(err)
        })
    })
}

/**
 * @param  {number} timestamp
 * @param  {String} format
 * @return {String}
 */
function formatDate(timestamp, format) {
    const date = new Date(timestamp),
        years = `${date.getFullYear()}`,
        month = `${date.getMonth()}`,
        day = `${date.getDate()}`,
        hours = `${date.getMonth()}`,
        minutes = `${date.getMinutes()}`,
        seconds = `${date.getSeconds()}`

    return format.replace(/y+|M+|d+|h+|m+|s+/g, match => {
        const length = match.length

        switch (match.charAt(0)) {
            case 'y':
                return years.substr(-length)
            case 'M':
                return (month.length === 1 ? `0${month}` : month).substr(-length)
            case 'd':
                return (day.length === 1 ? `0${day}` : day).substr(-length)
            case 'h':
                return (hours.length === 1 ? `0${hours}` : hours).substr(-length)
            case 'm':
                return (minutes.length === 1 ? `0${minutes}` : minutes).substr(-length)
            case 's':
                return (seconds.length === 1 ? `0${seconds}` : seconds).substr(-length)
        }
    })
}

/**
 * @param  {String} str
 * @return {Date}
 */
function parseDate(str) { 
    var da = new Date(str.replace("/Date(", "").replace(")/" , "").split( "+")[0]);
    return da.getFullYear() + "-" + ((da.getMonth() + 1) < 10 ? "0" + (da.getMonth() + 1):(da.getMonth() + 1))+ "-" + (da.getDate() < 10 ? "0" + da.getDate():da.getDate()) + " " + (da.getHours()<10?"0"+da.getHours():da.getHours()) + ":" + (da.getMinutes()<10?"0"+da.getMinutes():da.getMinutes()) + ":" + (da.getSeconds()<10?"0"+da.getSeconds():da.getSeconds());
}

/**
 * @return {Object}
 */
function getUrlParams() {
    const search = location.search.slice(1),
        rParam = /([^&]*)=([^&]*)/g
    let ret = {},
        param

    while (param = rParam.exec(search)) {
        ret[param[1]] = param[2]
    }

    return ret
}

/**
 * @return ‘ios’
 */
function getDeviceType() {
    var browser={
        versions:function(){
            var u = navigator.userAgent, app = navigator.appVersion;
            return {         //移动终端浏览器版本信息
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1
            };
       }(),
       language:(navigator.browserLanguage || navigator.language).toLowerCase()
    };
 

    var res = browser.versions.ios == true ? 'ios' :'android'

    return res
}

/**
 * 数据体积换算
 * @return ‘ios’
 */
function bytesToSize(bytes) {
    if (bytes === 0) return '0 B';
    var k = 1000, // or 1024
        sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
   return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
}
 
export default {
    ajax,
    formatDate,
    parseDate,
    getUrlParams,
    getDeviceType,
    bytesToSize
}
