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

To create a layer you MUST zip a folder that contains THIS PATH:  ```python\lib\python3.7\site-packages\{my module}```  
Inside _{my module}_ you can create a ```__init__.py``` file.  

Zip the full path and yoiu can use ```import {my module}```.

If the path is wrong you have this error:  
{
  "errorMessage": "Unable to import module 'lambda_function': No module named 'chat'",
  "errorType": "Runtime.ImportModuleError"
}

## DynamoDB SDK

The DynamoDB SDK for Python is called Boto3.  
```pip install boto3```
  
