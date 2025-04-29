

export default function decorate(block) {
    /* change to Anchor  */
    //const a = document.createElement('a');
    //a.href = block.secondElement.textContent;
    //block.textContent = '';
    block.append(block);
}