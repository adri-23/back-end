const pruebacontroller = {
  holaMundo: (req, res) => {
    console.log(req.body);
    res.json({
      code: 200,
      color: "azul",
      valorrecibido: req.body.nombre,
      tamano: "jumbo",
    });
  },
};

export default pruebacontroller;
