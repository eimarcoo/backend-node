const Agenda = require('../models/Agenda');

function AgendasController() {

  async function list() {
    const agendas = await Agenda.findAll({ raw: true });
    return agendas;
  }

  async function find(id) {
    const agenda = await Agenda.findByPk(id);
    return agenda;
  }

  async function save(dados) {
    const agenda = {
      title: dados.title,
      description: dados.description,
      done: false,
    }

    const contato_created = await Agenda.create(agenda);
    return contato_created;
  }

  async function update(id, dados) {
    const agenda = {
      title: dados.title,
      description: dados.description,
      done: dados.done === '1' ? true : false
    }

    const contato_updated = await Agenda.update(agenda, { where: { id: id } });
    return contato_updated;
  }

  async function remove(id) {
    await Agenda.destroy({ where: { id: id } });
  }

  function updateStatus(id, status) {
    const agenda = {
      done: status,
    }

 	  const agenda_updated = Agenda.update(agenda, { where: { id: id } });
    return agenda_updated;
  }

  return {
    list,
    find,
    save,
    remove,
    update,
    updateStatus,
  }
  
}

module.exports = new AgendasController();