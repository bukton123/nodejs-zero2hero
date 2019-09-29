
exports.validateError = (errors = []) => 
  errors.details.map(({ context, message, type }) => ({
      context,
      message,
      type 
    })
  )