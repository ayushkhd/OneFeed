class ScriptGenerator:
    def __init__(self, llm):
        """
        Initializes the LLM.
        """
        self.llm = llm

    def complete(self, tweets):
        prompt = "Below are tweets from my Twitter account. Can you help me generate a spoken broadcast script in David Attenborough's style? Please only output the script, nothing else, and start the script with 'In the arena of SF'\n\n"
        resp = self.llm.complete(prompt + tweets)
        return resp