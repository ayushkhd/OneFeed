import pymongo

class DatabaseClient:
    def __init__(self, atlas_uri, DB_NAME, COLLECTION_NAME):
        self.DB_NAME = DB_NAME
        self.COLLECTION_NAME = COLLECTION_NAME
        self.client = pymongo.MongoClient(atlas_uri)
        print('✅ Connected to Atlas instance!')

    def clean_database(self):
        database = mongodb_client[self.DB_NAME]
        collection = database[self.COLLECTION_NAME]
        result = collection.delete_many(filter= {})
        print (f"Deleted docs : {result.deleted_count}")