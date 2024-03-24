from config import Config
from database import DatabaseClient
from document_processor import DocumentProcessor
from retriever import NodeRetriever

query = "Meme coins"
def main():
    # Load config
    config = Config()
    # Initialize MongoDB client
    db_client = DatabaseClient(config.ATLAS_URI, config.DB_NAME, config.COLLECTION_NAME).client
    # Initialize Document Processor
    doc_processor = DocumentProcessor(config, db_client)
    # Create index and embed documents
    refreshed_index = doc_processor.process_documents()
    print("Index refreshed and documents processed.")

    # Retrieve
    retriever = NodeRetriever(refreshed_index, top_k=10)
    retr_doc = retriever.retrieve_nodes(query)
    print(retr_doc)

if __name__ == "__main__":
    main()
