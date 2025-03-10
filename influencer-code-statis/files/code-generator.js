const badWordsList = (
    "SHPX PHAG JNAX JNAT CVFF PBPX FUVG GJNG GVGF SNEG URYY ZHSS QVPX XABO " +
    "NEFR FUNT GBFF FYHG GHEQ FYNT PENC CBBC OHGG SRPX OBBO WVFZ WVMM CUNG"
)
    .replace(/[a-zA-Z]/g, function (c) {
        return String.fromCharCode(
            (c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26
        );
    })
    .split(" ");

const defaults = {
    parts: 4,
    partLens: [4, 3, 3, 4],
    type: "alphanumeric",
};

const symbolsStr = {
    alphanumeric: "0123456789ABCDEFGHJKLMNPQRTUVWXY",
    alpha: "ABCDEFGHJKLMNPQRTUVWXY",
};

const randomSymbol = (symbolsArr) => {
    return symbolsArr[parseInt(Math.random() * symbolsArr.length, 10)];
};

const checkDigitAlg1 = (data, check, symbolsArr, codeLen) => {
    const symbolsObj = {};
    symbolsArr.forEach(function (c, i) {
        symbolsObj[c] = i;
    });

    data.split("").forEach(function (v) {
        const k = symbolsObj[v];
        check = check * (symbolsArr.length - codeLen - 1) + k;
    });

    return symbolsArr[check % (symbolsArr.length - 1)];
};

const hasBadWord = (code) => {
    code = code.toUpperCase();
    for (let i = 0; i < badWordsList.length; i++) {
        if (code.indexOf(badWordsList[i]) > -1) return true;
    }
    return false;
};

const getCodeLength = (partLens) => {
    let codeLength = 0;

    partLens.forEach((partLen) => {
        codeLength += partLen;
    });

    return codeLength;
};

const generate = (partsCount, partLens, type) => {
    const opts = {
        parts: partsCount || defaults.parts,
        partLens: partLens || defaults.partLens,
        type: type || defaults.type,
    };

    const symbolsArr = symbolsStr[opts.type].split("");

    let codeLen = getCodeLength(opts.partLens);

    const parts = [];
    let part;

    do {
        parts.length = 0;
        for (let i = 0; i < opts.parts; i++) {
            part = "";
            for (let j = 0; j < opts.partLens[i] - 1; j++) {
                part += randomSymbol(symbolsArr);
            }

            part = part + checkDigitAlg1(part, i + 1, symbolsArr, codeLen);
            parts.push(part);
        }
    } while (hasBadWord(parts.join("")));

    return 'VR' + parts.join("-").slice(2);
};
