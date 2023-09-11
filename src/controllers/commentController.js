exports.create =async (req, res) => {
    res.status(200)
    res.json({
        status:'sucess',
        data:'comment create sucess'
    })
    res.end()
 };


exports.read = async (req, res) => { 
    res.status(200)
    res.json({
        status:'sucess',
        data:'comment read sucess'
    })
    res.end()
 
};


exports.delete = async (req, res) => { 
    res.status(200)
    res.json({
        status:'sucess',
        data:'comment delete sucess'
    })
    res.end()
 
};


exports.update = async (req, res) => { 
    res.status(200)
    res.json({
        status:'sucess',
        data:'comment update sucess'
    })
    res.end()
 
};