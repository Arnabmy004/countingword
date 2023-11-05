const input=document.querySelector('textarea');
const wordcount=document.querySelector("[data-word-count]");
const charactercount=document.querySelector("[data-character-count]");
const sentencecount=document.querySelector("[data-sentence-count]");
const pragraphcount=document.querySelector("[data-paragraph-count]");
input.addEventListener("input",function(){
 
      const text=input.value;
        const words=text.split(/\s+/).filter(word=>word !="").length;
        wordcount.innerHTML = `<strong style="color: black;">${words}</strong>`;
       const characters = text.length;
       charactercount.innerHTML = `<strong style="color: black;">${characters}</strong>`;
    const sentences = text.split(/[.!?]/).filter(sentence => sentence.trim() !== "").length;
    sentencecount.innerHTML = `<strong style="color: black;">${sentences}</strong>`;

  const paragraphs = text.split(/\r?\n\r?\n/).filter(paragraph => paragraph.trim() !== "").length;
  
  if (!text.endsWith('\n\r') && !text.endsWith('\n')) {
    paragraphs++;
  }
  paragraphcount.innerHTML = `<strong style="color: black;">${paragraphs}</strong>`;



});