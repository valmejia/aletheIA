import requests
from bs4 import BeautifulSoup
from utils.common import cleanText, saveToCsv

URLS = []  # TODO: Agrega URLs reales

def forumsScrapping():
    data = []
    for url in URLS:
        r = requests.get(url)
        soup = BeautifulSoup(r.text, "html.parser")
        paragraphs = soup.find_all("p")
        for p in paragraphs:
            text = cleanText(p.get_text())
            if len(text.split()) >= 20:
                data.append({"source": "forum", "text": text})
    saveToCsv(data, "text/raw_texts.csv", append=True)

if __name__ == "__main__":
    forumsScrapping()