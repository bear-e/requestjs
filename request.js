/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                                                                             *
 *               ii.                                         ;9ABH,            *
 *              SA391,                                    .r9GG35&G            *
 *              &#ii13Gh;                               i3X31i;:,rB1           *
 *              iMs,:,i5895,                         .5G91:,:;:s1:8A           *
 *               33::::,,;5G5,                     ,58Si,,:::,sHX;iH1          *
 *                Sr.,:;rs13BBX35hh11511h5Shhh5S3GAXS:.,,::,,1AG3i,GG          *
 *                .G51S511sr;;iiiishS8G89Shsrrsh59S;.,,,,,..5A85Si,h8          *
 *               :SB9s:,............................,,,.,,,SASh53h,1G.         *
 *            .r18S;..,,,,,,,,,,,,,,,,,,,,,,,,,,,,,....,,.1H315199,rX,         *
 *          ;S89s,..,,,,,,,,,,,,,,,,,,,,,,,....,,.......,,,;r1ShS8,;Xi         *
 *        i55s:.........,,,,,,,,,,,,,,,,.,,,......,.....,,....r9&5.:X1         *
 *       59;.....,.     .,,,,,,,,,,,...        .............,..:1;.:&s         *
 *      s8,..;53S5S3s.   .,,,,,,,.,..      i15S5h1:.........,,,..,,:99         *
 *      93.:39s:rSGB@A;  ..,,,,.....    .SG3hhh9G&BGi..,,,,,,,,,,,,.,83        *
 *      G5.G8  9#@@@@@X. .,,,,,,.....  iA9,.S&B###@@Mr...,,,,,,,,..,.;Xh       *
 *      Gs.X8 S@@@@@@@B:..,,,,,,,,,,. rA1 ,A@@@@@@@@@H:........,,,,,,.iX:      *
 *     ;9. ,8A#@@@@@@#5,.,,,,,,,,,... 9A. 8@@@@@@@@@@M;    ....,,,,,,,,S8      *
 *     X3    iS8XAHH8s.,,,,,,,,,,...,..58hH@@@@@@@@@Hs       ...,,,,,,,:Gs     *
 *    r8,        ,,,...,,,,,,,,,,.....  ,h8XABMMHX3r.          .,,,,,,,.rX:    *
 *   :9, .    .:,..,:;;;::,.,,,,,..          .,,.               ..,,,,,,.59    *
 *  .Si      ,:.i8HBMMMMMB&5,....                    .            .,,,,,.sMr   *
 *  SS       :: h@@@@@@@@@@#; .                     ...  .         ..,,,,iM5   *
 *  91  .    ;:.,1&@@@@@@MXs.                            .          .,,:,:&S   *
 *  hS ....  .:;,,,i3MMS1;..,..... .  .     ...                     ..,:,.99   *
 *  ,8; ..... .,:,..,8Ms:;,,,...                                     .,::.83   *
 *   s&: ....  .sS553B@@HX3s;,.    .,;13h.                            .:::&1   *
 *    SXr  .  ...;s3G99XA&X88Shss11155hi.                             ,;:h&,   *
 *     iH8:  . ..   ,;iiii;,::,,,,,.                                 .;irHA    *
 *      ,8X5;   .     .......                                       ,;iihS8Gi  *
 *         1831,                                                 .,;irrrrrs&@  *
 *           ;5A8r.                                            .:;iiiiirrss1H  *
 *             :X@H3s.......                                .,:;iii;iiiiirsrh  *
 *              r#h:;,...,,.. .,,:;;;;;:::,...              .:;;;;;;iiiirrss1  *
 *             ,M8 ..,....,.....,,::::::,,...         .     .,;;;iiiiiirss11h  *
 *             8B;.,,,,,,,.,.....          .           ..   .:;;;;iirrsss111h  *
 *            i@5,:::,,,,,,,,.... .                   . .:::;;;;;irrrss111111  *
 *            9Bi,:,,,,......                        ..r91;;;;;iirrsss1ss1111  *
 *                                                                             *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 **/
function LoadRequest() {
    /**
     *The number of requests, to prevent duplication of operations
     */
    var count = 0;
    //this.count = count;
    var host = window.location.host;
    var reg = /^https?:\/\/([^\/]+)(\/|\/.*)?$/;
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    //this.xhr = xhr;
    /**
     *
     */
    function ajax(opt) {
        if (count > 0) {
            console.error("This operation stops execution,because the previous operation has not been completed!");
            return;
        }
        if (!isObject(opt)) {
            console.error("This function needs to pass in an object with a specific property can be achieved,if you have any questions, please refer to the note!");
            return;
        }
        if (Object.getOwnPropertyNames(opt).length == 0) {
            console.error("This object contains a property of 0,please check incoming parameters!");
            return;
        }
        if (!opt.url) {
            console.error("Could not find the property 'url',it's necessary,so please check incoming parameters!");
            return;
        }
        opt.method = opt.method ? opt.method.toUpperCase() : "POST";
        opt.async = opt.async ? opt.async : true;
        if (opt.data && !isFormData(opt.data) && !isArrayBuffer(opt.data)) {
            if (isObject(opt.data) && Object.getOwnPropertyNames(opt.data).length > 0) {
                var tmp = "";
                for (var o in opt.data) {
                    if (isArray(opt.data[o])) {
                        opt.data[o].forEach(function(item) {
                            tmp += o + "[]=" + item + "&";
                        });
                    } else if (isString(opt.data[o])) {
                        tmp += o + "=" + opt.data[o] + "&";
                    } else {
                        console.error("The value of this property '" + o + "' can not be resolved!");
                        return;
                    }
                }
                opt.data = tmp.substring(0, tmp.lastIndexOf("&"));
                if (opt.method === "GET") {
                    opt.url += "?" + opt.data;
                }
            }
            if (isString(opt.data) && opt.method === "GET") {
                opt.url += "?" + opt.data;
            }
            if (!opt.header && opt.method === "POST") {
                opt.header = [
                    ["content-type", "application/x-www-form-urlencoded; charset=UTF-8"]
                ];
            }
        }
        if (opt.header) {
            if (isArray(opt.header)) {
                opt.header.forEach(function(item, index) {
                    if (!isArray(item)) {
                        console.error("The value of this property 'header' must be a two-dimensional array, parse in the second dimension failed!");
                        return;
                    }
                });
            } else {
                console.error("The value of this property 'header' must be a two-dimensional array!");
                return;
            }
        }
        try {
            load(opt);
        } catch (e) {
            console.error(e);
        }
    }
    this.ajax = ajax;

    function load(_opt) {
        count++;
        xhr.open(_opt.method, _opt.url, _opt.async);
        if (/https?/.test(_opt.url) && host !== reg.exec(_opt.url)[1]) {
            xhr.withCredentials = true;
        }
        if (!_opt.async) {
            xhr.timeout = 0;
        }
        if (_opt.header) {
            _opt.header.forEach(function(item) {
                xhr.setRequestHeader(item[0], item[1]);
            });
        }
        if (_opt.timeout && _opt.timeout > 0 && _opt.method !== "GET" && _opt.async) {
            xhr.timeou = _opt.timeout;
        }
        if (_opt.method === "GET") {
            xhr.timeout = 0;
            xhr.withCredentials = false;
            xhr.responseType = "";
        }
        if (_opt.dataType) {
            /* This function is outdated */
            //xhr.overrideMimeType(_opt.dataType);
            xhr.responseType = _opt.dataType;
        }
        xhr.onerror = function() {
            console.error("Network failure, need to check the network!");
        };
        xhr.onload = function() {
            if (_opt.success) {
                if (xhr.status == 200) {
                    /*if cross "simple response header" and  "Access-Control-Expose-Headers" */
                    _opt.success(_opt.method === "HEAD" ? _opt.headType ? xhr.getResponseHeader(_opt.headType) : xhr.getAllResponseHeaders() : xhr.response);
                }
            }
        };
        xhr.onloadend = function() {
            if (_opt.error) {
                if (xhr.readyState !== 4 || xhr.status !== 200) {
                    _opt.error(xhr.status, xhr.readyState);
                }
            }
            count = 0;
            xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");;
        };
        xhr.send(_opt.data);
    }

    function isObject(o) {
        return Object.prototype.toString.call(o).toLowerCase() == '[object object]';
    }

    function isArray(o) {
        return Object.prototype.toString.call(o).toLowerCase() == '[object array]';
    }

    function isArrayBuffer(o) {
        return ArrayBuffer.isView(o);
    }

    function isString(o) {
        return Object.prototype.toString.call(o).toLowerCase() == '[object string]';
    }

    function isBlob(o) {
        return o instanceof Blob;
    }

    function isFormData(o) {
        return o instanceof FormData;
    }
}
/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                                                                             *
 *                                         ,s555SB@@&                          *
 *                                      :9H####@@@@@Xi                         *
 *                                     1@@@@@@@@@@@@@@8                        *
 *                                   ,8@@@@@@@@@B@@@@@@8                       *
 *                                  :B@@@@X3hi8Bs;B@@@@@Ah,                    *
 *             ,8i                  r@@@B:     1S ,M@@@@@@#8;                  *
 *            1AB35.i:               X@@8 .   SGhr ,A@@@@@@@@S                 *
 *            1@h31MX8                18Hhh3i .i3r ,A@@@@@@@@@5                *
 *            ;@&i,58r5                 rGSS:     :B@@@@@@@@@@A                *
 *             1#i  . 9i                 hX.  .: .5@@@@@@@@@@@1                *
 *              sG1,  ,G53s.              9#Xi;hS5 3B@@@@@@@B1                 *
 *               .h8h.,A@@@MXSs,           #@H1:    3ssSSX@1                   *
 *               s ,@@@@@@@@@@@@Xhi,       r#@@X1s9M8    .GA981                *
 *               ,. rS8H#@@@@@@@@@@#HG51;.  .h31i;9@r    .8@@@@BS;i;           *
 *                .19AXXXAB@@@@@@@@@@@@@@#MHXG893hrX#XGGXM@@@@@@@@@@MS         *
 *                s@@MM@@@hsX#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&,       *
 *              :GB@#3G@@Brs ,1GM@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B,      *
 *            .hM@@@#@@#MX 51  r;iSGAM@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@8      *
 *          :3B@@@@@@@@@@@&9@h :Gs   .;sSXH@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@:     *
 *      s&HA#@@@@@@@@@@@@@@M89A;.8S.       ,r3@@@@@@@@@@@@@@@@@@@@@@@@@@@r     *
 *   ,13B@@@@@@@@@@@@@@@@@@@5 5B3 ;.         ;@@@@@@@@@@@@@@@@@@@@@@@@@@@i     *
 *  5#@@#&@@@@@@@@@@@@@@@@@@9  .39:          ;@@@@@@@@@@@@@@@@@@@@@@@@@@@;     *
 *  9@@@X:MM@@@@@@@@@@@@@@@#;    ;31.         H@@@@@@@@@@@@@@@@@@@@@@@@@@:     *
 *   SH#@B9.rM@@@@@@@@@@@@@B       :.         3@@@@@@@@@@@@@@@@@@@@@@@@@@5     *
 *     ,:.   9@@@@@@@@@@@#HB5                 .M@@@@@@@@@@@@@@@@@@@@@@@@@B     *
 *           ,ssirhSM@&1;i19911i,.             s@@@@@@@@@@@@@@@@@@@@@@@@@@S    *
 *              ,,,rHAri1h1rh&@#353Sh:          8@@@@@@@@@@@@@@@@@@@@@@@@@#:   *
 *            .A3hH@#5S553&@@#h   i:i9S          #@@@@@@@@@@@@@@@@@@@@@@@@@A.  *
 *                                                                             *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 **/
