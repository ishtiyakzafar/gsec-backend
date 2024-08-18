export const validate = (data) => {
    console.log(data.type)
    if (data?.file && data.type === 'image/jpg' ||
        data.type === 'image/jp2' ||
        data.type === 'image/jpe' ||
        data.type === 'image/jif' ||
        data.type === 'image/jfif' ||
        data.type === 'image/jfi' ||
        data.type === 'image/jpeg' ||
        data.type === 'image/png' ||
        data.type === 'image/gif' ||
        data.type === 'image/webp' ||
        data.type === 'image/tif' ||
        data.type === 'image/tiff' ||
        data.type === 'image/bmp' ||
        data.type === 'image/dib' ||
        data.type === 'image/heif' ||
        data.type === 'image/heic' ||
        data.type === 'image/svg' ||
        data.type === 'image/svgz' ||
        data.type === 'image/j2k' ||
        data.type === 'image/jpf' ||
        data.type === 'image/jpx' ||
        data.type === 'image/jpm' ||
        data.type === 'image/mj2') {
        return false;
    } else {
        return true;
    }
}