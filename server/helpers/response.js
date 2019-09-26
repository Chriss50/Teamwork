class response {

  static responses(res, statusCode, data,error = false, message) {
    if (error) {
      return res.status(statusCode).json({
        status: statusCode,
        error: message
      });
    }
    return res.status(statusCode).json({
      status: statusCode,
      message,
      data
    });
  }
}

export default response;