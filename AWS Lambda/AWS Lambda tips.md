# AWS Lambda tips


## API Gateway

public URL template: https://{restapi_id}.execute-api.{region}.amazonaws.com/{stage_name}/

https://{restapi_id}.execute-api.{region}.amazonaws.com/{stage_name}/
https://pziuq23433.execute-api.us-east-1.amazonaws.com/dev


## CORS

Whe we use the AWS API Gateway just to redirect the request is not possible to change the HTTP response
to add the Allow-Origin header so I add it on the Lambda function itself where we create the response.

## Layers

zip and update by code:  
https://blog.skbali.com/2018/11/aws-lambda-layer-example-in-python/