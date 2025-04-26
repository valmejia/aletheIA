import praw
from utils.common import cleanText, saveToCsv

reddit = praw.Reddit(client_id="", client_secret="", user_agent="")
SUBREDDITS = []  # TODO: ["sexualassault", "offmychest"]
MAX_POSTS = 100

def redditScrapping():
    data = []
    for sub in SUBREDDITS:
        for post in reddit.subreddit(sub).hot(limit=MAX_POSTS):
            if post.selftext:
                data.append({"source": "reddit", "text": cleanText(post.selftext)})
    saveToCsv(data, "text/raw_texts.csv", append=True)

if __name__ == "__main__":
    redditScrapping()