const {readFileSync, writeFileSync, existsSync} = require('fs');
const axios = require('axios');
const Fuse = require('fuse.js');

export default ({query: {id, ayat}}, res) => {
    const surat = JSON.parse(readFileSync('./utils/data/surat.json'));
    const options = {
        includeScore: true,
        keys: ['nomor', 'nama', 'nama_latin', 'arti']
    }
    const fuse = new Fuse(surat, options)
    const result = fuse.search(id);
    const idSurat = result[0].item.nomor;

    const pathFile = `./utils/data/surat/${idSurat}.js`;
    if(existsSync(pathFile)){
        const dataSurat = readFileSync(pathFile);
        if(dataSurat) return res.status(200).json({success: true, data: JSON.parse(dataSurat)});
    }

    axios.get('https://equran.id/api/surat/'+idSurat)
    .then(d => {
        console.log(d)
        res.status(200).json({success: true, data: d.data});
        writeFileSync(pathFile, JSON.stringify(d.data));
    })
    .catch(e => res.status(400).json({success:false, message: 'surat tidak tersedia'}))

}