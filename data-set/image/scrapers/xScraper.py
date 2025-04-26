import os
import json
import argparse
import requests
import snscrape.modules.twitter as sntwitter
from tqdm import tqdm
from pathlib import Path
from datetime import datetime
import subprocess

# Directorios de trabajo
RAW_DIR = Path("vision/data/raw/")
META_DIR = Path("vision/data/metadata/")
RAW_DIR.mkdir(parents=True, exist_ok=True)
META_DIR.mkdir(parents=True, exist_ok=True)

# Contador global de imágenes descargadas
imageCounter = 0

def generateImageId():
    global imageCounter
    imageCounter += 1
    return f"A_{str(imageCounter).zfill(6)}"

def downloadImage(url, path):
    try:
        response = requests.get(url, timeout=10)
        if response.status_code == 200:
            with open(path, "wb") as f:
                f.write(response.content)
            return True
    except Exception as e:
        print(f"Error descargando {url}: {e}")
    return False

def generateMetadata(imageId, tweetUrl):
    return {
        "imageId": imageId,
        "source": "Twitter",
        "threadUrl": tweetUrl,
        "tags": ["nsfw"],
        "consent": "unknown",
        "shotType": "unknown",
        "bodyType": "unknown",
        "segmentations": None,
        "text": ""
    }

def xScraping(query, maxTweets):
    global imageCounter
    imageCounter = 0
    print(f"[{datetime.now()}] Iniciando scraping con query: '{query}'")

    scraped = 0
    for tweet in tqdm(sntwitter.TwitterSearchScraper(query).get_items(), desc="Procesando tweets"):
        if imageCounter >= maxTweets:
            break
        if tweet.media:
            for media in tweet.media:
                if isinstance(media, sntwitter.Photo):
                    imageId = generateImageId()
                    imagePath = RAW_DIR / f"{imageId}.jpg"

                    if downloadImage(media.fullUrl, imagePath):
                        metadata = generateMetadata(imageId, tweet.url)
                        metadata["text"] = tweet.content
                        metaPath = META_DIR / f"{imageId}.json"
                        with open(metaPath, "w", encoding="utf-8") as f:
                            json.dump(metadata, f, indent=2, ensure_ascii=False)
                        scraped += 1
        if scraped >= maxTweets:
            break

    print(f"Scraping finalizado: {scraped} imágenes procesadas.")

def runHeuristicLabeling():
    print("\nEjecutando heurísticas de etiquetado...")
    try:
        subprocess.run(["python", "text/main.py", "--input", str(META_DIR)], check=True)
        print("Reglas heurísticas aplicadas correctamente.")
    except subprocess.CalledProcessError as e:
        print(f"Error ejecutando el etiquetado: {e}")

if __name__ == "__main__":
    # TODO: QUERY, TWEETS
    default_query = ""
    default_max = 100

    xScraping(query=default_query, maxTweets=default_max)

    runHeuristicLabeling()
