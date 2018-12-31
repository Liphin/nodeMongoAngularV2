/**
 * Created by Administrator on 2018/2/28.
 */
var overallModule = angular.module('Angular');

overallModule.factory('OverallDataSer', function ($rootScope, $location) {

    var overallData = {
        'loginStatus': false,
        'loadingData': false, //
        'requestDataErrorMsg': '尊敬的客户，服务出错，请稍后重试',
        'fileSuffix': ['doc', 'docx', 'pdf', 'xls', 'xlsx', 'png', 'jpeg', 'jpg', 'gif', 'pfx', 'zip'], //文件后缀辅助数据
    };

    /* Url 系统各种文件获取的URL设置 */
    var baseUrlData = {
        'frontEndHttp': $location.protocol() + "://" + $location.host() + ":" + $location.port() + "/",
        'backEndHttp': '',//从getConfig请求中获取
    };

    // http请求的具体路径
    var urlData = {
        'frontEndHttp': {
            'getConfig': baseUrlData['frontEndHttp'] + 'getConfig',
            'getSqlKeyWord': baseUrlData['frontEndHttp'] + 'helper/sqlKeyWord.txt',
            'managerLogin': baseUrlData['frontEndHttp'] + 'managerLogin'
        }
    };

    //用于sql注入filter
    var sqlVerify = [];


    //location.path的重定向
    var redirect = {
        'loginHome': '/login/home',
    };


    var zIndexHelper = {
        'loading': 500000,
        'manager': 100,
    };


    return {
        urlData: urlData,
        redirect: redirect,
        sqlVerify: sqlVerify,
        overallData: overallData,
        baseUrlData: baseUrlData,
        zIndexHelper: zIndexHelper,
    }
});
