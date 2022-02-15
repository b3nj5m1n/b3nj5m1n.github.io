import argparse
import json
import pandas as pd
import re

parser = argparse.ArgumentParser()
parser.add_argument('--input', dest='input', required=True)
parser.add_argument('--output', dest='output', required=True)
args = parser.parse_args()

uf_types = pd.read_excel(args.input, engine='odf', sheet_name="UF Types")
uf_comms = pd.read_excel(args.input, engine='odf', sheet_name="UF Comms")
ufr_types = pd.read_excel(args.input, engine='odf', sheet_name="UFR Types")
ufr_comms = pd.read_excel(args.input, engine='odf', sheet_name="UFR Comms")
parity = pd.read_excel(args.input, engine='odf', sheet_name="Parity", header=None)
two_flips = pd.read_excel(args.input, engine='odf', sheet_name="2-Flips")
two_twists = pd.read_excel(args.input, engine='odf', sheet_name="2-Twists")
three_twists = pd.read_excel(args.input, engine='odf', sheet_name="3-Twists")

PIECES_UF = {
    "A": "A (UB)",
    "B": "B (UR)",
    "D": "D (UL)",
    "E": "E (LU)",
    "F": "F (LF)",
    "G": "G (LD)",
    "H": "H (LB)",
    "J": "J (FR)",
    "K": "K (FD)",
    "L": "L (FL)",
    "M": "M (RU)",
    "N": "N (RB)",
    "O": "O (RD)",
    "P": "P (RF)",
    "Q": "Q (BU)",
    "R": "R (BL)",
    "S": "S (BD)",
    "T": "T (BR)",
    "U": "U (DF)",
    "V": "V (DR)",
    "W": "W (DB)",
    "X": "X (DL)",
}

PIECES_UFR = {
    "A": "A (UBL)",
    "B": "B (UBR)",
    "D": "D (UFL)",
    "E": "E (LUB)",
    "F": "F (LUF)",
    "G": "G (LDF)",
    "H": "H (LDB)",
    "I": "I (FUL)",
    "K": "K (FDR)",
    "L": "L (FDL)",
    "N": "N (RUB)",
    "O": "O (RDB)",
    "P": "P (RDF)",
    "Q": "Q (BUR)",
    "R": "R (BUL)",
    "S": "S (BDL)",
    "T": "T (BDR)",
    "U": "U (DFL)",
    "V": "V (DFR)",
    "W": "W (DBR)",
    "X": "X (DBL)",
}

PIECES_PARITY = {
    "A (UBL)": "A (UBL)",
    "B (UBR)": "B (UBR)",
    "D (UFL)": "D (UFL)",
    "E (LUB)": "E (LUB)",
    "F (LUF)": "F (LUF)",
    "G (LDF)": "G (LDF)",
    "H (LDB)": "H (LDB)",
    "I (FUL)": "I (FUL)",
    "K (FDR)": "K (FDR)",
    "L (FDL)": "L (FDL)",
    "N (RUB)": "N (RUB)",
    "O (RDB)": "O (RDB)",
    "P (RDF)": "P (RDF)",
    "Q (BUR)": "Q (BUR)",
    "R (BUL)": "R (BUL)",
    "S (BDL)": "S (BDL)",
    "T (BDR)": "T (BDR)",
    "U (DFL)": "U (DFL)",
    "V (DFR)": "V (DFR)",
    "W (DBR)": "W (DBR)",
    "X (DBL)": "X (DBL)",
}

PIECES_2_FLIPS_1 = {
    "UF": "UF",
    "UB": "UB",
    "UR": "UR",
    "UL": "UL",
    "LF": "LF",
    "LB": "LB",
    "RF": "RF",
    "RB": "RB",
    "DR": "DR",
    "DL": "DL",
    "DF": "DF",
    "DB": "DB",
}
PIECES_2_FLIPS_2 = {
    "UB": "UB",
    "UR": "UR",
    "UL": "UL",
    "LF": "LF",
    "LB": "LB",
    "RF": "RF",
    "RB": "RB",
    "DR": "DR",
    "DL": "DL",
    "DF": "DF",
    "DB": "DB",
}
PIECES_2_TWISTS_1 = {
    "RUF/FUR": "RUF/FUR",
    "RUB/BUR": "RUB/BUR",
    "LUB/BUL": "LUB/BUL",
    "LUF/FUL": "LUF/FUL",
    "RDF/FDR": "RDF/FDR",
    "RDB/BDR": "RDB/BDR",
    "LDB/BDL": "LDB/BDL",
    "LDF/FDL": "LDF/FDL",
}
PIECES_2_TWISTS_2 = {
    "RUB": "RUB",
    "BUR": "BUR",
    "BUL": "BUL",
    "LUB": "LUB",
    "LUF": "LUF",
    "FUL": "FUL",
    "FDR": "FDR",
    "RDF": "RDF",
    "RDB": "RDB",
    "BDR": "BDR",
    "BDL": "BDL",
    "LDB": "LDB",
    "LDF": "LDF",
    "FDL": "FDL",
}
PIECES_3_TWISTS_1 = {
    "RUB/BUR": "RUB/BUR",
    "LUB/BUL": "LUB/BUL",
    "LUF/FUL": "LUF/FUL",
    "RDF/FDR": "RDF/FDR",
    "RDB/BDR": "RDB/BDR",
    "LDB/BDL": "LDB/BDL",
    "LDF/FDL": "LDF/FDL",
}
PIECES_3_TWISTS_2 = {
    "RUB": "RUB",
    "BUR": "BUR",
    "BUL": "BUL",
    "LUB": "LUB",
    "LUF": "LUF",
    "FUL": "FUL",
    "FDR": "FDR",
    "RDF": "RDF",
    "RDB": "RDB",
    "BDR": "BDR",
    "BDL": "BDL",
    "LDB": "LDB",
    "LDF": "LDF",
    "FDL": "FDL",
}

def get_row_index(id, sheet):
    return sheet.index[sheet.iloc[:, 0] == id].tolist()[0]

def get_cell(id_1, id_2, sheet):
    return sheet[id_1][get_row_index(id_2, sheet)]

def process(sheet_types, sheet_comms, pieces_1, pieces_2, has_types=True):
    result = []
    for letter_1, id_1 in pieces_1.items():
        for letter_2, id_2 in pieces_2.items():
            cycle = {}
            comm = get_cell(id_1, id_2, sheet_comms)
            cycle["comm"] = comm
            if has_types:
                type = get_cell(id_1, id_2, sheet_types)
                cycle["type"] = type
            cycle["piece_1"] = letter_1
            cycle["piece_2"] = letter_2
            if pd.isnull(comm):
                continue
            result.append(cycle)
    return result

def process_parity(sheet, pieces):
    result = []
    for letter, id in pieces.items():
        cycle = {}
        comm = sheet[1][get_row_index(id, sheet)]
        cycle["piece"] = letter
        cycle["comm"] = comm
        result.append(cycle)
    return result

three_style = {}

three_style["UF"] = process(uf_types, uf_comms, PIECES_UF, PIECES_UF)
three_style["UFR"] = process(ufr_types, ufr_comms, PIECES_UFR, PIECES_UFR)
three_style["PARITY"] = process_parity(parity, PIECES_PARITY)
three_style["2FLIPS"] = process(None, two_flips, PIECES_2_FLIPS_1, PIECES_2_FLIPS_2, False)
three_style["2TWISTS"] = process(None, two_twists, PIECES_2_TWISTS_1, PIECES_2_TWISTS_2, False)
three_style["3TWISTS"] = process(None, three_twists, PIECES_3_TWISTS_1, PIECES_3_TWISTS_2, False)

# Some (~ 10 or so) comms have this format:
# Z: [X, Y]
# Instead of:
# [Z: [X, Y]]
# Some are missing opening or closing brackets
# [Z: [X, Y]
# Some have redundant brackets:
# [[Z: [X, Y]]]
def correct_result(data):
    no_brackets = re.compile(r'\[.*:')
    left_heavy = re.compile(r'\[.*(?!\])\[.*\]')
    right_heavy = re.compile(r'\[.*\].*(?!\[)\]')
    redundant = re.compile(r'\[(\[.*\])\]')
    for key, value in data.items():
        for i, comm in enumerate(value):
            if ":" in comm["comm"]:
                if not no_brackets.search(comm["comm"]):
                    data[key][i]["comm"] = f"[{comm['comm']}]"
            if not comm["comm"].count("[") == comm["comm"].count("]"):
                if left_heavy.search(comm["comm"]):
                    data[key][i]["comm"] = f"{comm['comm']}]"
                elif right_heavy.search(comm["comm"]):
                    data[key][i]["comm"] = f"[{comm['comm']}"
            if search := redundant.search(comm["comm"]):
                data[key][i]["comm"] = search.group(1)


correct_result(three_style)

with open(args.output, "w") as outfile:
    outfile.write(json.dumps(three_style, indent=2))
