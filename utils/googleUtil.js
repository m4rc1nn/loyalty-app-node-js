const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(""); 

module.exports.verify = async (token) => {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: "", //OAuth 2.0 ClientId
    });
    const payload = ticket.getPayload();
    const userid = payload["sub"]; // ID użytkownika w Google
    const email = payload["email"]; // Adres e-mail użytkownika
    const name = payload["name"]; // Nazwa uzytkownika
    return { userId: userid, email: email, name: name };
};
