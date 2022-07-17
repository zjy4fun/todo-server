var express = require('express');
var router = express.Router();

/* GET contents. */
router.get('/', function (req, res, next) {
//   res.send('respond with a resource');
    res.json({
        contents: [
            {
                id: '1',
                content: "todo-1",
                status: false,
            },
            {
                id: '2',
                content: "todo-2",
                status: false,
            },
            {
                id: '3',
                content: "todo-3",
                status: false,
            },
        ]
    })
});

router.delete('/', function(req, res, next) {
    console.log(req.body.id)
    //todo: 删除id相关的记录
})

module.exports = router;
