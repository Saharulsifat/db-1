exports.create =async (req, res) => {
    res.status(200)
    res.json({
        status:'sucess',
        data:'blog create sucess'
    })
    res.end()
 };


exports.read = async (req, res) => { 
    res.status(200)
    res.json({
        status:'sucess',
        data:'blog read sucess'
    })
    res.end()
 
};


exports.delete = async (req, res) => { 
    res.status(200)
    res.json({
        status:'sucess',
        data:'blog delete sucess'
    })
    res.end()
 
};


exports.update = async (req, res) => { 
    res.status(200)
    res.json({
        status:'sucess',
        data:'blog update sucess'
    })
    res.end()
 
};