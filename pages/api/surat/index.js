const {readFileSync} = require('fs');
const path = require('path');
const axios = require('axios');

export default async (req, res) => {
    // const surat = readFileSync(path.join(__dirname, '..', '..', 'utils/data/surat.json'));
    const surat = (await axios.get('https://equran.id/api/surat')).data;
    res.status(200).json(surat);
}