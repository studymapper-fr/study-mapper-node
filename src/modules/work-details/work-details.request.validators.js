function validateGetWorkDetailRequest(req) {
  req.checkParams("id", "user id is missing").exists().toInt();
  return req.validationErrors();
}

module.exports = {
  validateGetWorkDetailRequest,
};
