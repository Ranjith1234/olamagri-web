export default function decorate(block) {
  /* change to Anchor  */
  console.log(block);
  const a = document.createElement('a');
  a.href = 'index.html';
  block.textContent = 'Sample';
  block.textContent = '';
  block.append(a);
}
