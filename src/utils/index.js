/**
 * 图片下载
 * @param {String} imgsrc 图片 base64 
 * @param {string} name  名称
 */
const downloadIamgeFun = (imgsrc, name) => {
    //下载图片地址和图片名
    var image = new Image();
    // 解决跨域 Canvas 污染问题
    image.setAttribute("crossOrigin", "anonymous");
    image.onload = function () {
        var canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        var context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, image.width, image.height);
        var url = canvas.toDataURL("image/png"); //得到图片的base64编码数据'
        var a = document.createElement("a"); // 生成一个a元素
        var event = new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            view: window
        }); // 创建一个单击事件
        a.download = name || "photo"; // 设置图片名称
        a.href = url; // 将生成的URL设置为a.href属性
        a.dispatchEvent(event); // 触发a的单击事件
    };
    image.src = imgsrc;
}

/**
 * 解决生成二维码乱码
 * @param {String} str  需要解决乱码的中文
 * @returns 
 */
const toUtf8 = (str) => {
    var out, i, len, c;
    out = "";
    len = str.length;
    for (i = 0; i < len; i++) {
        c = str.charCodeAt(i);
        if ((c >= 0x0001) && (c <= 0x007F)) {
            out += str.charAt(i);
        } else if (c > 0x07FF) {
            out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
            out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
        } else {
            out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
        }
    }
    return out;
}

/**
 * 根据经纬度计算距离
 * @param {String|Number} lat1 第一点的纬度 
 * @param {String|Number} lng1 第一点的经度
 * @param {String|Number} lat2 第二点的纬度
 * @param {String|Number} lng2 第二点的经度
 * @returns 
 */
const getDistances = (lat1, lng1, lat2, lng2) => {
    function rad(d) {
        return d * Math.PI / 180.0;
    }
    var radLat1 = rad(lat1);
    var radLat2 = rad(lat2);
    var a = radLat1 - radLat2;
    var b = rad(lng1) - rad(lng2);
    var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) +
        Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
    s = s * 6378.137; // EARTH_RADIUS;
    // 输出为公里
    s = Math.round(s * 10000) / 10000;
    var distance = s;
    var distance_str = "";
    if (parseInt(distance) >= 1) {
        // distance_str = distance.toFixed(1) + "km";
        distance_str = distance.toFixed(2) + "km";
    } else {
        // distance_str = distance * 1000 + "m";
        distance_str = (distance * 1000).toFixed(2) + "m";
    }
    //s=s.toFixed(4);
    // console.info('距离是', s);
    // console.info('距离是', distance_str);
    // return s;
    //小小修改，这里返回对象
    let objData = {
        distance: distance,
        distance_str: distance_str
    }
    return objData
}

/**
 * 获取距离当前时间的时间长度
 * @param {Number} timestamp     - 要转换的时间参数（单位为秒）
 * @returns {String}
 */
const timeConversion = (timestamp) => {
    let currentUnixTime = Math.round((new Date()).getTime() / 1000); // 当前时间的秒数
    let deltaSecond = currentUnixTime - parseInt(timestamp, 10); // 当前时间与要转换的时间差（ s ）
    let result;
    if (deltaSecond < 60) {
        result = deltaSecond + '秒前';
    } else if (deltaSecond < 3600) {
        result = Math.floor(deltaSecond / 60) + '分钟前';
    } else if (deltaSecond < 86400) {
        result = Math.floor(deltaSecond / 3600) + '小时前';
    } else {
        result = Math.floor(deltaSecond / 86400) + '天前';
    }
    return result;
};


/**
 * 时间戳转化
 * @param {String | Object} input 
 * @param {Number} value  判断返回的类型样式
 * @returns 
 */
const timestampConversion = (input, value) => {
    if (input == undefined || input == '') {
        return
    }
    var d = new Date(Number(input));
    var year = d.getFullYear();
    var month = d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : '' + (d.getMonth() + 1);
    var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
    var hour = d.getHours();
    var minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : '' + d.getMinutes();
    var seconds = d.getSeconds();


    const getDataNum = (num) => {
        // 我们可以根据用户类型来生成我们的折扣对象
        let dataNum = new Map([
            [1, year + '-' + month + '-' + day],
            [2, year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds],
            ['default', year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds]
        ])
        return dataNum.get(num) || dataNum.get('default')
    }
    return getDataNum(value)
}

/**
 * 原生获取路径参数
 * @param key
 * @returns {Object}
 */
const getPathParameter = (key) => {
    var url = location.search || location.hash;
    var requestObj = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.slice(url.indexOf("?") + 1);
        var strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            requestObj[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    if (key == undefined) {
        return requestObj;
    }
    return requestObj[key];
}

/**
 * 深拷贝
 * @param {*} obj 
 * @returns 
 */
const deepClone = (obj) => {
    let _obj = JSON.stringify(obj),
        objClone = JSON.parse(_obj);
    return objClone
}


/**
 * 防抖函数
 * @param {Function} fn //要执行的方法
 * @param {number} delay  // 多少时间执行
 * @returns 
 */
const antiShake = (fn, delay) => {
    let timer = null;
    return function () {
        let content = this;
        let args = arguments;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(content, args);
        }, delay);
    };
}


/**
 * 判断对象中是否有存在属性为null
 * @param {Object} newObj // 传递过来的对象
 */
const isObjNull = (newObj) => {
    let flag = true;
    Object.keys(newObj).forEach(function (key) {
        if (newObj[key] === null || newObj[key] === undefined) {
            flag = false;
            return
        }
    })
    return flag;
}

/**
 * 判断当前传入的字段值是否存在于树数据中
 * @param {Array} nodesArr 
 * @param {String} searchKey 
 * @returns 
 */
const searchTree = (nodesArr, searchKey) => {
    for (let i = 0; i < nodesArr.length; i++) {
        if (nodesArr[i].router === searchKey) {
            return nodesArr[i].name
        } else {
            if (nodesArr[i].children && nodesArr[i].children.length > 0) {
                let res = searchTree(nodesArr[i].children, searchKey);
                if (res) {
                    return nodesArr[i].name + ' / ' + res
                }
            }
        }
    }
    return null
}

/**
 * 找树形数组中的某一项
 * @param {Array} nodesArr 
 * @param {String} searchKey 
 * @returns 
 */
const searchTreeCertain = (nodesArr, searchKey) => {
    var isGet = false
    var retNode = null

    function deepSearch(nodesArr, searchKey) {
        for (var i = 0; i < nodesArr.length; i++) {
            if (nodesArr[i].children && nodesArr[i].children.length > 0) {
                deepSearch(nodesArr[i].children, searchKey)
            }
            if (searchKey === nodesArr[i].router || isGet) {
                isGet || (retNode = nodesArr[i])
                isGet = true
                break
            }
        }
    }
    deepSearch(nodesArr, searchKey)
    return retNode
}



/**
 * //数字转中文
 * @param {Number} num 
 * @returns 
 */
const toChinesnNumber = (num) => {
    const numStr = num
        .toString()
        .replace(/(?=(\d{4})+$)/g, ',')
        .split(',')
        .filter(Boolean); //分割每四位一组 [ '4567', '4567' ]

    const chars = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    const units = ['', '十', '百', '千']

    function handleZero(str) {
        return str
            .replace(/零{2,}/g, '零') //零这个字出现两次以上就替换成一个 零
            .replace(/零+$/g, '') //末尾有 零 就直接为空
    }

    function _transform(n) {
        if (n === '0000') { // 中间 四位 全部都是 零，单独处理返回 一个 零
            return chars[0]
        }
        let result = '';
        for (let i = 0; i < n.length; i++) {
            const c = chars[+n[i]];
            //数字的长度减1减i就是上面 units 映射的
            let u = units[n.length - 1 - i];
            if (c === chars[0]) { //去单个 零
                u = '';
            }
            result += c + u
        }
        result = handleZero(result)
        return result
    }

    const bigUmits = ['', '万', '亿'];
    let result = '';
    for (let i = 0; i < numStr.length; i++) {
        const part = numStr[i];
        const c = _transform(part);
        let u = bigUmits[numStr.length - 1 - i];
        if (c === chars[0]) { // 中间四位都是零的时候去掉 万     一千二百三十四亿零万一千二百三十四 
            u = '';
        }
        result += c + u;

    }
    result = handleZero(result) //去掉末尾全是零  一百二十三亿四千万零\
    return result
}

/**
 * 数字中文转大写中文
 * @param {String} num 
 * @returns 
 */
const toBigChinesnNumber = (num) => {
    let result = toChinesnNumber(num); //先转成中文
    const map = {
        零: '零',
        一: '壹',
        二: '贰',
        三: '叁',
        四: '肆',
        五: '伍',
        六: '陆',
        七: '柒',
        八: '捌',
        九: '玖',
        十: '拾',
        百: '佰',
        千: '仟',
        万: '万',
        亿: '亿',
    }; //建立映射表
    return result
        .split('')
        .map(s => map[s])
        .join('')
}

/**
 * 封装函数：获取 早上｜下午｜上午｜晚上
 * @returns 
 */
const getTime = () => {
    let message = ''
    let hours = new Date().getHours()
    console.log(hours, 'hours')

    if (hours <= 9) {
        message = this.$t('headerList.GoodMorning')
    } else if (hours <= 12) {
        message = this.$t('headerList.GoodMorning')
    } else if (hours <= 18) {
        message = this.$t('headerList.GoodMorning')
    } else {
        message = this.$t('headerList.GoodMorning')
    }
    return message
}


const generateTitle = (title) => {
    const hasKey = this.$te('route.' + title)

    if (hasKey) {
        // $t :this method from vue-i18n, inject in @/lang/index.js
        const translatedTitle = this.$t('route.' + title)

        return translatedTitle
    }
    return title
}


export {
    downloadIamgeFun,
    toUtf8,
    getDistances,
    timeConversion,
    timestampConversion,
    getPathParameter,
    deepClone,
    antiShake,
    isObjNull,
    searchTree,
    toChinesnNumber,
    toBigChinesnNumber,
    getTime,
    generateTitle,
    searchTreeCertain
}