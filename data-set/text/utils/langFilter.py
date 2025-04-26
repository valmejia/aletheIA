from langdetect import detect

def isSpanish(text: str) -> bool:
    try:
        return detect(text) == "es"
    except:
        return False