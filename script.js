// script.js
document.addEventListener('DOMContentLoaded', () => {
  const generateButton = document.getElementById('generateButton');
  const copyButton = document.getElementById('copyButton');
  const wordDisplay = document.getElementById('wordDisplay');

  generateButton.addEventListener('click', async () => {
    wordDisplay.textContent = 'Generating...';
    try {
      const response = await fetch('https://random-word-api.herokuapp.com/word');
      const [word] = await response.json();
      wordDisplay.textContent = word;
    } catch (error) {
      wordDisplay.textContent = 'Error generating word. Please try again.';
    }
  });

  copyButton.addEventListener('click', () => {
    const word = wordDisplay.textContent;
    if (word && word !== 'Press the button to generate a word!') {
      navigator.clipboard.writeText(word)
        .then(() => alert('Word copied to clipboard!'))
        .catch(() => alert('Failed to copy word.'));
    }
  });
});
