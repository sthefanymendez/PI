const router = require("express").Router();
const getTypes = require("../controls/types");


router.get('/', async (req, res) => {
    const data = await getTypes();

    res.send(data)
});

module.exports = router;