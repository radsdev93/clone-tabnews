function status(request, response) {
  response.status(200).json({ mensagem: "OK!" });
}

export default status;
