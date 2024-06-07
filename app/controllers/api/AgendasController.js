const agendasRepository = require("../../repositories/AgendasRepository");

function AgendasController() {

  async function list(req, res) {
    const agenda = await agendasRepository.list();
    res.status(200).json(agenda);
  }

  async function show(req, res) {

    try {

      const agenda = await agendasRepository.find(req.params.id);

      if (!agenda) {
        return res.status(404).send({
          message: "Contato não encontrada."
        })
      }

      res.status(200).json(agenda);

    } catch (error) {
      res.status(500).json({
        message: "Contato não encontrada"
      });
    }
    
  }

  async function save(req, res) {
    try {
      const agenda = await agendasRepository.save(req.body);
      res.status(201).json(agenda);

    } catch (error) {
      res.status(400).json(error.details)
    }
  }

  async function update(req, res) {
    const agenda = await agendasRepository.find(req.params.id);

    if (!agenda) {
      return res.status(404).send({
        message: "Contato não encontrada."
      })
    }

    await agendasRepository.update(req.params.id, req.body);

    res.json({
      message: "Contato atualizada."
    })
  }

  async function remove(req, res) {
    const agenda = await agendasRepository.find(req.params.id);

    if (!agenda) {
      return res.status(404).send({
        message: "Contato não encontrada."
      })
    }

    await agendasRepository.remove(req.params.id);

    res.status(200).json({
      message: "Contato removida."
    })
    
  }

  async function updateStatus(req, res) {
    const agenda = await agendasRepository.find(req.params.id);

    if (!agenda) {
      return res.status(404).send({
        message: "Contato não encontrada."
      })
    }

    await agendasRepository.updateStatus(req.params.id, req.body.done);

    res.json({
      message: "Status do contato atualizado."
    })

  }

  return {
    save,
    list,
    show,
    remove,
    update,
    updateStatus,
  }

}

module.exports = AgendasController();