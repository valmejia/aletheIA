import os
import requests
import uuid
import json
import praw
from pathlib import Path
from urllib.parse import urlparse

# TODO: config
subreddits = []
numPostsPerSubreddit = 50

rawDir = Path("aletheIA/vision/data/raw")
metaDir = Path("aletheIA/vision/data/metadata")

rawDir.mkdir(parents=True, exist_ok=True)
metaDir.mkdir(parents=True, exist_ok=True)

# TODO: auth
reddit = praw.Reddit(
    client_id="",
    client_secret="",
    user_agent=""
)

def isImageUrl(url: str) -> bool:
    return url.lower().endswith(('.jpg', '.jpeg', '.png', '.bmp'))

def downloadImage(url: str, destPath: Path) -> bool:
    try:
        response = requests.get(url, timeout=10)
        if response.status_code == 200:
            with open(destPath, 'wb') as f:
                f.write(response.content)
            return True
    except Exception as e:
        print(f"Error al descargar {url}: {e}")
    return False

def generateMetadata(post, imageId: str) -> dict:
    return {
        "source": "Reddit",
        "subreddit": post.subreddit.display_name,
        "postId": post.id,
        "title": post.title,
        "permalink": f"https://reddit.com{post.permalink}",
        "tags": ["explicit"] if "nsfw" in post.title.lower() else ["unknown"],
        "consent": False,
        "shotType": "unknown",
        "bodyType": "unknown"
    }

def scrapeSubreddit(subredditName: str):
    subreddit = reddit.subreddit(subredditName)
    print(f"🔍 Scrapeando: r/{subredditName}")

    for post in subreddit.hot(limit=numPostsPerSubreddit):
        if not isImageUrl(post.url):
            continue

        uid = str(uuid.uuid4())[:8]
        imageId = f"B{uid}"
        extension = os.path.splitext(urlparse(post.url).path)[-1]
        imagePath = rawDir / f"{imageId}{extension}"
        metaPath = metaDir / f"{imageId}.json"

        if downloadImage(post.url, imagePath):
            metadata = generateMetadata(post, imageId)
            with open(metaPath, 'w', encoding='utf-8') as f:
                json.dump(metadata, f, indent=2, ensure_ascii=False)
            print(f"{imageId}{extension} descargada y metadatos guardados.")
        else:
            print(f"Falló descarga para {post.url}")

def main():
    for subreddit in subreddits:
        scrapeSubreddit(subreddit)

if __name__ == "__main__":
    main()
