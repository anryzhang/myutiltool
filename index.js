/**
 * Created by ziyu on 2017/8/24.
 */
"use strict";
 
exports.sum = function () {
    let _sum = 0;
    for(let i = 0; i < arguments.length; i++){
        _sum += arguments[i];
    }
    return _sum;
}

exports.encrypt = function (val) {
    let arr_val = val.split('');
    let asc = arr_val.map((cur)=>{
        return (cur.charCodeAt(0)+10)*2;
    });
    return encodeURIComponent(asc.join());
}

exports.unEncrypt = function (val) {
    let arr_val = decodeURIComponent(val).split(',');
    let _str = arr_val.map((cur)=>{
        return String.fromCharCode(cur/2-10);
    });
    return _str.join('');
}