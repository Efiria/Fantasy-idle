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
        cost: 150,
        resourcesPerSecond: 10,
        count: 0,
        display: false
    },
    {
        id: 'elven_farm',
        name: 'Elven Farm',
        cost: 950,
        resourcesPerSecond: 50,
        count: 0,
        display: false
    },
    {
        id: 'heroes_factory',
        name: 'Heroes Factory',
        cost: 2500,
        resourcesPerSecond: 100,
        count: 0,
        display: false
    },
    {
        id: 'necromancer_graveyard',
        name: 'Necromancer Graveyard',
        cost: 7500,
        resourcesPerSecond: 300,
        count: 0,
        display: false
    },
    {
        id: 'thieves_guild',
        name: 'Thieves Guild',
        cost: 25000,
        resourcesPerSecond: 600,
        count: 0,
        display: false
    },
    {
        id: 'holy_cathedral',
        name: 'Holy Cathedral',
        cost: 75000,
        resourcesPerSecond: 1000,
        count: 0,
        display: false
    },
    {
        id: 'demon_lord_castle',
        name: 'Demon Lord Castle',
        cost: 250000,
        resourcesPerSecond: 5000,
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
        id: 'wizard_tower_upgrade_2',
        name: 'Wizard Tower Upgrade II',
        target: 'wizard_tower',
        description: 'Multiply production by 25',
        cost: 5000,
        multiplier: 25,
        minBuilding: 25,
        purchased: false
    },
    {
        id: 'wizard_tower_upgrade_3',
        name: 'Wizard Tower Upgrade III',
        target: 'wizard_tower',
        description: 'Multiply production by 100',
        cost: 50000,
        multiplier: 100,
        minBuilding: 50,
        purchased: false
    },
    {
        id: 'wizard_tower_upgrade_4',
        name: 'Wizard Tower Upgrade IV',
        target: 'wizard_tower',
        description: 'Multiply production by 200',
        cost: 150000,
        multiplier: 200,
        minBuilding: 100,
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