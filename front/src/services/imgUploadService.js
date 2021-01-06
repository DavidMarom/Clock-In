export async function uploadImg(ev) {
    const CLOUD_NAME = "dojmo7vcc"
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

    const formData = new FormData();
    const files = ev.target.files
    let dataArr = []
    for (const file of files) {
        formData.append('file', file)
        formData.append('upload_preset', 'y6inzz2w');
        try {
            const res = await fetch(UPLOAD_URL, {
                method: 'POST',
                body: formData
            })
            const data = await res.json()
            dataArr.push(data)

        } catch (err) {
            console.log(err);
        }
    }
    const dataUrls = dataArr.map((data) => { return data.url })
    return dataUrls

}