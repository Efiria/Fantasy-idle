let resources = 10;
let buildingsData = [];
let upgradesData = [];

document.addEventListener('DOMContentLoaded', () => {
    buildingsData = JSON.parse(JSON.stringify( buildings ));
    upgradesData = JSON.parse(JSON.stringify( upgrades ));
    
    if (localStorage.length != 0) {
        loadData();
    } else {
        saveData();
    }

    renderResources();
    renderBuildings();
    renderUpgrades();
    renderProduction();
    
    setInterval(updateResources, 1000);
    setInterval(renderBuildings, 1000);
    setInterval(renderProduction, 500);

    setInterval(saveData, 60000*5);
});

function saveData() {
    buildingsData.forEach(building => {
        localStorage.setItem(building.name, [building.count,building.cost]);
    })
    
    upgradesData.forEach(upg => {
        localStorage.setItem(upg.id, upg.purchased);
    })

    localStorage.setItem("resources", resources);
}

function loadData() {
    resources = parseInt(localStorage.getItem("resources"))
    buildingsData.forEach(building => {
        build = localStorage.getItem(building.name).split(",");
        building.count = parseInt(build[0]);
        building.cost = parseInt(build[1]);
    })
    
    upgradesData.forEach(upg => {
        if (localStorage.getItem(upg.id) == "true") {
            upg.purchased = true
        } else {
            upg.purchased = false
        }
    })
}

function clearData() {
    localStorage.clear()
}

function renderResources() {
    document.getElementById('resources').innerText = formatNumber(resources);
}

function renderBuildings() {
    const container = document.getElementById('buildings-section');
    container.innerHTML = '<h4>Buildings</h4>';

    buildingsData.forEach(building => {
        if (resources < building.cost && building.count === 0 && !building.render) {
            return
        }else {
            building.render = true
        }
        const div = document.createElement('div');
        div.className = 'building card p-2 mb-2';

        div.innerHTML = `
            <div class="building">
                <h5 class="card-title">${building.name}</h5>
                <p class="card-text">Cost: ${formatNumber(building.cost)} resources</p>
                <p class="card-text">Owned: ${building.count}</p>
                <p class="card-text">Production: ${formatNumber(building.resourcesPerSecond * getBuildingMultiplier(building.id))} / sec</p>
                <button class="btn btn-success" data-id="${building.id}">Buy</button>
            </div>
        `;

        const btn = div.querySelector('button');
        btn.addEventListener('click', () => buyBuilding(building.id));

        container.appendChild(div);
    });
}

function renderUpgrades() {
    const container = document.getElementById('upgrades-section');
    container.innerHTML = '<h4>Upgrades</h4>';

    upgradesData.forEach(upg => {
        const btn = document.createElement('button');
        btn.className = upg.purchased ? 'btn btn-secondary disabled m-2' : 'btn btn-warning m-2';
        btn.innerText = `${upg.name} (${formatNumber(upg.cost)}) \n ${upg.description}`;
        btn.disabled = upg.purchased;
        btn.addEventListener('click', () => buyUpgrade(upg.id));
        container.appendChild(btn);
    });
}

function renderProduction() {
    const overallDiv = document.getElementById('production-overall');
    const detailsDiv = document.getElementById('production-details');

    // Calculate total production per second
    let totalPerSecond = 0;
    buildingsData.forEach(b => {
        totalPerSecond += b.resourcesPerSecond * getBuildingMultiplier(b.id) * b.count;
    });
    overallDiv.innerHTML = `<h4>Total Production: ${formatNumber(totalPerSecond)} / sec</h4>`;

    // Details per building
    detailsDiv.innerHTML = '<h5>Production Details by Building</h5>';
    buildingsData.forEach(b => {
        if (b.count === 0) {
            return
        }
        const prod = b.resourcesPerSecond * getBuildingMultiplier(b.id) * b.count;
        const p = document.createElement('p');
        p.innerText = `${b.name}: ${formatNumber(prod)} / sec (${b.count} owned)`;
        detailsDiv.appendChild(p);
    });
}

function buyUpgrade(id) {
    const upgrade = upgradesData.find(u => u.id === id);
    if (resources >= upgrade.cost && !upgrade.purchased) {
        resources -= upgrade.cost;
        upgrade.purchased = true;

        const targetBuilding = buildingsData.find(b => b.id === upgrade.target);
        targetBuilding.multiplier = getBuildingMultiplier(targetBuilding.id) * upgrade.multiplier;
        renderResources();
        renderBuildings();
        renderUpgrades();
    }
}

function getBuildingMultiplier(id) {
    let multiplier = 0
    upgradesData.forEach(upg => {
        if (upg.target === id && upg.purchased) {
            multiplier += upg.multiplier
        }
    });
    return (multiplier == 0) ? 1 : multiplier
}

function buyBuilding(id) {
    const building = buildingsData.find(b => b.id === id);
    if (resources >= building.cost) {
        resources -= building.cost;
        building.count += 1;
        building.cost = Math.ceil(building.cost * 1.20);
        renderResources();
        renderBuildings();
        renderProduction();
    }
}

function updateResources() {
    let gain = 0;
    buildingsData.forEach(b => {
        gain += b.resourcesPerSecond * getBuildingMultiplier(b.id) * b.count;
    });
    resources += gain;
    renderResources();
}


