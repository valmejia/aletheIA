import os
import json
import argparse
from utils.langFilter import isSpanish
from rules.explicit import labelExplicit
from rules.consent import labelConsent

def processMetadataFile(filepath: str):
    with open(filepath, "r", encoding="utf-8") as f:
        data = json.load(f)

    text = data.get("text", "")
    if not isinstance(text, str) or len(text.split()) < 20 or not isSpanish(text):
        print(f"Omitido (filtro): {os.path.basename(filepath)}")
        return

    # Etiquetado heurístico
    data["explícito"] = labelExplicit(text)
    data["consentimiento"] = labelConsent(text)

    # Estructura para anotación posterior
    if "annotation" not in data:
        data["annotation"] = {
            "explícito": None,
            "consentimiento": None,
            "validador": None,
            "comentarios": ""
        }

    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print(f"✔ Etiquetado: {os.path.basename(filepath)}")

def main(inputDir: str):
    files = [f for f in os.listdir(inputDir) if f.endswith(".json")]
    print(f"🔍 Archivos encontrados: {len(files)}")

    for file in files:
        path = os.path.join(inputDir, file)
        processMetadataFile(path)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Etiquetado heurístico y sistema de anotación.")
    parser.add_argument("--input", type=str, required=True, help="Ruta del directorio con archivos .json")
    args = parser.parse_args()

    main(args.input)
