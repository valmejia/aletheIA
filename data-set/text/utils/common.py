import pandas as pd
import re
import os

def cleanText(text):
    text = re.sub(r"<[^>]+>", "", str(text))
    text = re.sub(r"[^\w\s¿¡!?,.:;áéíóúÁÉÍÓÚñÑ]", "", text)
    return text.strip()

def saveToCsv(data, path, append=False):
    df = pd.DataFrame(data)
    if append and os.path.exists(path):
        dfExisting = pd.read_csv(path)
        df = pd.concat([dfExisting, df], ignore_index=True).drop_duplicates()
    df.to_csv(path, index=False, encoding="utf-8")