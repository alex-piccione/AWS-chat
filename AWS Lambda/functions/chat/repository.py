import uuid

# move into messages_repository

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
