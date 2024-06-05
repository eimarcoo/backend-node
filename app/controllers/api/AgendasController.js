const Agenda= require("../../repositories/AgendasController");

class AgendasController {
  async index(req, res) {
    const agendas = await Agenda.findAll();
    res.json(agendas);
  }

  async store(req, res) {
    const {
      nome,
      celular,
      email,
      rua,
      numero,
      bairro,
      cidade,
      estado,
      cep,
      complemento,
    } = req.body;

    const agenda = await Agenda.create({
      nome,
      celular,
      email,
      rua,
      numero,
      bairro,
      cidade,
      estado,
      cep,
      complemento,
    });

    res.status(201).json(agenda);
  }

  async show(req, res) {
    const { id } = req.params;
    const agenda = await Agenda.findByPk(id);

    if (!agenda) {
      return res.status(404).json({ message: 'Agenda não encontrada' });
    }

    res.json(agenda);
  }

  async update(req, res) {
    const { id } = req.params;
    const {
      nome,
      celular,
      email,
      rua,
      numero,
      bairro,
      cidade,
      estado,
      cep,
      complemento,
    } = req.body;

    const agenda = await Agenda.findByPk(id);

    if (!agenda) {
      return res.status(404).json({ message: 'Agenda não encontrada' });
    }

    await agenda.update({
      nome,
      celular,
      email,
      rua,
      numero,
      bairro,
      cidade,
      estado,
      cep,
      complemento,
    });

    res.json(agenda);
  }

  async destroy(req, res) {
    const { id } = req.params;
    const agenda = await Agenda.findByPk(id);

    if (!agenda) {
      return res.status(404).json({ message: 'Agenda não encontrada' });
    }

    await agenda.destroy();
    res.status(204).send();
  }
}

module.exports = new AgendasController();