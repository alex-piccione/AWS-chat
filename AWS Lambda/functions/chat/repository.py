import uuid

# move into messages_repository


# dynamo DB tutorial
# https://aws.amazon.com/getting-started/tutorials/create-nosql-table/?trk=gs_card

def list():

    messages = []

    messages.append({
        "id": str(uuid.uuid4()),
        "account_id": "user 123",
        "text": "this is a messages"
    })

    messages.append({
        "id": uuid.uuid4(),
        "account_id": "user 123",
        "text": "this is a messages"
    })

    return messages
