// import EXIF from 'exif-js';

/**
 * 获取图片的exif信息，用于移动端开发
 * IOS的webview无法获取经纬度，可获取旋转角度
 * 安卓webview获取信息很多
 * UC浏览器获取信息最多
 * @date 2019-12-26
 * @param {File} target 支持文件对象，官方文档说支持DOM对象，经过测试在我的测试机上无获取一些重要信息如旋转度、经纬度。
 * @returns {Promise}
 */
export function getFileExif(target) {
    return new Promise((resolve, reject) => {
        EXIF.getData(target, function () {
            // console.log(EXIF.getAllTags(this));
            resolve(EXIF.getAllTags(this));
        });
    });
}

/**
 * 处理IOS手机拍照的照片会旋转90度问题，使用canvas将其旋转成正常角度
 * @date 2019-12-27
 * @param {File} file 图片文件对象
 * @returns {Promise} 返回promise，promise结果中有处理好的文件对象
 */
export async function processIosImage(file, quality = 0.8) {
    try {
        const { Orientation } = await getFileExif(file);
        if (Orientation === 6) {
            const resultFile = await imageProcess(file, quality, true);
            return resultFile;
        }
    } catch (err) {
        console.log(err);
    }
    // 安卓不处理
    return file;
}

/**
 * 图片压缩旋转处理
 * @date 2019-12-27
 * @param {File} file 图片File对象
 * @param {Number} quality 图片压缩质量，默认0.92
 * @param {Boolean} isRotate ios中某些图片是否对图片进行90度旋转
 * @returns {File} 返回处理好的File对象
 */
export function imageProcess(file, quality = 0.92, isRotate = false) {
    return new Promise((resolve, reject) => {
        const fileName = file.name;
        const blob = window.webkitURL.createObjectURL(file); // blob比文件转base64性能高
        const img = new Image();
        // File对象不能直接作为图片src使用，图片scr接收base64、blob-url、http
        img.src = blob;
        img.onload = () => {
            console.log('图片加载完成', img.height, img.width);
            const width = img.width;
            const height = img.height;
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            if (isRotate) {
                canvas.width = height;
                canvas.height = width;
                // 铺底色
                ctx.fillStyle = '#fff';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.rotate((90 * Math.PI) / 180);
                ctx.drawImage(img, 0, -height, width, height);
            } else {
                canvas.width = width;
                canvas.height = height;
                // 铺底色
                ctx.fillStyle = '#fff';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, width, height);
            }
            const dataURI = canvas.toDataURL('image/jpeg', quality);
            const resultFile = dataURItoFile(dataURI, fileName);
            resolve(resultFile);
        };
    });
}

/**
 * 给图片加水印
 * @date 2019-12-27
 * @param {File} file 需要加水印的图片File对象
 * @param {Array} texts 水印文字数组
 * @param {Number} size 水印文字大小，根据图片宽度像素计算，计算规则为一行展示多少个文字，默认35
 * @param {String} color 水印文字颜色，默认红色
 * @param {Number} bottom 水印距离图片最底部高度，支持小数，小数会被转化为百分比
 * @returns {File} 返回加好水印的文件对象
 */
export function fillTextToImage(
    file,
    texts,
    size = 35,
    color = 'red',
    bottom = 0
) {
    return new Promise((resolve, reject) => {
        const blob = window.webkitURL.createObjectURL(file);
        const img = new Image();
        img.src = blob;
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            console.log(img.width, img.height);
            ctx.fillStyle = '#fff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            const remFontSize = canvas.width / size;
            ctx.font = remFontSize + 'px serif';
            ctx.fillStyle = color;
            ctx.shadowColor = 'rgba(0,0,0,0.71)';
            ctx.shadowOffsetX = 2;
            ctx.shadowOffsetY = 2;
            ctx.shadowBlur = 2;
            const spaceH = remFontSize * 0.3;
            if (bottom < 1) {
                bottom = canvas.height * bottom;
            }
            for (let i = 0; i < texts.length; i++) {
                ctx.fillText(
                    texts[i],
                    remFontSize,
                    canvas.height - bottom - (remFontSize + spaceH) * (i + 1)
                );
            }
            const resultFile = dataURItoFile(
                canvas.toDataURL('image/jpeg'),
                file.name
            );
            resolve(resultFile);
        };
    });
}

/**
 * File对象转base64
 * @date 2019-12-27
 * @param {File} file 文件对象
 * @returns {Promise}
 */
export const fileToDataURI = (file) => {
    if (!file || !window.FileReader) return console.log('环境不支持');
    return new Promise((resolve, reject) => {
        const reader = new window.FileReader();
        //将图片转成base64格式
        reader.readAsDataURL(file);
        //读取成功后的回调
        reader.onloadend = () => {
            resolve(reader.result);
        };
    });
};

/**
 * base64对象转File
 * @date 2019-12-27
 * @param {dataurl} 标准base64字符串，包含mime type
 * @param {filename} 文件名
 * @returns {File} 文件对象
 */
export const dataURItoFile = (dataurl, filename = 'file') => {
    const arr = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
};

/**
 * 压缩图片至200~500K，小于500K直接返回
 * @param {File} file 文件File对象
 */
const CONPRESS_SIZE_MAX = 500;
const CONPRESS_SIZE_MIN = 200;
export async function compressImage(file) {
    const maxSize = kb2b(CONPRESS_SIZE_MAX);
    if (file.size < maxSize) {
        return file;
    }
    const url = window.webkitURL.createObjectURL(file);
    return await doCompressImage(url, file);
}

/**
 * kb转成byte
 * @param {number} size 图片大小
 */
function kb2b(size) {
    return size * 1024;
}

/**
 * base64对象转File
 * @param {string} dataurl 标准base64字符串，包含mime type
 * @param {string} filename 文件名
 * @param {string} type 文件后缀类型
 */
export const base64ToFile = (dataurl, filename = 'file', type = '') => {
    const urlArr = dataurl.split(',');
    let entity = '',
        brief = '',
        mime = '';
    if (urlArr.length === 1) {
        entity = urlArr[0];
    } else if (urlArr.length === 2) {
        entity = urlArr[1];
        brief = urlArr[0].match(/:(.*?);/);
    }
    // 获取base64字符串中的mime信息
    if (!type && brief && brief.length >= 2) {
        mime = brief[1];
    }
    const bstr = atob(entity);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, {
        type: type || mime,
    });
};

/**
 * 图片压缩处理
 * @param {string} url 图片地址
 * @param {File} file 图片对象
 * @param {number} quality 压缩质量
 * @param {number} count 循环压缩次数
 */
async function doCompressImage(url, file, quality = 0.5, count = 5) {
    const minSize = kb2b(CONPRESS_SIZE_MIN);
    const maxSize = kb2b(CONPRESS_SIZE_MAX);
    const max = 1;
    const min = 0;
    if (!count--) {
        return file;
    } else if (file.size < minSize) {
        quality = (max + quality) / 2;
    } else if (file.size > maxSize) {
        quality = (min + quality) / 2;
    } else {
        return file;
    }

    function doCompress() {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = () => {
                const width = img.width * quality;
                const height = img.height * quality;
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(img, 0, 0, width, height);
                const base64 = canvas.toDataURL('image/jpeg', quality);
                resolve(base64ToFile(base64, file.name));
            };
            img.onerror = (err) => {
                reject(err);
            };
        });
    }

    const newFile = await doCompress();

    return await doCompressImage(url, newFile, quality, count);
}
