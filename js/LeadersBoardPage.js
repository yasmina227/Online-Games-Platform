// Nested Data Structure for Leaderboard Rankings.
// adding static DB for top 3 players using array .
const leaderboardData = {
    'alltime': {
        top3: [
            { name: "CyberNinja", score: "148,250", img: "https://i.pravatar.cc/150?img=33" },
            { name: "NeonViper", score: "142,180", img: "https://i.pravatar.cc/150?img=11" },
            { name: "QuantumRush", score: "138,920", img: "https://i.pravatar.cc/150?img=60" }
        ],
        // showing the stored data using array.
        table: [
            { rank: 1, name: "CyberNinja", img: "https://i.pravatar.cc/150?img=33", score: "148,250", level: "Lvl 52", streak: "28 days" },
            { rank: 2, name: "NeonViper", img: "https://i.pravatar.cc/150?img=11", score: "142,180", level: "Lvl 42", streak: "21 days" },
            { rank: 3, name: "QuantumRush", img: "https://i.pravatar.cc/150?img=60", score: "138,920", level: "Lvl 48", streak: "19 days" },
            { rank: 4, name: "VoidWalker", img: "https://i.pravatar.cc/150?img=5", score: "135,400", level: "Lvl 45", streak: "17 days" },
            { rank: 5, name: "PhantomGlitch", img: "https://i.pravatar.cc/150?img=8", score: "132,850", level: "Lvl 41", streak: "15 days" }
        ]
    },
    'weekly': {
        top3: [
            { name: "ShadowBlade", score: "35,400", img: "https://i.pravatar.cc/150?img=12" },
            { name: "CyberNinja", score: "32,100", img: "https://i.pravatar.cc/150?img=33" },
            { name: "AstraBoy", score: "29,850", img: "https://i.pravatar.cc/150?img=20" }
        ],
        table: [
            { rank: 1, name: "ShadowBlade", img: "https://i.pravatar.cc/150?img=12", score: "35,400", level: "Lvl 50", streak: "7 days" },
            { rank: 2, name: "CyberNinja", img: "https://i.pravatar.cc/150?img=33", score: "32,100", level: "Lvl 52", streak: "6 days" },
            { rank: 3, name: "AstraBoy", img: "https://i.pravatar.cc/150?img=20", score: "29,850", level: "Lvl 38", streak: "5 days" },
            { rank: 4, name: "NeonViper", img: "https://i.pravatar.cc/150?img=11", score: "27,200", level: "Lvl 42", streak: "4 days" },
            { rank: 5, name: "PixelKing", img: "https://i.pravatar.cc/150?img=25", score: "25,100", level: "Lvl 30", streak: "3 days" }
        ]
    },
    'today': {
        top3: [
            { name: "SpeedDemon", score: "8,900", img: "https://i.pravatar.cc/150?img=15" },
            { name: "PhantomGlitch", score: "7,850", img: "https://i.pravatar.cc/150?img=8" },
            { name: "VoidWalker", score: "7,100", img: "https://i.pravatar.cc/150?img=5" }
        ],
        table: [
            { rank: 1, name: "SpeedDemon", img: "https://i.pravatar.cc/150?img=15", score: "8,900", level: "Lvl 29", streak: "1 day" },
            { rank: 2, name: "PhantomGlitch", img: "https://i.pravatar.cc/150?img=8", score: "7,850", level: "Lvl 41", streak: "1 day" },
            { rank: 3, name: "VoidWalker", img: "https://i.pravatar.cc/150?img=5", score: "7,100", level: "Lvl 45", streak: "1 day" },
            { rank: 4, name: "CyberNinja", img: "https://i.pravatar.cc/150?img=33", score: "6,400", level: "Lvl 52", streak: "1 day" },
            { rank: 5, name: "GamerX", img: "https://i.pravatar.cc/150?img=30", score: "5,900", level: "Lvl 18", streak: "1 day" }
        ]
    },
    'friends': {
        top3: [
            { name: "Bestie_Sarah", score: "95,000", img: "https://i.pravatar.cc/150?img=47" },
            { name: "Ahmed_Pro", score: "88,400", img: "https://i.pravatar.cc/150?img=53" },
            { name: "Omar_Hero", score: "82,150", img: "https://i.pravatar.cc/150?img=59" }
        ],
        table: [
            { rank: 1, name: "Bestie_Sarah", img: "https://i.pravatar.cc/150?img=47", score: "95,000", level: "Lvl 35", streak: "12 days" },
            { rank: 2, name: "Ahmed_Pro", img: "https://i.pravatar.cc/150?img=53", score: "88,400", level: "Lvl 40", streak: "10 days" },
            { rank: 3, name: "Omar_Hero", img: "https://i.pravatar.cc/150?img=59", score: "82,150", level: "Lvl 31", streak: "8 days" },
            { rank: 4, name: "Mona_Gamer", img: "https://i.pravatar.cc/150?img=44", score: "76,200", level: "Lvl 27", streak: "5 days" },
            { rank: 5, name: "Ali_Master", img: "https://i.pravatar.cc/150?img=68", score: "70,100", level: "Lvl 22", streak: "3 days" }
        ]
    }
};

// 1. Update active button state
//all buttins in HTML  are stored in one variable using "querySelectorAll" .
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    const clickedBtn = event.currentTarget;
    if (clickedBtn) {
        clickedBtn.classList.add('active');
    }

    // 2. Retrieve state data for the selected filter type
    const currentData = leaderboardData[type];
    if (!currentData) return;

    // 3. Update top 3 podium elements in DOM
    const rank1 = document.querySelector('.rank-1');
    const rank2 = document.querySelector('.rank-2');
    const rank3 = document.querySelector('.rank-3');

    // Update Rank 1 player details
    rank1.querySelector('.avatar-img').src = currentData.top3[0].img;
    rank1.querySelector('.avatar-img').alt = currentData.top3[0].name;
    rank1.querySelector('.player-name').textContent = currentData.top3[0].name;
    rank1.querySelector('.player-score').textContent = currentData.top3[0].score;

    // Update Rank 2 player details
    rank2.querySelector('.avatar-img').src = currentData.top3[1].img;
    rank2.querySelector('.avatar-img').alt = currentData.top3[1].name;
    rank2.querySelector('.player-name').textContent = currentData.top3[1].name;
    rank2.querySelector('.player-score').textContent = currentData.top3[1].score;

    // Update Rank 3 player details
    rank3.querySelector('.avatar-img').src = currentData.top3[2].img;
    rank3.querySelector('.avatar-img').alt = currentData.top3[2].name;
    rank3.querySelector('.player-name').textContent = currentData.top3[2].name;
    rank3.querySelector('.player-score').textContent = currentData.top3[2].score;

    // 4. Clear and rebuild table rows
    const tbody = document.querySelector('.custom-table tbody');
    tbody.innerHTML = '';

    currentData.table.forEach(player => {
        let rankHTML = '';
        if (player.rank === 1) {
            rankHTML = `<span class="rank-circle rank-1-bg">1</span>`;
        } else if (player.rank === 2) {
            rankHTML = `<span class="rank-circle rank-2-bg">2</span>`;
        } else if (player.rank === 3) {
            rankHTML = `<span class="rank-circle rank-3-bg">3</span>`;
        } else {
            rankHTML = `<span class="rank-normal">#${player.rank}</span>`;
        }

        const rowHTML = `
            <tr>
                <td>${rankHTML}</td>
                <td>
                    <div class="d-flex align-items-center gap-2">
                        <img src="${player.img}" class="player-avatar" alt="${player.name}">
                        <span class="fw-bold text-white">${player.name}</span>
                    </div>
                </td>
                <td class="fw-bold text-white">${player.score}</td>
                <td class="text-secondary">${player.level}</td>
                <td><span class="badge badge-purple">${player.streak}</span></td>
            </tr>
        `;

        tbody.innerHTML += rowHTML;
    });
}