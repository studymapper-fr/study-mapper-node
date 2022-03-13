const {
  validateGetWorkDetailRequest,
  validateCreateWorkDetailRequest,
} = require("./work-details.request.validators");
const {
  getUserWorkDetails,
  createUserWorkDetail,
} = require("./work-details.services");
const { sendResponse, handleCustomError } = require("../../utils");
const ResponseMessages = require("../../constants/responseMessages");

async function getWorkDetailController(req, res) {
  try {
    const validationErr = validateGetWorkDetailRequest(req);
    if (validationErr) {
      return sendResponse(res, 422, {}, validationErr[0].msg);
    }

    const { id: userId } = req.params;
    const data = await getUserWorkDetails({ userId });

    return sendResponse(res, 201, [...data], ResponseMessages.genericSuccess);
  } catch (err) {
    return handleCustomError(res, err);
  }
}

async function createWorkDetailController(req, res) {
  try {
    const validationErr = validateCreateWorkDetailRequest(req);
    if (validationErr) {
      return sendResponse(res, 422, {}, validationErr[0].msg);
    }

    const { id: userId } = req.params;
    const { data } = req.body;
    const response = await createUserWorkDetail({ userId, data });

    return sendResponse(
      res,
      201,
      [...response],
      ResponseMessages.genericSuccess
    );
  } catch (err) {
    return handleCustomError(res, err);
  }
}

module.exports = {
  getWorkDetailController,
  createWorkDetailController,
};
