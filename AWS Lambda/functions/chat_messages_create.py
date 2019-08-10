import json
import uuid
import chat.repository

def lambda_handler(event, context):

    # validate
    #if (isinstance(event.body.message, str) == false):

    #if (event.body.messages)


    # decode
    message = json.loads(event.body.message)

    #  store
    new_id = uuid.uuid4()  # create a random ID not related to the

    #try:
        chat.repository.save(message)
    #except error as e:
    #    return chat.common.error()
    dynamoClient = boto3.client("dynamodb")


    body = {
        "id": new_id,
        "message": event.body.message
    }

    return {
        "statusCode": 204,
        "headers": {"Access-Control-Allow-Origin": "*"},
        "body": json.dump(body)
    }