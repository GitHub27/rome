var express = require('express')
var app = express()

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, DNT, User-Agent, Keep-Alive, logintoken')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})

var login = require('./login/login')
app.use('/jjz/user/login', login)

var user = require('./login/user')
app.use('/jjz/user/findAccount', user)

var logout = require('./login/logout')
app.use('/user/logout', logout)
app.use('/jjz/user/modifyAccountPwd', function (req, res) {
  // res.json({ 'code': 20000, 'data': { 'name': '22' }})
  res.json({ 'code': '0000', 'message': 'ok' })
})
app.use('/jjz/captcha', function (req, res) {
  res.json({
    'code': '0000', 'data': {
      'captcha': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAMAAAC7m5rvAAACK1BMVEUAAAD////////////////////////////////////////////////////////////////////////////qynDpx2ziuln///zkv2DhuVbes03nxGjftlH26tHv03/szXbpxmrmwWLjvV3huFXgt1T257X25rHry3LqyG7lwGHdskvhsUTcqTf+/fv+/Pn++/b89+316c304qbx1oXv0nzpxmnmwmTbrUTerTzv267pzYvx14j12ILszHTcr0fapjH058ry4bj135r324f02obw1YHu0Hrjwnnkvl7jvFrov1nitUvcsEvfskjbrEH9+fD47Mf36bzx37T15K325Kn24p/0357645nz3JHy2o313Izoy4jw1YPlxn/z1X3kxHzpwl7kuVHitEffsETfr0HZqDrZoCf79eD68dX679D36sDv3bHy3Zz85Zvq0Zv03Zf54pX03pXqz5P54ZLy2YnnyYbx0njx0HXqxGHetVzmvFXdqznXpTbTnCj89+n69Ob48N/37trt2Kjr1aT04aLs1Z/4457335D33ovmx4HmxHLnw2XdtmLguWHguFvlvVnlulLftFDkuE7ZqT/ZpzjWojLZniD58uH27Njy48Lx4b3257n55afw2Zfx2ZDny5Du0YPsznjnxXjiwHbtzXXgvG7fuWXes1TUoTHSmSD89uX57sny48Tz36v75JTt1JLy1Hvox3PgvXPsynDkwG/nwF7qvVDouUnTni6JeKWTAAAAE3RSTlMA7ED62su/tp2YlG1nVy0h394DSN+88QAABHVJREFUSMelVvdbUlEYBinSLLMuIEu2LFGRTQgYToaEKQRILpxp7pEz00xTc+Ro7733+PO63MHlmhDPw/vTPeee93zzfN9HOAhZmRnkk0QSiXiSnJGZRUgKaelEAAdietp/SccPAQfg0PHEkg4DcXA4vsQTR4AEOHIijigikBDEAwUeIwH/AenYP6RTR4EkcPTUPhrGSszbpyGQJHB6ppGSpZHSYjy/z4dXjHfi+xOLAz5eRQvbHW8ez0bXhfviF1URt333pnVnp33qtbEIJhknhpS4A6iasRl1tcmdb5EzmfKa8I9ScF284g63rZ+LlXgYyd4Yo4Yszi2GgC7j0wWMTeZo8ZBwkiEUtThXimN4cF4fiho1v5XPpvF5lBdfxswUns6+Sbu8quVpWfxqh+j0HPYecJbdm1DUiOhULmf5UV3/0giHZedLzZUaDkfzVKKVOUSLyljr0uFP5dqMQi/iUzTL/rxZoMgTogt4XI4p4B8cHA6qNZLVjVvrPUXw2XSQhsSsdG/XzZZRSpbqOyOeaWALqJUmf7/v2pMbHu/5QIjLojmnJu7CsQPrBoDQOtqZ1ZRyb3dBRPTQVjNVMzLoU/WuGKqA2VrbgJrLYlgUM4+hw1mETIRWbNUztJxaWA1jw73PlcH+B6qHVGHrBXCjUzxQLpGxt60vof+ZhAyUppBXj/ciC+Ovr/c99apucZlEdmsUinq3rYJKsyieQ/8zCGTkZK6BrWu8lgMveia1jQ+6lEDtcCVrsgHeO+sbkzFBjSMgE7JRWptQW6JCaOcc0opLdTlA7fkKquM0ckJcwhK1NUGf2QQiSsunUcujtGaJ+ry4ALh4KURpRml55TxG/gXElSSMJi2rR2hnLptN1/MiNHUMrUxKa70BvzqYhkrDaNyRhDRMyTADsg2TJi6AbcNoVForqmT2QZ4895MSith2/xPsSdQlqG0nCeSYuL3oP4vQNnic4Togp8s2xgfjBqOuUcdGPEnGwm3VC1kabxckr6dFxw2qOsX1no+y3xdQ2rhAPlWFhDszNielJUvid5EscdJ4ap9voIz78Mwz+CTQadIK9dbnSHJlodLeWt1svqRi2HbxLDBvYDzptflD5lWHaDQXypG8iu8CeXvHSySVUVcWGl2KsBB8byMD3u55+yOb38SR6IQWVx+Y3UXvB0sodLb7zd4a5Ej0mUIX9rlahZHXXR4MBAJqDpcqEzGpeTmgZ7zLGildpJ/umFmAnim+3N1ucLXYwVpirnzKjdQSNs1sCvZ6VOpGCUvA1iv+fLuDlbzYtpv7rKYFqVwbm06hjieVjI+NS1l0BrNt+lUpUoLQgoeh4MzN/BqwTjKd64tV4BX2ajpdQBMxw4bXPYW4gkfAN2zlomWq3bB9+gp8hUsud1ncBn2fEldeMeswE5t2X+XCV/TpFTvT09bdpjl8MUdbBx5Xo8V7rmpm7+1EKb51YI0qPj6sLRTiGlUKbTGlJpx8y099wEh+nEl9eEp+VEthMEx9DE196MVG7OyEI/ZfJAddqwVbCKsAAAAASUVORK5CYII=',
      'captCode': '635edd4bc809461cb951df811b901eee'
    }, 'message': 'sorry'
  })
})
app.use('/jjz/user/addAccount', function (req, res) {
  res.json({ 'code': '0001', 'message': 'sorry' })
})
var getAccountList = require('./getAccountList')
app.use('/jjz/user/listAccount', getAccountList)

app.use('/jjz/product/queryAllProductList', function (req, res) {
  res.json({
    'code': '0000', 'data': {
      'currentPageIndex': 0,
      'pageNo': 0,
      'pageSize': 0,
      'rows': [
        {
          'categoryCode': '22',
          'investPeriod': 0,
          'minYieldRate': 'string',
          'productCode': '222',
          'productDisplayName': 'string',
          'productName': 'string',
          'productStartTime': 'string',
          'product_status': '1',
          'totalAmount': 'string',
          'valueTime': 'string'
        },
        {
          'categoryCode': '11',
          'investPeriod': 0,
          'minYieldRate': 'string',
          'productCode': '222',
          'productDisplayName': 'string',
          'productName': 'string',
          'productStartTime': 'string',
          'product_status': '2',
          'totalAmount': 'string',
          'valueTime': 'string'
        },
        {
          'categoryCode': '11',
          'investPeriod': 0,
          'minYieldRate': 'string',
          'productCode': '222',
          'productDisplayName': 'string',
          'productName': 'string',
          'productStartTime': 'string',
          'product_status': '2',
          'totalAmount': 'string',
          'valueTime': 'string'
        },
        {
          'categoryCode': '11',
          'investPeriod': 0,
          'minYieldRate': 'string',
          'productCode': '222',
          'productDisplayName': 'string',
          'productName': 'string',
          'productStartTime': 'string',
          'product_status': '2',
          'totalAmount': 'string',
          'valueTime': 'string'
        },
        {
          'categoryCode': '11',
          'investPeriod': 0,
          'minYieldRate': 'string',
          'productCode': '222',
          'productDisplayName': 'string',
          'productName': 'string',
          'productStartTime': 'string',
          'product_status': '2',
          'totalAmount': 'string',
          'valueTime': 'string'
        },
        {
          'categoryCode': '11',
          'investPeriod': 0,
          'minYieldRate': 'string',
          'productCode': '222',
          'productDisplayName': 'string',
          'productName': 'string',
          'productStartTime': 'string',
          'product_status': '2',
          'totalAmount': 'string',
          'valueTime': 'string'
        },
        {
          'categoryCode': '11',
          'investPeriod': 0,
          'minYieldRate': 'string',
          'productCode': '222',
          'productDisplayName': 'string',
          'productName': 'string',
          'productStartTime': 'string',
          'product_status': '2',
          'totalAmount': 'string',
          'valueTime': 'string'
        },
        {
          'categoryCode': '11',
          'investPeriod': 0,
          'minYieldRate': 'string',
          'productCode': '222',
          'productDisplayName': 'string',
          'productName': 'string',
          'productStartTime': 'string',
          'product_status': '2',
          'totalAmount': 'string',
          'valueTime': 'string'
        },
        {
          'categoryCode': '11',
          'investPeriod': 0,
          'minYieldRate': 'string',
          'productCode': '222',
          'productDisplayName': 'string',
          'productName': 'string',
          'productStartTime': 'string',
          'product_status': '2',
          'totalAmount': 'string',
          'valueTime': 'string'
        },
        {
          'categoryCode': '11',
          'investPeriod': 0,
          'minYieldRate': 'string',
          'productCode': '222',
          'productDisplayName': 'string',
          'productName': 'string',
          'productStartTime': 'string',
          'product_status': '2',
          'totalAmount': 'string',
          'valueTime': 'string'
        },
        {
          'categoryCode': '11',
          'investPeriod': 0,
          'minYieldRate': 'string',
          'productCode': '222',
          'productDisplayName': 'string',
          'productName': 'string',
          'productStartTime': 'string',
          'product_status': '2',
          'totalAmount': 'string',
          'valueTime': 'string'
        },
        {
          'categoryCode': '11',
          'investPeriod': 0,
          'minYieldRate': 'string',
          'productCode': '222',
          'productDisplayName': 'string',
          'productName': 'string',
          'productStartTime': 'string',
          'product_status': '2',
          'totalAmount': 'string',
          'valueTime': 'string'
        },
        {
          'categoryCode': '11',
          'investPeriod': 0,
          'minYieldRate': 'string',
          'productCode': '222',
          'productDisplayName': 'string',
          'productName': 'string',
          'productStartTime': 'string',
          'product_status': '2',
          'totalAmount': 'string',
          'valueTime': 'string'
        },
        {
          'categoryCode': '11',
          'investPeriod': 0,
          'minYieldRate': 'string',
          'productCode': '222',
          'productDisplayName': 'string',
          'productName': 'string',
          'productStartTime': 'string',
          'product_status': '2',
          'totalAmount': 'string',
          'valueTime': 'string'
        },
        {
          'categoryCode': '11',
          'investPeriod': 0,
          'minYieldRate': 'string',
          'productCode': '222',
          'productDisplayName': 'string',
          'productName': 'string',
          'productStartTime': 'string',
          'product_status': '2',
          'totalAmount': 'string',
          'valueTime': 'string'
        },
        {
          'categoryCode': '11',
          'investPeriod': 0,
          'minYieldRate': 'string',
          'productCode': '222',
          'productDisplayName': 'string',
          'productName': 'string',
          'productStartTime': 'string',
          'product_status': '2',
          'totalAmount': 'string',
          'valueTime': 'string'
        },
        {
          'categoryCode': '11',
          'investPeriod': 0,
          'minYieldRate': 'string',
          'productCode': '222',
          'productDisplayName': 'string',
          'productName': 'string',
          'productStartTime': 'string',
          'product_status': '2',
          'totalAmount': 'string',
          'valueTime': 'string'
        },
        {
          'categoryCode': '11',
          'investPeriod': 0,
          'minYieldRate': 'string',
          'productCode': '222',
          'productDisplayName': 'string',
          'productName': 'string',
          'productStartTime': 'string',
          'product_status': '2',
          'totalAmount': 'string',
          'valueTime': 'string'
        },
        {
          'categoryCode': '11',
          'investPeriod': 0,
          'minYieldRate': 'string',
          'productCode': '222',
          'productDisplayName': 'string',
          'productName': 'string',
          'productStartTime': 'string',
          'product_status': '2',
          'totalAmount': 'string',
          'valueTime': 'string'
        },
        {
          'categoryCode': '11',
          'investPeriod': 0,
          'minYieldRate': 'string',
          'productCode': '222',
          'productDisplayName': 'string',
          'productName': 'string',
          'productStartTime': 'string',
          'product_status': '2',
          'totalAmount': 'string',
          'valueTime': 'string'
        },
        {
          'categoryCode': '11',
          'investPeriod': 0,
          'minYieldRate': 'string',
          'productCode': '222',
          'productDisplayName': 'string',
          'productName': 'string',
          'productStartTime': 'string',
          'product_status': '2',
          'totalAmount': 'string',
          'valueTime': 'string'
        },
        {
          'categoryCode': '11',
          'investPeriod': 0,
          'minYieldRate': 'string',
          'productCode': '222',
          'productDisplayName': 'string',
          'productName': 'string',
          'productStartTime': 'string',
          'product_status': '2',
          'totalAmount': 'string',
          'valueTime': 'string'
        },
        {
          'categoryCode': '11',
          'investPeriod': 0,
          'minYieldRate': 'string',
          'productCode': '222',
          'productDisplayName': 'string',
          'productName': 'string',
          'productStartTime': 'string',
          'product_status': '2',
          'totalAmount': 'string',
          'valueTime': 'string'
        },
        {
          'categoryCode': '11',
          'investPeriod': 0,
          'minYieldRate': 'string',
          'productCode': '222',
          'productDisplayName': 'string',
          'productName': 'string',
          'productStartTime': 'string',
          'product_status': '2',
          'totalAmount': 'string',
          'valueTime': 'string'
        },
        {
          'categoryCode': '11',
          'investPeriod': 0,
          'minYieldRate': 'string',
          'productCode': '222',
          'productDisplayName': 'string',
          'productName': 'string',
          'productStartTime': 'string',
          'product_status': '2',
          'totalAmount': 'string',
          'valueTime': 'string'
        },
        {
          'categoryCode': '11',
          'investPeriod': 0,
          'minYieldRate': 'string',
          'productCode': '222',
          'productDisplayName': 'string',
          'productName': 'string',
          'productStartTime': 'string',
          'product_status': '2',
          'totalAmount': 'string',
          'valueTime': 'string'
        }
      ],
      'totalPage': 12,
      'totalRecordsCount': 0
    },
    'message': 'sorry'
  })
})
app.use('/jjz/product/productCategoryList', function (req, res) {
  res.json({
    'code': '0000', 'data': [{
      'categoryCode': '11',
      'categoryName': '分类11',
      'description': 11,
      'oper': 11
    },
      {
        'categoryCode': '22',
        'categoryName': '分类22',
        'description': 22,
        'oper': 11
      }
    ], 'message': 'sorry'
  })
})
app.use('/jjz/product/savePutOnProduct', function (req, res) {
  res.json({
    'code': '0000', 'data': {}, 'message': 'sorry'
  })
})
app.use('/jjz/product/addProductCategory', function (req, res) {
  res.json({
    'code': '0000', 'data': {}, 'message': 'sorry'
  })
})

app.use('/jjz/product/PutOnProduct', function (req, res) {
  res.json({
    'code': '0000', 'data': {}, 'message': 'sorry'
  })
})
app.use('/jjz/product/PutOffProduct', function (req, res) {
  res.json({
    'code': '0000', 'data': {}, 'message': 'sorry'
  })
})
app.use('/jjz/product/batchAddProduct', function (req, res) {
  res.json({
    'code': '0000', 'data': {
      'successCount': '22',
      'totalCount': '24'
    }, 'message': 'sorry'
  })
})
app.use('/jjz/product/productStatusList', function (req, res) {
  res.json({
    'code': '0000', 'data': [{
      'code': '22',
      'message': '下架'
    }, {
      'code': '244',
      'message': 's架'
    },
      {
        'code': '233',
        'message': '2222下2架'
      }], 'message': 'sorry'
  })
})

app.use('/jjz/product/productDetail', function (req, res) {
  res.json({
    'code': '0000', 'data': {
      'categoryCode': '11',
      'investPeriod': '222222',
      'minYieldRate': 11,
      'productCode': 22,
      'productDisplayName': '产品1111111',
      'productName': '产品1111111',
      'productStartTime': '2011-11-11 11:11:11',
      'totalAmount': '500000',
      'valueTime': '2011-11-11'
    }, 'message': 'sorry'
  })
})

app.use('/hello', function (req, res) {
  res.json({ 'path': 'hello', 'method': 'post' })
})

app.listen(3000, function () {
  console.log('local mock-server listening on port 3000!')
})
