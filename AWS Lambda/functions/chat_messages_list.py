import json


def lambda_handler(event, context):

    messages = []

    messages.append(
        {"id": "123", "account_id": "user-1", "text": "this is a message"}
    )
    messages.append (
        {"id": "123", "account_id": "user-1", "text": "this is a message"}
    )

    return {
        "statusCode": 200,
        "headers": {"Access-Control-Allow-Origin": "*"},
        "body": json.dumps(messages)
    }