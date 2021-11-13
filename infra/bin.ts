import * as cdk from "@aws-cdk/core";
import { Builder } from "@sls-next/lambda-at-edge";
import { NextStack } from "./stack";

const builder = new Builder(".", "./build", {args: ['build']});

builder
  .build(true)
  .then(() => {
    const app = new cdk.App();
    new NextStack(app, "BasicNextJsApp", {
      env: {
        region: 'us-east-1',
        account: '627144323001'
      },
      analyticsReporting: true,
      description: "Testing deploying NextJS Serverless Construct"
    });
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
