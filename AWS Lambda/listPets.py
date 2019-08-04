import json

def lambda_handler(event, context):
   # TODO implement
   pets = [
       {
           "id": 100,
           "type": "dog",
           "price": 10.23
       },
       {
           "id": 101,
           "type": "cat",
           "price": 5.67
       }]
   return {
       'statusCode': 200,
       'body': json.dumps(pets),
       "headers": { "Access-Control-Allow-Origin":"*"}
   }