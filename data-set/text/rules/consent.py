def labelConsent(text: str) -> str:
    kwNonConsent = [
        # TODO: Añadir palabras/frases reales
    ]
    if any(phrase in text.lower() for phrase in kwNonConsent):
        return "no consensuado"
    return "consensuado"