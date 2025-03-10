const copyToClipboard = (text, msg) => {
    const input = document.createElement("input");
    input.setAttribute("value", text);

    document.body.appendChild(input);
    input.select();

    const copied = document.execCommand("copy");
    const snackbarMsg = copied ? msg : "Faild to copy";

    Snackbar.show({
        text: snackbarMsg,
        pos: "bottom-center",
        showAction: false,
        duration: 5000,
    });

    document.body.removeChild(input);
};