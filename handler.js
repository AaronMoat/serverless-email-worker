const EmailSender = require("./EmailSender");

const sender = new EmailSender(
  `${process.env.SENDER_NAME} <${process.env.SENDER_EMAIL}>`
);

exports.handler = async function(event, context) {
  for (const record of event.Records) {
    await sender.send(JSON.parse(record.body));
  }
};
