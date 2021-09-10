const copyoutput = () => {
    let name = document.getElementById("name").value;
    let item = document.getElementById("item").value;
    let knfglv = document.getElementById("knfglv").checked ? "★" : "";
    let paint = document.getElementById("paint").value;
    let stattrak = document.getElementById("stattrak").checked ? " StatTrak™" : "";
    let intrade = document.getElementById("intrade").checked ? "has received in trade" : "has opened a container and found";
    let rarity = String.fromCharCode(eval(document.getElementById("rarity").value));

    let input = document.getElementById("end");
    input.value =
        `playerradio Radio.WePlanted "\u2028\x03\x03${name} \x01${intrade}: ${rarity}${knfglv}${stattrak} ${item} | ${paint}"`;
    input.select();
    input.setSelectionRange(0, input.value.length)
    document.execCommand("copy");
    document.getElementById("copied").innerHTML = 'Copied';
    document.getElementById("command").innerHTML = `Latest copied: ${input.value}`;
};

const VAC = () => {
    let name = document.getElementById("name").value;

    let VAC = document.getElementById("vacc");
    VAC.value =
        `playerradio Radio.WePlanted "\x01ezfrags.co.uk \u2028\x03\x03 \x07${name} has been permanently banned from official CS:GO servers."`;
    VAC.select();
    VAC.setSelectionRange(0, VAC.value.length)
    document.execCommand("copy");
    document.getElementById("copied2").innerHTML = 'Copied';
    document.getElementById("command").innerHTML = `Latest copied: ${VAC.value}`;
};

const resetoutput = () => {
    document.getElementById("end").value = '';
    document.getElementById("vacc").value = '';
    document.getElementById("textar").value = '';
    document.getElementById("endtextinp").value = '';
    document.getElementById("radiocom").value = '';
    document.getElementById("copied").innerHTML = '';
    document.getElementById("copied2").innerHTML = '';
    document.getElementById("copied3").innerHTML = '';
    document.getElementById("copied4").innerHTML = '';
};

const copytext = () => {
    let rarity = String.fromCharCode(eval(document.getElementById("colorpalette").value));
    let textarea = document.getElementById("textar").value;

    let end = document.getElementById("endtextinp");
    end.value =
        `playerradio Radio.WePlanted " ${rarity}${textarea}"`;
    end.select();
    end.setSelectionRange(0, end.value.length)
    document.execCommand("copy");
    document.getElementById("copied3").innerHTML = 'Copied';
    document.getElementById("command").innerHTML = `Latest copied: ${end.value}`;
};

const radio = () => {
    let commandradio = document.getElementById('radiopalette').selectedOptions[0].value;

    let radioend = document.getElementById("radiocom");
    radioend.value = `${commandradio}`;
    radioend.select();
    radioend.setSelectionRange(0, radioend.value.length)
    document.execCommand("copy");
    document.getElementById("copied4").innerHTML = 'Copied';
    document.getElementById("command").innerHTML = `Latest copied: ${radioend.value}`;
};