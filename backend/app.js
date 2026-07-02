const express = require('express');
const cors = require('cors');

const { sequelize } = require('./models');

const cidadeRoutes = require('./routes/cidadeRoutes');
const pessoaRoutes = require('./routes/pessoaRoutes');
const expositorRoutes = require('./routes/expositorRoutes');
const vendedorRoutes = require('./routes/vendedorRoutes');
const visitaRoutes = require('./routes/visitaRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/cidade', cidadeRoutes);
app.use('/pessoa', pessoaRoutes);
app.use('/expositor', expositorRoutes);
app.use('/vendedor', vendedorRoutes);
app.use('/visita', visitaRoutes);

app.get('/', (req, res) => {
    res.json({
        status: 'OK',
        banco: 'SQLite',
        mensagem: 'API funcionando'
    });
});

async function iniciarServidor() {
    try {

        console.log('🔄 Conectando ao banco SQLite...');

        await sequelize.authenticate();

        console.log('✅ Conexão com SQLite realizada com sucesso.');

        console.log('🔄 Criando/Sincronizando tabelas...');

        await sequelize.sync({
            alter: true
        });

        console.log('✅ Banco inicializado.');
        console.log('✅ Tabelas sincronizadas.');

        app.listen(3000, () => {
            console.log('🚀 Servidor executando na porta 3000');
            console.log('🌐 http://localhost:3000');
        });

    } catch (error) {

        console.error('❌ Erro ao inicializar banco:', error);

        process.exit(1);
    }
}

iniciarServidor();