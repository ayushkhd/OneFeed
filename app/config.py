import os
from dotenv import find_dotenv, dotenv_values

class Config:
    def __init__(self):
        self.this_dir = os.path.abspath('')
        self.parent_dir = os.path.dirname(self.this_dir)
        os.sys.path.append(os.path.abspath(self.parent_dir))

        config = dotenv_values(find_dotenv())

        # MongoDB parameters
        self.DB_NAME = 'rag1'
        self.COLLECTION_NAME = '10k_mistral'
        self.EMBEDDING_ATTRIBUTE = 'embedding_mistral'
        self.INDEX_NAME = 'idx_embedding_mistral'
        self.ATLAS_URI = config.get('ATLAS_URI')
        self.MISTRAL_API_KEY = config.get("MISTRAL_API_KEY")
        self.DATA_DIR = "data/10k"