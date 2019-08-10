import uuid
import time
import boto3

# move into messages_repository


# dynamo DB tutorial
# https://aws.amazon.com/getting-started/tutorials/create-nosql-table/?trk=gs_card

# https://www.youtube.com/watch?v=G_-aEXmluq8

# parse a date stored as Unix Time (seconds from 1/1/1970)
def parse_epoch_date(item, field):
    if field in item.keys():
        value = item[field]
        if isinstance(value, int): return time.gmtime(field) 
        else: raise(f"Value of \"{field}\" is not an int and cannot be converted to time.")            
    else:
        return None

def get_string(item, field):
    if field in item.keys(): return str(item[field])
    else: return None

def list():    

    dynamoClient = boto3.client("dynamodb")
    response = dynamoClient.scan(TableName="messages")

    items = response["Items"]
    count = response["ScannedCount"]
    metadata = response["ResponseMetadata"]
    
    print(count)
    print(metadata)

    messages = []
    for item in items:
        print(item) 
        messages.append({
            "id": item["id"]["S"],
            "created_at": parse_epoch_date(item, "created_at")
            "account_id": item["account_id"]["S"],
            "text": item["text"]["S"]
        })

    return messages
