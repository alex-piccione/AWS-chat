import json
import uuid

def lambda_handler(event, context):

    # validate
    #if (isinstance(event.body.message, str) == false):

    #if (event.body.messages)


    # decode
    messages = json.loads(event.body.message)

    #  store
    new_id = uuid.uuid4()  # create a random ID not related to the

    body = {
        "id": new_id,
        "message": event.body.message
    }

    return {
        "statusCode": 204,
        "headers": {"Access-Control-Allow-Origin": "*"},
        "body": json.dump(body)
    }