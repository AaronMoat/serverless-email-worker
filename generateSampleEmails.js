const fs = require("fs");
const AWS = require("aws-sdk");
const _EmailSender = require("./EmailSender");

const samples = JSON.parse(fs.readFileSync("samples.json"));

const outDir = "sample_emails";

class EmailSender extends _EmailSender {
  performSend = async request => {
    fs.writeFileSync(
      `${outDir}/${this.currentTemplate}.html`,
      request.Message.Body.Html.Data
    );
  };
}

const emailSender = new EmailSender("noreply <noreply@email.com>");

async function generate() {
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir);
  }

  for (const sample of samples) {
    emailSender.currentTemplate = sample.templateName;
    await emailSender.send({ ...sample, email: "email@email.com" });
  }

  console.log("Templates written to", outDir);
}

generate();
