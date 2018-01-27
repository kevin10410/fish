var router = new Router();
router.add('index', () => index.checked = true)
router.add('active', () => active.checked = true)
router.add('feedback', () => feedback.checked = true)


const listing = document.querySelector('#listing');
listing.addEventListener('click', () => {
    mapsList.checked = false;

    //之後接到 API 成功時，在非同步時做這件事。現在先假裝有在跑。
    showActive ({
        beach: "某個海灘",
        city: "城市",
        date: "活動日期",
        location: "集合地點",
        host: "聯絡人",
        phone: "聯絡電話"
    });
})


function showActive (data) {
    const activeDetail = document.querySelector('#activeDetail');

    //tr list to table
    const table = document.createElement('table');
    table.classList.add('table');
    table.classList.add('table-striped');
    for (key in data) {
        const keyCell = document.createElement('td');
        const valueCell = document.createElement('td');
        keyCell.textContent = key;
        valueCell.textContent = data[key];

        const tr = document.createElement('tr');
        tr.appendChild(keyCell);
        tr.appendChild(valueCell);
        table.appendChild(tr);
    }
    activeDetail.innerHTML = table.outerHTML;
}
