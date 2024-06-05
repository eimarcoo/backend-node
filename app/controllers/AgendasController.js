const Agendas = require('../models/agenda');
const AgendasController = require("../repositories/AgendasRepository");

function AgendasControllerr() {

  async function list(req, res) {
    const agendas = await AgendasRepository.list();

    res.render('agenda/list', { 
      title: "Lista de Contatos",
      agendas: agendas
    })
  }

  function create(req, res) {
    res.render('agenda/create')
  }

  async function save(req, res) {
    await AgendasRepository.save(req.body);
    res.redirect('/agenda');
  }

  async function remove(req, res) {
    await AgendasRepository.remove(req.params.id);
    res.redirect('/agenda')
  }

  async function edit(req, res) {
    const task = await AgendasRepository.find(req.params.id);
    res.render('agenda/edit', { task: task })
  }

  async function update(req, res) {
    await AgendasRepository.update(req.body.id, req.body);
    res.redirect('/agenda');
  }

  async function updateStatus(req, res) {
    const done = req.body.done === '0' ? true : false;

    await AgendasRepository.updateStatus(req.params.id, done);
    res.redirect('/agenda');
  }

  return {
    create,
    save,
    list,
    remove,
    edit,
    update,
    updateStatus,
  }

}

module.exports = AgendasController;
