document.addEventListener('DOMContentLoaded', function() {
  // Add typing animation to elements with class 'typewriter'
  const typewriterElements = document.querySelectorAll('.typewriter');
  
  typewriterElements.forEach(el => {
    const text = el.textContent;
    el.textContent = '';
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    cursor.textContent = '|';
    el.appendChild(cursor);
    
    let i = 0;
    const typing = setInterval(() => {
      if (i < text.length) {
        el.insertBefore(document.createTextNode(text[i]), cursor);
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);
  });

  // Add terminal-like prompt to code blocks
  const codeBlocks = document.querySelectorAll('pre code');
  codeBlocks.forEach(block => {
    const container = document.createElement('div');
    container.className = 'terminal';
    block.parentNode.replaceChild(container, block);
    container.appendChild(block);
  });
});
