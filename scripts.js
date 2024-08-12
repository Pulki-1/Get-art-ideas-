
document.getElementById('fetchArtStyle').addEventListener('click', function() {
    const timeValue = document.getElementById('timeInput').value;
    const styleOption = document.getElementById('styleOption').value;
    
    const prompt = `Generate a random art style based on the following criteria: Time period - ${timeValue}, Style - ${styleOption}.`;

    fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': ``
        },
        body: JSON.stringify({
            prompt: prompt,
            max_tokens: 50
        })
    })
    .then(response => response.json())
    .then(data => {
        const artStyle = data.choices[0].text.trim();
        document.getElementById('styleResult').textContent = `Generated Art Style: ${artStyle}`;
    })
    .catch(error => {
        document.getElementById('styleResult').textContent = 'Error generating art style. Please try again later.';
    });
});
