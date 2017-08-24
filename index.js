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
