const link = document.getElementById('input');
const button = document.getElementById('button');
const output = document.getElementsByClassName('fin-out')[0];
const copy = document.getElementById('confirmMessage');
const copyButton = document.getElementsByClassName('copy')[0];


button.addEventListener('click', async () => {
    const inputURL = link.value;
         const tinyUrlApi = `http://tinyurl.com/api-create.php?url=${encodeURIComponent(
           inputURL
    )}`;
    const url = await fetch(tinyUrlApi);
    const tinyUrl = await url.text();
    copyButton.addEventListener('click', () => { 
  navigator.clipboard.writeText(tinyUrl).then(() => {
    copy.textContent = "Text Copied to Clipboard!";
  });
    });
    output.innerHTML = tinyUrl;
})
