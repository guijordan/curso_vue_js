const mongoose = require('mongoose')
mongoose.connect('mongodb://0.0.0.0:27017/knowledge_stats')
    .catch(e => {
        const msg = 'ERRO! Não foi possível conectar com o MongoDB!'
        console.log(JSON.stringify(e));
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
    })
