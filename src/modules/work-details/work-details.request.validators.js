function validateGetWorkDetailRequest(req) {
  req.checkParams("id", "user id is missing").exists().toInt();
  return req.validationErrors();
}

function validateCreateWorkDetailRequest(req) {
  req.checkBody("data", "user work detail is missing").isArray();
  req.checkBody("data.*.title", "job title is missing").exists();
  req.checkBody("data.*.description", "job description is missing").exists();
  req.checkBody("data.*.employer", "employer is missing").exists();
  req.checkBody("data.*.city", "city is missing").optional();
  req.checkBody("data.*.state", "state is missing").optional();
  req.checkBody("data.*.country", "country is missing").optional();
  req.checkBody("data.*.startDate", "startDate is not valid").exists();
  req.checkBody("data.*.endDate", "endDate is not valid").optional();
  return req.validationErrors();
}

module.exports = {
  validateGetWorkDetailRequest,
  validateCreateWorkDetailRequest,
};
