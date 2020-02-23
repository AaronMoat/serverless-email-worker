# Serverless Email Worker

Built with Node.js + AWS.

## Test the emails locally

```
nvm use
npm install
npm run generate-sample-emails
```

## Deploying

Requirements: 

* [SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
* AWS CLI + Configured AWS CLI credentials 
* AWS SES domain or sender verification via the AWS console, to allow the use of your email sender

```
sam build
sam package --s3-bucket <your-packaging-assets-bucket> --s3-prefix serverless-email-worker --output-template-file .aws-sam/packaged.yml
sam deploy --template-file .aws-sam/packaged.yml --stack-name serverless-email-worker --capabilities CAPABILITY_IAM --parameter-overrides SenderName=<email sender name> SenderEmail=<email@address>
```