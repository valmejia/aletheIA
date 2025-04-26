import os
import requests
import uuid
import json
from pathlib import Path
from bs4 import BeautifulSoup

# TODO: config
forumUrls = [
    # TODO: url
]

rawDir = Path("aletheIA/vision/data/raw")
metaDir = Path("aletheIA/vision/data/metadata")

rawDir.mkdir(parents=True, exist_ok=True)
metaDir.mkdir(parents=True, exist_ok=True)

headers = {}

def isImageUrl(url: str) -> bool:
    return url.lower().endswith(('.jpg', '.jpeg', '.png', '.bmp'))

def downloadImage(url: str, destPath: Path) -> bool:
    try:
        response = requests.get(url, headers=headers, timeout=10)
        if response.status_code == 200:
            with open(destPath, 'wb') as f:
                f.write(response.content)
            return True
    except Exception as e:
        print(f"Error al descargar {url}: {e}")
    return False

def generateMetadata(imageId: str, threadUrl: str) -> dict:
    return {
        "source": "PublicForum",
        "threadUrl": threadUrl,
        "tags": ["nsfw"],
        "consent": "unknown",
        "shotType": "unknown",
        "bodyType": "unknown"
    }

def scrapeForumThread(threadUrl: str):
    try:
        print(f"🔍 Visitando: {threadUrl}")
        response = requests.get(threadUrl, headers=headers)
        soup = BeautifulSoup(response.text, 'html.parser')
        imageTags = soup.find_all('img')

        for tag in imageTags:
            imageUrl = tag.get("src")
            if not imageUrl or not isImageUrl(imageUrl):
                continue

            if imageUrl.startswith("/"):
                parsedBase = "/".join(threadUrl.split("/")[:3])
                imageUrl = parsedBase + imageUrl

            uid = str(uuid.uuid4())[:8]
            imageId = f"C{uid}"
            extension = os.path.splitext(imageUrl)[-1]
            imagePath = rawDir / f"{imageId}{extension}"
            metaPath = metaDir / f"{imageId}.json"

            if downloadImage(imageUrl, imagePath):
                metadata = generateMetadata(imageId, threadUrl)
                with open(metaPath, 'w', encoding='utf-8') as f:
                    json.dump(metadata, f, indent=2, ensure_ascii=False)
                print(f"{imageId}{extension} descargada de foro.")
            else:
                print(f"Falló descarga para {imageUrl}")

    except Exception as e:
        print(f"Error al procesar {threadUrl}: {e}")

def main():
    for url in forumUrls:
        scrapeForumThread(url)

if __name__ == "__main__":
    main()
