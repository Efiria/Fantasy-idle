const buildings = [
    {
        id: 'wizard_tower',
        name: 'Wizard Tower',
        cost: 10,
        resourcesPerSecond: 1,
        count: 0,
        display: true
    },
    {
        id: 'dragon_lair',
        name: 'Dragon Lair',
        cost: 100,
        resourcesPerSecond: 10,
        count: 0,
        display: false
    },
    {
        id: 'elven_farm',
        name: 'Elven Farm',
        cost: 500,
        resourcesPerSecond: 50,
        count: 0,
        display: false
    },
     {
        id: 'heroes_factory',
        name: 'Heroes Factory',
        cost: 1000,
        resourcesPerSecond: 100,
        count: 0,
        display: false
    },
];

const upgrades = [
    {
        id: 'wizard_tower_upgrade',
        name: 'Wizard Tower Upgrade',
        target: 'wizard_tower',
        description: 'Multiply production by 2',
        cost: 50,
        multiplier: 2,
        minBuilding: 10,
        purchased: false
    },
    {
        id: 'dragon_lair_upgrade',
        name: 'Dragon Lair Upgrade',
        target: 'dragon_lair',
        description: 'Multiply production by 2',
        cost: 500,
        multiplier: 2,
        minBuilding: 10,
        purchased: false
    },
    {
        id: 'elven_farm_upgrade',
        name: 'Elven Farm Upgrade',
        target: 'elven_farm',
        description: 'Multiply production by 2',
        cost: 2500,
        multiplier: 2,
        minBuilding: 10,
        purchased: false
    },
    {
        id: 'wizard_tower_upgrade_2',
        name: 'Wizard Tower Upgrade II',
        target: 'wizard_tower',
        description: 'Multiply production by 3',
        cost: 5000,
        multiplier: 3,
        minBuilding: 25,
        purchased: false
    },
    {
        id: 'heroes_factory_upgrade',
        name: 'Heroes Factory Upgrade',
        target: 'heroes_factory',
        description: 'Multiply production by 2',
        cost: 10000,
        multiplier: 2,
        minBuilding: 10,
        purchased: false
    },
];