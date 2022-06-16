let domCap = document.getElementById("upBtn").addEventListener("click", test1);
const fragment = document.createDocumentFragment();
function test1() {
    for (let i = 0; i < 5000; i++) {
        const div = document.createElement("div");
        div.textContent = `Item número ${i}`;
        fragment.appendChild(div);
    }
}
