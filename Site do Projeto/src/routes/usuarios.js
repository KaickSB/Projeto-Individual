var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

//Recebendo os dados do html e direcionando para a função finalizar de usuarioController.js (acertos e errosPercent)
router.post("/finalizar", function (req, res) {
    usuarioController.finalizar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/finalizarJogo2", function (req, res) {
    usuarioController.finalizarJogo2(req, res);
});

module.exports = router;