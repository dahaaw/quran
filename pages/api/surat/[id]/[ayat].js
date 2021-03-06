const {readFileSync, writeFileSync, existsSync, readFile} = require('fs');
const axios = require('axios');
const Fuse = require('fuse.js');
const path = require('path');


export default async ({query: {id, ayat}}, res) => {
    // const surat = JSON.parse(readFileSync('./utils/data/surat.json'));
    const surat = (await axios.get('https://equran.id/api/surat')).data;

    const options = {
        includeScore: true,
        keys: ['nomor', 'nama', 'nama_latin', 'arti']
    }
    const fuse = new Fuse(surat, options)
    const result = fuse.search(id);
    const idSurat = result[0].item.nomor;

    // const pathFile = path.join(__dirname, `/utils/data/surat/${idSurat}.js`);
    // if(existsSync(pathFile)){
    //     // const dataSurat = readFileSync(pathFile);
    //     const dataSurat = await readFile(pathFile);
    //     if(dataSurat) return res.status(200).json({success: true, data: JSON.parse(dataSurat)});
    // }

    axios.get('https://equran.id/api/surat/'+idSurat)
    .then(d => {
        res.status(200).json({success: true, data: d.data});
        // writeFileSync(pathFile, JSON.stringify(d.data));
    })
    .catch(e => res.status(400).json({success:false, message: 'surat tidak tersedia'}))
}