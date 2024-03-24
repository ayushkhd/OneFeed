class NodeRetriever:
    def __init__(self, index, top_k=10):
        """
        Initializes the NodeRetriever with a specific top_k value for similarity retrieval.

        Args:
        top_k (int): The number of top similar items to retrieve.
        """
        self.retriever = index.as_retriever(similarity_top_k=top_k)

    def retrieve_nodes(self, query):
        """
        Retrieves nodes based on the provided query.

        Args:
        query (str): The query string to retrieve similar nodes for.

        Returns:
        list: A list of retrieved nodes.
        """
        retrieved_nodes = self.retriever.retrieve(query)
        return retrieved_nodes