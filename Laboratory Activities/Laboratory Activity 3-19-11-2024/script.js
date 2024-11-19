const textInput = document.getElementById('textInput');
const wordCountDisplay = document.getElementById('wordcount');
const sentenceCountDisplay = document.getElementById('sentenceCount');

textInput.addEventListener('input', () => {
    const text = textInput.value.trim();
    const words = text.split(/\s+/).filter(word => word.length > 0);
    const sentences = text.split(/[.!?]+\s*/).filter(sentence => sentence.trim().length > 0);

    wordCountDisplay.textContent = words.length;
    sentenceCountDisplay.textContent = sentences.length;
});
