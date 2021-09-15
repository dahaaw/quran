const {readFileSync} = require('fs');

export default (req, res) => {
    const surah = readFileSync('./utils/data/surat.json');
    res.status(200).json(JSON.parse(surah));
}