exports.create =async (req, res) => {
    res.status(200)
    res.json({
        status:'sucess',
        data:'massage create sucess'
    })
    res.end()
 };


exports.read = async (req, res) => { 
    res.status(200)
    res.json({
        status:'sucess',
        data:'massage read sucess'
    })
    res.end()
 
};


exports.delete = async (req, res) => { 
    res.status(200)
    res.json({
        status:'sucess',
        data:'massage delete sucess'
    })
    res.end()
 
};


exports.update = async (req, res) => { 
    res.status(200)
    res.json({
        status:'sucess',
        data:'massage update sucess'
    })
    res.end()
 
};