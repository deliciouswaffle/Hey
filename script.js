function changeContent(){
    let as = document.querySelectorAll('a');
    as.forEach(async v => {
        if (v.innerHTML.startsWith('https://youtu.be/')) {
            let a = v.innerHTML.slice(17);

            //const iframe = `<br><div id='url'>https://youtu.be/${a}</div><iframe width="426" height="240" src="https://www.youtube.com/embed/${a}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br>`;
            const iframe = `<br><iframe width="426" height="240" src="https://www.youtube.com/embed/${a}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br>`;
            v.innerHTML = iframe;
        }
    });
};

const targetNode = document.querySelector("body");
const observer = new MutationObserver(changeContent);
observer.observe(targetNode, { attributes: true, childList: true, subtree: true });