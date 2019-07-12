var express = require('express');
var router = express.Router();
var http = require('http');
var api = require('../modules/api')
/**
 * 首页
 */
router.get('/', function (request, response, next) {
  //logo
  api.indexLogo(function (err, indexLogoData) {
    api.logo(function (err, logoData) {
      //导航菜单
      api.getMenu(function (err, data) {
        //友情链接
        api.getLink(function (err, data2) {
          //联系我们
          api.contact(function (err, contactData) {
            //合作伙伴
            api.cooperation(function (err, cooperationData) {
              //版权
              api.copyright(function (err, copyrightData) {
                //轮播图
                api.carousel(function (err, carouselData) {
                  //产品类别
                  api.cplist(function(err,cplistData){
                        //案例展示
                        api.Exhibition(function (err, ExhibitionData) {
                          api.new(function (err, newData) {
                            response.render('index', {
                              page: '/',
                              title: '本怡科技',
                              indexLogos: indexLogoData.content,
                              logos: logoData.content,
                              menus: data,
                              links: data2,
                              contacts: contactData.content,
                              cooperations: cooperationData.content,
                              copyrights: copyrightData.content,
                              carousels: carouselData.content,
                              cplists:cplistData.content,
                              Exhibitions: ExhibitionData.content,
                              news: newData.content
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
/**
 * 产品类别
 */
router.get('/cplx', function (request, response, next) {
  //logo
  api.logo(function (err, logoData) {
    //导航菜单
    api.getMenu(function (err, data) {
      //友情链接
      api.getLink(function (err, data2) {
        //联系我们
        api.contact(function (err, contactData) {
          //合作伙伴
          api.cooperation(function (err, cooperationData) {
            //版权
            api.copyright(function (err, copyrightData) {
              //特点列表
              api.characteristic(function (err, characteristicData) {
                //轮播按钮
                api.button(function (err, buttonData) {
                  //产品类别
                  api.fCplist(function (err, fCplistData) {
                        response.render('cplx', {
                          page: '/cplx',
                          title: '本怡科技-产品类型',
                          logos: logoData.content,
                          menus: data,
                          links: data2,
                          contacts: contactData.content,
                          cooperations: cooperationData.content,
                          characteristics: characteristicData.content,
                          copyrights: copyrightData.content,
                          buttons: buttonData.content,
                          fCplists: fCplistData.content,
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
/**
 * 案例展示
 */
router.get('/alzs', function (request, response, next) {
  //logo
  api.logo(function (err, logoData) {
    //导航菜单
    api.getMenu(function (err, data) {
      //友情链接
      api.getLink(function (err, data2) {
        //联系我们
        api.contact(function (err, contactData) {
          //合作伙伴
          api.cooperation(function (err, cooperationData) {
            //版权
            api.copyright(function (err, copyrightData) {
              //展示列表
              api.Exhibition(function (err, ExhibitionData) {
                response.render('alzs', {
                  page: '/alzs',
                  title: '本怡科技-案例展示',
                  logos: logoData.content,
                  menus: data,
                  links: data2,
                  contacts: contactData.content,
                  cooperations: cooperationData.content,
                  copyrights: copyrightData.content,
                  Exhibitions: ExhibitionData.content,
                })
              })
            })
          })
        })
      })
    })
  })
})
/**
 * 案例展示详情页
 */
router.get('/alzsView', function (request, response, next) {
  //logo
  api.logo(function (err, logoData) {
    //导航菜单
    api.getMenu(function (err, data) {
      //友情链接
      api.getLink(function (err, data2) {
        //联系我们
        api.contact(function (err, contactData) {
          //合作伙伴
          api.cooperation(function (err, cooperationData) {
            //版权
            api.copyright(function (err, copyrightData) {
              //详情内容
              api.ExhibitionInfo(request.query.id, function (err, ExhibitionInfoData) {
                api.ExhibitionView(request.query.id, function (err, ExhibitionViewData) {
                  response.render('alzsView', {
                    page: '/alzsView',
                    title: '本怡科技-案例展示',
                    logos: logoData.content,
                    menus: data,
                    links: data2,
                    contacts: contactData.content,
                    cooperations: cooperationData.content,
                    copyrights: copyrightData.content,
                    ExhibitionInfo: ExhibitionInfoData,
                    ExhibitionView: ExhibitionViewData
                  })
                })
              })
            })
          })
        })
      })
    })
  })
})
/**
 * 新闻中心
 */
router.get('/xwzx', function (request, response, next) {
  //logo
  api.logo(function (err, logoData) {
    //导航菜单
    api.getMenu(function (err, data) {
      //友情链接
      api.getLink(function (err, data2) {
        //联系我们
        api.contact(function (err, contactData) {
          //合作伙伴
          api.cooperation(function (err, cooperationData) {
            //版权
            api.copyright(function (err, copyrightData) {
              //新闻列表
              api.new(function (err, newData) {
                response.render('xwzx', {
                  page: '/xwzx',
                  title: '本怡科技-新闻中心',
                  logos: logoData.content,
                  menus: data,
                  links: data2,
                  contacts: contactData.content,
                  cooperations: cooperationData.content,
                  copyrights: copyrightData.content,
                  news: newData.content,
                  //局部引入moment组件
                  moment: require('moment')
                })
              })
            })
          })
        })
      })
    })
  })
})
/**
 * 新闻中心详情
 */
router.get('/xwzxView', function (request, response, next) {
  //logo
  api.logo(function (err, logoData) {
    //导航菜单
    api.getMenu(function (err, data) {
      //友情链接
      api.getLink(function (err, data2) {
        //联系我们
        api.contact(function (err, contactData) {
          //合作伙伴
          api.cooperation(function (err, cooperationData) {
            //版权
            api.copyright(function (err, copyrightData) {
              //详情内容
              api.newInfo(request.query.id, function (err, newInfoData) {
                api.newView(request.query.id, function (err, newViewData) {
                  // console.log(newViewData)
                  response.render('xwzxView', {
                    page: '/xwzxView',
                    title: '本怡科技-新闻中心',
                    logos: logoData.content,
                    menus: data,
                    links: data2,
                    contacts: contactData.content,
                    cooperations: cooperationData.content,
                    copyrights: copyrightData.content,
                    newInfo: newInfoData,
                    newView: newViewData,
                    //局部引入moment组件
                    moment: require('moment')
                  })
                })
              })
            })
          })
        })
      })
    })
  })
})
/**
 * 联系我们
 */
router.get('/lxwm', function (request, response, next) {
  //logo
  api.logo(function (err, logoData) {
    //导航菜单
    api.getMenu(function (err, data) {
      //友情链接
      api.getLink(function (err, data2) {
        //联系我们
        api.contact(function (err, contactData) {
          //合作伙伴
          api.cooperation(function (err, cooperationData) {
            //版权
            api.copyright(function (err, copyrightData) {
              //展示列表
              api.lianxi(function (err, lianxiData) {
                response.render('lxwm', {
                  page: '/lxwm',
                  title: '本怡科技-联系我们',
                  logos: logoData.content,
                  menus: data,
                  links: data2,
                  contacts: contactData.content,
                  cooperations: cooperationData.content,
                  copyrights: copyrightData.content,
                  lianxis: lianxiData.content,
                })
              })
            })
          })
        })
      })
    })
  })
})
module.exports = router;
