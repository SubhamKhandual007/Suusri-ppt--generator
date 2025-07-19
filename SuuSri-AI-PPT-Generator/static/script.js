document.getElementById('pptForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const topic = document.getElementById('topic').value;
    const statusText = document.getElementById('statusText');
    const timer = document.getElementById('timer');
    const downloadLink = document.getElementById('downloadLink');

    statusText.textContent = 'Generating presentation...';
    statusText.className = 'text-muted';
    timer.classList.remove('d-none');
    downloadLink.classList.add('d-none');

    let seconds = 0;
    const timerInterval = setInterval(() => {
        seconds++;
        timer.textContent = `${seconds}s`;
    }, 1000);

    try {
        const response = await fetch('/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, topic }),
        });

        clearInterval(timerInterval);

        if (!response.ok) {
            throw new Error('Failed to generate presentation');
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        downloadLink.href = url;
        downloadLink.download = `${title.replace(' ', '_')}_Presentation.pptx`;
        downloadLink.classList.remove('d-none');
        statusText.textContent = 'Presentation generated successfully!';
        statusText.className = 'text-success';
        timer.classList.add('d-none');
    } catch (error) {
        clearInterval(timerInterval);
        statusText.textContent = `Error: ${error.message}`;
        statusText.className = 'text-danger';
        timer.classList.add('d-none');
    }
});