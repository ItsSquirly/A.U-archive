// ============================
// script.js for American Union Archive
// ============================

// Array of archive files (inside "A.U archive" folder)
const archives = [
    { name: 'Fort Henry Archive', file: 'American Union Army - Fort Herny - fort-henry [1350252630009708555].html'},
    { name: 'logs Archive', file: 'American Union Army - Fort Herny - logs [1350252659524894811].html'},
    { name: 'Quotes Archive', file: 'American Union Army - Fort Herny - quotes [1395605165318471902].html'},
    { name: 'c-h-i-n-a Archive', file: 'American Union Army - Fort Herny - c-h-i-n-a [1350252934658789479].html'},
    { name: 'Report documentation Archive', file: 'American Union Army - Fort Herny - report-documentation [1419877971401117736].html'},
    { name: 'Rules Archive', file: 'American Union Army - Rules and Information - rules-⚖ [1348854539905794119].html'},
    { name: 'squad-positions-and-organization Archive', file: 'American Union Army - Rules and Information - squad-positions-and-organization [1431092477603086356].html'},
    { name: 'Announcements Archive', file: 'American Union Army - Rules and Information - 📢announcements📢 [1348851964943011881].html'},
    { name: 'Game Nights Friday Archive', file: 'American Union Army - Rules and Information - game-night-friyays🎊 [1428768611626913802].html'},
    { name: 'Community Announcement Archive', file: 'American Union Army - Rules and Information - community-announcement [1420099135377375232].html'},
    { name: 'War logs Archive', file: 'American Union Army - Rules and Information - war-logs-🪖 [1416459790128779325].html'},
    { name: 'Useful Information Archive', file: 'American Union Army - Rules and Information - useful-information🗞️ [1384771566113390712].html'},
    { name: 'Allies and Enemies Archive', file: 'American Union Army - Rules and Information - allies-and-enemies [1348862711165091910].html'},
    { name: 'Ally Servers Archive', file: 'American Union Army - Rules and Information - 𝐀𝐥𝐥𝐲-𝐒𝐞𝐫𝐯𝐞𝐫𝐬 [1348863131220185163].html'},
    { name: 'Youtube Channels Archive', file: 'American Union Army - Rules and Information - 𝕐𝕠𝕦𝕋𝕦𝕓𝕖-ℂ𝕙𝕒𝕟𝕟𝕖𝕝𝕤 [1409259766580252842].html'},
    { name: 'Roblox profiles Archive', file: 'American Union Army - Rules and Information - ℝ𝕠𝕓𝕝𝕠𝕩-𝕡𝕣𝕠𝕗𝕚𝕝𝕖𝕤 [1410790092494344304].html'},
    { name: 'sub discord Archive', file: 'American Union Army - Rules and Information - sub-discord-❓ [1407863677100494898].html'},
    { name: 'News Archive', file: 'American Union Army - Rules and Information - news📰 [1348854289606508554].html'},
    { name: 'hall of fame Archive', file: 'American Union Army - Rules and Information - hall-of-fame [1407920293636477038].html'},
    { name: 'tww sneak peaks Archive', file: 'American Union Army - The Wild West Related News - tww-sneak-peaks [1426968704553586821].html'},
    { name: 'tww game news Archive', file: 'American Union Army - The Wild West Related News - tww-game-news [1436376686567624816].html'},
    { name: 'forward-operating-group Archive', file: 'American Union Army - Squads_ - forward-operating-group [1431037011288129637].html'},
    { name: 'music-boyz Archive', file: 'American Union Army - Squads_ - music-boyz [1431037121124372541].html'},
    { name: 'Poll Archive', file: 'A.U polls archive [1423084840567439521].html' },
    { name: 'General Archive', file: 'American Union Army - Text Channels - 𝙶𝚎𝚗𝚎𝚛𝚊𝚕🗣️ [1385308211204067359].html' },
    { name: 'Meme Archive', file: 'A.U meme Archive [1348854185080393798].html' },
    { name: 'raids Archive', file: 'A.U raids Archive [1423467504453288016].html' },
    { name: 'Photo Archive', file: 'A.U photos Archive [1348854860321390652].html'},
    { name: 'Videos Archive', file: 'A.U videos Archive [1348859599822000219].html'},
    { name: 'Music Archive', file: 'A.U music Archive [1409244054922858659].html'},
    { name: 'trading channel Archive', file: 'A.U trading-channel Archive [1436792099126251662].html'},
    { name: 'A.U Army VC Archive', file: 'American Union Army - Voice Channels - American Union Army VC [1348860298571812925].html'},
    { name: 'Events VC Archive', file: 'American Union Army - Voice Channels - Events VC 🎉🎗️ [1410805705065107458].html'},
    { name: 'A.U Navy VC Archive', file: 'American Union Army - Voice Channels - American Union Navy VC [1418025408590512168].html'},
    { name: 'Member VC Archive', file: 'American Union Army - Voice Channels - Member VC [1348827084121964558].html'},
    { name: 'Architect VC Archive', file: 'American Union Army - Voice Channels - Architect VC [1348859943746539647].html'},
    { name: 'Officer VC Archive', file: 'American Union Army - Voice Channels - Officer VC [1348859864365142026].html'},
    { name: 'Allied Communication Archive', file: 'American Union Army - Voice Channels - Allied Communication [1348861575079137290].html'},
    { name: 'Argue Archive', file: 'American Union Army - Spam - argue-😤 [1348860698989695026].html'},
    { name: 'Join and leave Archive', file: 'American Union Army - Spam - join-and-leave [1350253845971730452].html'},
    { name: 'Command VC archive', file: 'American Union Army - Command - command VC [1348853896595902598].html'},
    { name: 'The law Archive', file: 'American Union Army - Command - the-law-👮 [1348862018135789639].html'},
    { name: 'Command general Archive', file: 'American Union Army - Command - command-general [1348853837099958302].html'},
];

const archiveListDiv = document.getElementById('archive-list');

function renderArchives(){
    archiveListDiv.innerHTML = '';

    archives.forEach(archive => {
        const div = document.createElement('div');
        div.className = 'archive-link';

        // Open link
        const link = document.createElement('a');
        link.href = archive.file;
        link.textContent = archive.name;
        link.target = '_blank';

        // Download button
        const downloadBtn = document.createElement('a');
        downloadBtn.href = archive.file;
        downloadBtn.download = archive.file.split('/').pop(); // just the file name
        downloadBtn.textContent = 'Download';
        downloadBtn.className = 'download';

        div.appendChild(link);
        div.appendChild(downloadBtn);

        archiveListDiv.appendChild(div);
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    renderArchives();
});

