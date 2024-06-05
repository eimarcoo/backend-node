const Agenda = require('../models/agenda');

class AgendasController {
  async index(req, res) {
    const agendas = await Agenda.findAll();
    res.render('agendas/index', { agendas });
  }

  async create(req, res) {
    res.render('agendas/create');
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

    res.redirect('/agendas');
  }

  async show(req, res) {
    const { id } = req.params;
    const agenda = await Agenda.findByPk(id);

    if (!agenda) {
      return res.status(404).send('Agenda não encontrada');
    }

    res.render('agendas/show', { agenda });
  }

  async edit(req, res) {
    const { id } = req.params;
    const agenda = await Agenda.findByPk(id);

    if (!agenda) {
      return res.status(404).send('Agenda não encontrada');
    }

    res.render('agendas/edit', { agenda });
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
      return res.status(404).send('Agenda não encontrada');
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

    res.redirect('/agendas/${id}');
  }

  async destroy(req, res) {
    const { id } = req.params;
    const agenda = await Agenda.findByPk(id);

    if (!agenda) {
      return res.status(404).send('Agenda não encontrada');
    }

    await agenda.destroy();
    res.redirect('/agendas');
  }
}

module.exports = new AgendasController();