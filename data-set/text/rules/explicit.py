def labelExplicit(text: str) -> str:
    kwExplicit = [
        # TODO: Añadir palabras reales explícitas
    ]
    text_lower = text.lower()
    return "explícito" if any(p in text_lower for p in kwExplicit) else "no explícito"
