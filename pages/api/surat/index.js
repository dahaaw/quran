const {readFileSync} = require('fs');
const path = require('path');

export default (req, res) => {
    const surah = readFileSync(path.join(__dirname, '..', 'utils/data/surat.json'));
    res.status(200).json(JSON.parse(surah));
}