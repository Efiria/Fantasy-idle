const buildings = [
    {
        id: 'wizard_tower',
        name: 'Wizard Tower',
        cost: 10,
        resourcesPerSecond: 1,
        count: 0
    },
    {
        id: 'dragon_lair',
        name: 'Dragon Lair',
        cost: 100,
        resourcesPerSecond: 10,
        count: 0
    },
    {
        id: 'elven_farm',
        name: 'Elven Farm',
        cost: 500,
        resourcesPerSecond: 50,
        count: 0
    },
     {
        id: 'heroes_factory',
        name: 'Heroes Factory',
        cost: 100,
        resourcesPerSecond: 100,
        count: 0
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
        purchased: false
    },
    {
        id: 'dragon_lair_upgrade',
        name: 'Dragon Lair Upgrade',
        target: 'dragon_lair',
        description: 'Multiply production by 2',
        cost: 500,
        multiplier: 2,
        purchased: false
    },
    {
        id: 'elven_farm_upgrade',
        name: 'Elven Farm Upgrade',
        target: 'elven_farm',
        description: 'Multiply production by 2',
        cost: 2500,
        multiplier: 2,
        purchased: false
    }
];