import re
from bs4 import BeautifulSoup

#Clean Tweet text function
def clean_tweet(tweet):
    tweet = BeautifulSoup(tweet, "lxml").get_text()
    # Delete the @ and him mention
    tweet = re.sub(r"@[A-Za-z0-9]+", ' ', tweet)
    # Delete the URLs links
    tweet = re.sub(r"https?://[A-Za-z0-9./]+", ' ', tweet)
    # We only keep the characters
    tweet = re.sub(r"[^a-zA-Z.!?']", ' ', tweet)
    # Delete more whitespaces 
    tweet = re.sub(r" +", ' ', tweet)
    return tweet