from llama_index.core import Settings, StorageContext, Document, VectorStoreIndex
from llama_index.embeddings.mistralai import MistralAIEmbedding
from llama_index.vector_stores.mongodb import MongoDBAtlasVectorSearch
from llama_index.core.node_parser import SentenceSplitter
from llama_index.core import SimpleDirectoryReader
from llama_index.llms.mistralai import MistralAI
from transformers import AutoTokenizer

class DocumentProcessor:
    def __init__(self, config, mongodb_client):
        Settings.embed_model = MistralAIEmbedding(model_name='mistral-embed', api_key=config.MISTRAL_API_KEY)

        self.vector_store = MongoDBAtlasVectorSearch(
            mongodb_client=mongodb_client,
            db_name=config.DB_NAME,
            collection_name=config.COLLECTION_NAME,
            index_name=config.INDEX_NAME,
            embedding_key=config.EMBEDDING_ATTRIBUTE,
        )
        self.storage_context = StorageContext.from_defaults(vector_store=self.vector_store)

        # Text Splitter
        chunks = 256
        overlap = 0
        text_splitter = SentenceSplitter(chunk_size=chunks, chunk_overlap=overlap)
        Settings.text_splitter = text_splitter

        # MistralAI LLM and Tokenizer
        model_name = "mistral-small-latest"
        llm = MistralAI(model=model_name, temperature=0.1, api_key=config.MISTRAL_API_KEY)
        Settings.llm = llm
        tokenizer = AutoTokenizer.from_pretrained("mistralai/Mistral-7B-Instruct-v0.2")
        Settings.tokenizer = tokenizer

        self.docs_dir = config.DATA_DIR

    def process_documents(self, docs, create=True):
        # TODO: pass documents as dictionary instead of reading local dir
        if create:
            documents = []
            for doc in docs:
                document = Document(
                    text=doc['content'],
                    metadata={
                        "user": doc['user'], 
                        "id": doc['id'],
                        "avatar_url": doc['avatar_url'],
                        "timestamp": doc['timestamp']
                        },
                )
                document.excluded_llm_metadata_keys = [
                    "user",
                    "id",
                    "avatar_url",
                    "timestamp"
                    ]
                documents.append(document)
            # docs = SimpleDirectoryReader(input_dir=self.docs_dir).load_data()
            index = VectorStoreIndex.from_documents(documents, self.storage_context, transformations=[Settings.text_splitter])
            _ = index.refresh_ref_docs(documents)
        else:
            index = VectorStoreIndex.from_vector_store(vector_store=self.vector_store, storage_context=self.storage_context)
        return index
