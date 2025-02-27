document.addEventListener("DOMContentLoaded", function () {
    const lockScreen = document.getElementById("lockScreen");
    const unlockBtn = document.getElementById("unlockBtn");
    const passwordInput = document.getElementById("passwordInput");
    const content = document.getElementById("content");
    const matrixCanvas = document.getElementById("matrix");
    const ctx = matrixCanvas.getContext("2d");

    // Set canvas to full screen
    matrixCanvas.width = window.innerWidth;
    matrixCanvas.height = window.innerHeight;

    const matrixChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const fontSize = 16;
    const columns = matrixCanvas.width / fontSize;
    const drops = Array.from({ length: columns }).fill(1);

    function drawMatrix() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
        ctx.fillStyle = "#00ffcc";
        ctx.font = `${fontSize}px Courier New`;

        for (let i = 0; i < drops.length; i++) {
            const text = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    setInterval(drawMatrix, 50);

    unlockBtn.addEventListener("click", () => {
        if (passwordInput.value === "unlock") {
            lockScreen.style.display = "none";
            content.style.display = "block";
            content.style.opacity = "1";
        } else {
            alert("Incorrect password!");
        }
    });

    window.addEventListener("resize", () => {
        matrixCanvas.width = window.innerWidth;
        matrixCanvas.height = window.innerHeight;
    });
});
