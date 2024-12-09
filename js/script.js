// List of games (keep your game list as is)
const games = [
    {
        title: 'OvO',
        description: 'Try and beat this impossible game!',
        thumbnail: 'games/OvO/thumbnail.png',
        link: 'games/OvO/index.html'
    },
    {
        title: 'Moto X3M',
        description: 'Fun game about motorcycles',
        thumbnail: 'games/MotoX3M/moto-x3m.png',
        link: 'games/MotoX3M/index.html'
    },
    {
        title: 'Moto X3M 2',
        description: 'Fun game about motorcycles V2',
        thumbnail: 'games/MotoX3M/2/thumbnail.png',
        link: 'games/MotoX3M/2/index.html'
    },
    {
        title: 'Moto X3M Winter',
        description: 'Fun game about motorcycles on a winter map with extra challenges!',
        thumbnail: 'games/MotoX3M/4-winter/thumbnail.png',
        link: 'games/MotoX3M/4-winter/index.html'
    },
    {
        title: 'Moto X3M Pool Party',
        description: 'Fun game about motorcycles with fun pool party challenges!',
        thumbnail: 'games/MotoX3M/5-pool-party/thumbnail.png',
        link: 'games/MotoX3M/5-pool-party/index.html'
    },
    {
        title: 'Moto X3M spooky land',
        description: 'Fun game about motorcycles with scary halloween theming!',
        thumbnail: 'games/MotoX3M/6-spooky-land/thumbnail.png',
        link: 'games/MotoX3M/6-spooky-land/index.html'
    },
    {
        title: 'Idle Breakout',
        description: 'An idle game where your goal is to break blocks that spawn in.',
        thumbnail: 'games/IdleBreakout/img/thumbnail.png',
        link: 'games/IdleBreakout/index.html'
    },
    {
        title: 'Sandtris',
        description: 'Tetris but with physics!',
        thumbnail: 'games/Sandtris/thumbnail.png',
        link: 'games/Sandtris/index.html'
    },
    {
        title: 'House Of Hazards',
        description: 'Dodge your friends or npcs as you complete tasks to win the game!',
        thumbnail: 'games/HouseOfHazards/thumbnail.png',
        link: 'games/HouseOfHazards/index.html'
    },
    {
        title: 'Soccer Random',
        description: 'Play some soccer and score some goals!',
        thumbnail: 'games/SoccerRandom/thumbnail.png',
        link: 'games/SoccerRandom/index.html'
    },
    {
        title: 'Retro Bowl',
        description: 'Play some football with your favorite teams!',
        thumbnail: 'games/RetroBowl/thumbnail.png',
        link: 'games/RetroBowl/index.html'
    },
    {
        title: 'Cookie Clicker',
        description: 'Start clicking that cookie and take over the world!',
        thumbnail: 'games/CookieClicker/thumbnail.png',
        link: 'games/CookieClicker/index.html'
    },
    {
        title: 'Boxing Random',
        description: 'Fight your way up the ranks or fight your friends in boxing random!',
        thumbnail: 'games/BoxingRandom/thumbnail.png',
        link: 'games/BoxingRandom/index.html'
    },
    {
        title: 'Volley Random',
        description: 'Challenge your friends or family to a fun game of volleyball.',
        thumbnail: 'games/VolleyRandom/thumbnail.png',
        link: 'games/VolleyRandom/index.html'
    },
    {
        title: 'Polytrack',
        description: 'This is just rip off Trackmania lol',
        thumbnail: 'games/Polytrack/thumbnail.png',
        link: 'games/Polytrack/index.html'
    },
    {
        title: 'Basketball Legends 2020',
        description: 'This is a game all about basketball.',
        thumbnail: 'games/BasketballLegends2020/thumbnail.png',
        link: 'games/BasketballLegends2020/index.html'
    },
    {
        title: 'Drive Mad',
        description: 'This is a fun puzzle game that involves cars!',
        thumbnail: 'games/DriveMad/webapp/cover.jpg',
        link: 'games/DriveMad/index.html'
    },
    {
        title: 'A Small World Cup',
        description: 'a fun mini-soccer sports game where you control a rag doll and slam it against the arena to make the ball score a goal.',
        thumbnail: 'games/ASmallWorldCup/thumbnail.png',
        link: 'games/ASmallWorldCup/index.html'
    },
    {
        title: 'The Oregon Trail',
        description: 'You get to play the role of a wagon leader and guide your group of chosen settlers from Independence, Missouri, to the Willamette Valley in Oregon while traveling along the Oregon Trail.',
        thumbnail: 'games/OregonTrail/thumbnail.png',
        link: 'games/OregonTrail/index.html'
    },
    {
        title: 'Pacman',
        description: 'Its pacman people get it together.',
        thumbnail: 'games/Pacman/icon/ios_icon.png',
        link: 'games/Pacman/index.html'
    }
];

// Grab the required DOM elements
const gamesList = document.querySelector('.games-list');

// Sort games alphabetically A-Z by title
function sortGamesAZ() {
    return [...games].sort((a, b) => a.title.localeCompare(b.title));
}

// Render games dynamically
function renderGames(gameList = games) {
    gamesList.innerHTML = ''; // Clear the game list

    if (gameList.length === 0) {
        gamesList.innerHTML = '<div class="no-results-message">No results found.</div>';
        return;
    }

    gameList.forEach(game => {
        const gameItem = document.createElement('div');
        gameItem.classList.add('game-item');
        gameItem.innerHTML = `
            <img src="${game.thumbnail}" alt="${game.title} Thumbnail" loading="lazy">
            <h3>${game.title}</h3>
            <p>${game.description}</p>
            <a href="${game.link}" target="_blank">Play Now</a>
        `;
        gamesList.appendChild(gameItem);
    });
}

// Initial render: Sort and then render the games
document.addEventListener('DOMContentLoaded', () => {
    renderGames(sortGamesAZ()); // Automatically sort games alphabetically when the page loads
});
