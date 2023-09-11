
exports.create =async (req, res) => {
    res.status(200)
    res.json({
        status:'sucess',
        data:'protfolio create sucess'
    })
    res.end()
 };


exports.read = async (req, res) => { 
    res.status(200)
    res.json({
        status:'sucess',
        data:'protfolio read sucess'
    })
    res.end()
 
};


exports.delete = async (req, res) => { 
    res.status(200)
    res.json({
        status:'sucess',
        data:'protfolio delete sucess'
    })
    res.end()
 
};


exports.update = async (req, res) => { 
    res.status(200)
    res.json({
        status:'sucess',
        data:'protfolio update sucess'
    })
    res.end()
 
};