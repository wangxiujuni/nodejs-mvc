var fetch = require('./fetch');
//后台端口
var apiUrl = '';
/*************************************引入相关*************************************************/
/**
 * 导航菜单
 */
exports.getMenu = function (cb) {
    fetch(apiUrl + '/menu/front', {}, function (err, res) {
        cb(err, res.data);
    });
}
/**
 * 首页轮播
 */
exports.carousel = function (cb) {
    fetch(apiUrl + '/carousel/page', {
        method: 'POST',
        body: JSON.stringify({
            "dir": "asc",
            "page": 1,
            "parameters": {
                "cslType": 5,
            },
            "size": 10,
            "sort": "cslId"
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }, function (err, res) {
        cb(err, res.data);
    });
}
/**
 * 联系我们
 */
exports.contact = function (cb) {
    fetch(apiUrl + '/article/page', {
        method: 'POST',
        body: JSON.stringify({
            "dir": "asc",
            "page": 1,
            "parameters": {
                "catId": 74,
            },
            "size": 1,
            "sort": "wzId"
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }, function (err, res) {
        cb(err, res.data);
    });
}
/**
 * 合作伙伴
 */
exports.cooperation = function (cb) {
    fetch(apiUrl + '/article/page', {
        method: 'POST',
        body: JSON.stringify({
            "dir": "asc",
            "page": 1,
            "parameters": {
                "catId": 75,
            },
            "size": 10,
            "sort": "wzId"
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }, function (err, res) {
        cb(err, res.data);
    });
}
exports.cooperationView = function (id, cb) {
    fetch(apiUrl + '/article/info/' + id, {
        method: 'GET'
    }, function (err, res) {
        console.log(res.data)
        cb(err, res.data);
    });
}
/**
 * 友情链接
 */
exports.getLink = function (cb) {
    fetch(apiUrl + '/links', {}, function (err, res) {
        cb(err, res.data);
    });
}
/**
 * 版权
 */
exports.copyright = function (cb) {
    fetch(apiUrl + '/article/page', {
        method: 'POST',
        body: JSON.stringify({
            "dir": "asc",
            "page": 1,
            "parameters": {
                "catId": 76,
            },
            "size": 1,
            "sort": "wzId"
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }, function (err, res) {
        cb(err, res.data);
    });
}
/***********************************************引入相关**********************************************/

/***********************************************首页相关**********************************************/
/**
 * 分页logo
 */
exports.logo = function (cb) {
    fetch(apiUrl + '/article/page', {
        method: 'POST',
        body: JSON.stringify({
            "dir": "asc",
            "page": 1,
            "parameters": {
                "catId": 83,
            },
            "size": 1,
            "sort": "wzId"
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }, function (err, res) {
        cb(err, res.data);
    });
}
/**
 * 首页logo
 */
exports.indexLogo = function (cb) {
    fetch(apiUrl + '/article/page', {
        method: 'POST',
        body: JSON.stringify({
            "dir": "asc",
            "page": 1,
            "parameters": {
                "catId": 84,
            },
            "size": 1,
            "sort": "wzId"
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }, function (err, res) {
        cb(err, res.data);
    });
}
/**
 * 首页产品类别列表
 */
exports.cplist = function (cb) {
    fetch(apiUrl + '/pages/page', {
        method: 'POST',
        body: JSON.stringify({
            "dir": "asc",
            "page": 1,
            "parameters": {
                "pgCode": 101,
            },
            "size": 10,
            "sort": "pgId"
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }, function (err, res) {
        cb(err, res.data);
    });
}
/**
 * 分页产品类别列表
 */
exports.fCplist = function (cb) {
    fetch(apiUrl + '/pages/page', {
        method: 'POST',
        body: JSON.stringify({
            "dir": "asc",
            "page": 1,
            "parameters": {
                "pgCode": 102,
            },
            "size": 10,
            "sort": "pgId"
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }, function (err, res) {
        cb(err, res.data);
    });
}

/***********************************************首页相关**********************************************/

/***********************************************产品类型*********************************************/

/**
 * 特点列表
 */
exports.characteristic = function (cb) {
    fetch(apiUrl + '/article/page', {
        method: 'POST',
        body: JSON.stringify({
            "dir": "asc",
            "page": 1,
            "parameters": {
                "catId": 70,
            },
            "size": 10,
            "sort": "wzId"
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }, function (err, res) {
        cb(err, res.data);
    });
}
/**
 * 分页产品类别
 */
exports.button = function (cb) {
    fetch(apiUrl + '/pages/page', {
        method: 'POST',
        body: JSON.stringify({
            "dir": "asc",
            "page": 1,
            "parameters": {
                "pgCode": 103,
            },
            "size": 1,
            "sort": "pgId"
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }, function (err, res) {
        cb(err, res.data);
    });
}
/*************************************************产品类型*******************************************/


/********************************************案例展示************************************************/
/**
 * 案例展示
 */
exports.Exhibition = function (cb) {
    fetch(apiUrl + '/article/page', {
        method: 'POST',
        body: JSON.stringify({
            "dir": "asc",
            "page": 1,
            "parameters": {
                "catId": 68,
            },
            "size": 20,
            "sort": "wzId"
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }, function (err, res) {
        cb(err, res.data);
    });
}
/**
 * 案例展示详情
 */
exports.ExhibitionInfo = function (id, cb) {
    fetch(apiUrl + '/article/' + id, {
        method: 'GET'
    }, function (err, res) {
        console.log(res.data)
        cb(err, res.data);
    });
}
exports.ExhibitionView = function (id, cb) {
    fetch(apiUrl + '/article/info/' + id, {
        method: 'GET'
    }, function (err, res) {
        console.log(res.data)
        cb(err, res.data);
    });
}

/********************************************案例展示************************************************/

/********************************************新闻中心************************************************/

/**
 * 新闻中心
 */
exports.new = function (cb) {
    fetch(apiUrl + '/article/page', {
        method: 'POST',
        body: JSON.stringify({
            "dir": "asc",
            "page": 1,
            "parameters": {
                "catId": 65,
            },
            "size": 10,
            "sort": "wzId"
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }, function (err, res) {
        cb(err, res.data);
    });
}
/**
 * 新闻中心详情
 */
exports.newInfo = function (id, cb) {
    fetch(apiUrl + '/article/' + id, {
        method: 'GET'
    }, function (err, res) {
        console.log(res.data)
        cb(err, res.data);
    });
}
exports.newView = function (id, cb) {
    fetch(apiUrl + '/article/info/' + id, {
        method: 'GET'
    }, function (err, res) {
        console.log(res.data)
        cb(err, res.data);
    });
}
/********************************************新闻中心************************************************/
/********************************************联系我们************************************************/
/**
 * 新闻中心
 */
exports.lianxi = function (cb) {
    fetch(apiUrl + '/article/page', {
        method: 'POST',
        body: JSON.stringify({
            "dir": "asc",
            "page": 1,
            "parameters": {
                "catId": 69,
            },
            "size": 1,
            "sort": "wzId"
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }, function (err, res) {
        cb(err, res.data);
    });
}
/********************************************联系我们************************************************/
