class CrudController {
    constructor(model, primaryKey) {
        this.model = model;
        this.primaryKey = primaryKey;
    }

    listar = async (req, res) => {
        try {
            const dados = await this.model.findAll();
            res.json(dados);
        } catch (err) {
            res.status(500).json({ erro: err.message });
        }
    };

    buscar = async (req, res) => {
        try {
            const registro = await this.model.findByPk(req.params.id);

            if (!registro) {
                return res.status(404).json({
                    mensagem: 'Registro não encontrado'
                });
            }

            res.json(registro);
        } catch (err) {
            res.status(500).json({ erro: err.message });
        }
    };

    criar = async (req, res) => {
        try {
            const registro = await this.model.create(req.body);

            res.status(201).json(registro);
        } catch (err) {
            res.status(500).json({ erro: err.message });
        }
    };

    atualizar = async (req, res) => {
        try {
            await this.model.update(
                req.body,
                {
                    where: {
                        [this.primaryKey]: req.params.id
                    }
                }
            );

            const registro = await this.model.findByPk(req.params.id);

            res.json(registro);

        } catch (err) {
            res.status(500).json({ erro: err.message });
        }
    };

    excluir = async (req, res) => {
        try {

            await this.model.destroy({
                where: {
                    [this.primaryKey]: req.params.id
                }
            });

            res.json({
                mensagem: 'Registro removido com sucesso'
            });

        } catch (err) {
            res.status(500).json({ erro: err.message });
        }
    };
}

module.exports = CrudController;