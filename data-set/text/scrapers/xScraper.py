import snscrape.modules.twitter as sntwitter
from utils.common import cleanText, saveToCsv

QUERY = ""  # TODO: QUERY
MAX_TWEETS = 100

def xScrapping():
    data = []
    for i, tweet in enumerate(sntwitter.TwitterSearchScraper(QUERY).get_items()):
        if i >= MAX_TWEETS:
            break
        data.append({"source": "twitter", "text": cleanText(tweet.content)})
    saveToCsv(data, "text/raw_texts.csv", append=True)

if __name__ == "__main__":
    xScrapping()