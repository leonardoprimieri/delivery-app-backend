export default {
  clientSecret: String(process.env.JWT_SECRET_CLIENT),
  deliverymanSecret: String(process.env.JWT_SECRET_DELIVERYMAN),
  expiresInToken: String(process.env.TOKEN_EXPIRES_IN),
};
