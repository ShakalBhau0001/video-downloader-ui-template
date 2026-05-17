const form = document.querySelector(".form-download");
const button = document.querySelector(".click-btn-down");
const linkInput = document.querySelector(".link");
const resultBox = document.querySelector(".download-video");
const formatSelect = document.querySelector(".formte");

function isValidURL(url) {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

function showMessage(message, type = "info") {
    const colors = {
        success: "green",
        error: "red",
        info: "blue"
    };

    resultBox.innerHTML = `<p style="color:${colors[type]}">${message}</p>`;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const link = linkInput.value.trim();
    const format = formatSelect.value;

    if (!link) {
        showMessage("⚠️ Please enter a video URL", "error");
        return;
    }

    if (!isValidURL(link)) {
        showMessage("❌ Invalid URL format", "error");
        return;
    }

    if (!format) {
        showMessage("⚠️ Please select a format", "error");
        return;
    }

    button.disabled = true;
    showMessage("⏳ Processing.....", "info");

    setTimeout(() => {
        showMessage(
            `✅ Ready (${format}p)<br>🚀 Backend Integration Required`,
            "success"
        );
        button.disabled = false;
    }, 1000);
});
