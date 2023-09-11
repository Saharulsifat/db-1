
exports.create =async (req, res) => {
    res.status(200)
    res.json({
        status:'sucess',
        data:'product create sucess'
    })
    res.end()
 };


exports.read = async (req, res) => { 
    res.status(200)
    res.json({
        status:'sucess',
        data:'product read sucess'}
    )
    res.end()
 
};


exports.delete = async (req, res) => { 
    res.status(200)
    res.json({
        status:'sucess',
        data:'product delete sucess'
    })
    res.end()
 
};


exports.update = async (req, res) => { 
    res.status(200)
    res.json({
        status:'sucess',
        data:'product update sucess'
    })
    res.end()
 
};