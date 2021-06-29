const copyoutput = () => {
    let name = document.getElementById("name").value;
    let item = document.getElementById("item").value;
    let knfglv = document.getElementById("knfglv").checked ? "★" : "";
    let paint = document.getElementById("paint").value;
    let stattrak = document.getElementById("stattrak").checked ? " StatTrak™" : "";
    let rarity = String.fromCharCode(eval(document.getElementById("rarity").value));

    let input = document.getElementById("end");
    input.value =
        `playerradio Radio.WePlanted "\u2028\x03\x03${name} \x01has opened a container and found: ${rarity}${knfglv}${stattrak} ${item} | ${paint}"`;
    input.select();
    input.setSelectionRange(0, input.value.length)
    document.execCommand("copy");
};

const VAC = () => {
    let name = document.getElementById("name").value;

    let VAC = document.getElementById("vacc");
    VAC.value =
        `playerradio Radio.WePlanted "\x01ezfrags.co.uk \u2028\x03\x03 \x07${name} has been permanently banned from official CS:GO servers."`;
    VAC.select();
    VAC.setSelectionRange(0, VAC.value.length)
    document.execCommand("copy");
};

const resetoutput = () => {
    document.getElementById("end").value = '';
    document.getElementById("vacc").value = '';
};
