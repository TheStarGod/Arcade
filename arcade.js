// PRANAV AND ADVIK'S ARCADE: Flappy Bird, Snake, Parkour, Dino Run, Asteroid Dodge, Troll Traps, Block Drop, Galaxy Blaster, Pong, Brick Breaker, Tank Arena, 2048, Tower Defense, Boss Battle & Rhythm Rush
/*
yo aedan!
sup


-------------------------------------------------------------------
CHAT:
-----------------------------------------------------------------
AJ:DOWNLOAD MARVEL RIVALS ON STEAM OR PLAYSTATION OR XBOX
advik:



--------------------------------------------------------------
RULES:
1.DONT DELETE CODE OR CHANGE LEADERBOARDS
-------------------------------------------------------------
HARD MODE LEADERBOARD FOR FLAPPY BIRD(ONLY PRANAV CAN UPDATE)
-------------------------------------------------------------
1.PRANAV: 19
2.INDU: 12
3.ADVIK: 11
4.AEDAN: 9
5.

-------------------------------------------------------------
HARD MODE LEADERBOARD FOR SNAKE(ONLY AEDAN CAN UPDATE)
-------------------------------------------------------------
1.AEDAN: 68
2.INDU: 23
ADVIK: 19
3.PRANAV: 16
4.Dheena:16
5.
---------------------------------------------------------------
HARD MODE LEADERBOARD FOR TROLL TRAPS(ONLY PRANAV CAN UPDATE)


*/
// -------------------------------------------------------------
// UPDATE LOG (newest first). Add a new entry here for every update!
// -------------------------------------------------------------
var ARCADE_VERSION = "v12.4";
var UPDATE_LOG = [
    {v: "v12.4", title: "ONE SIGN-IN", lines: [
        "THE START PAGE ASKS YOUR NAME ONCE FOR THE WHOLE SITE",
        "THE ARCADE USES IT, NO MORE PROMPTS",
        "FULL-SCREEN ARCADE WITH THE NEW LOOK"]},
    {v: "v12.3", title: "GAME LAUNCHER", lines: [
        "NEW START SCREEN: PICK THE ARCADE OR STORM DUEL",
        "BACK BUTTON ON THE HUB RETURNS TO THE START SCREEN",
        "(THE BACK BUTTON ONLY SHOWS ON THE WEBSITE, NOT IN CODEHS)"]},
    {v: "v12.2", title: "TIDIER HUB", lines: [
        "BRICK BREAKER MOVED INSIDE PONG",
        "PONG MENU: PLAY AGAINST BOT, PLAY LOCAL, BRICK BREAKER"]},
    {v: "v12.1", title: "LOOP FIXES", lines: [
        "FIXED INFINITELOOP ERRORS: NO MORE OPEN-ENDED LOOPS",
        "SNAKE AND TOWER BOARDS DRAW WITH HALF THE SHAPES",
        "FEWER PARTICLES SO CODEHS KEEPS UP"]},
    {v: "v12", title: "NEON FUSION", lines: [
        "MERGED WITH THE NEON EDITION ARCADE",
        "NEW LOOK: STARFIELD, GLOWING TITLE, SYNTHWAVE HUB",
        "ACCOUNTS: LOG IN TO SAVE SCORES AND CUSTOMIZATIONS",
        "NEW GAMES: BRICK BREAKER AND TANK ARENA",
        "TROLL TRAPS: NOW 100 LEVELS IN 10 WORLDS",
        "RUNNING LEADERBOARD FOR EVERY GAME",
        "NEON ASTEROID DODGE REPLACES THE OLD ONE",
        "SNAKE: SLITHERING PREVIEW + STONE DEATH ANIMATION"]},
    {v: "v11.1", title: "BOSS RUSH", lines: [
        "BOSS BATTLE NOW HAS 4 BOSSES TO CHOOSE FROM:",
        "  BARON VON BLOB, CAPTAIN KRAKEN, SIR CLANKSALOT",
        "  AND MADAME MOONFLARE",
        "EACH HAS ITS OWN STAGE AND NEW ATTACKS"]},
    {v: "v11", title: "CUSTOMIZE EVERYTHING", lines: [
        "NEW CUSTOMIZER FOR ALL 13 GAMES WITH A LIVE PREVIEW",
        "COLORS, HATS, THEMES, SKIES, MAPS AND MORE",
        "MENU BUTTON IN EVERY GAME (OR PRESS ESC)"]},
    {v: "v10.2", title: "SPACE TRAFFIC", lines: [
        "SPACESHIPS NOW FLY AROUND THE HOME SCREEN"]},
    {v: "v10.1", title: "DANCER FACE", lines: [
        "RHYTHM RUSH DANCER NOW HAS A FACE",
        "SINGS WHEN YOU HIT, LOOKS SHOCKED WHEN YOU MISS"]},
    {v: "v10", title: "RHYTHM RUSH", lines: [
        "NEW GAME: RHYTHM RUSH - HIT THE ARROWS ON THE BEAT",
        "3 SONGS, GRADES FROM S TO D, COMBOS AND A DANCER",
        "TROLL TRAPS: TRUST ISSUES LEVEL MADE EASIER",
        "ADDED THIS UPDATE LOG AND A VERSION NUMBER"]},
    {v: "v9", title: "TOWERS AND BOSSES", lines: [
        "NEW GAME: TOWER DEFENSE - 3 TOWERS, 15 WAVES",
        "NEW GAME: BOSS BATTLE - SURVIVE BARON VON BLOB",
        "BOSS BATTLE HAS DASHING AND PINK-BULLET PARRIES"]},
    {v: "v8", title: "CLASSICS", lines: [
        "NEW GAME: PONG - VS CPU OR 2 PLAYERS",
        "NEW GAME: 2048"]},
    {v: "v7", title: "PRANAV AND ADVIK'S ARCADE", lines: [
        "RENAMED TO PRANAV AND ADVIK'S ARCADE",
        "CLEANER HOME SCREEN WITH GAME CARDS",
        "NEW FLAPPY BIRD GRAPHICS AND NINJA PARKOUR RUNNER",
        "NEW GAMES: BLOCK DROP AND GALAXY BLASTER",
        "FIXED THE CODEHS ERRORS (LINE 87 + LEFTOVER CODE)"]},
    {v: "v6", title: "RAGE MODE", lines: [
        "TROLL TRAPS NOW HAS 20 LEVELS",
        "NEW TRAPS: FAKE FLOORS, HIDDEN BLOCKS, ICICLES,",
        "  FAKE DOORS, PUSHING WALLS, REVERSED CONTROLS",
        "PRESS R TO RESTART, LET GO OF JUMP FOR SHORT HOPS"]},
    {v: "v5", title: "HARDER PARKOUR", lines: [
        "SMALLER PLATFORMS AND BIGGER JUMPS",
        "TRAPS SHOW UP EARLIER",
        "NEW HAZARD: LAVA FIREBALLS FROM STAGE 16"]},
    {v: "v4", title: "TROLL TRAPS", lines: [
        "NEW GAME: TROLL TRAPS - 10 SNEAKY LEVELS"]},
    {v: "v3", title: "BIG EXPANSION", lines: [
        "PARKOUR FINISHED: 50 DIFFERENT STAGES",
        "NEW GAMES: DINO RUN AND ASTEROID DODGE",
        "POP-OUT ANIMATIONS ON MENUS AND SCREENS"]},
    {v: "v2", title: "BUG FIXES", lines: [
        "PARKOUR LAVA NOW ACTUALLY KILLS YOU",
        "SNAKE NO LONGER SLOWS DOWN + REAL HIGH SCORE",
        "FLAPPY BIRD MENU/PAUSE FIXES, NO MORE PIPE GAPS",
        "BUTTON CLICK AREAS LINED UP"]},
    {v: "v1", title: "THE ORIGINAL", lines: [
        "FLAPPY BIRD, SNAKE AND PARKOUR (WORK IN PROGRESS)",
        "BIRD AND SNAKE CUSTOMIZERS, HARD MODE LEADERBOARDS"]}
];
var updatePage = 0;

// Split the log into pages that fit on the screen
function buildUpdatePages() {
    var pages = [[]], y = 0;
    for (var i = 0; i < UPDATE_LOG.length; i++) {
        var h = 26 + UPDATE_LOG[i].lines.length * 15 + 10;
        if (y + h > 250 && pages[pages.length - 1].length > 0) { pages.push([]); y = 0; }
        pages[pages.length - 1].push(UPDATE_LOG[i]);
        y += h;
    }
    return pages;
}

function showUpdateLog(page) {
    neonMenu("UPDATE LOG", "#facc15", 20, 410);
    currentAppState = "UPDATES";
    var pages = buildUpdatePages();
    updatePage = clamp(page, 0, pages.length - 1);
    var g = [];
    addText("CURRENT VERSION: " + ARCADE_VERSION, "8pt Courier", "center", 84, "#64748b", g);

    var y = 104;
    var list = pages[updatePage];
    for (var i = 0; i < list.length; i++) {
        var e = list[i];
        var isNew = (e.v === ARCADE_VERSION);
        addRect(4, 16 + e.lines.length * 15, 36, y - 14, isNew ? "#facc15" : "#38bdf8", g);
        addText(e.v + " - " + e.title, "10pt Courier", 48, y, isNew ? "#facc15" : "#ffffff", g);
        y += 18;
        for (var k = 0; k < e.lines.length; k++) {
            var line = e.lines[k];
            addText((line.charAt(0) === " " ? "  " : "- ") + line.trim(), "7pt Courier", 48, y, "#cbd5e1", g);
            y += 15;
        }
        y += 18;
    }

    addText("PAGE " + (updatePage + 1) + " OF " + pages.length, "8pt Courier", "center", 384, "#64748b", g);
    if (updatePage > 0) makeButton("updPrev", 40, 360, 70, 26, "#334155", "< NEWER", "8pt Courier", 17, g);
    if (updatePage < pages.length - 1) makeButton("updNext", 290, 360, 70, 26, "#334155", "OLDER >", "8pt Courier", 17, g);
    makeButton("back", 120, 400, 160, 22, "#374151", "BACK", "10pt Courier", 16, g);
    popIn(g, 0, 480, 22);
}


// -------------------------------------------------------------
// GLOBAL ARCADE STATE & USER PROFILE
// -------------------------------------------------------------
var currentAppState = "HUB";
var playerName = "PLAYER 1";
var selectedGame = "";
var GAME_NAMES = ["FLAPPY", "SNAKE", "PARKOUR", "DINO", "TROLL", "BLOCKS", "BLASTER", "PONG", "TOWER", "BOSS", "RHYTHM"];
var NEON_STATES = ["BRICK", "TANK", "ASTRO", "NEON_MENU"];

// Snake Color Customizer
var colorBoxText;

// Bird Customizer
var birdColorBoxText, birdHatBoxText;
var birdColors = ["#f1c40f", "#38bdf8", "#ef4444", "#10b981", "#a855f7", "#ffffff"];
var birdColorNames = ["CLASSIC YELLOW", "SKY BLUE", "FIRE RED", "EMERALD", "PURPLE", "WHITE"];
var currentBirdColorIndex = 0;
var birdHats = ["NONE", "CROWN", "TOP HAT", "SUNGLASSES"];
var currentBirdHatIndex = 0;

// Shared overlays
var pauseShapes = [];
var nameTagBadge;


// -------------------------------------------------------------
// UI ANIMATION SYSTEM (pop-ins, hover lift, particles)
// -------------------------------------------------------------
var buttons = [];      // clickable buttons on the current screen
var tweens = [];       // shapes sliding into place
var particles = [];    // confetti / explosions
var uiFrame = 0;
var hubStars = [];
var hubTitle = null;
var hubAccent = null;
var hubShips = [];
var newBadges = [];
var TITLE_COLORS = ["#facc15", "#f472b6", "#38bdf8", "#34d399"];
var CONFETTI = ["#facc15", "#f472b6", "#38bdf8", "#34d399", "#a855f7", "#ffffff"];


// -------------------------------------------------------------
// FLAPPY BIRD VARIABLES
// -------------------------------------------------------------
var birdBody, birdBeak, birdEye, birdPupil, birdWing, birdOutline, birdHatAccessory;
var flappyGravity = 0.45;
var flappyLift = -7.5;
var flappyVelocity = 0;
var pipePairs = [];
var pipeTimer = 0;
var pipeInterval = 85;
var gapHeight = 135;
var pipeSpeed = 3.5;
var flappyScore = 0;
var flappyHighScore = 0;
var flappyScoreText;
var sunRays = [];
var sunAnimTimer = 0;
var wingAnimCounter = 0;
var clouds = [];
var blinkTimer = 0;
var groundParts = [];
var groundStripes = [];
var birdParts = [];
var PIPE_SWAY = 30;      // how far a pipe drifts up/down from where it spawned
var PIPE_OVERHANG = 35;  // pipes extend past the screen edges so swaying never shows a gap


// -------------------------------------------------------------
// SNAKE VARIABLES
// -------------------------------------------------------------
var scoreText;
var snakeX = 0;
var snakeY = 0;
var userinputX = 20;
var userinputY = 0;
var snakeScore = 0;
var snakeHighScore = 0;
var snakeLength = 3;
var gameSpeed = 100;
var coords = [];          // each segment: {x, y, shapes: [...]}
var appleShapes = [];
var applePositionX = 0;
var applePositionY = 0;
var direction = "right";
var lastMovedDirection = "right";


// -------------------------------------------------------------
// PARKOUR VARIABLES (50 unique stages)
// -------------------------------------------------------------
var stickmanX = 40;
var stickmanY = 380;
var stickmanVX = 0;
var stickmanVY = 0;
var stickmanGravity = 0.62;
var stickmanJump = -11.6;
var stickmanSpeed = 4.4;
var isJumping = false;
var onGround = false;
var STICK_FOOT = 17;   // distance from stickmanY down to the bottom of his feet
var LAVA_Y = 440;
var BOUNCE_VY = -16;

var parkourLevel = 1;
var maxParkourLevel = 50;
var parkourBest = 0;
var parkourPlatforms = [];
var parkourStanding = null;
var goalPortal, portalInner;
var parkourLevelText;
var lavaTop, lavaBubbles = [];

var stickmanHead, stickmanTorso, stickmanLArm, stickmanRArm, stickmanLLeg, stickmanRLeg;
var walkCycle = 0;
var keyLeftPressed = false;
var keyRightPressed = false;

// Each stage gets a style. Every 10th stage is a GAUNTLET that mixes everything.
var PARKOUR_STYLES = [
    {name: "THE CLIMB",   bg: "#111827"},
    {name: "LONG RUN",    bg: "#0f172a"},
    {name: "SWITCHBACKS", bg: "#1e1b2e"},
    {name: "THE DROP",    bg: "#0b1f1f"},
    {name: "SKY TOWER",   bg: "#1c1917"},
    {name: "GAUNTLET",    bg: "#2a0f14"}
];
// The stage where each new obstacle first shows up
var FEATURE_INTRO = {
    3:  {kind: "mover",    label: "MOVING PLATFORMS!"},
    5:  {kind: "crumble",  label: "CRUMBLING FLOORS!"},
    6:  {kind: "bounce",   label: "BOUNCE PADS!"},
    7:  {kind: "spike",    label: "SPIKES!"},
    9:  {kind: "vmover",   label: "ELEVATORS!"},
    16: {kind: "fireball", label: "LAVA FIREBALLS!"}
};
var parkourFireballs = [];


// -------------------------------------------------------------
// DINO RUN VARIABLES
// -------------------------------------------------------------
var DINO_GROUND = 390;
var DINO_X = 50;
var DINO_COLOR = "#22c55e";
function applyDinoColors() {
    DINO_COLOR = cust("DINO", "color").color;
    DINO_DARK = shade(DINO_COLOR, 0.65);
}
var DINO_DARK = "#15803d";
var DINO_DAY = "#bae6fd";
var DINO_NIGHT = "#1e1b4b";
var dinoParts = [];
var dinoPoseKey = "";
var dinoDrawnBottom = 0;
var dinoBottom = DINO_GROUND;
var dinoVY = 0;
var dinoOnGround = true;
var dinoDownHeld = false;
var dinoDead = false;
var dinoObstacles = [];
var dinoSpeed = 6;
var dinoMaxSpeed = 12;
var dinoScore = 0;
var dinoHighScore = 0;
var dinoNextGap = 0;
var dinoDistSinceSpawn = 0;
var dinoFrame = 0;
var dinoScoreText, dinoHiText, dinoSky, dinoSun;
var dinoSkyT = 1;
var dinoIsNight = false;
var dinoNextFlip = 400;
var dinoNextMilestone = 100;
var dinoFlash = 0;
var dinoClouds = [];
var dinoDots = [];


// -------------------------------------------------------------
// ENTRY POINT
// -------------------------------------------------------------
// Back to the launcher page. Only on the GitHub Pages website; inside CodeHS there is no launcher.
var ON_WEBSITE = (typeof location !== "undefined" && /github\.io$/.test(location.hostname));
function goToLauncher() { if (ON_WEBSITE) location.href = "arcade.html"; }

function start() {
    login();          // name tag + optional password (saves scores and customizations)
    showArcadeHub();
    mouseClickMethod(onMouseClick);
    mouseMoveMethod(onMouseMove);
    keyDownMethod(onKeyDown);
    keyUpMethod(onKeyUp);
    setTimer(uiLoop, 20);   // animation loop for menus, runs the whole time
}


// -------------------------------------------------------------
// SHARED HELPERS
// -------------------------------------------------------------
// Only one game loop should ever run. Call this before switching screens.
function stopAllGameTimers() {
    stopTimer(flappyGameLoop);
    stopTimer(snakeGameLoop);
    stopTimer(parkourGameLoop);
    stopTimer(dinoGameLoop);
    stopTimer(trollGameLoop);
    stopTimer(blocksGameLoop);
    stopTimer(blasterGameLoop);
    stopTimer(pongGameLoop);
    stopTimer(towerGameLoop);
    stopTimer(bossGameLoop);
    stopTimer(rhythmGameLoop);
}

// Wipe the screen AND everything the animation system was tracking
function clearScreen() {
    removeAll();
    buttons = [];
    tweens = [];
    particles = [];
    hubStars = [];
    newBadges = [];
    hubTitle = null;
    hubAccent = null;
    hubShips = [];
    snakePreview = []; snakePreviewEyes = [];
    // ...and everything the neon runtime was tracking
    uiButtons = []; nParticles = []; popups = []; stars = []; hubIcons = [];
    flashRect = null; flashAlpha = 0; fadeRect = null; fadeAlpha = 0;
    overlay = null; pauseLayer = null; menuTitle = null;
    keys = {};
}

// The neon games (Brick, Tank, Trap Run, Asteroid) keep their own "scene" name.
// After anything that might have switched scenes, copy it into our app state.
function syncNeon() {
    if (GAME_SCENES.indexOf(scene) !== -1) currentAppState = scene;
    else if (MENU_SCENES.indexOf(scene) !== -1) currentAppState = "NEON_MENU";
}

function inNeon() { return NEON_STATES.indexOf(currentAppState) !== -1; }

// Shared menu backdrop: starfield, glowing rainbow title, dark panel
function neonMenu(title, accent, panelY, panelH) {
    clearScreen();
    drawStarfield("#05050f");
    if (panelH) drawPanel(40, panelY, 320, panelH, accent);
    menuTitle = makeTitle(title, panelY ? panelY + 42 : 44, 16);
}

// Runs the neon runtime every tick: its games, menus, particles and overlays
function neonTick() {
    frame++;
    if (stars.length) updateStars();
    if (menuTitle) animateTitle(menuTitle);
    for (var i = 0; i < hubIcons.length; i++) {
        var dy = Math.cos(frame * 0.08 + hubIcons[i].seed) * 0.24;
        for (var j = 0; j < hubIcons[i].objs.length; j++) hubIcons[i].objs[j].move(0, dy);
    }
    if (GAME_SCENES.indexOf(currentAppState) !== -1) {
        neonMenuButton();
        if (phase === "PAUSED") {
            if (pauseLayer) pauseLayer.title.setColor(frame % 40 < 20 ? "#fbbf24" : "#f97316");
        }
        else if (scene === "BRICK") updateBrick();
        else if (scene === "TANK") updateTank();
        else if (scene === "ASTRO") updateAsteroid();
    }
    if (phase !== "PAUSED") nUpdateParticles();
    updatePopups();
    updateFlash();
    updateFade();
    updateOverlay();
}

// Little MENU button for the neon games (re-added whenever a level reload wipes it)
var neonMenuBtn = null;
function neonMenuButton() {
    if (neonMenuBtn && uiButtons.indexOf(neonMenuBtn) !== -1) return;
    neonMenuBtn = nMakeButton(336, 460, 58, 16, "#374151", "MENU", showArcadeHub, 7, { noArrows: true });
}

function startNeonGame(which) {
    if (which === "BRICK") initBrickBreakerGame();
    else if (which === "TANK") initTankGame();
    syncNeon();
}

function inBox(mX, mY, x, y, w, h) {
    return mX >= x && mX <= x + w && mY >= y && mY <= y + h;
}

function removeShapes(list) {
    for (var i = 0; i < list.length; i++) remove(list[i]);
}

function moveShapes(list, dx, dy) {
    for (var i = 0; i < list.length; i++) {
        if (list[i]) list[i].move(dx, dy);
    }
}

function bringToFront(list) {
    for (var i = 0; i < list.length; i++) {
        if (list[i]) { remove(list[i]); add(list[i]); }
    }
}

function rand(a, b) { return a + Math.random() * (b - a); }
function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

function addRect(w, h, x, y, color, list) {
    var r = new Rectangle(w, h); r.setPosition(x, y); r.setColor(color); add(r);
    if (list) list.push(r);
    return r;
}

function addCircle(radius, x, y, color, list) {
    var c = new Circle(radius); c.setPosition(x, y); c.setColor(color); add(c);
    if (list) list.push(c);
    return c;
}

// Pass "center" as x to center the text on the 400px screen
function addText(str, font, x, y, color, list) {
    var t = new Text(str, font); t.setColor(color);
    t.setPosition(x === "center" ? (400 - t.getWidth()) / 2 : x, y); add(t);
    if (list) list.push(t);
    return t;
}

function hexToRgb(hex) {
    return [parseInt(hex.substr(1, 2), 16), parseInt(hex.substr(3, 2), 16), parseInt(hex.substr(5, 2), 16)];
}

// Darker (f < 1) or lighter (f > 1) version of a hex color
function shade(hex, f) {
    var c = hexToRgb(hex);
    return "rgb(" + Math.round(clamp(c[0] * f, 0, 255)) + "," + Math.round(clamp(c[1] * f, 0, 255)) + "," + Math.round(clamp(c[2] * f, 0, 255)) + ")";
}

// Blend between two hex colors (t = 0 gives a, t = 1 gives b)
function lerpColor(a, b, t) {
    var x = hexToRgb(a), y = hexToRgb(b);
    return "rgb(" + Math.round(x[0] + (y[0] - x[0]) * t) + "," + Math.round(x[1] + (y[1] - x[1]) * t) + "," + Math.round(x[2] + (y[2] - x[2]) * t) + ")";
}

function pad5(n) {
    var s = "" + n;
    while (s.length < 5) s = "0" + s;
    return s;
}


// -------------------------------------------------------------
// BUTTONS (with a 3D edge that lifts when you hover)
// -------------------------------------------------------------
function makeButton(id, x, y, w, h, color, label, font, baseOff, list) {
    addRect(w, h, x, y + 4, shade(color, 0.55), list);   // darker edge underneath
    var rect = addRect(w, h, x, y, color, list);
    var txt = new Text(label, font); txt.setColor("#ffffff");
    txt.setPosition(x + (w - txt.getWidth()) / 2, y + baseOff); add(txt);
    if (list) list.push(txt);
    var b = {id: id, x: x, y: y, w: w, h: h, rect: rect, txt: txt, baseOff: baseOff, lifted: false, lift: [rect, txt]};
    buttons.push(b);
    return b;
}

// Home screen game card: dark tile with a colored stripe, name and a short tagline
function makeCard(id, x, y, w, h, color, name, tagline, isNew, list) {
    addRect(w, h, x, y + 3, "#05070d", list);                // shadow
    var rect = addRect(w, h, x, y, "#172033", list);
    var bar = addRect(5, h, x, y, color, list);
    var txt = addText(name, "11pt Courier", x + 16, y + Math.round(h * 0.45), "#ffffff", list);
    var sub = addText(tagline, "8pt Courier", x + 16, y + Math.round(h * 0.76), "#94a3b8", list);
    var lift = [rect, bar, txt, sub];
    if (isNew) {
        var badge = addRect(30, 13, x + w - 38, y + h - 21, color, list);
        var bt = addText("NEW", "7pt Courier", x + w - 33, y + h - 11, "#0b1020", list);
        lift.push(badge, bt);
    }
    var b = {id: id, x: x, y: y, w: w, h: h, rect: rect, txt: txt, baseOff: 26, lifted: false, lift: lift};
    buttons.push(b);
    return b;
}

function getButton(id) {
    for (var i = 0; i < buttons.length; i++) if (buttons[i].id === id) return buttons[i];
    return null;
}

function buttonAt(mX, mY) {
    for (var i = buttons.length - 1; i >= 0; i--) {
        var b = buttons[i];
        if (inBox(mX, mY, b.x, b.y, b.w, b.h + 4)) return b.id;
    }
    return null;
}

// Small MENU button shown during every game
var menuBtnShapes = [];
function addMenuButton(x, y) {
    menuBtnShapes = [];
    makeButton("ingameMenu", x, y, 62, 20, "#334155", "MENU", "8pt Courier", 14, menuBtnShapes);
    return menuBtnShapes;
}

function removeButtonsById(ids) {
    for (var i = buttons.length - 1; i >= 0; i--) {
        if (ids.indexOf(buttons[i].id) !== -1) buttons.splice(i, 1);
    }
}

// Change a button's label and keep it centered
function setButtonLabel(b, label, color) {
    b.txt.setText(label);
    if (color) b.txt.setColor(color);
    b.txt.setPosition(b.x + (b.w - b.txt.getWidth()) / 2, b.rect.getY() + b.baseOff);
}

function onMouseMove(e) {
    var mX = e.getX(), mY = e.getY();
    if (inNeon()) { nMouseMove(e); return; }
    for (var ub = 0; ub < uiButtons.length; ub++) setHover(uiButtons[ub], inButton(uiButtons[ub], mX, mY));
    if (currentAppState === "TOWER") tdHover(mX, mY);
    for (var i = 0; i < buttons.length; i++) {
        var b = buttons[i];
        var inside = inBox(mX, mY, b.x, b.y, b.w, b.h + 4);
        if (inside !== b.lifted) {
            var dy = inside ? -3 : 3;
            moveShapes(b.lift, 0, dy);
            b.lifted = inside;
        }
    }
}


// -------------------------------------------------------------
// TWEENS & PARTICLES
// -------------------------------------------------------------
function easeOutBack(x) {
    var c1 = 1.70158, c3 = c1 + 1;
    return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
}
function easeInCubic(x) { return x * x * x; }

// Slide a group of shapes by (dx, dy) over some frames
function tweenBy(shapes, dx, dy, frames, delay, ease, onDone) {
    tweens.push({shapes: shapes, dx: dx, dy: dy, frames: frames, delay: delay || 0,
                 ease: ease || easeOutBack, onDone: onDone, t: 0, cx: 0, cy: 0});
}

// Start the group offset by (offX, offY) and spring it back into place with a little overshoot
function popIn(shapes, offX, offY, frames, delay, onDone) {
    moveShapes(shapes, offX, offY);
    tweenBy(shapes, -offX, -offY, frames || 20, delay, easeOutBack, onDone);
}

function updateTweens() {
    for (var i = tweens.length - 1; i >= 0; i--) {
        var tw = tweens[i];
        if (tw.delay > 0) { tw.delay--; continue; }
        tw.t++;
        var k = Math.min(1, tw.t / tw.frames);
        var p = tw.ease(k);
        var tx = tw.dx * p, ty = tw.dy * p;
        moveShapes(tw.shapes, tx - tw.cx, ty - tw.cy);
        tw.cx = tx; tw.cy = ty;
        if (k >= 1) {
            tweens.splice(i, 1);
            if (tw.onDone) tw.onDone();
        }
    }
}

function burst(x, y, count, colors, power, grav) {
    for (var i = 0; i < count; i++) {
        var c = addCircle(rand(1.5, 4), x, y, colors[Math.floor(Math.random() * colors.length)]);
        var a = Math.random() * Math.PI * 2;
        var s = rand(0.4, 1.4) * power;
        particles.push({shape: c, vx: Math.cos(a) * s, vy: Math.sin(a) * s - power * 0.3, g: grav, life: Math.floor(rand(30, 55))});
    }
}

function updateParticles() {
    for (var i = particles.length - 1; i >= 0; i--) {
        var p = particles[i];
        p.vy += p.g;
        p.shape.move(p.vx, p.vy);
        p.life--;
        if (p.life <= 0) { remove(p.shape); particles.splice(i, 1); }
    }
}

function uiLoop() {
    uiFrame++;
    updateTweens();
    updateParticles();
    neonTick();
    if (currentAppState === "CUSTOMIZE" && customGame === "SNAKE") updateSnakePreview();

    if (currentAppState === "HUB") {
        animateHub();
    } else if (currentAppState === "VICTORY" && uiFrame % 18 === 0) {
        burst(rand(60, 340), rand(80, 150), 18, CONFETTI, 4, 0.15);
    }
}


// -------------------------------------------------------------
// CUSTOMIZER (one screen for every game: live preview + arrow pickers)
// -------------------------------------------------------------
var C_COLORS = [
    {name: "RED", color: "#ef4444"}, {name: "ORANGE", color: "#f97316"}, {name: "YELLOW", color: "#facc15"},
    {name: "GREEN", color: "#22c55e"}, {name: "CYAN", color: "#22d3ee"}, {name: "BLUE", color: "#3b82f6"},
    {name: "PURPLE", color: "#a855f7"}, {name: "PINK", color: "#ec4899"}, {name: "WHITE", color: "#f8fafc"},
    {name: "BLACK", color: "#1f2937"}
];

// Each game's options. "start" is the default choice (an index into the options list).
var CUSTOM_DEFS = {
    FLAPPY: [
        {key: "bird", label: "BIRD", options: C_COLORS, start: 2},
        {key: "hat", label: "HAT", options: [{name: "NONE"}, {name: "CROWN"}, {name: "TOP HAT"}, {name: "SUNGLASSES"},
                                             {name: "PARTY HAT"}, {name: "HALO"}, {name: "CAP"}], start: 0},
        {key: "pipes", label: "PIPES", options: [
            {name: "GREEN", color: "#73bf2e", edge: "#2f5d17", shine: "#a6e86b", dark: "#5a9e24"},
            {name: "BLUE", color: "#3b82f6", edge: "#1e3a8a", shine: "#93c5fd", dark: "#2563eb"},
            {name: "RED", color: "#ef4444", edge: "#7f1d1d", shine: "#fca5a5", dark: "#dc2626"},
            {name: "GOLD", color: "#eab308", edge: "#713f12", shine: "#fde68a", dark: "#ca8a04"},
            {name: "PURPLE", color: "#a855f7", edge: "#4c1d95", shine: "#d8b4fe", dark: "#9333ea"}], start: 0},
        {key: "sky", label: "SKY", options: [
            {name: "DAY", color: "#7ad1f1"}, {name: "SUNSET", color: "#f59e7a"}, {name: "NIGHT", color: "#1e3a8a"}], start: 0}
    ],
    SNAKE: [
        {key: "color", label: "SNAKE", options: C_COLORS.concat([{name: "RAINBOW", color: "#f472b6"}]), start: 3},
        {key: "pattern", label: "PATTERN", options: [{name: "SOLID"}, {name: "STRIPES"}], start: 0},
        {key: "board", label: "BOARD", options: [
            {name: "DARK", a: "#0b0f19", b: "#111827", color: "#111827"},
            {name: "GRASS", a: "#166534", b: "#15803d", color: "#15803d"},
            {name: "OCEAN", a: "#0c4a6e", b: "#075985", color: "#075985"},
            {name: "DESERT", a: "#a16207", b: "#b45309", color: "#b45309"}], start: 0}
    ],
    PARKOUR: [
        {key: "shirt", label: "SHIRT", options: C_COLORS, start: 5},
        {key: "band", label: "HEADBAND", options: C_COLORS, start: 0},
        {key: "skin", label: "SKIN", options: [{name: "LIGHT", color: "#f1c27d"}, {name: "TAN", color: "#c68642"},
                                               {name: "DARK", color: "#8d5524"}, {name: "ALIEN", color: "#86efac"}], start: 0}
    ],
    DINO: [
        {key: "color", label: "DINO", options: C_COLORS, start: 3},
        {key: "hat", label: "HAT", options: [{name: "NONE"}, {name: "CAP"}, {name: "CROWN"}, {name: "PARTY HAT"}], start: 0}
    ],
    TROLL: [
        {key: "body", label: "BODY", options: C_COLORS, start: 2},
        {key: "horns", label: "HORNS", options: C_COLORS, start: 0}
    ],
    BLOCKS: [
        {key: "theme", label: "BLOCKS", options: [
            {name: "CLASSIC", set: ["#22d3ee", "#facc15", "#a855f7", "#22c55e", "#ef4444", "#3b82f6", "#f97316"]},
            {name: "PASTEL", set: ["#a5f3fc", "#fef08a", "#e9d5ff", "#bbf7d0", "#fecaca", "#bfdbfe", "#fed7aa"]},
            {name: "NEON", set: ["#00fff0", "#fff200", "#ff00e6", "#39ff14", "#ff2052", "#2e6bff", "#ff8c00"]},
            {name: "CANDY", set: ["#f472b6", "#fb7185", "#e879f9", "#c084fc", "#f9a8d4", "#fda4af", "#f0abfc"]},
            {name: "MONO", set: ["#e5e7eb", "#d1d5db", "#9ca3af", "#cbd5e1", "#f3f4f6", "#a1a1aa", "#e4e4e7"]}], start: 0},
        {key: "ghost", label: "GHOST", options: [{name: "ON"}, {name: "OFF"}], start: 0},
        {key: "board", label: "BOARD", options: [{name: "DARK", color: "#0f172a"}, {name: "NAVY", color: "#172554"},
                                                 {name: "PLUM", color: "#3b0764"}, {name: "FOREST", color: "#052e16"}], start: 0}
    ],
    BLASTER: [
        {key: "body", label: "SHIP", options: C_COLORS, start: 8},
        {key: "guns", label: "GUNS", options: C_COLORS, start: 4},
        {key: "laser", label: "LASER", options: C_COLORS, start: 4}
    ],
    PONG: [
        {key: "left", label: "LEFT", options: C_COLORS, start: 4},
        {key: "right", label: "RIGHT", options: C_COLORS, start: 7},
        {key: "ball", label: "BALL", options: C_COLORS, start: 8}
    ],
    G2048: [
        {key: "theme", label: "TILES", options: [
            {name: "CLASSIC", from: "#eee4da", to: "#edc22e"}, {name: "OCEAN", from: "#e0f2fe", to: "#0369a1"},
            {name: "CANDY", from: "#fce7f3", to: "#be185d"}, {name: "FOREST", from: "#dcfce7", to: "#15803d"},
            {name: "LAVA", from: "#fef3c7", to: "#b91c1c"}], start: 0}
    ],
    TOWER: [
        {key: "map", label: "MAP", options: [
            {name: "GRASS", a: "#166534", b: "#15803d", road: "#a16207", road2: "#b7791f", deco: "#22c55e"},
            {name: "DESERT", a: "#ca8a04", b: "#d4a017", road: "#78350f", road2: "#92400e", deco: "#65a30d"},
            {name: "SNOW", a: "#cbd5e1", b: "#e2e8f0", road: "#475569", road2: "#64748b", deco: "#ffffff"},
            {name: "LAVA", a: "#292524", b: "#1c1917", road: "#b91c1c", road2: "#dc2626", deco: "#f97316"}], start: 0}
    ],
    BOSS: [
        {key: "body", label: "HERO", options: [{name: "CREAM", color: "#fff7e6"}].concat(C_COLORS), start: 0},
        {key: "scarf", label: "SCARF", options: C_COLORS, start: 0}
    ],
    RHYTHM: [
        {key: "outfit", label: "OUTFIT", options: C_COLORS, start: 6},
        {key: "hair", label: "HAIR", options: [{name: "BROWN", color: "#7c2d12"}, {name: "BLACK", color: "#111827"},
                                               {name: "BLONDE", color: "#facc15"}, {name: "RED", color: "#dc2626"},
                                               {name: "BLUE", color: "#3b82f6"}, {name: "PINK", color: "#f472b6"}], start: 0},
        {key: "arrows", label: "ARROWS", options: [
            {name: "RAINBOW", set: ["#f472b6", "#38bdf8", "#4ade80", "#f97316"]},
            {name: "NEON", set: ["#ff00e6", "#00fff0", "#39ff14", "#fff200"]},
            {name: "FIRE", set: ["#ef4444", "#f97316", "#facc15", "#fb923c"]},
            {name: "ICE", set: ["#e0f2fe", "#7dd3fc", "#38bdf8", "#a5b4fc"]}], start: 0}
    ]
};

var GAME_TITLES = {FLAPPY: "FLAPPY BIRD", SNAKE: "SNAKE", PARKOUR: "PARKOUR", DINO: "DINO RUN",
                   TROLL: "TROLL TRAPS", BLOCKS: "BLOCK DROP", BLASTER: "GALAXY BLASTER", PONG: "PONG", G2048: "2048",
                   TOWER: "TOWER DEFENSE", BOSS: "BOSS BATTLE", RHYTHM: "RHYTHM RUSH"};
var GAME_ACCENTS = {FLAPPY: "#4ec0ca", SNAKE: "#10b981", PARKOUR: "#ec4899", DINO: "#f97316",
                    TROLL: "#e11d48", BLOCKS: "#facc15", BLASTER: "#38bdf8", PONG: "#a3e635", G2048: "#edc22e",
                    TOWER: "#22c55e", BOSS: "#f59e0b", RHYTHM: "#c084fc"};

var customChoices = {};      // customChoices[GAME][key] = chosen index (remembered until you close the page)
var customGame = "";

// The chosen option object, e.g. cust("DINO", "color").color
function cust(game, key) {
    var defs = CUSTOM_DEFS[game];
    if (!customChoices[game]) customChoices[game] = {};
    for (var i = 0; i < defs.length; i++) {
        if (defs[i].key === key) {
            if (customChoices[game][key] === undefined) customChoices[game][key] = defs[i].start;
            return defs[i].options[customChoices[game][key]];
        }
    }
    return null;
}

function showCustomizer(game, animate) {
    customGame = game;
    selectedGame = game;
    var accent = GAME_ACCENTS[game];
    neonMenu("CUSTOMIZE", accent, 0, 0);
    drawPanel(20, 56, 360, 404, accent);
    currentAppState = "CUSTOMIZE";
    var g = [];
    addText(GAME_TITLES[game], "bold 12pt Courier", "center", 74, accent, g);

    // Preview window
    addRect(224, 124, 88, 80, "#0b1020", g);
    addRect(220, 120, 90, 82, "#111a2e", g);
    addRect(220, 2, 90, 82, "rgba(255,255,255,0.25)", g);
    var prev = [];
    drawPreview(game, prev);
    for (var p = 0; p < prev.length; p++) g.push(prev[p]);

    // Option rows: LABEL   <  [ swatch NAME ]  >
    var defs = CUSTOM_DEFS[game];
    for (var i = 0; i < defs.length; i++) {
        var y = 220 + i * 42;
        var opt = cust(game, defs[i].key);
        addText(defs[i].label, "9pt Courier", 40, y + 19, "#94a3b8", g);
        makeButton("cprev" + i, 130, y, 32, 28, "#334155", "<", "12pt Courier", 20, g);
        addRect(160, 28, 168, y, "#0b1020", g);
        if (opt.color) addRect(14, 14, 176, y + 7, opt.color, g);
        else if (opt.set) for (var s = 0; s < 4; s++) addRect(5, 14, 174 + s * 5, y + 7, opt.set[s], g);
        else if (opt.from) { addRect(7, 14, 176, y + 7, opt.from, g); addRect(7, 14, 183, y + 7, opt.to, g); }
        addText(opt.name, "10pt Courier", 198, y + 19, "#ffffff", g);
        makeButton("cnext" + i, 334, y, 32, 28, "#334155", ">", "12pt Courier", 20, g);
        var count = defs[i].options.length;
        addText((customChoices[game][defs[i].key] + 1) + "/" + count, "7pt Courier", 296, y + 18, "#475569", g);
    }

    var goLabel = (game === "G2048") ? "PLAY!" : (game === "PONG" ? "NEXT: MODE" : (game === "TROLL" ? "NEXT: LEVELS" : "NEXT: DIFFICULTY"));
    makeButton("custGo", 40, 404, 190, 40, accent, goLabel, "11pt Courier", 26, g);
    makeButton("back", 240, 404, 120, 40, "#374151", "BACK", "11pt Courier", 26, g);

    if (animate !== false) popIn(g, 0, 480, 22);
    else fadeIn();
}

function changeCustom(row, dir) {
    var def = CUSTOM_DEFS[customGame][row];
    cust(customGame, def.key);
    var n = def.options.length;
    customChoices[customGame][def.key] = (customChoices[customGame][def.key] + dir + n) % n;
    saveProfile();
    showCustomizer(customGame, false);
    nBurst(200, 142, GAME_ACCENTS[customGame], 12, 3, 0, 2.5);
}

function customGo() {
    if (customGame === "G2048") initG2048Game();
    else if (customGame === "TROLL") showTrollMenu();
    else if (customGame === "PONG") showPongSelect();
    else showDifficultyScreen(customGame);
}

// ---------- Previews: a mini version of each game's look ----------
function drawPreview(game, P) {
    var cx = 200, i;
    if (game === "FLAPPY") {
        var sky = cust("FLAPPY", "sky");
        var pc = cust("FLAPPY", "pipes");
        addRect(220, 120, 90, 82, sky.color, P);
        addRect(30, 50, 262, 82, pc.edge, P); addRect(26, 50, 264, 82, pc.color, P); addRect(4, 50, 268, 82, pc.shine, P);
        addRect(36, 12, 259, 130, pc.edge, P); addRect(32, 10, 261, 131, pc.color, P);
        addRect(220, 10, 90, 192, "#73bf2e", P);
        drawBird(170, 140);
        for (i = 0; i < birdParts.length; i++) P.push(birdParts[i]);
    } else if (game === "SNAKE") {
        var bd = cust("SNAKE", "board");
        for (var r = 0; r < 6; r++) for (var c = 0; c < 11; c++) addRect(20, 20, 90 + c * 20, 82 + r * 20, (r + c) % 2 === 0 ? bd.a : bd.b, P);
        addRect(14, 14, 283, 143, "#ef4444", P);
        addRect(4, 4, 288, 140, "#10b981", P);
        buildSnakePreview(P);
    } else if (game === "PARKOUR") {
        addRect(220, 14, 90, 188, "#b91c1c", P);
        addRect(70, 12, cx - 35, 168, "#000000", P); addRect(66, 4, cx - 33, 170, "#10b981", P);
        stickmanVX = 0; walkCycle = 0; isJumping = false;
        drawSmoothStickman(cx, 151);
        P.push(stickmanLLeg, stickmanRLeg, stickmanLArm, stickmanTorso, stickmanRArm, stickmanHead, runnerHeadband, runnerTail, runnerEye);
    } else if (game === "DINO") {
        addRect(220, 120, 90, 82, DINO_DAY, P);
        addRect(220, 20, 90, 182, "#e2b86b", P);
        dinoOnGround = true; dinoDead = false; dinoFrame = 0;
        applyDinoColors();
        buildDino(false, cx - 25, 182);
        for (i = 0; i < dinoParts.length; i++) P.push(dinoParts[i]);
    } else if (game === "TROLL") {
        addRect(220, 120, 90, 82, "#140b2b", P);
        addRect(220, 22, 90, 180, "#2dd4bf", P);
        addRect(220, 4, 90, 180, "#99f6e4", P);
        trollX = cx - 8; trollY = 164; trollFacing = 1;
        drawTrollPlayer();
        for (i = 0; i < trollParts.length; i++) P.push(trollParts[i]);
        var dshapes = makeDoorShapes(262, 146);
        for (i = 0; i < dshapes.length; i++) P.push(dshapes[i]);
    } else if (game === "BLOCKS") {
        var th = cust("BLOCKS", "theme").set, board = cust("BLOCKS", "board").color;
        addRect(220, 120, 90, 82, board, P);
        var demo = [["T", 100, 170], ["I", 160, 186], ["O", 236, 154], ["L", 160, 120], ["Z", 236, 106]];
        for (var d = 0; d < demo.length; d++) {
            var cells = BLK_SHAPES[demo[d][0]];
            for (var k = 0; k < cells.length; k++) addRect(13, 13, demo[d][1] + cells[k][0] * 14, demo[d][2] + cells[k][1] * 14, th[BLK_TYPES.indexOf(demo[d][0])], P);
        }
        if (cust("BLOCKS", "ghost").name === "ON") for (var gh = 0; gh < 3; gh++) addRect(13, 13, 104 + gh * 14, 140, BLK_GHOST, P);
    } else if (game === "BLASTER") {
        for (i = 0; i < 14; i++) addRect(2, 2, 92 + (i * 53) % 214, 84 + (i * 37) % 114, "#64748b", P);
        blShipX = cx;
        drawBlasterShip(172);
        for (i = 0; i < blShipParts.length; i++) P.push(blShipParts[i]);
        var lc = cust("BLASTER", "laser").color;
        addRect(3, 10, cx - 1.5, 130, lc, P); addRect(3, 10, cx - 1.5, 108, lc, P);
        addRect(24, 12, cx - 12, 88, "#ef4444", P);
    } else if (game === "PONG") {
        for (i = 0; i < 5; i++) addRect(3, 12, cx - 1, 88 + i * 22, "#1e293b", P);
        addRect(8, 50, 100, 112, cust("PONG", "left").color, P);
        addRect(8, 50, 292, 124, cust("PONG", "right").color, P);
        addCircle(6, 160, 130, cust("PONG", "ball").color, P);
    } else if (game === "G2048") {
        applyG2Theme();
        var vals = [2, 16, 128, 2048];
        for (i = 0; i < 4; i++) {
            var tx = 98 + i * 52;
            addRect(46, 46, tx, 118, G2_COLORS[vals[i]], P);
            var t = new Text("" + vals[i], vals[i] >= 1000 ? "10pt Courier" : "14pt Courier");
            t.setColor(vals[i] <= 4 ? "#776e65" : "#ffffff");
            t.setPosition(tx + (46 - t.getWidth()) / 2, 147); add(t); P.push(t);
        }
    } else if (game === "TOWER") {
        var m = cust("TOWER", "map");
        for (var tr = 0; tr < 3; tr++) for (var tc = 0; tc < 5; tc++) {
            var road = (tr === 1);
            addRect(40, 40, 100 + tc * 40, 82 + tr * 40, road ? m.road : ((tr + tc) % 2 === 0 ? m.a : m.b), P);
            if (road) addRect(32, 32, 104 + tc * 40, 86 + tr * 40, m.road2, P);
        }
        addRect(30, 30, 145, 87, "#1f2937", P); addCircle(9, 160, 100, TD_TYPES.arrow.color, P);
        addCircle(9, 230, 142, "#ef4444", P);
        addCircle(4, 260, 100, m.deco, P);
    } else if (game === "BOSS") {
        addRect(220, 120, 90, 82, "#f4c088", P);
        addRect(220, 22, 90, 180, "#6b4423", P);
        bbX = 150; bbY = 170; bbFacing = 1; bbInvuln = 0; bbDash = 0;
        bbDrawPlayer();
        for (i = 0; i < bbParts.length; i++) P.push(bbParts[i]);
        addCircle(30, 262, 140, "#7c3aed", P); addCircle(6, 252, 134, "#ffffff", P); addCircle(6, 270, 134, "#ffffff", P);
        addCircle(5, 205, 150, "#f472b6", P);
    } else if (game === "RHYTHM") {
        var set = cust("RHYTHM", "arrows").set;
        for (i = 0; i < 4; i++) rhDrawArrow(112 + i * 34, 104, i, set[i], P);
        rhDancerX = 250; rhDancerY = 160; rhFrame = 0; rhMissFace = 0;
        rhDrawDancer();
        for (i = 0; i < rhDancer.length; i++) P.push(rhDancer[i]);
        rhDancerX = 360; rhDancerY = 330;
    }
}


// -------------------------------------------------------------
// ARCADE HUB MENU
// -------------------------------------------------------------
var HUB_GAMES = [
    { key: "FLAPPY",  label: "FLAPPY BIRD",  color: "#0ea5e9" },
    { key: "SNAKE",   label: "SNAKE",        color: "#10b981" },
    { key: "PARKOUR", label: "PARKOUR",      color: "#ec4899" },
    { key: "DINO",    label: "DINO RUN",     color: "#16a34a" },
    { key: "ASTRO",   label: "ASTEROIDS",    color: "#7c3aed" },
    { key: "TRAP",    label: "TROLL TRAPS",  color: "#dc2626" },
    { key: "BLOCKS",  label: "BLOCK DROP",   color: "#eab308" },
    { key: "BLASTER", label: "BLASTER",      color: "#0284c7" },
    { key: "PONG",    label: "PONG",         color: "#6366f1" },
    { key: "TANK",    label: "TANK ARENA",   color: "#d97706" },
    { key: "G2048",   label: "2048",         color: "#ca8a04" },
    { key: "TOWER",   label: "TOWER DEF.",   color: "#15803d" },
    { key: "BOSS",    label: "BOSS BATTLE",  color: "#f59e0b" },
    { key: "RHYTHM",  label: "RHYTHM RUSH",  color: "#a855f7" }
];

function openGame(key) {
    if (key === "ASTRO") showDifficultyScreen("ASTRO");
    else if (key === "TRAP") showCustomizer("TROLL");
    else if (key === "BRICK" || key === "TANK") startNeonGame(key);
    else showCustomizer(key);
}

function showArcadeHub() {
    stopAllGameTimers();
    clearScreen();
    currentAppState = "HUB";
    scene = "HUB"; phase = "PLAY"; replayFn = null;

    drawStarfield("#05050f");
    // Synthwave floor
    for (var i = 0; i < 5; i++) {
        var gy = 446 + i * i * 2;
        addRect(400, 1, 0, gy, "rgba(236,72,153," + (0.14 + i * 0.06).toFixed(2) + ")");
    }
    for (var j = 0; j <= 10; j++) {
        var top = 200 + (j - 5) * 12, bot = 200 + (j - 5) * 70;
        for (var seg = 0; seg < 6; seg++) {
            var t0 = seg / 6, t1 = (seg + 1) / 6;
            var x0 = top + (bot - top) * t0, x1 = top + (bot - top) * t1;
            addRect(Math.max(1, Math.abs(x1 - x0)), 6, Math.min(x0, x1), 446 + seg * 6, "rgba(168,85,247,0.22)");
        }
    }
    for (var sh = 0; sh < 4; sh++) makeHubShip(sh % 2 === 0 ? rand(0, 400) : -60, "top");

    menuTitle = makeTitle("PRANAV & ADVIK'S ARCADE", 40, 18);
    mkCText("WELCOME, " + playerName, 200, 62, "bold 9pt Courier", "#c4b5fd");
    mkCText(saveStatus, 200, 76, "7pt Courier", saveStatusColor);

    var cols = [10, 138, 266], bw = 124, bh = 52;
    for (var n = 0; n < HUB_GAMES.length; n++) {
        var d = HUB_GAMES[n], x = cols[n % 3], y = 88 + Math.floor(n / 3) * 58;
        nMakeButton(x, y, bw, bh, d.color, d.label, makeOpener(d.key), 7, { noArrows: true, textCx: 76, textY: 24 });
        hubIcons.push({ objs: drawHubIcon(d.key, x + 22, y + 26), seed: n });
        var best = bestFor(d.key), sub, subColor;
        if (best !== null) { sub = "\u2605 " + (d.key === "TRAP" ? "LVL " : (d.key === "TOWER" ? "WAVE " : "")) + best; subColor = "#fde68a"; }
        else if (d.key === "TANK") { sub = "NEW!"; subColor = "#fbcfe8"; }
        else if (d.key === "PONG") { sub = "+ BRICK BREAKER"; subColor = "#fbcfe8"; }
        else { sub = "PLAY"; subColor = "rgba(255,255,255,0.55)"; }
        mkCText(sub, x + 76, y + 42, "bold 7pt Courier", subColor);
    }

    nMakeButton(10, 384, 150, 22, "#374151", isGuest ? "LOG IN / SIGN UP" : "SWITCH PLAYER", function () {
        if (ON_WEBSITE) { location.href = "arcade.html#player"; return; }
        login();
        showArcadeHub();
    }, 8);
    nMakeButton(168, 384, 130, 22, "#854d0e", "LEADERBOARD", function () { showLeaderboard(0); }, 8);
    nMakeButton(306, 384, 86, 22, "#1f2937", "UPDATES", function () { showUpdateLog(0); }, 8);
    if (ON_WEBSITE) nMakeButton(10, 412, 76, 18, "#4c1d95", "BACK", goToLauncher, 7);

    mkCText("Q / ESC = PAUSE OR MENU", 200, 426, "7pt Courier", "#9ca3af");
    mkRText(ARCADE_VERSION, 394, 474, "bold 8pt Courier", "#6b7280");
    fadeIn();
}

function makeOpener(key) { return function () { openGame(key); }; }

// One background ship: flies left or right, flame flickers, wraps around the screen
function hubShipY(band) { return band === "top" ? rand(8, 30) : rand(453, 474); }

function makeHubShip(startX, band) {
    var dir = Math.random() < 0.5 ? 1 : -1;
    var x = (startX < 0) ? (dir > 0 ? -40 : 440) : startX;
    var y = hubShipY(band);
    var palette = [["#475569", "#38bdf8"], ["#4c1d95", "#c084fc"], ["#7f1d1d", "#f87171"], ["#14532d", "#4ade80"], ["#334155", "#facc15"]];
    var col = palette[Math.floor(Math.random() * palette.length)];
    var parts = [];
    var f = dir;   // which way the nose points
    addRect(22, 7, x - 11, y - 3, col[0], parts);                 // body
    addRect(6, 5, x + (f > 0 ? 11 : -17), y - 2, col[0], parts);  // nose
    addRect(6, 4, x + (f > 0 ? 3 : -9), y - 2, col[1], parts);    // window
    addRect(8, 4, x + (f > 0 ? -11 : 3), y - 7, col[0], parts);   // top fin
    addRect(8, 4, x + (f > 0 ? -11 : 3), y + 4, col[0], parts);   // bottom fin
    var flame = addRect(5, 3, x + (f > 0 ? -16 : 11), y - 1, "#f97316", parts);
    hubShips.push({parts: parts, flame: flame, x: x, dir: dir, speed: rand(0.6, 1.8), bobT: rand(0, 6), band: band});
}

function animateHub() {
    for (var k = 0; k < hubShips.length; k++) {
        var ship = hubShips[k];
        var bob = Math.sin((uiFrame + ship.bobT * 20) * 0.05) * 0.3;
        moveShapes(ship.parts, ship.dir * ship.speed, bob);
        ship.x += ship.dir * ship.speed;
        ship.flame.setColor(uiFrame % 6 < 3 ? "#f97316" : "#facc15");
        // Off the edge? Come back in from the other side at a new height
        if ((ship.dir > 0 && ship.x > 450) || (ship.dir < 0 && ship.x < -50)) {
            var newY = hubShipY(ship.band);
            var jumpX = ship.dir > 0 ? -500 : 500;
            moveShapes(ship.parts, jumpX, newY - ship.parts[0].getY() - 3);
            ship.x += jumpX;
        }
    }
}


// -------------------------------------------------------------
// DIFFICULTY SELECTION SCREEN
// -------------------------------------------------------------
function showDifficultyScreen(gameName) {
    selectedGame = gameName;
    neonMenu("SELECT DIFFICULTY", GAME_ACCENTS[gameName] || "#38bdf8", 80, 320);
    currentAppState = "DIFFICULTY_SELECT";
    var g = [];
    var names = GAME_TITLES[gameName] || "ASTEROID DODGE";
    addText(names, "9pt Courier", "center", 142, "#9ca3af", g);

    makeButton("easy", 80, 160, 240, 45, "#10b981", "EASY", "13pt Courier", 28, g);
    makeButton("med", 80, 220, 240, 45, "#3b82f6", "MEDIUM", "13pt Courier", 28, g);
    makeButton("hard", 80, 280, 240, 45, "#ef4444", "HARD", "13pt Courier", 28, g);
    makeButton("back", 80, 345, 240, 40, "#374151", "BACK", "12pt Courier", 26, g);

    popIn(g, 0, 480, 24);
}




// -------------------------------------------------------------
// CENTRAL INPUT ROUTERS
// -------------------------------------------------------------
function onMouseClick(e) {
    if (inNeon()) { nMouseClick(e); syncNeon(); return; }
    var id = buttonAt(e.getX(), e.getY());
    if (id === "ingameMenu") { showArcadeHub(); return; }
    if (!id) {
        // Neon-style buttons (hub cards, log in) carry their own click action
        for (var ub = uiButtons.length - 1; ub >= 0; ub--) {
            if (inButton(uiButtons[ub], e.getX(), e.getY())) {
                nBurst(e.getX(), e.getY(), uiButtons[ub].color, 10, 3, 0, 2.5);
                uiButtons[ub].onClick();
                return;
            }
        }
        if (currentAppState === "TOWER") tdClick(e.getX(), e.getY());
        return;
    }
    var s = currentAppState;

    if (s === "HUB") {
        if (id === "updates") showUpdateLog(0);
    }
    else if (s === "CUSTOMIZE") {
        if (id.indexOf("cprev") === 0) changeCustom(parseInt(id.substring(5), 10), -1);
        else if (id.indexOf("cnext") === 0) changeCustom(parseInt(id.substring(5), 10), 1);
        else if (id === "custGo") customGo();
        else if (id === "back") showArcadeHub();
    }
    else if (s === "DIFFICULTY_SELECT") {
        if (id === "easy") startSelectedGame("EASY");
        else if (id === "med") startSelectedGame("MED");
        else if (id === "hard") startSelectedGame("HARD");
        else if (id === "back") { if (selectedGame === "ASTRO") showArcadeHub(); else if (selectedGame === "PONG") showPongSelect(); else showCustomizer(selectedGame); }
    }
    else if (s === "UPDATES") {
        if (id === "updPrev") showUpdateLog(updatePage - 1);
        else if (id === "updNext") showUpdateLog(updatePage + 1);
        else if (id === "back") showArcadeHub();
    }
    else if (s === "BOSS_SELECT") {
        if (id.indexOf("boss") === 0) initBossGame(bbDiff, parseInt(id.substring(4), 10));
        else if (id === "back") showDifficultyScreen("BOSS");
    }
    else if (s === "TROLL_MENU") {
        if (id === "trollNew") startTrollRun(1);
        else if (id === "trollCont") startTrollRun(Math.max(1, Math.min(TROLL_LEVELS, trollBestLevel)));
        else if (id === "back") showCustomizer("TROLL");
    }
    else if (s === "LEADERBOARD") {
        if (id === "ldPrev") showLeaderboard(leaderPage - 1);
        else if (id === "ldNext") showLeaderboard(leaderPage + 1);
        else if (id === "back") showArcadeHub();
    }
    else if (s === "PONG_SELECT") {
        if (id === "pongBot") showDifficultyScreen("PONG");
        else if (id === "pong2p") initPongGame("2P", "MED");
        else if (id === "pongBrick") startNeonGame("BRICK");
        else if (id === "back") showCustomizer("PONG");
    }
    else if (s === "TOWER") {
        if (id === "tdArrow") tdSelect("arrow");
        else if (id === "tdCannon") tdSelect("cannon");
        else if (id === "tdFrost") tdSelect("frost");
        else if (id === "tdNext") tdStartWave();
        else if (id === "tdmenu") showArcadeHub();
    }
    else if (s === "G2048") {
        if (id === "g2new") initG2048Game();
        else if (id === "g2menu") showArcadeHub();
    }
    else if (s.indexOf("_PAUSE") !== -1) {
        if (id === "resume") togglePause();
        else if (id === "pmenu") showArcadeHub();   // showArcadeHub stops every loop
    }
    else if (s.indexOf("_OVER") !== -1 || s === "VICTORY") {
        if (id === "gomenu") showArcadeHub();
    }
}

function startSelectedGame(diff) {
    if (selectedGame === "FLAPPY") initFlappyGame(diff);
    else if (selectedGame === "SNAKE") initSnakeGame(diff);
    else if (selectedGame === "PARKOUR") initParkourGame(diff);
    else if (selectedGame === "DINO") initDinoGame(diff);
    else if (selectedGame === "PONG") initPongGame("CPU", diff);
    else if (selectedGame === "ASTRO") { diffs.ASTRO = diff; saveProfile(); initAsteroidGame(); syncNeon(); }
    else if (selectedGame === "BLOCKS") initBlocksGame(diff);
    else if (selectedGame === "BLASTER") initBlasterGame(diff);
    else if (selectedGame === "TOWER") initTowerGame(diff);
    else if (selectedGame === "BOSS") showBossSelect(diff);
    else if (selectedGame === "RHYTHM") initRhythmGame(diff);
}

function isInGameOrPaused() {
    var s = currentAppState;
    if (GAME_NAMES.indexOf(s) !== -1) return true;
    var i = s.indexOf("_PAUSE");
    return i !== -1 && GAME_NAMES.indexOf(s.substring(0, i)) !== -1;
}

function onKeyDown(e) {
    if (inNeon()) { nKeyDown(e); syncNeon(); return; }
    // ESC = back to the main menu from any game
    if (e.keyCode == 27 && currentAppState !== "HUB") { showArcadeHub(); return; }
    if (e.keyCode == 81 || (e.key && e.key.toLowerCase() == 'q')) {
        if (isInGameOrPaused()) togglePause();
        return;
    }

    var s = currentAppState;
    if (s === "FLAPPY") {
        if (e.keyCode == Keyboard.SPACE || e.keyCode == Keyboard.UP) {
            flappyVelocity = flappyLift;
        }
    } else if (s === "SNAKE") {
        // Compare against the direction the snake ACTUALLY last moved, so two quick
        // key presses in one tick can't turn the snake back into itself.
        if (e.keyCode == Keyboard.LEFT && lastMovedDirection != "right") {
            direction = "left"; userinputX = -20; userinputY = 0;
        } else if (e.keyCode == Keyboard.UP && lastMovedDirection != "down") {
            direction = "up"; userinputX = 0; userinputY = -20;
        } else if (e.keyCode == Keyboard.RIGHT && lastMovedDirection != "left") {
            direction = "right"; userinputX = 20; userinputY = 0;
        } else if (e.keyCode == Keyboard.DOWN && lastMovedDirection != "up") {
            direction = "down"; userinputX = 0; userinputY = 20;
        }
    } else if (s === "PARKOUR") {
        if (e.keyCode == Keyboard.LEFT) keyLeftPressed = true;
        if (e.keyCode == Keyboard.RIGHT) keyRightPressed = true;
        if (e.keyCode == Keyboard.UP && onGround) {
            stickmanVY = stickmanJump;
            isJumping = true;
            onGround = false;
        }
    } else if (s === "DINO") {
        if ((e.keyCode == Keyboard.SPACE || e.keyCode == Keyboard.UP) && dinoOnGround) {
            dinoVY = -14;
            dinoOnGround = false;
        }
        if (e.keyCode == Keyboard.DOWN) dinoDownHeld = true;
    } else if (s === "TROLL") {
        if (e.keyCode == Keyboard.LEFT) trollLeft = true;
        if (e.keyCode == Keyboard.RIGHT) trollRight = true;
        if ((e.keyCode == Keyboard.UP || e.keyCode == Keyboard.SPACE) && trollCoyote > 0 && trollDying === 0) {
            trollVY = TROLL_JUMP;
            trollCoyote = 0;
        }
        if (e.keyCode == 82 && trollDying === 0) trollDie("RAGE QUIT?");   // R = restart (counts as a death!)
    } else if (s === "BLOCKS") {
        blocksKey(e.keyCode);
    } else if (s === "RHYTHM") {
        rhythmKey(e.keyCode);
    } else if (s === "BOSS") {
        if (e.keyCode == Keyboard.LEFT) bbLeft = true;
        if (e.keyCode == Keyboard.RIGHT) bbRight = true;
        if (e.keyCode == Keyboard.DOWN) bbDownHeld = true;
        if (e.keyCode == Keyboard.UP || e.keyCode == Keyboard.SPACE) bbJumpPressed();
        if (e.keyCode == 88 || e.keyCode == 16) bbDashPressed();   // X or SHIFT
    } else if (s === "PONG") {
        if (e.keyCode == 87) pongW = true;
        if (e.keyCode == 83) pongS = true;
        if (e.keyCode == Keyboard.UP) pongUp = true;
        if (e.keyCode == Keyboard.DOWN) pongDown = true;
    } else if (s === "G2048") {
        if (e.keyCode == Keyboard.LEFT) g2Move("L");
        else if (e.keyCode == Keyboard.RIGHT) g2Move("R");
        else if (e.keyCode == Keyboard.UP) g2Move("U");
        else if (e.keyCode == Keyboard.DOWN) g2Move("D");
    } else if (s === "BLASTER") {
        if (e.keyCode == Keyboard.LEFT) blLeft = true;
        if (e.keyCode == Keyboard.RIGHT) blRight = true;
        if (e.keyCode == Keyboard.SPACE || e.keyCode == Keyboard.UP) blFire = true;
    }
}

function onKeyUp(e) {
    if (inNeon()) { nKeyUp(e); return; }
    // Always clear, even while paused, so keys never get "stuck" held down
    if (e.keyCode == Keyboard.LEFT) { keyLeftPressed = false; trollLeft = false; }
    if (e.keyCode == Keyboard.RIGHT) { keyRightPressed = false; trollRight = false; }
    // Let go of jump early for a short hop
    if ((e.keyCode == Keyboard.UP || e.keyCode == Keyboard.SPACE) && currentAppState === "TROLL" && trollVY < -3.5) trollVY = -3.5;
    if (e.keyCode == Keyboard.LEFT) blLeft = false;
    if (e.keyCode == Keyboard.RIGHT) blRight = false;
    if (e.keyCode == Keyboard.SPACE || e.keyCode == Keyboard.UP) blFire = false;
    if (e.keyCode == Keyboard.DOWN) blkSoft = false;
    if (e.keyCode == Keyboard.LEFT) bbLeft = false;
    if (e.keyCode == Keyboard.RIGHT) bbRight = false;
    if (e.keyCode == Keyboard.DOWN) bbDownHeld = false;
    if ((e.keyCode == Keyboard.UP || e.keyCode == Keyboard.SPACE) && currentAppState === "BOSS" && bbVY < -4 && bbDash === 0) bbVY = -4;
    if (e.keyCode == 87) pongW = false;
    if (e.keyCode == 83) pongS = false;
    if (e.keyCode == Keyboard.UP) pongUp = false;
    if (e.keyCode == Keyboard.DOWN) pongDown = false;
    if (e.keyCode == Keyboard.DOWN) dinoDownHeld = false;
}


// -------------------------------------------------------------
// FLAPPY BIRD ENGINE (Moving Pipes & Customization)
// -------------------------------------------------------------
function initFlappyGame(diff) {
    flappyHighScore = Math.max(flappyHighScore, bestScores.FLAPPY || 0);
    stopAllGameTimers();
    clearScreen();
    currentAppState = "FLAPPY";
    pipePairs = [];
    clouds = [];
    groundParts = [];
    flappyScore = 0;
    flappyVelocity = 0;
    pipeTimer = 0;
    wingAnimCounter = 0;
    blinkTimer = 0;
    sunAnimTimer = 0;

    if (diff === "EASY") { gapHeight = 155; pipeSpeed = 2.8; }
    else if (diff === "MED") { gapHeight = 135; pipeSpeed = 3.5; }
    else { gapHeight = 115; pipeSpeed = 4.4; }

    drawSkyGradient();
    drawSun();
    initAnimatedClouds();
    drawSkyline();
    drawGround();
    drawBird(100, 240);

    flappyScoreText = new Text("SCORE: 0", "14pt Courier"); flappyScoreText.setPosition(20, 35); flappyScoreText.setColor(Color.white); add(flappyScoreText);
    nameTagBadge = new Text(playerName, "10pt Courier"); nameTagBadge.setPosition(20, 55); nameTagBadge.setColor("#fbbf24"); add(nameTagBadge);
    addMenuButton(330, 8);

    setTimer(flappyGameLoop, 20);
}

// ---------- Flappy scenery ----------
var FLAPPY_SKIES = {
    DAY:    {grad: ["#4fb6e8", "#5cc0ec", "#6ac9ef", "#7ad1f1", "#8bd8f2", "#9cdff3", "#addff0", "#bfe7f2"],
             glow: ["#d6f2f6", "#e3f6f8"], sun: ["#fff4c2", "#ffe066"], city: "#a5dde8", win: "#c4ebf2", cloud: "#ffffff"},
    SUNSET: {grad: ["#3b2a6b", "#6b3a7a", "#a8487a", "#d8607a", "#f28a6e", "#f8a96a", "#fbc874", "#fde09a"],
             glow: ["#f8a96a", "#fbc874"], sun: ["#fde68a", "#fb923c"], city: "#7a3f6e", win: "#fbc874", cloud: "#fcd5c0"},
    NIGHT:  {grad: ["#020617", "#0b1330", "#111c45", "#172554", "#1e2f66", "#243b78", "#2b4785", "#33528f"],
             glow: ["#1e3a8a", "#24418f"], sun: ["#cbd5e1", "#f1f5f9"], city: "#0f172a", win: "#facc15", cloud: "#334155"}
};
function flappySky() { return FLAPPY_SKIES[cust("FLAPPY", "sky").name]; }

function drawSkyGradient() {
    var colors = flappySky().grad;
    var stripHeight = 425 / colors.length;
    for (var i = 0; i < colors.length; i++) {
        addRect(400, stripHeight + 1, 0, i * stripHeight, colors[i]);
    }
}

function drawSun() {
    var sky = flappySky();
    sunRays = [];
    if (sky === FLAPPY_SKIES.NIGHT) {
        for (var st = 0; st < 30; st++) addRect(2, 2, (st * 73) % 400, (st * 41) % 260, "#e2e8f0");
    }
    sunRays.push(addCircle(40, 330, 75, sky.glow[0]));   // soft glow
    addCircle(30, 330, 75, sky.sun[0]);
    addCircle(24, 330, 75, sky.sun[1]);
}

// Gentle pulse of the sun's glow
function animateSun() {
    sunAnimTimer++;
    if (sunAnimTimer % 30 === 0) sunRays[0].setColor(flappySky().glow[sunAnimTimer % 60 === 0 ? 0 : 1]);
}

// Far-off city and bushes along the horizon (drawn behind the pipes)
function drawSkyline() {
    var sky = flappySky();
    var x = 0;
    var k = 0;
    while (x < 400) {
        var w = 26 + (k * 17) % 22;
        var h = 40 + (k * 37) % 55;
        addRect(w, h, x, 425 - 22 - h, sky.city);
        addRect(4, 4, x + 6, 425 - 22 - h + 8, sky.win);
        addRect(4, 4, x + w - 10, 425 - 22 - h + 18, sky.win);
        x += w + 2;
        k++;
    }
    for (var b = 0; b < 9; b++) {
        addCircle(18 + (b % 3) * 5, b * 48 + 10, 418, "#8fd481");
        addCircle(14, b * 48 + 30, 422, "#7cc96e");
    }
}

function initAnimatedClouds() {
    createDriftingCloud(40, 95, 0.4);
    createDriftingCloud(170, 60, 0.3);
    createDriftingCloud(290, 140, 0.5);
}

function createDriftingCloud(x, y, speed) {
    var parts = [];
    var cloudColor = flappySky().cloud;
    addCircle(16, x, y + 6, cloudColor, parts);
    addCircle(22, x + 22, y, cloudColor, parts);
    addCircle(17, x + 44, y + 5, cloudColor, parts);
    addRect(46, 14, x + 2, y + 8, cloudColor, parts);
    clouds.push({parts: parts, speed: speed});
}

function updateClouds() {
    for (var i = 0; i < clouds.length; i++) {
        var c = clouds[i];
        moveShapes(c.parts, -c.speed, 0);
        if (c.parts[0].getX() < -70) moveShapes(c.parts, 480, 0);
    }
}

function drawGround() {
    groundParts = [];
    addRect(400, 55, 0, 425, "#ded895", groundParts);        // sand
    addRect(400, 14, 0, 425, "#73bf2e", groundParts);        // grass
    addRect(400, 3, 0, 425, "#9be15d", groundParts);         // grass shine
    addRect(400, 3, 0, 439, "#558c22", groundParts);         // grass edge
    groundStripes = [];
    for (var i = 0; i < 18; i++) {
        groundStripes.push(addRect(10, 8, i * 24, 429, "#86d13b", groundParts));
    }
    for (var j = 0; j < 12; j++) {
        addRect(rand(4, 10), 3, rand(0, 400), rand(450, 475), "#cfc77e", groundParts);
    }
}

// The grass stripes slide left at pipe speed so the ground feels like it's moving
function scrollGround() {
    for (var i = 0; i < groundStripes.length; i++) {
        groundStripes[i].move(-pipeSpeed, 0);
        if (groundStripes[i].getX() < -12) groundStripes[i].move(432, 0);
    }
}

// ---------- The bird ----------
function drawBird(x, y) {
    birdParts = [];
    birdHatAccessory = null;
    var bColor = cust("FLAPPY", "bird").color;
    birdOutline = addCircle(18, x, y, "#3b2a20", birdParts);
    birdBody = addCircle(16, x, y, bColor, birdParts);
    addCircle(9, x - 2, y + 7, shade(bColor, 1.25), birdParts);          // belly
    birdWing = addCircle(7, x - 8, y + 2, shade(bColor, 0.8), birdParts);
    birdEye = addCircle(6, x + 7, y - 5, "#ffffff", birdParts);
    birdPupil = addCircle(2.5, x + 9, y - 5, "#1f2937", birdParts);
    addRect(12, 5, x + 12, y - 1, "#f97316", birdParts);                 // beak top
    addRect(10, 4, x + 12, y + 4, "#ea580c", birdParts);                 // beak bottom

    var hatType = cust("FLAPPY", "hat").name;
    if (hatType === "CROWN") {
        addRect(16, 5, x - 8, y - 20, "#fbbf24", birdParts);
        addRect(4, 5, x - 8, y - 25, "#fbbf24", birdParts);
        addRect(4, 5, x - 2, y - 26, "#fbbf24", birdParts);
        addRect(4, 5, x + 4, y - 25, "#fbbf24", birdParts);
        birdHatAccessory = birdParts[birdParts.length - 1];
    } else if (hatType === "TOP HAT") {
        addRect(20, 3, x - 10, y - 17, "#111827", birdParts);
        addRect(12, 12, x - 6, y - 29, "#111827", birdParts);
        addRect(12, 3, x - 6, y - 21, "#ef4444", birdParts);
        birdHatAccessory = birdParts[birdParts.length - 1];
    } else if (hatType === "SUNGLASSES") {
        addRect(16, 5, x + 1, y - 8, "#111827", birdParts);
        addRect(6, 2, x - 4, y - 7, "#111827", birdParts);
        birdHatAccessory = birdParts[birdParts.length - 1];
    } else if (hatType === "PARTY HAT") {
        addRect(14, 4, x - 7, y - 19, "#ec4899", birdParts);
        addRect(10, 4, x - 5, y - 23, "#facc15", birdParts);
        addRect(6, 4, x - 3, y - 27, "#22d3ee", birdParts);
        addCircle(3, x, y - 30, "#ffffff", birdParts);
        birdHatAccessory = birdParts[birdParts.length - 1];
    } else if (hatType === "HALO") {
        addRect(20, 4, x - 10, y - 28, "#fde047", birdParts);
        addRect(14, 2, x - 7, y - 27, "#fef9c3", birdParts);
        birdHatAccessory = birdParts[birdParts.length - 1];
    } else if (hatType === "CAP") {
        addRect(18, 7, x - 9, y - 21, "#2563eb", birdParts);
        addRect(10, 3, x + 7, y - 16, "#1d4ed8", birdParts);
        birdHatAccessory = birdParts[birdParts.length - 1];
    }
}

function moveBird(dx, dy) {
    moveShapes(birdParts, dx, dy);
}

// New pipes are added last, so they'd draw ON TOP of the ground, bird and score.
// Removing and re-adding those pieces puts them back in front.
function bringFlappyForeground() {
    bringToFront(groundParts.concat(birdParts, [flappyScoreText, nameTagBadge], menuBtnShapes));
}

// ---------- Pipes ----------
function addPipeRect(parts, w, h, x, y, color) {
    return addRect(w, h, x, y, color, parts);
}

// One pipe section: dark edge, green body, a light shine stripe and a shadow stripe
function addPipeBody(parts, x, y, w, h) {
    var pc = cust("FLAPPY", "pipes");
    var edge = addPipeRect(parts, w, h, x, y, pc.edge);
    addPipeRect(parts, w - 4, h, x + 2, y, pc.color);
    addPipeRect(parts, 6, h, x + 7, y, pc.shine);
    addPipeRect(parts, 10, h, x + w - 14, y, pc.dark);
    return edge;
}

function createMarioPipePair() {
    var topHeight = Randomizer.nextInt(60, 200);
    var startX = 400;
    var parts = [];

    // Top pipe starts above the screen, so swaying down never reveals sky above it
    var topY = -PIPE_OVERHANG;
    var topBodyH = topHeight - 24 + PIPE_OVERHANG;
    var topBody = addPipeBody(parts, startX - 3, topY, 50, topBodyH);
    var topCap = addPipeBody(parts, startX - 7, topHeight - 24, 58, 24);
    addPipeRect(parts, 58, 3, startX - 7, topHeight - 3, cust("FLAPPY", "pipes").edge);

    // Bottom pipe extends down behind the ground for the same reason
    var bottomY = topHeight + gapHeight;
    var botBodyH = 425 - bottomY - 24 + PIPE_OVERHANG;
    var botCap = addPipeBody(parts, startX - 7, bottomY, 58, 24);
    addPipeRect(parts, 58, 3, startX - 7, bottomY, cust("FLAPPY", "pipes").edge);
    var botBody = addPipeBody(parts, startX - 3, bottomY + 24, 50, botBodyH);

    pipePairs.push({
        parts: parts,
        topBody: topBody, topCap: topCap, botBody: botBody, botCap: botCap,
        scored: false,
        phase: 0,
        sway: (Math.random() < 0.5) ? PIPE_SWAY : -PIPE_SWAY   // random starting direction
    });

    bringFlappyForeground();
}

function flappyGameLoop() {
    if (currentAppState !== "FLAPPY") return;

    animateSun();
    updateClouds();
    scrollGround();
    flappyVelocity += flappyGravity;
    moveBird(0, flappyVelocity);

    wingAnimCounter++;
    var wingOffset = (Math.floor(wingAnimCounter / 5) % 2 === 0) ? -4 : 4;
    birdWing.setPosition(birdBody.getX() - 8, birdBody.getY() + 2 + wingOffset);

    blinkTimer++;
    if (blinkTimer > 80 && blinkTimer < 90) {
        birdEye.setColor(cust("FLAPPY", "bird").color); birdPupil.setColor(cust("FLAPPY", "bird").color);
    } else {
        birdEye.setColor("#ffffff"); birdPupil.setColor("#1f2937");
        if (blinkTimer > 150) blinkTimer = 0;
    }

    if (birdBody.getY() >= 415 || birdBody.getY() <= 15) {
        flappyGameOver(); return;
    }

    pipeTimer++;
    if (pipeTimer >= pipeInterval) {
        createMarioPipePair();
        pipeTimer = 0;
    }

    for (var i = pipePairs.length - 1; i >= 0; i--) {
        var p = pipePairs[i];

        // Sway up and down around the spawn height (stays within +/- PIPE_SWAY)
        var nextPhase = p.phase + 0.05;
        var yShift = p.sway * (Math.sin(nextPhase) - Math.sin(p.phase));
        p.phase = nextPhase;

        moveShapes(p.parts, -pipeSpeed, yShift);

        if (!p.scored && p.topBody.getX() < birdBody.getX()) {
            flappyScore++; flappyScoreText.setText("SCORE: " + flappyScore); p.scored = true;
        }

        if (isCollidingWithRect(birdBody, p.topBody) || isCollidingWithRect(birdBody, p.topCap) ||
            isCollidingWithRect(birdBody, p.botBody) || isCollidingWithRect(birdBody, p.botCap)) {
            flappyGameOver(); return;
        }

        if (p.topBody.getX() < -70) {
            removeShapes(p.parts);
            pipePairs.splice(i, 1);
        }
    }
}

function isCollidingWithRect(circle, rect) {
    var cX = circle.getX(); var cY = circle.getY(); var radius = 16;
    var rX = rect.getX(); var rY = rect.getY(); var rWidth = rect.getWidth(); var rHeight = rect.getHeight();
    var closestX = Math.max(rX, Math.min(cX, rX + rWidth));
    var closestY = Math.max(rY, Math.min(cY, rY + rHeight));
    var distX = cX - closestX; var distY = cY - closestY;
    return (distX * distX) + (distY * distY) < (radius * radius);
}

function flappyGameOver() {
    currentAppState = "FLAPPY_OVER";
    stopTimer(flappyGameLoop);
    var newBest = flappyScore > flappyHighScore && flappyScore > 0;
    if (newBest) flappyHighScore = flappyScore;
    recordBest("FLAPPY", flappyScore);
    showGameOverCard("SCORE: " + flappyScore, "BEST: " + flappyHighScore, newBest);
}


// -------------------------------------------------------------
// SNAKE ENGINE
// -------------------------------------------------------------
function initSnakeGame(diff) {
    snakeHighScore = Math.max(snakeHighScore, bestScores.SNAKE || 0);
    stopAllGameTimers();
    clearScreen();
    currentAppState = "SNAKE";
    snakeScore = 0;
    snakeLength = 3;
    snakeX = 0;
    snakeY = 0;
    userinputX = 20;
    userinputY = 0;
    direction = "right";
    lastMovedDirection = "right";
    coords = [];
    appleShapes = [];

    if (diff === "EASY") gameSpeed = 130;
    else if (diff === "MED") gameSpeed = 100;
    else gameSpeed = 70;

    drawBoardBase();

    var initialHead = new Circle(9);
    initialHead.setPosition(snakeX + 10, snakeY + 10);
    snakeSegN = 0;
    initialHead.setColor(snakeSegColor(0));
    add(initialHead);
    coords.push({x: snakeX, y: snakeY, shapes: [initialHead], color: snakeSegColor(0)});

    scoreText = new Text("SCORE: 0", "14pt Courier"); scoreText.setPosition(20, 35); scoreText.setColor("#34d399"); add(scoreText);
    nameTagBadge = new Text(playerName, "10pt Courier"); nameTagBadge.setPosition(20, 55); nameTagBadge.setColor("#fbbf24"); add(nameTagBadge);
    addMenuButton(330, 8);

    appleCoords();
    createApple();
    setTimer(snakeGameLoop, gameSpeed);
}

// Slithering snake for the customizer (blocky wiggle, like the Neon Edition's preview)
var snakePreview = [], snakePreviewEyes = [];
function buildSnakePreview(P) {
    snakePreview = []; snakePreviewEyes = [];
    for (var i = 0; i < 8; i++) {
        var head = (i === 7), col = snakeSegColor(7 - i);
        var seg = {o: addRect(16, 16, 0, 0, head ? shade(col, 1.15) : col, P), inner: addRect(8, 8, 0, 0, head ? shade(col, 1.35) : shade(col, 1.2), P)};
        snakePreview.push(seg);
    }
    snakePreviewEyes.push(addRect(4, 4, 0, 0, "#ffffff", P), addRect(4, 4, 0, 0, "#ffffff", P),
                          addRect(2, 2, 0, 0, "#000000", P), addRect(2, 2, 0, 0, "#000000", P));
    updateSnakePreview();
}

function updateSnakePreview() {
    for (var i = 0; i < snakePreview.length; i++) {
        var x = 112 + i * 18;
        var y = 136 + Math.round(Math.sin(uiFrame * 0.12 - i * 0.7) * 1.4) * 5;
        snakePreview[i].o.setPosition(x, y);
        snakePreview[i].inner.setPosition(x + 4, y + 4);
        if (i === snakePreview.length - 1 && snakePreviewEyes.length === 4) {
            snakePreviewEyes[0].setPosition(x + 10, y + 3); snakePreviewEyes[1].setPosition(x + 10, y + 10);
            snakePreviewEyes[2].setPosition(x + 12, y + 4); snakePreviewEyes[3].setPosition(x + 12, y + 11);
        }
    }
}

// Color of snake segment number n (handles rainbow and stripes)
var snakeSegN = 0;
function snakeSegColor(n) {
    var opt = cust("SNAKE", "color");
    var striped = cust("SNAKE", "pattern").name === "STRIPES" && n % 2 === 1;
    if (opt.name === "RAINBOW") return "hsl(" + ((n * 25) % 360) + ",85%," + (striped ? "40%" : "58%") + ")";
    return striped ? shade(opt.color, 0.68) : opt.color;
}

function drawBoardBase() {
    var bd = cust("SNAKE", "board");
    addRect(400, 480, 0, 0, bd.a);
    for (var n = 0; n < 20; n++) {
        for (var i = 0; i < 24; i++) {
            if ((n + i) % 2 === 1) addRect(20, 20, n * 20, i * 20, bd.b);
        }
    }
}

// Pick a random free square (one pass, no retries)
function appleCoords() {
    var taken = {};
    for (var i = 0; i < coords.length; i++) taken[coords[i].x + "," + coords[i].y] = true;
    var free = [];
    for (var cx = 2; cx <= 19; cx++) {
        for (var cy = 2; cy <= 23; cy++) {
            if (!taken[(cx * 20) + "," + (cy * 20)]) free.push([cx * 20, cy * 20]);
        }
    }
    if (free.length === 0) { applePositionX = -100; applePositionY = -100; return; }
    var pick = free[Randomizer.nextInt(0, free.length - 1)];
    applePositionX = pick[0]; applePositionY = pick[1];
}

function createApple() {
    appleShapes = [];
    addRect(14, 14, applePositionX + 3, applePositionY + 3, "#ef4444", appleShapes);
    addRect(4, 4, applePositionX + 5, applePositionY + 5, "#fca5a5", appleShapes);
    addRect(4, 4, applePositionX + 8, applePositionY, "#10b981", appleShapes);
}

function snakeGameLoop() {
    if (currentAppState === "SNAKE_DYING") { snakeDeathTick(); return; }
    if (currentAppState !== "SNAKE") return;

    var nextX = snakeX + userinputX;
    var nextY = snakeY + userinputY;
    lastMovedDirection = direction;

    // Wall check
    if (nextX < 0 || nextX >= 400 || nextY < 0 || nextY >= 480) { snakeGameOver(); return; }

    // Self check. If the snake isn't growing, its tail moves away this tick,
    // so chasing your own tail is allowed.
    var willEat = (nextX === applePositionX && nextY === applePositionY);
    var tailMoves = !willEat && coords.length >= snakeLength;
    for (var i = (tailMoves ? 1 : 0); i < coords.length; i++) {
        if (coords[i].x === nextX && coords[i].y === nextY) { snakeGameOver(); return; }
    }

    var activeColor = coords[coords.length - 1].color;

    // Turn the old head into a body segment
    var oldHead = coords[coords.length - 1];
    addRect(18, 12, oldHead.x + 1, oldHead.y + 4, activeColor, oldHead.shapes);
    addRect(12, 18, oldHead.x + 4, oldHead.y + 1, activeColor, oldHead.shapes);

    // Draw the new head
    snakeX = nextX; snakeY = nextY;
    snakeSegN++;
    var headColor = snakeSegColor(snakeSegN);
    var head = new Circle(9); head.setPosition(snakeX + 10, snakeY + 10); head.setColor(headColor); add(head);
    var eye1 = new Circle(1.5); var eye2 = new Circle(1.5); eye1.setColor("#000000"); eye2.setColor("#000000");
    if (direction == "right") { eye1.setPosition(snakeX + 14, snakeY + 6); eye2.setPosition(snakeX + 14, snakeY + 14); }
    else if (direction == "left") { eye1.setPosition(snakeX + 6, snakeY + 6); eye2.setPosition(snakeX + 6, snakeY + 14); }
    else if (direction == "up") { eye1.setPosition(snakeX + 6, snakeY + 6); eye2.setPosition(snakeX + 14, snakeY + 6); }
    else if (direction == "down") { eye1.setPosition(snakeX + 6, snakeY + 14); eye2.setPosition(snakeX + 14, snakeY + 14); }
    add(eye1); add(eye2);
    coords.push({x: snakeX, y: snakeY, shapes: [head, eye1, eye2], color: headColor});
    if (snakeY < 40) bringToFront(menuBtnShapes.concat([scoreText, nameTagBadge]));   // keep HUD on top

    if (willEat) {
        snakeScore++; snakeLength++; scoreText.setText("SCORE: " + snakeScore);
        removeShapes(appleShapes);
        burst(applePositionX + 10, applePositionY + 10, 10, ["#ef4444", "#fca5a5", "#facc15"], 2.5, 0.05);
        appleCoords(); createApple();
    }

    // Actually remove the tail's shapes (instead of painting over them) so the
    // canvas doesn't fill up with thousands of objects and slow the game down
    if (coords.length > snakeLength) {
        removeShapes(coords.shift().shapes);
    }
}

// Death: red flash, then the body turns to stone from the head back
var snakeDieTimer = 0;
function snakeGameOver() {
    currentAppState = "SNAKE_DYING";
    snakeDieTimer = 0;
    var head = coords[coords.length - 1];
    flash("#ef4444", 0.45);
    nBurst(head.x + 10, head.y + 10, snakeSegColor(snakeSegN), 18, 4, 0, 3);
}

function snakeDeathTick() {
    snakeDieTimer++;
    var idx = coords.length - snakeDieTimer;       // head first, then back along the body
    if (idx >= 0) {
        var seg = coords[idx];
        for (var k = 0; k < seg.shapes.length; k++) seg.shapes[k].setColor((k === 1 || k === 2) ? "#1e293b" : "#475569");   // 1 and 2 are the eyes
        if (idx % 3 === 0) nBurst(seg.x + 10, seg.y + 10, "#94a3b8", 3, 1.5, 0, 2);
    }
    if (snakeDieTimer > Math.min(coords.length, 25) + 6) {
        stopTimer(snakeGameLoop);
        currentAppState = "SNAKE_OVER";
        var newBest = snakeScore > snakeHighScore && snakeScore > 0;
        if (newBest) snakeHighScore = snakeScore;
        recordBest("SNAKE", snakeScore);
        showGameOverCard("SCORE: " + snakeScore, "BEST: " + snakeHighScore, newBest);
    }
}


// -------------------------------------------------------------
// PARKOUR ENGINE (50 unique stages)
// -------------------------------------------------------------
function initParkourGame(diff) {
    parkourLevel = 1;
    walkCycle = 0;
    keyLeftPressed = false;
    keyRightPressed = false;

    if (diff === "EASY") stickmanSpeed = 4.2;
    else if (diff === "MED") stickmanSpeed = 4.8;
    else stickmanSpeed = 5.5;

    loadParkourLevel(parkourLevel);
}

// Seeded random numbers: each stage is different from the others,
// but the SAME every time you play it, so you can learn it.
function makeRng(seed) {
    var s = seed >>> 0;
    return function () {
        s = (s + 0x6D2B79F5) >>> 0;
        var t = s;
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

function pickPlatformKind(R, lvl, style, cur) {
    var opts = ["plain", "plain"];
    if (lvl >= 15) opts.pop();
    if (lvl >= 30 || style === 5) opts = [];
    if (lvl >= 3) opts.push("mover");
    if (lvl >= 6 && style !== 3 && cur.kind !== "bounce" && cur.y > 250) opts.push("bounce");
    if (lvl >= 5) opts.push("crumble");
    if (lvl >= 7) opts.push("spike");
    if (lvl >= 9) opts.push("vmover");
    if (opts.length === 0) opts.push("plain");
    return opts[Math.floor(R() * opts.length)];
}

function overlapsAny(list, x, y, w) {
    for (var i = 0; i < list.length; i++) {
        var o = list[i];
        if (x < o.x + o.w + 10 && x + w + 10 > o.x && Math.abs(y - o.y) < 34) return true;
    }
    return false;
}

// Widest edge-to-edge gap the stickman can clear when the target is "rise" px higher
// (negative rise = lower). Uses the real jump physics and the chosen run speed,
// keeping a safety margin so every jump is hard but never impossible.
function maxParkourGap(rise, jumpV, speed) {
    var g = stickmanGravity;
    var disc = jumpV * jumpV - 2 * g * (rise + 6);
    if (disc < 0) return 0;
    var t = (jumpV + Math.sqrt(disc)) / g;
    return t * speed * 0.85 - 12;
}

// Builds the stage as plain data: where the spawn ledge and each platform go.
function generateParkourLayout(lvl, speed) {
    speed = speed || stickmanSpeed;
    var R = makeRng(lvl * 7919 + 101);
    var d = 0.25 + 0.75 * (lvl - 1) / (maxParkourLevel - 1);   // starts a quarter of the way up
    var style = (lvl % 10 === 0) ? 5 : (lvl - 1) % 5;
    var count = Math.min(14, 6 + Math.floor(d * 8) + (style === 5 ? 2 : 0));
    var startLeft = (style === 1) ? true : (R() < 0.5);

    var spawn;
    if (style === 3) spawn = {x: startLeft ? 15 : 335, y: 125, w: 50, kind: "plain"};
    else spawn = {x: startLeft ? 10 : 340, y: 397, w: 50, kind: "plain"};

    var plats = [];
    var all = [spawn];
    var cur = spawn;
    var dir = startLeft ? 1 : -1;
    var intro = FEATURE_INTRO[lvl];

    for (var i = 0; i < count; i++) {
        var last = (i === count - 1);
        var kind = last ? "plain" : pickPlatformKind(R, lvl, style, cur);
        if (intro && intro.kind !== "fireball" && i === 1) kind = intro.kind;   // show off the new obstacle early
        if (kind === "bounce" && (cur.y < 250 || cur.kind === "bounce")) kind = "plain";

        var w = Math.round(50 - d * 28 + rangeR(-5, 5, R));
        if (last) w = Math.max(w, 40);
        var spikeW = 0;
        if (kind === "spike") { spikeW = Math.round(22 + d * 18); w += spikeW + 14; }
        w = clamp(w, 20, 130);

        var dy;
        if (cur.kind === "bounce") dy = -rangeR(110, 150, R);
        else if (style === 0) dy = -rangeR(40, 75, R);
        else if (style === 1) dy = rangeR(-40, 45, R);
        else if (style === 2) dy = -rangeR(30, 65, R);
        else if (style === 3) dy = rangeR(30, 70, R);
        else if (style === 4) dy = -rangeR(55, 82, R);
        else dy = rangeR(-75, 40, R);

        if (style === 2 && i > 0 && i % 3 === 0) dir = -dir;
        var jumpV = (cur.kind === "bounce") ? -BOUNCE_VY : -stickmanJump;
        var ny = clamp(cur.y + dy, 110, 395);
        var frac = Math.min(0.95, 0.5 + 0.38 * d + R() * 0.12);   // how close to the limit this jump is

        var nx, gap, tries;
        for (tries = 0; tries < 6; tries++) {
            gap = Math.max(6, frac * maxParkourGap(cur.y - ny, jumpV, speed));
            nx = dir > 0 ? cur.x + cur.w + gap : cur.x - gap - w;
            if (nx < 10 || nx + w > 390) {
                dir = -dir;
                nx = dir > 0 ? cur.x + cur.w + gap : cur.x - gap - w;
            }
            nx = clamp(nx, 10, 390 - w);
            // Don't stack a platform on top of an earlier one; nudge it up instead
            if (!overlapsAny(all, nx, ny, w) || tries >= 4 || ny - 30 < 110 || maxParkourGap(cur.y - (ny - 30), jumpV, speed) < 20) break;
            ny -= 30;
        }

        var p = {x: nx, y: ny, w: w, kind: kind, spikeW: spikeW, range: 0, speed: 0};
        if (kind === "mover") {
            p.range = Math.min(rangeR(25, 55, R), nx - 10, 390 - (nx + w));
            p.speed = (1.0 + d * 1.6) / Math.max(1, p.range);
            if (p.range < 10) p.kind = "plain";
        } else if (kind === "vmover") {
            p.range = Math.min(rangeR(20, 45, R), ny - 100, 405 - ny);
            p.speed = (0.8 + d * 1.4) / Math.max(1, p.range);
            if (p.range < 10) p.kind = "plain";
        }
        plats.push(p);
        all.push(p);
        cur = p;
    }

    // Fireballs leap out of the lava in the gaps between platforms (stage 16+)
    var fireballs = [];
    if (lvl >= 16) {
        var want = 1 + Math.floor((lvl - 16) / 9) + (style === 5 ? 1 : 0);
        var path = [spawn].concat(plats);
        for (var f = 1; f < path.length && fireballs.length < want; f++) {
            var a = path[f - 1], b = path[f];
            var left = Math.min(a.x + a.w, b.x + b.w), right = Math.max(a.x, b.x);
            if (right - left < 14 || R() < 0.35) continue;
            var fx = (left + right) / 2, apex = Math.max(100, Math.min(a.y, b.y) - rangeR(20, 70, R));
            // Never put a fireball's path through a spot where you have to stand
            var blocked = false;
            for (var q = 0; q < path.length; q++) {
                if (fx > path[q].x - 16 && fx < path[q].x + path[q].w + 16 && path[q].y > apex - 30) blocked = true;
            }
            if (blocked) continue;
            fireballs.push({x: fx, apex: apex,
                            period: Math.round(rangeR(70, 120, R)), delay: Math.round(rangeR(0, 80, R))});
        }
    }
    return {style: style, spawn: spawn, plats: plats, d: d, fireballs: fireballs};
}

// Random number between a and b using the seeded generator
function rangeR(a, b, R) {
    return a + R() * (b - a);
}

function loadParkourLevel(lvl) {
    stopAllGameTimers();
    clearScreen();
    currentAppState = "PARKOUR";
    parkourPlatforms = [];
    parkourStanding = null;
    lavaBubbles = [];

    var layout = generateParkourLayout(lvl);
    var style = PARKOUR_STYLES[layout.style];

    addRect(400, 480, 0, 0, style.bg);
    // Faint background pillars for depth
    for (var c = 0; c < 5; c++) {
        addRect(30, 480, 20 + c * 85, 0, shade(style.bg, 1.35));
    }

    addRect(400, 40, 0, LAVA_Y, "#b91c1c");
    lavaTop = addRect(400, 6, 0, LAVA_Y, "#ef4444");
    for (var b = 0; b < 7; b++) {
        lavaBubbles.push(addCircle(rand(2, 4), rand(10, 390), rand(LAVA_Y + 12, 475), "#f97316"));
    }

    buildPlatform(layout.spawn, layout.d);
    for (var i = 0; i < layout.plats.length; i++) buildPlatform(layout.plats[i], layout.d);

    parkourFireballs = [];
    for (var f = 0; f < layout.fireballs.length; f++) {
        var fb = layout.fireballs[f];
        var fshapes = [];
        addCircle(7, fb.x, 520, "#f97316", fshapes);
        addCircle(4, fb.x, 520, "#fde047", fshapes);
        parkourFireballs.push({x: fb.x, y: 520, vy: 0, shapes: fshapes, timer: fb.delay, period: fb.period,
                               launchV: -Math.sqrt(2 * 0.35 * (LAVA_Y - fb.apex)), flying: false});
    }

    // Portal sits on the last platform
    var lastP = layout.plats[layout.plats.length - 1];
    var portalX = lastP.x + lastP.w / 2 - 13;
    var portalY = lastP.y - 44;
    goalPortal = addRect(26, 44, portalX, portalY, "#a855f7");
    portalInner = addRect(16, 32, portalX + 5, portalY + 6, "#f3e8ff");

    stickmanX = layout.spawn.x + layout.spawn.w / 2;
    stickmanY = layout.spawn.y - STICK_FOOT;
    stickmanVX = 0;
    stickmanVY = 0;
    isJumping = false;
    onGround = true;
    drawSmoothStickman(stickmanX, stickmanY);

    parkourLevelText = addText("STAGE " + lvl + " / " + maxParkourLevel, "14pt Courier", 20, 35, "#34d399");
    nameTagBadge = addText(playerName, "10pt Courier", 20, 55, "#fbbf24");
    addMenuButton(330, 8);

    var intro = FEATURE_INTRO[lvl];
    showBanner("STAGE " + lvl + ": " + style.name, intro ? "NEW: " + intro.label : null);

    setTimer(parkourGameLoop, 20);
}

function buildPlatform(spec, d) {
    var top = "#10b981", body = "#4b5563";
    if (spec.kind === "mover") { top = "#38bdf8"; body = "#334155"; }
    else if (spec.kind === "vmover") { top = "#a78bfa"; body = "#3b3054"; }
    else if (spec.kind === "crumble") { top = "#f59e0b"; body = "#92400e"; }

    var shapes = [];
    var h = 14;
    addRect(spec.w, h, spec.x, spec.y, "#000000", shapes);
    addRect(spec.w - 4, h - 4, spec.x + 2, spec.y + 2, body, shapes);
    var topRect = addRect(spec.w - 4, 4, spec.x + 2, spec.y + 2, top, shapes);

    var p = {x: spec.x, y: spec.y, w: spec.w, h: h, kind: spec.kind, shapes: shapes, topRect: topRect,
             baseX: spec.x, baseY: spec.y, range: spec.range || 0, speed: spec.speed || 0, phase: 0,
             dx: 0, dy: 0, prevY: spec.y, active: true, triggered: false, timer: 0, fallVY: 0,
             crumbleTime: Math.round(22 - d * 10), spikeX: 0, spikeW: 0};

    if (spec.kind === "bounce") {
        addRect(spec.w - 16, 4, spec.x + 8, spec.y - 4, "#facc15", shapes);
        addRect(4, 3, spec.x + 12, spec.y - 1, "#a16207", shapes);
        addRect(4, 3, spec.x + spec.w - 16, spec.y - 1, "#a16207", shapes);
    } else if (spec.kind === "spike") {
        p.spikeW = spec.spikeW;
        p.spikeX = spec.x + (spec.w - spec.spikeW) / 2;
        var k = 0;
        for (var tx = p.spikeX; tx <= p.spikeX + p.spikeW - 4; tx += 4) {
            var th = (k % 2 === 0) ? 9 : 6;
            addRect(4, th, tx, spec.y - th, (k % 2 === 0) ? "#e5e7eb" : "#9ca3af", shapes);
            k++;
        }
    }
    parkourPlatforms.push(p);
    return p;
}

function showBanner(title, subText) {
    var g = [];
    addRect(320, subText ? 62 : 46, 40, 190, "rgba(0,0,0,0.75)", g);
    addText(title, "14pt Courier", "center", 220, "#facc15", g);
    if (subText) addText(subText, "9pt Courier", "center", 242, "#34d399", g);
    // Fly in from the left, hang for a moment, then zoom off to the right
    popIn(g, -440, 0, 18, 0, function () {
        tweenBy(g, 440, 0, 16, 50, easeInCubic, function () { removeShapes(g); });
    });
}

function updateParkourPlatforms() {
    for (var i = 0; i < parkourPlatforms.length; i++) {
        var p = parkourPlatforms[i];
        p.prevY = p.y; p.dx = 0; p.dy = 0;

        if (p.active && (p.kind === "mover" || p.kind === "vmover")) {
            p.phase += p.speed;
            var off = Math.sin(p.phase) * p.range;
            if (p.kind === "mover") { p.dx = (p.baseX + off) - p.x; p.x += p.dx; }
            else { p.dy = (p.baseY + off) - p.y; p.y += p.dy; }
            moveShapes(p.shapes, p.dx, p.dy);
        }

        if (p.kind === "crumble") {
            if (p.active && p.triggered) {
                p.timer--;
                p.topRect.setColor(Math.floor(p.timer / 4) % 2 === 0 ? "#ef4444" : "#f59e0b");
                if (p.timer <= 0) p.active = false;
            } else if (!p.active && p.shapes) {
                p.fallVY += 0.5;
                p.y += p.fallVY;
                moveShapes(p.shapes, 0, p.fallVY);
                if (p.y > 500) { removeShapes(p.shapes); p.shapes = null; }
            }
        }
    }
}

// Returns true if a fireball hit the stickman
function updateFireballs() {
    var hit = false;
    for (var i = 0; i < parkourFireballs.length; i++) {
        var fb = parkourFireballs[i];
        if (!fb.flying) {
            fb.timer--;
            if (fb.timer <= 0) {
                fb.flying = true; fb.vy = fb.launchV;
                moveShapes(fb.shapes, 0, LAVA_Y + 8 - fb.y); fb.y = LAVA_Y + 8;
            }
            continue;
        }
        fb.vy += 0.35;
        fb.y += fb.vy;
        moveShapes(fb.shapes, 0, fb.vy);
        fb.shapes[1].setColor(Math.floor(uiFrame / 3) % 2 === 0 ? "#fde047" : "#fb923c");
        if (fb.vy > 0 && fb.y > LAVA_Y + 10) {
            fb.flying = false; fb.timer = fb.period;
            moveShapes(fb.shapes, 0, 520 - fb.y); fb.y = 520;
        }
        // Circle vs stickman box
        var cx = clamp(fb.x, stickmanX - 5, stickmanX + 5);
        var cy = clamp(fb.y, stickmanY - 23, stickmanY + STICK_FOOT);
        if ((fb.x - cx) * (fb.x - cx) + (fb.y - cy) * (fb.y - cy) < 36) hit = true;
    }
    return hit;
}

// The runner: a little ninja with a red headband
var stickmanFacing = 1;
var runnerHeadband, runnerTail, runnerEye;

function drawSmoothStickman(x, y) {
    stickmanFacing = 1;
    var shirt = cust("PARKOUR", "shirt").color, band = cust("PARKOUR", "band").color;
    stickmanLLeg = addRect(4, 13, x - 4, y + 4, "#1e293b");
    stickmanRLeg = addRect(4, 13, x + 1, y + 4, "#334155");
    stickmanLArm = addRect(3, 10, x - 7, y - 8, shade(shirt, 0.75));
    stickmanTorso = addRect(9, 13, x - 4.5, y - 9, shirt);
    stickmanRArm = addRect(3, 10, x + 4, y - 8, shade(shirt, 1.15));
    stickmanHead = addCircle(7, x, y - 16, cust("PARKOUR", "skin").color);
    runnerHeadband = addRect(14, 3, x - 7, y - 20, band);
    runnerTail = addRect(6, 2, x - 12, y - 19, band);
    runnerEye = addRect(2, 2, x + 2, y - 17, "#111827");
}

function updateStickmanPositions(x, y, lArmOff, rArmOff, lLegOff, rLegOff) {
    if (stickmanVX > 0) stickmanFacing = 1;
    else if (stickmanVX < 0) stickmanFacing = -1;
    var f = stickmanFacing;
    stickmanHead.setPosition(x, y - 16);
    stickmanTorso.setPosition(x - 4.5, y - 9);
    stickmanLArm.setPosition(x - 7 + lArmOff, y - 8);
    stickmanRArm.setPosition(x + 4 + rArmOff, y - 8);
    stickmanLLeg.setPosition(x - 4 + lLegOff, y + 4);
    stickmanRLeg.setPosition(x + 1 + rLegOff, y + 4);
    runnerHeadband.setPosition(x - 7, y - 20);
    // Headband tail flutters behind you; eye looks where you're going
    var flutter = (isJumping || stickmanVX !== 0) ? (Math.floor(walkCycle / 3) % 2) : 0;
    runnerTail.setPosition(f > 0 ? x - 12 : x + 6, y - 19 + flutter);
    runnerEye.setPosition(f > 0 ? x + 2 : x - 4, y - 17);
}

function parkourGameLoop() {
    if (currentAppState !== "PARKOUR") return;

    updateParkourPlatforms();
    if (updateFireballs()) { parkourGameOver(); return; }

    // Lava bubbles & glowing portal
    for (var b = 0; b < lavaBubbles.length; b++) {
        lavaBubbles[b].move(0, -0.4);
        if (lavaBubbles[b].getY() < LAVA_Y + 4) lavaBubbles[b].setPosition(rand(10, 390), 476);
    }
    lavaTop.setColor(Math.floor(uiFrame / 10) % 2 === 0 ? "#ef4444" : "#f97316");
    portalInner.setColor(Math.floor(uiFrame / 8) % 2 === 0 ? "#f3e8ff" : "#d8b4fe");

    // Ride along with a moving platform
    if (parkourStanding && parkourStanding.active) {
        stickmanX += parkourStanding.dx;
        stickmanY += parkourStanding.dy;
    }

    stickmanVX = 0;
    if (keyLeftPressed) stickmanVX = -stickmanSpeed;
    if (keyRightPressed) stickmanVX = stickmanSpeed;

    stickmanX += stickmanVX;
    if (stickmanX < 15) stickmanX = 15;
    if (stickmanX > 385) stickmanX = 385;

    var prevFeet = stickmanY + STICK_FOOT;
    stickmanVY += stickmanGravity;
    stickmanY += stickmanVY;
    var feet = stickmanY + STICK_FOOT;

    // Land only if the feet CROSSED a platform's top this frame, so fast falls
    // can't tunnel through and rising elevators still catch you.
    onGround = false;
    var landed = null;
    if (stickmanVY >= 0) {
        for (var i = 0; i < parkourPlatforms.length; i++) {
            var p = parkourPlatforms[i];
            if (!p.active) continue;
            if (stickmanX >= p.x - 6 && stickmanX <= p.x + p.w + 6 &&
                prevFeet <= Math.max(p.y, p.prevY) + 0.5 && feet >= p.y) {
                landed = p;
                break;
            }
        }
    }

    if (landed) {
        stickmanY = landed.y - STICK_FOOT;
        if (landed.kind === "bounce") {
            stickmanVY = BOUNCE_VY;
            parkourStanding = null;
            burst(stickmanX, landed.y - 4, 8, ["#facc15", "#fde68a"], 2, 0.1);
        } else {
            stickmanVY = 0;
            onGround = true;
            parkourStanding = landed;
            if (landed.kind === "crumble" && !landed.triggered) {
                landed.triggered = true;
                landed.timer = landed.crumbleTime;
            }
        }
    } else {
        parkourStanding = null;
    }
    isJumping = !onGround;   // walking off a ledge counts as airborne (no mid-air jumps)

    var lA = 0, rA = 0, lL = 0, rL = 0;
    if (isJumping) {
        lA = -2; rA = 2; lL = -2; rL = 2;
    } else if (keyLeftPressed || keyRightPressed) {
        walkCycle++;
        var swing = Math.sin(walkCycle * 0.35) * 4;
        lA = swing; rA = -swing;
        lL = -swing; rL = swing;
    }

    updateStickmanPositions(stickmanX, stickmanY, lA, rA, lL, rL);

    // Spikes
    for (var s = 0; s < parkourPlatforms.length; s++) {
        var sp = parkourPlatforms[s];
        if (sp.kind !== "spike") continue;
        if (stickmanX + 4 > sp.spikeX && stickmanX - 4 < sp.spikeX + sp.spikeW &&
            stickmanY + STICK_FOOT > sp.y - 8 && stickmanY + STICK_FOOT <= sp.y + 2) {
            parkourGameOver();
            return;
        }
    }

    // Lava
    if (stickmanY + STICK_FOOT >= LAVA_Y) {
        parkourGameOver();
        return;
    }

    var portalX = goalPortal.getX();
    var portalY = goalPortal.getY();
    if (stickmanX >= portalX - 5 && stickmanX <= portalX + 31 &&
        stickmanY >= portalY - 10 && stickmanY <= portalY + 48) {
        stopTimer(parkourGameLoop);
        parkourLevel++;
        if (parkourLevel > maxParkourLevel) {
            showVictoryScreen();
            return;
        }
        loadParkourLevel(parkourLevel);
    }
}

function parkourGameOver() {
    currentAppState = "PARKOUR_OVER";
    stopTimer(parkourGameLoop);
    burst(stickmanX, stickmanY, 25, ["#06b6d4", "#38bdf8", "#f97316", "#ef4444"], 4, 0.15);
    var newBest = parkourLevel > parkourBest;
    if (newBest) parkourBest = parkourLevel;
    recordBest("PARKOUR", parkourLevel);
    showGameOverCard("STAGE REACHED: " + parkourLevel, "SCORE: " + (parkourLevel * 100), newBest && parkourLevel > 1);
}

function showVictoryScreen() {
    stopAllGameTimers();
    clearScreen();
    currentAppState = "VICTORY";
    if (maxParkourLevel > parkourBest) parkourBest = maxParkourLevel;
    recordBest("PARKOUR", maxParkourLevel);

    addRect(400, 480, 0, 0, "#030712");
    var g = [];
    addRect(320, 260, 40, 110, "#1f2937", g);
    addText("YOU WIN!!", "24pt Courier", "center", 160, "#34d399", g);
    addText("COMPLETED ALL 50 HARDCORE STAGES!", "7pt Courier", "center", 205, "#facc15", g);
    addText("CHAMPION: " + playerName, "11pt Courier", 75, 235, "#38bdf8", g);
    makeButton("gomenu", 120, 295, 160, 40, "#10b981", "MAIN MENU", "12pt Courier", 26, g);
    popIn(g, 0, -420, 26);
}


// -------------------------------------------------------------
// DINO RUN ENGINE
// -------------------------------------------------------------
function initDinoGame(diff) {
    dinoHighScore = Math.max(dinoHighScore, bestScores.DINO || 0);
    applyDinoColors();
    stopAllGameTimers();
    clearScreen();
    currentAppState = "DINO";

    if (diff === "EASY") dinoSpeed = 6;
    else if (diff === "MED") dinoSpeed = 7.2;
    else dinoSpeed = 8.5;
    dinoMaxSpeed = dinoSpeed + 6;

    dinoParts = []; dinoPoseKey = ""; dinoObstacles = []; dinoClouds = []; dinoDots = [];
    dinoBottom = DINO_GROUND; dinoVY = 0; dinoOnGround = true; dinoDownHeld = false; dinoDead = false;
    dinoScore = 0; dinoFrame = 0; dinoDistSinceSpawn = 0; dinoNextGap = 320;
    dinoSkyT = 1; dinoIsNight = false; dinoNextFlip = 400; dinoNextMilestone = 100; dinoFlash = 0;

    dinoSky = addRect(400, DINO_GROUND, 0, 0, DINO_DAY);
    dinoSun = addCircle(22, 330, 80, "#fde047");

    for (var c = 0; c < 3; c++) {
        var parts = [];
        var cx = 60 + c * 140, cy = 110 + c * 30;
        addCircle(12, cx, cy, "#ffffff", parts);
        addCircle(16, cx + 16, cy - 5, "#ffffff", parts);
        addCircle(11, cx + 32, cy, "#ffffff", parts);
        dinoClouds.push(parts);
    }

    addRect(400, 480 - DINO_GROUND, 0, DINO_GROUND, "#e2b86b");
    addRect(400, 3, 0, DINO_GROUND, "#92400e");
    for (var i = 0; i < 18; i++) {
        dinoDots.push(addRect(Math.round(rand(2, 7)), 2, rand(0, 400), rand(DINO_GROUND + 8, 470), "#b45309"));
    }

    dinoScoreText = addText("SCORE: 00000", "14pt Courier", 20, 35, "#1f2937");
    nameTagBadge = addText(playerName, "10pt Courier", 20, 55, "#b45309");
    dinoHiText = addText("HI " + pad5(dinoHighScore), "11pt Courier", 220, 35, "#475569");
    addMenuButton(330, 20);

    updateDinoSprite(false);
    setTimer(dinoGameLoop, 20);
}

function dinoHitbox(ducking) {
    if (ducking) return {x: DINO_X - 2, y: dinoBottom - 26, w: 54, h: 26};
    return {x: DINO_X + 6, y: dinoBottom - 46, w: 34, h: 46};
}

function buildDino(ducking, px, pb) {
    removeShapes(dinoParts);
    dinoParts = [];
    var P = dinoParts;
    var x = (px === undefined) ? DINO_X : px, b = (pb === undefined) ? dinoBottom : pb;
    var leg = Math.floor(dinoFrame / 5) % 2;
    var eyeC = dinoDead ? "#ef4444" : "#111827";

    if (ducking) {
        addRect(8, 6, x - 6, b - 20, DINO_COLOR, P);           // tail
        addRect(34, 14, x, b - 22, DINO_COLOR, P);             // body
        addRect(22, 12, x + 30, b - 26, DINO_COLOR, P);        // head
        addRect(3, 3, x + 44, b - 23, eyeC, P);                // eye
        addRect(5, leg ? 8 : 5, x + 8, b - 8, DINO_DARK, P);   // legs
        addRect(5, leg ? 5 : 8, x + 20, b - 8, DINO_DARK, P);
    } else {
        addRect(10, 8, x, b - 30, DINO_COLOR, P);              // tail
        addRect(24, 20, x + 6, b - 34, DINO_COLOR, P);         // body
        addRect(22, 14, x + 20, b - 46, DINO_COLOR, P);        // head
        addRect(12, 4, x + 30, b - 34, DINO_COLOR, P);         // jaw
        addRect(3, 3, x + 34, b - 43, eyeC, P);                // eye
        addRect(6, 3, x + 28, b - 24, DINO_DARK, P);           // arm
        var l1 = 14, l2 = 14;
        if (dinoOnGround && !dinoDead) { l1 = leg ? 14 : 10; l2 = leg ? 10 : 14; }
        addRect(5, l1, x + 10, b - 14, DINO_DARK, P);          // legs
        addRect(5, l2, x + 20, b - 14, DINO_DARK, P);
    }
    // Hat sits on top of the head (the head is lower when ducking)
    var hx = ducking ? x + 30 : x + 20, hy = ducking ? b - 26 : b - 46;
    var hat = cust("DINO", "hat").name;
    if (hat === "CAP") {
        addRect(18, 6, hx + 2, hy - 6, "#ef4444", P);
        addRect(8, 3, hx + 18, hy - 3, "#b91c1c", P);
    } else if (hat === "CROWN") {
        addRect(16, 5, hx + 3, hy - 5, "#facc15", P);
        addRect(4, 4, hx + 3, hy - 9, "#facc15", P);
        addRect(4, 4, hx + 9, hy - 10, "#facc15", P);
        addRect(4, 4, hx + 15, hy - 9, "#facc15", P);
    } else if (hat === "PARTY HAT") {
        addRect(12, 4, hx + 5, hy - 4, "#a855f7", P);
        addRect(8, 4, hx + 7, hy - 8, "#facc15", P);
        addRect(4, 4, hx + 9, hy - 12, "#22d3ee", P);
    }
    dinoDrawnBottom = b;
}

// Only rebuild the dino when its pose changes; otherwise just slide it up/down
function updateDinoSprite(ducking) {
    var key = (ducking ? "duck" : (dinoOnGround ? "run" : "air")) +
              ((dinoOnGround && !dinoDead) ? (Math.floor(dinoFrame / 5) % 2) : "") + (dinoDead ? "x" : "");
    if (key !== dinoPoseKey) {
        dinoPoseKey = key;
        buildDino(ducking);
    } else if (dinoBottom !== dinoDrawnBottom) {
        moveShapes(dinoParts, 0, dinoBottom - dinoDrawnBottom);
        dinoDrawnBottom = dinoBottom;
    }
}

function createCactus(x, big) {
    var h = big ? 46 : 32, w = big ? 18 : 13;
    var top = DINO_GROUND - h;
    var shapes = [];
    addRect(w, h, x, top, "#15803d", shapes);
    addRect(2, h - 6, x + w / 2 - 1, top + 3, "#22c55e", shapes);
    addRect(6, 4, x - 6, top + h * 0.4, "#15803d", shapes);
    addRect(4, 10, x - 6, top + h * 0.4 - 10, "#15803d", shapes);
    addRect(6, 4, x + w, top + h * 0.55, "#15803d", shapes);
    addRect(4, 9, x + w + 2, top + h * 0.55 - 9, "#15803d", shapes);
    dinoObstacles.push({shapes: shapes, x: x, y: top, w: w, h: h, kind: "cactus"});
    return w;
}

function createBird(x, bottom) {
    var shapes = [];
    var top = bottom - 12;
    addRect(28, 10, x, top + 2, "#475569", shapes);       // body
    addRect(10, 8, x - 8, top, "#475569", shapes);         // head
    addRect(6, 3, x - 13, top + 3, "#f59e0b", shapes);     // beak
    addRect(2, 2, x - 5, top + 2, "#ffffff", shapes);      // eye
    var wing = addRect(14, 8, x + 6, top - 6, "#64748b", shapes);
    dinoObstacles.push({shapes: shapes, x: x - 13, y: top, w: 41, h: 12, kind: "bird", wing: wing, top: top});
}

function spawnDinoObstacle() {
    var sc = Math.floor(dinoScore);
    if (sc >= 150 && Math.random() < 0.3) {
        var heights = [DINO_GROUND - 14, DINO_GROUND - 32, DINO_GROUND - 64];
        createBird(420, heights[Math.floor(Math.random() * 3)]);
    } else {
        var count = 1 + Math.floor(Math.random() * (sc > 100 ? 3 : 2));
        var x = 420;
        var big = Math.random() < 0.5;
        for (var i = 0; i < count; i++) {
            x += createCactus(x, big) + 5;
        }
    }
}

function dinoGameLoop() {
    if (currentAppState !== "DINO") return;
    dinoFrame++;

    // Jump physics (holding DOWN in the air slams you back to the ground)
    var g = (dinoDownHeld && !dinoOnGround) ? 2.2 : 0.8;
    dinoVY += g;
    dinoBottom += dinoVY;
    if (dinoBottom >= DINO_GROUND) {
        dinoBottom = DINO_GROUND; dinoVY = 0; dinoOnGround = true;
    } else {
        dinoOnGround = false;
    }
    var ducking = dinoDownHeld && dinoOnGround;
    updateDinoSprite(ducking);

    // Speed up and score
    dinoSpeed = Math.min(dinoMaxSpeed, dinoSpeed + 0.0025);
    dinoScore += dinoSpeed * 0.02;
    var sc = Math.floor(dinoScore);
    dinoScoreText.setText("SCORE: " + pad5(sc));

    if (sc >= dinoNextMilestone) {
        dinoNextMilestone += 100;
        dinoFlash = 30;
        burst(110, 30, 14, CONFETTI, 3, 0.12);
    }
    var baseText = dinoIsNight ? "#f8fafc" : "#1f2937";
    if (dinoFlash > 0) {
        dinoFlash--;
        dinoScoreText.setColor(Math.floor(dinoFlash / 4) % 2 === 0 ? "#f59e0b" : baseText);
    } else {
        dinoScoreText.setColor(baseText);
    }

    // Day / night cycle every 400 points
    if (sc >= dinoNextFlip) {
        dinoNextFlip += 400;
        dinoIsNight = !dinoIsNight;
        dinoSkyT = 0;
        dinoSun.setColor(dinoIsNight ? "#e5e7eb" : "#fde047");
        dinoHiText.setColor(dinoIsNight ? "#cbd5e1" : "#475569");
    }
    if (dinoSkyT < 1) {
        dinoSkyT = Math.min(1, dinoSkyT + 0.02);
        dinoSky.setColor(dinoIsNight ? lerpColor(DINO_DAY, DINO_NIGHT, dinoSkyT) : lerpColor(DINO_NIGHT, DINO_DAY, dinoSkyT));
    }

    // Scenery
    for (var c = 0; c < dinoClouds.length; c++) {
        moveShapes(dinoClouds[c], -dinoSpeed * 0.15, 0);
        if (dinoClouds[c][0].getX() < -60) moveShapes(dinoClouds[c], 500, 0);
    }
    for (var d = 0; d < dinoDots.length; d++) {
        dinoDots[d].move(-dinoSpeed, 0);
        if (dinoDots[d].getX() < -8) dinoDots[d].move(410, 0);
    }

    // Obstacles
    dinoDistSinceSpawn += dinoSpeed;
    if (dinoDistSinceSpawn >= dinoNextGap) {
        spawnDinoObstacle();
        dinoDistSinceSpawn = 0;
        dinoNextGap = dinoSpeed * 30 + rand(0, 220);
    }

    var hb = dinoHitbox(ducking);
    for (var i = dinoObstacles.length - 1; i >= 0; i--) {
        var o = dinoObstacles[i];
        var spd = (o.kind === "bird") ? dinoSpeed + 0.8 : dinoSpeed;
        moveShapes(o.shapes, -spd, 0);
        o.x -= spd;

        if (o.kind === "bird") {
            o.wing.setPosition(o.wing.getX(), (Math.floor(dinoFrame / 8) % 2 === 0) ? o.top - 6 : o.top + 10);
        }

        // Hitboxes are shrunk a little so near misses feel fair
        if (hb.x + 4 < o.x + o.w - 3 && hb.x + hb.w - 4 > o.x + 3 &&
            hb.y + 4 < o.y + o.h - 2 && hb.y + hb.h > o.y + 2) {
            dinoGameOver();
            return;
        }

        if (o.x + o.w < -20) {
            removeShapes(o.shapes);
            dinoObstacles.splice(i, 1);
        }
    }

    if (dinoFrame % 30 === 0) bringToFront(dinoParts.concat([dinoScoreText, nameTagBadge, dinoHiText]));
}

function dinoGameOver() {
    currentAppState = "DINO_OVER";
    stopTimer(dinoGameLoop);
    dinoDead = true;
    updateDinoSprite(false);
    burst(DINO_X + 25, dinoBottom - 25, 20, ["#22c55e", "#15803d", "#facc15"], 3.5, 0.15);
    var sc = Math.floor(dinoScore);
    var newBest = sc > dinoHighScore && sc > 0;
    if (newBest) dinoHighScore = sc;
    recordBest("DINO", sc);
    showGameOverCard("SCORE: " + sc, "BEST: " + dinoHighScore, newBest);
}


// -------------------------------------------------------------
// TROLL TRAPS ENGINE (rage game: the level is out to get you)
// -------------------------------------------------------------
var TROLL_JUMP = -10.5;
var TROLL_GRAVITY = 0.7;
var TROLL_SPEED = 3.6;
var TROLL_SIZE = 16;
var TROLL_FLOOR = "#2dd4bf";
var TROLL_FLOOR_TOP = "#99f6e4";
var TROLL_TAUNTS = ["LOL", "NOPE!", "OOPS!", "GOT YOU!", "HA HA!", "TRUST NOTHING", "TOO EASY?", "BONK!",
                    "SO CLOSE!", "AGAIN?", "SKILL ISSUE", "TRY HARDER", "CRY ABOUT IT", "WOW.", "NOT EVEN CLOSE"];

var trollLevel = 1;
var trollDeaths = 0;
var trollBestDeaths = -1;
var trollFrame = 0;
var trollX = 20, trollY = 384, trollVY = 0;
var trollLeft = false, trollRight = false;
var trollOnGround = false;
var trollCoyote = 0;          // a few frames of "late jump" grace after walking off a ledge
var trollStanding = null;
var trollFacing = 1;
var trollDying = 0;
var trollReversed = false;
var trollSolids = [];
var trollSpikes = [];
var trollIcicles = [];
var trollDecoys = [];
var trollTraps = [];
var trollDoor = null;
var trollParts = [];
var trollFlash = null;
var trollLevelText, trollDeathText;
var trollCrushed = false;
var trollDeathMsg = null;

var TROLL_LEVEL_DATA = [
    {name: "EASY, RIGHT?",     build: trollLevel1},
    {name: "LOOK DOWN",        build: trollLevel2},
    {name: "HEADS UP",         build: trollLevel3},
    {name: "COME BACK!",       build: trollLevel4},
    {name: "STAIRWAY",         build: trollLevel5},
    {name: "INCOMING",         build: trollLevel6},
    {name: "LEAP OF FAITH",    build: trollLevel7},
    {name: "WRONG WAY",        build: trollLevel8},
    {name: "DON'T STOP",       build: trollLevel9},
    {name: "HALFWAY EXAM",     build: trollLevel10},
    {name: "GHOST FLOOR",      build: trollLevel11},
    {name: "MIND YOUR HEAD",   build: trollLevel12},
    {name: "WHICH WAY?",       build: trollLevel13},
    {name: "THE WALL",         build: trollLevel14},
    {name: "ICICLES",          build: trollLevel15},
    {name: "KNOCK KNOCK",      build: trollLevel16},
    {name: "TRUST ISSUES",     build: trollLevel17},
    {name: "DOOR DASH",        build: trollLevel18},
    {name: "THE GAUNTLET",     build: trollLevel19},
    {name: "THE LAST JOKE",    build: trollLevel20}
];

function initTrollGame() { startTrollRun(1); }

function loadTrollLevel(showTitle) {
    stopAllGameTimers();
    clearScreen();
    currentAppState = "TROLL";
    trollSolids = []; trollSpikes = []; trollIcicles = []; trollDecoys = []; trollTraps = [];
    trollDoor = null; trollParts = []; trollFlash = null;
    trollVY = 0; trollOnGround = false; trollCoyote = 0; trollStanding = null; trollDying = 0; trollFrame = 0;
    trollX = 20; trollY = 400 - TROLL_SIZE; trollFacing = 1; trollReversed = false;

    var world = TROLL_WORLDS[trollWorldOf(trollLevel)];
    TROLL_FLOOR = world.floor; TROLL_FLOOR_TOP = world.top;
    addRect(400, 480, 0, 0, world.bg);
    for (var t = 0; t < 4; t++) {
        addRect(4, 14, 40 + t * 105, 150, shade(world.bg, 2.2));
        addCircle(4, 42 + t * 105, 146, "#f97316");
    }

    if (trollLevel <= TROLL_LEVEL_DATA.length) TROLL_LEVEL_DATA[trollLevel - 1].build();
    else trollGenLevel(trollLevel);

    drawTrollPlayer();
    trollLevelText = addText("LEVEL " + trollLevel + " / " + TROLL_LEVELS, "14pt Courier", 20, 35, "#2dd4bf");
    nameTagBadge = addText(playerName, "10pt Courier", 20, 55, "#fbbf24");
    trollDeathText = addText("DEATHS: " + trollDeaths, "11pt Courier", 206, 35, "#fb7185");
    addMenuButton(330, 18);

    addText("WORLD " + (trollWorldOf(trollLevel) + 1) + ": " + TROLL_WORLDS[trollWorldOf(trollLevel)].name, "7pt Courier", 206, 55, "#9ca3af");
    if (showTitle) showBanner("LEVEL " + trollLevel + ": " + trollLevelName(trollLevel), (trollLevel - 1) % 10 === 0 ? "WORLD " + (trollWorldOf(trollLevel) + 1) + ": " + TROLL_WORLDS[trollWorldOf(trollLevel)].name : null);
    setTimer(trollGameLoop, 20);
}

// ---------- Level building blocks ----------
function drawSolidShapes(s) {
    s.shapes = [];
    addRect(s.w, s.h, s.x, s.y, TROLL_FLOOR, s.shapes);
    s.top = addRect(s.w, 4, s.x, s.y, TROLL_FLOOR_TOP, s.shapes);
}

function tSolid(x, y, w, h) {
    var s = {x: x, y: y, w: w, h: h, shapes: [], top: null, active: true, state: "static", vy: 0, vx: 0, landY: 0, crumble: 0};
    drawSolidShapes(s);
    trollSolids.push(s);
    return s;
}

function tFloor(x1, x2) { return tSolid(x1, 400, x2 - x1, 80); }

// Looks exactly like floor... but you fall right through it
function tGhost(x1, x2) {
    var s = tFloor(x1, x2);
    s.active = false;
    s.state = "ghost";
    return s;
}

// Invisible block that appears when you bonk your head on it
function tHidden(x, y, w, h) {
    var s = {x: x, y: y, w: w, h: h, shapes: [], top: null, active: false, state: "hidden", vy: 0, vx: 0, landY: 0, crumble: 0};
    trollSolids.push(s);
    return s;
}

function revealHidden(s) {
    drawSolidShapes(s);
    s.active = true;
    s.state = "static";
    burst(s.x + s.w / 2, s.y + s.h, 8, ["#99f6e4", "#ffffff"], 2, 0.1);
}

// A block hidden above the screen that drops like a crusher when its trap fires
function tFallBlock(x, w, h) {
    var s = tSolid(x, -h - 10, w, h);
    s.active = false;
    s.state = "idle";
    s.landY = 400 - h;
    return s;
}

// Spikes sit on y = 400 by default. Hidden spikes are invisible and harmless until they pop.
function tSpikes(x, w, hidden, baseY) {
    var sp = {x: x, y: baseY || 400, w: w, h: 14, curH: hidden ? 0 : 14, lethal: !hidden, vx: 0, shapes: []};
    drawSpikeTeeth(sp);
    trollSpikes.push(sp);
    return sp;
}

function drawSpikeTeeth(sp) {
    removeShapes(sp.shapes);
    sp.shapes = [];
    if (sp.curH <= 0) return;
    var k = 0;
    for (var tx = sp.x; tx <= sp.x + sp.w - 5; tx += 5) {
        var th = (k % 2 === 0) ? sp.curH : sp.curH * 0.6;
        addRect(5, th, tx, sp.y - th, (k % 2 === 0) ? "#f1f5f9" : "#94a3b8", sp.shapes);
        k++;
    }
}

// Icicle hanging from the ceiling; drops when its trap fires
function tIcicle(x) {
    var ic = {x: x, y: 70, w: 20, h: 22, vy: 0, falling: false, shapes: []};
    addRect(24, 4, x - 2, 66, "#475569", ic.shapes);
    addRect(20, 8, x, 70, "#bae6fd", ic.shapes);
    addRect(14, 8, x + 3, 78, "#bae6fd", ic.shapes);
    addRect(8, 6, x + 6, 86, "#e0f2fe", ic.shapes);
    trollIcicles.push(ic);
    return ic;
}

function makeDoorShapes(x, y) {
    var shapes = [];
    addRect(24, 34, x, y, "#7c2d12", shapes);
    addRect(18, 30, x + 3, y + 4, "#ea580c", shapes);
    addCircle(2, x + 17, y + 19, "#fde047", shapes);
    return shapes;
}

function tDoor(x, y, hidden) {
    var shapes = makeDoorShapes(x, y);
    trollDoor = {x: x, y: y, shapes: shapes, moving: false, falling: false, hidden: !!hidden, vy: 0,
                 sx: x, sy: y, tx: 0, ty: 0, t: 0, frames: 0, respawn: null, moves: 0};
    if (hidden) removeShapes(shapes);
}

// A door that looks real. It isn't.
function tDecoy(x, y) {
    trollDecoys.push({x: x, y: y, shapes: makeDoorShapes(x, y)});
}

function tTrap(cond, act) {
    trollTraps.push({cond: cond, act: act, fired: false});
}

// ---------- Trap actions ----------
function tDrop(s) { s.active = false; s.state = "dropping"; s.vy = 0; }
function tFall(s) { s.state = "falling"; s.vy = 0; }
function tCrumble(s, frames) { if (s.crumble === 0 && s.state === "static") s.crumble = frames; }
function tPop(sp) { sp.lethal = true; sp.rising = true; }
function tSlider(x, vx) { var sp = tSpikes(x, 30, false); sp.vx = vx; return sp; }
function tDropIcicle(ic) { ic.falling = true; }
function tPush(s, vx) { s.vx = vx; }

function tMoveDoor(x, y, frames) {
    var d = trollDoor;
    d.moving = true; d.sx = d.x; d.sy = d.y; d.tx = x; d.ty = y; d.t = 0; d.frames = frames; d.moves++;
}

function tShowDoor() {
    var d = trollDoor;
    d.hidden = false;
    for (var i = 0; i < d.shapes.length; i++) add(d.shapes[i]);
    popIn(d.shapes, 0, -60, 16);
    burst(d.x + 12, d.y + 10, 12, ["#ea580c", "#fde047"], 2.5, 0.1);
}

// Door drops into a pit, then reappears somewhere else
function tDoorFallAndRespawn(x, y) {
    trollDoor.falling = true;
    trollDoor.vy = 0;
    trollDoor.respawn = {x: x, y: y, at: trollFrame + 45};
}

// Big taunting text near the top of the screen
function tSay(msg) {
    var t = addText(msg, "13pt Courier", "center", 100, "#fb7185");
    popIn([t], 0, -60, 14, 0, function () {
        tweenBy([t], 0, -80, 14, 60, easeInCubic, function () { remove(t); });
    });
}

function tReverse() {
    trollReversed = true;
    tSay("CONTROLS REVERSED!");
}

function playerCenterX() { return trollX + TROLL_SIZE / 2; }
function doorIsStill() { return !trollDoor.moving && !trollDoor.falling && !trollDoor.hidden; }

// ---------- The 20 levels ----------
// Floor top is y = 400. A full jump goes about 78px up and 108px across.

function trollLevel1() {
    tFloor(0, 200);
    var trap1 = tFloor(200, 260);
    tFloor(260, 300);
    var trap2 = tFloor(300, 340);
    tFloor(340, 400);
    tDoor(366, 366);
    tTrap(function () { return playerCenterX() > 165; }, function () { tDrop(trap1); });
    tTrap(function () { return playerCenterX() > 285; }, function () { tDrop(trap2); });
}

function trollLevel2() {
    tFloor(0, 400);
    tSpikes(140, 25, false);
    var h1 = tSpikes(255, 30, true);
    var h2 = tSpikes(330, 22, true);
    tDoor(368, 366);
    tTrap(function () { return playerCenterX() > 225; }, function () { tPop(h1); });
    tTrap(function () { return playerCenterX() > 305; }, function () { tPop(h2); });
}

function trollLevel3() {
    tFloor(0, 400);
    var crusher = tFallBlock(250, 46, 54);
    tDoor(360, 366);
    tTrap(function () { return playerCenterX() > 215; }, function () { tFall(crusher); });
}

function trollLevel4() {
    tFloor(0, 400);
    tSolid(100, 350, 40, 50);     // step
    tSolid(0, 300, 70, 12);       // high ledge (where the door runs to)
    var scare = tSpikes(70, 25, true);
    tDoor(350, 366);
    tTrap(function () { return playerCenterX() > 300; }, function () { tMoveDoor(20, 266, 45); });
    tTrap(function () { return trollDoor.x < 100 && !trollDoor.moving && playerCenterX() < 175; }, function () { tPop(scare); });
}

function trollLevel5() {
    tFloor(0, 180);
    tFloor(180, 220);
    tSolid(100, 370, 40, 30);
    tSolid(140, 340, 40, 60);
    var s3 = tSolid(180, 310, 40, 90);
    tSolid(220, 310, 80, 90);
    var gap = tSolid(300, 310, 40, 90);
    tSolid(340, 310, 60, 90);
    tFloor(300, 340);
    tSpikes(305, 30, false, 400);
    tDoor(366, 276);
    tTrap(function () { return trollStanding === s3; }, function () { tCrumble(s3, 14); });
    tTrap(function () { return playerCenterX() > 278 && trollY < 320; }, function () { tDrop(gap); });
}

function trollLevel6() {
    tFloor(0, 400);
    tDoor(362, 366);
    var h1 = tSpikes(318, 22, true);
    tTrap(function () { return playerCenterX() > 140; }, function () { tSlider(400, -3.5); });
    tTrap(function () { return playerCenterX() > 240; }, function () { tSlider(400, -5); });
    tTrap(function () { return playerCenterX() > 290; }, function () { tPop(h1); });
}

function trollLevel7() {
    tFloor(0, 90);
    tSolid(130, 360, 50, 12);
    var pB = tSolid(220, 340, 50, 12);
    var fake = tFloor(310, 345);
    tFloor(345, 400);
    tDoor(366, 366);
    tTrap(function () { return trollStanding === pB; }, function () { tCrumble(pB, 10); });
    tTrap(function () { return playerCenterX() > 280 && !trollOnGround; }, function () { tDrop(fake); });
}

function trollLevel8() {
    tFloor(0, 330);
    var end = tFloor(330, 400);
    var h1 = tSpikes(200, 30, true);
    tDoor(362, 366);
    tTrap(function () { return playerCenterX() > 175; }, function () { tPop(h1); });
    tTrap(function () { return playerCenterX() > 300; }, function () { tDrop(end); tDoorFallAndRespawn(15, 366); tSay("WRONG WAY!"); });
}

function trollLevel9() {
    tFloor(0, 400);
    var b1 = tFallBlock(110, 40, 40);
    var b2 = tFallBlock(200, 40, 40);
    var b3 = tFallBlock(290, 40, 40);
    tDoor(362, 366);
    tTrap(function () { return playerCenterX() > 60; },  function () { tFall(b1); });
    tTrap(function () { return playerCenterX() > 150; }, function () { tFall(b2); });
    tTrap(function () { return playerCenterX() > 240; }, function () { tFall(b3); });
}

function trollLevel10() {
    tFloor(0, 130);
    tFloor(180, 260);
    tFloor(260, 400);
    var h1 = tSpikes(220, 25, true);
    var crusher = tFallBlock(300, 40, 50);
    tDoor(362, 366);
    tTrap(function () { return playerCenterX() > 200; }, function () { tPop(h1); });
    tTrap(function () { return playerCenterX() > 270; }, function () { tFall(crusher); });
    tTrap(function () { return playerCenterX() > 335; }, function () { tMoveDoor(308, 316, 25); });
}

function trollLevel11() {
    tFloor(0, 120);
    tGhost(120, 180);
    tFloor(180, 250);
    tGhost(250, 300);
    tFloor(300, 400);
    tDoor(366, 366);
}

function trollLevel12() {
    tFloor(0, 400);
    tSpikes(180, 28, false);
    tHidden(165, 336, 50, 12);          // right where your head goes on a normal jump
    var h2 = tSpikes(300, 25, true);
    tDoor(366, 366);
    tTrap(function () { return playerCenterX() > 270; }, function () { tPop(h2); });
}

function trollLevel13() {
    tFloor(0, 400);
    tSpikes(170, 25, false);
    tSpikes(290, 25, false);
    tDoor(366, 366);
    tTrap(function () { return playerCenterX() > 110; }, function () { tReverse(); });
}

function trollLevel14() {
    tFloor(0, 400);
    tSpikes(0, 30, false);
    trollX = 60;                         // start past the spikes
    var wall = tSolid(335, 340, 30, 60);
    tDoor(372, 366);
    tTrap(function () { return playerCenterX() > 180; }, function () { tPush(wall, -1.6); tSay("RUN!"); });
}

function trollLevel15() {
    tFloor(0, 400);
    var i0 = tIcicle(120), i1 = tIcicle(180), i2 = tIcicle(260), i3 = tIcicle(320);
    tDoor(366, 366);
    tTrap(function () { return playerCenterX() > 90; },  function () { tDropIcicle(i0); });
    tTrap(function () { return playerCenterX() > 150; }, function () { tDropIcicle(i1); tDropIcicle(i2); });
    tTrap(function () { return playerCenterX() > 290; }, function () { tDropIcicle(i3); });
}

function trollLevel16() {
    tFloor(0, 400);
    tDecoy(362, 366);
    tDoor(20, 366, true);
    var h1 = tSpikes(120, 30, true);
    tTrap(function () { return playerCenterX() > 300; }, function () { tShowDoor(); tSay("PSST... BEHIND YOU"); });
    tTrap(function () { return !trollDoor.hidden && playerCenterX() < 250; }, function () { tPop(h1); });
}

function trollLevel17() {
    tFloor(0, 90);
    tGhost(90, 130);
    tFloor(130, 190);
    tGhost(190, 230);
    var c = tFloor(230, 280);
    tGhost(280, 320);
    tFloor(320, 400);
    tDoor(366, 366);
    tTrap(function () { return trollStanding === c; }, function () { tCrumble(c, 25); });
}

function trollLevel18() {
    tFloor(0, 400);
    tSolid(110, 350, 30, 50);
    var plat = tSolid(170, 300, 60, 12);
    var h1 = tSpikes(245, 55, true);
    tDoor(350, 366);
    tTrap(function () { return playerCenterX() > 300; }, function () { tMoveDoor(20, 366, 40); });
    tTrap(function () { return trollDoor.moves === 1 && !trollDoor.moving && playerCenterX() < 100; }, function () { tMoveDoor(188, 266, 30); });
    tTrap(function () { return trollDoor.moves === 2 && !trollDoor.moving && trollStanding === plat; },
          function () { tMoveDoor(366, 366, 30); tPop(h1); tSay("CATCH ME!"); });
}

function trollLevel19() {
    tFloor(0, 100);
    tGhost(100, 140);
    tFloor(140, 400);
    var h1 = tSpikes(260, 25, true);
    var crusher = tFallBlock(320, 40, 50);
    tDoor(372, 366);
    tTrap(function () { return playerCenterX() > 235; }, function () { tPop(h1); });
    tTrap(function () { return playerCenterX() > 290; }, function () { tFall(crusher); });
}

function trollLevel20() {
    tFloor(0, 150);
    tGhost(150, 190);
    tFloor(190, 400);
    var h1 = tSpikes(250, 25, true);
    tDoor(366, 366);
    tTrap(function () { return playerCenterX() > 225; }, function () { tPop(h1); });
    tTrap(function () { return playerCenterX() > 330; }, function () { tMoveDoor(20, 366, 50); tReverse(); });
    tTrap(function () { return trollDoor.moves === 1 && !trollDoor.moving && playerCenterX() < 320; },
          function () { tSlider(-40, 3.2); });
}

// ---------- Player ----------
function drawTrollPlayer() {
    trollParts = [];
    var body = cust("TROLL", "body"), horns = cust("TROLL", "horns").color;
    var eyeColor = (body.name === "BLACK") ? "#ffffff" : "#111827";
    addRect(3, 5, 0, 0, horns, trollParts);     // horns
    addRect(3, 5, 0, 0, horns, trollParts);
    addRect(TROLL_SIZE, TROLL_SIZE, 0, 0, body.color, trollParts);
    addRect(3, 5, 0, 0, eyeColor, trollParts);  // eyes
    addRect(3, 5, 0, 0, eyeColor, trollParts);
    positionTrollPlayer();
}

function positionTrollPlayer() {
    var x = trollX, y = trollY;
    var look = trollFacing > 0 ? 2 : -2;
    trollParts[0].setPosition(x + 1, y - 4);
    trollParts[1].setPosition(x + 12, y - 4);
    trollParts[2].setPosition(x, y);
    trollParts[3].setPosition(x + 4 + look, y + 4);
    trollParts[4].setPosition(x + 9 + look, y + 4);
}

function boxesOverlap(ax, ay, aw, ah, bx, by, bw, bh) {
    return ax < bx + bw && ax + aw > bx && ay < by + bh && ay + ah > by;
}

function playerHitsSolid(except) {
    for (var i = 0; i < trollSolids.length; i++) {
        var s = trollSolids[i];
        if (s === except || !s.active) continue;
        if (boxesOverlap(trollX, trollY, TROLL_SIZE, TROLL_SIZE, s.x, s.y, s.w, s.h)) return true;
    }
    return false;
}

// ---------- Main loop ----------
function updateTrollWorld() {
    for (var i = trollSolids.length - 1; i >= 0; i--) {
        var s = trollSolids[i];
        if (s.crumble > 0) {
            s.crumble--;
            s.top.setColor(s.crumble % 4 < 2 ? "#fb7185" : TROLL_FLOOR_TOP);
            if (s.crumble === 0) tDrop(s);
        }
        if (s.state === "dropping") {
            s.vy += 0.6; s.y += s.vy;
            moveShapes(s.shapes, 0, s.vy);
            if (s.y > 500) { removeShapes(s.shapes); trollSolids.splice(i, 1); }
        } else if (s.state === "falling") {
            s.vy += TROLL_GRAVITY;
            var ny = Math.min(s.landY, s.y + s.vy);
            moveShapes(s.shapes, 0, ny - s.y);
            s.y = ny;
            if (trollDying === 0 && boxesOverlap(trollX, trollY, TROLL_SIZE, TROLL_SIZE, s.x, s.y, s.w, s.h)) trollCrushed = true;
            if (s.y >= s.landY) {
                s.state = "static"; s.active = true;
                burst(s.x + s.w / 2, s.y + s.h, 10, ["#99f6e4", "#e2e8f0"], 2.5, 0.12);
            }
        } else if (s.vx !== 0 && s.active) {
            // Pusher wall: shoves the player, and crushes them against anything solid
            s.x += s.vx;
            moveShapes(s.shapes, s.vx, 0);
            if (trollDying === 0) {
                if (trollStanding === s) trollX += s.vx;
                else if (boxesOverlap(trollX, trollY, TROLL_SIZE, TROLL_SIZE, s.x, s.y, s.w, s.h)) {
                    trollX += s.vx;
                    if (trollX < 0 || trollX > 400 - TROLL_SIZE || playerHitsSolid(s)) trollCrushed = true;
                }
            }
            if (s.x < -s.w - 10 || s.x > 410) { removeShapes(s.shapes); trollSolids.splice(i, 1); }
        }
    }

    for (var j = trollSpikes.length - 1; j >= 0; j--) {
        var sp = trollSpikes[j];
        if (sp.rising) {
            sp.curH = Math.min(sp.h, sp.curH + 4);
            drawSpikeTeeth(sp);
            if (sp.curH >= sp.h) sp.rising = false;
        }
        if (sp.vx !== 0) {
            sp.x += sp.vx;
            moveShapes(sp.shapes, sp.vx, 0);
            if (sp.x < -40 || sp.x > 440) { removeShapes(sp.shapes); trollSpikes.splice(j, 1); }
        }
    }

    for (var k = trollIcicles.length - 1; k >= 0; k--) {
        var ic = trollIcicles[k];
        if (!ic.falling) continue;
        ic.vy += TROLL_GRAVITY;
        ic.y += ic.vy;
        moveShapes(ic.shapes, 0, ic.vy);
        if (trollDying === 0 && boxesOverlap(trollX + 2, trollY, TROLL_SIZE - 4, TROLL_SIZE, ic.x + 2, ic.y, ic.w - 4, ic.h)) trollCrushed = true;
        if (ic.y + ic.h >= 400) {
            burst(ic.x + 10, 396, 12, ["#bae6fd", "#ffffff", "#e0f2fe"], 2.5, 0.12);
            removeShapes(ic.shapes);
            trollIcicles.splice(k, 1);
        }
    }

    var d = trollDoor;
    if (d.moving) {
        d.t++;
        var p = Math.min(1, d.t / d.frames);
        var nx = d.sx + (d.tx - d.sx) * p, ny2 = d.sy + (d.ty - d.sy) * p;
        moveShapes(d.shapes, nx - d.x, ny2 - d.y);
        d.x = nx; d.y = ny2;
        if (p >= 1) d.moving = false;
    }
    if (d.falling) {
        d.vy += 0.6; d.y += d.vy;
        moveShapes(d.shapes, 0, d.vy);
        if (d.respawn && trollFrame >= d.respawn.at) {
            moveShapes(d.shapes, d.respawn.x - d.x, d.respawn.y - d.y);
            d.x = d.respawn.x; d.y = d.respawn.y;
            d.falling = false; d.respawn = null; d.vy = 0;
            popIn(d.shapes, 0, -60, 16);
            burst(d.x + 12, d.y, 12, ["#ea580c", "#fde047"], 2.5, 0.1);
        }
    }
}

function trollGameLoop() {
    if (currentAppState !== "TROLL") return;
    trollFrame++;

    if (trollDying > 0) {
        updateTrollWorld();
        trollDying--;
        if (trollDying === 28 && trollFlash) { remove(trollFlash); trollFlash = null; }
        if (trollDying === 0) loadTrollLevel(false);   // instant retry, same level
        return;
    }

    for (var t = 0; t < trollTraps.length; t++) {
        var tr = trollTraps[t];
        if (!tr.fired && tr.cond()) { tr.fired = true; tr.act(); }
    }

    trollCrushed = false;
    updateTrollWorld();
    if (trollCrushed) { trollDie(); return; }

    // Horizontal move (backwards if the controls got reversed), then push out of walls
    var dirInput = (trollRight ? 1 : 0) - (trollLeft ? 1 : 0);
    if (trollReversed) dirInput = -dirInput;
    var vx = dirInput * TROLL_SPEED;
    if (vx !== 0) trollFacing = vx > 0 ? 1 : -1;
    trollX = clamp(trollX + vx, 0, 400 - TROLL_SIZE);
    for (var i = 0; i < trollSolids.length; i++) {
        var s = trollSolids[i];
        if (!s.active) continue;
        if (boxesOverlap(trollX, trollY, TROLL_SIZE, TROLL_SIZE, s.x, s.y, s.w, s.h)) {
            trollX = vx > 0 ? s.x - TROLL_SIZE : s.x + s.w;
        }
    }

    // Vertical move, then land on / bonk against solids (and reveal hidden blocks)
    trollVY = Math.min(12, trollVY + TROLL_GRAVITY);
    trollY += trollVY;
    trollOnGround = false;
    trollStanding = null;
    for (var j = 0; j < trollSolids.length; j++) {
        var b = trollSolids[j];
        if (b.state === "hidden" && trollVY < 0 &&
            boxesOverlap(trollX, trollY, TROLL_SIZE, TROLL_SIZE, b.x, b.y, b.w, b.h)) {
            revealHidden(b);
        }
        if (!b.active) continue;
        if (boxesOverlap(trollX, trollY, TROLL_SIZE, TROLL_SIZE, b.x, b.y, b.w, b.h)) {
            if (trollVY > 0) {
                trollY = b.y - TROLL_SIZE; trollVY = 0;
                trollOnGround = true; trollStanding = b;
            } else {
                trollY = b.y + b.h; trollVY = 0;
            }
        }
    }
    trollCoyote = trollOnGround ? 5 : Math.max(0, trollCoyote - 1);

    positionTrollPlayer();

    for (var k = 0; k < trollSpikes.length; k++) {
        var sp = trollSpikes[k];
        if (sp.lethal && boxesOverlap(trollX + 2, trollY + 2, TROLL_SIZE - 4, TROLL_SIZE - 2, sp.x, sp.y - sp.h, sp.w, sp.h)) {
            trollDie(); return;
        }
    }
    for (var m = 0; m < trollDecoys.length; m++) {
        var dc = trollDecoys[m];
        if (boxesOverlap(trollX, trollY, TROLL_SIZE, TROLL_SIZE, dc.x + 2, dc.y, 20, 34)) {
            trollDie("FAKE DOOR! LOL"); return;
        }
    }
    if (trollY > 480) { trollDie(); return; }

    var d = trollDoor;
    if (doorIsStill() && boxesOverlap(trollX, trollY, TROLL_SIZE, TROLL_SIZE, d.x + 2, d.y, 20, 34)) {
        trollLevel++;
        trollBestLevel = Math.max(trollBestLevel, trollLevel);
        recordBest("TRAPLVL", Math.min(trollLevel, TROLL_LEVELS));
        if (trollLevel > TROLL_LEVELS) { trollWin(); return; }
        loadTrollLevel(true);
    }
}

function trollDie(msg) {
    if (trollDying > 0) return;
    trollDeaths++;
    trollDying = 32;
    removeShapes(trollParts);
    trollDeathText.setText("DEATHS: " + trollDeaths);
    trollFlash = addRect(400, 480, 0, 0, "rgba(239,68,68,0.3)");
    var cx = clamp(trollX + 8, 30, 370), cy = clamp(trollY, 90, 440);
    burst(cx, cy, 22, ["#facc15", "#ef4444", "#ffffff"], 4, 0.18);
    var text = msg || TROLL_TAUNTS[Math.floor(Math.random() * TROLL_TAUNTS.length)];
    var taunt = addText(text, "16pt Courier", "center", cy - 20, "#fb7185");
    popIn([taunt], 0, 30, 14);
}

function trollWin() {
    stopTimer(trollGameLoop);
    currentAppState = "TROLL_OVER";
    var newBest = trollBestDeaths < 0 || trollDeaths < trollBestDeaths;
    if (newBest) trollBestDeaths = trollDeaths;

    var g = [];
    addRect(320, 260, 40, 110, "#1f2937", g);
    addText("YOU ESCAPED!", "20pt Courier", "center", 150, "#2dd4bf", g);
    addText("ALL 100 LEVELS, 10 WORLDS. LEGEND.", "8pt Courier", "center", 168, "#fde68a", g);
    addText("PILOT: " + playerName, "11pt Courier", 75, 185, "#34d399", g);
    addText("DEATHS: " + trollDeaths, "12pt Courier", 75, 215, "#ffffff", g);
    addText("BEST: " + trollBestDeaths + " DEATHS", "12pt Courier", 75, 240, "#fbbf24", g);
    makeButton("gomenu", 120, 305, 160, 40, "#10b981", "MAIN MENU", "12pt Courier", 26, g);
    popIn(g, 0, -420, 22, 0, function () {
        burst(110, 140, 30, CONFETTI, 4.5, 0.15);
        burst(290, 140, 30, CONFETTI, 4.5, 0.15);
    });
}


// ---------- 100 levels in 10 worlds ----------
// Levels 1-20 are the hand-made ones. Levels 21-100 are generated from each world's
// bag of tricks. Every generated level uses a fixed seed, so it's the same every time.
var TROLL_WORLDS = [
    {name: "THE BASICS",      bg: "#140b2b", floor: "#2dd4bf", top: "#99f6e4", pool: []},
    {name: "RAGE MODE",       bg: "#1c0a1e", floor: "#f472b6", top: "#fbcfe8", pool: []},
    {name: "GHOST GROUNDS",   bg: "#0f172a", floor: "#94a3b8", top: "#e2e8f0", pool: ["ghost", "gap", "ghost", "crumble"]},
    {name: "SPIKE VALLEY",    bg: "#1a1206", floor: "#f59e0b", top: "#fde68a", pool: ["spikes", "hspikes", "gap", "hspikes"]},
    {name: "CRUSHER FACTORY", bg: "#111827", floor: "#64748b", top: "#cbd5e1", pool: ["crusher", "gap", "spikes", "crusher"]},
    {name: "FROZEN PEAK",     bg: "#0c1a2e", floor: "#7dd3fc", top: "#e0f2fe", pool: ["icicle", "ghost", "gap", "icicle"]},
    {name: "SLED RUSH",       bg: "#2a0a0a", floor: "#fb7185", top: "#fecdd3", pool: ["slider", "spikes", "gap", "slider"]},
    {name: "MIRROR MAZE",     bg: "#1e1b4b", floor: "#a78bfa", top: "#ede9fe", pool: ["ghost", "spikes", "gap", "hspikes", "crumble"]},
    {name: "DOOR DASH",       bg: "#052e16", floor: "#4ade80", top: "#dcfce7", pool: ["spikes", "ghost", "gap", "crusher"]},
    {name: "THE GAUNTLET",    bg: "#000000", floor: "#e11d48", top: "#fecdd3", pool: ["ghost", "spikes", "hspikes", "crusher", "icicle", "slider", "gap", "crumble"]}
];
var TROLL_LEVELS = 100;
var trollBestLevel = 1;

function trollWorldOf(lvl) { return Math.min(9, Math.floor((lvl - 1) / 10)); }
function trollLevelName(lvl) {
    if (lvl <= TROLL_LEVEL_DATA.length) return TROLL_LEVEL_DATA[lvl - 1].name;
    var w = trollWorldOf(lvl);
    var inW = (lvl - 1) % 10 + 1;
    if (inW === 10) return "BOSS OF " + TROLL_WORLDS[w].name;
    return TROLL_WORLDS[w].name + " " + inW;
}

// Build one generated level. Chunks of trouble sit between safe bits of floor.
function trollGenLevel(lvl) {
    var R = makeRng(lvl * 7331 + 17);
    var w = trollWorldOf(lvl);
    var world = TROLL_WORLDS[w];
    var inW = (lvl - 1) % 10 + 1;                      // 1..10 inside the world
    var d = (lvl - 21) / 79;                           // 0 on level 21, 1 on level 100
    var count = 3;
    var x = 70 + Math.round(R() * 8);
    var lastKind = "";
    var i;

    tFloor(0, x);
    for (i = 0; i < count && x < 300; i++) {
        var kind = world.pool[Math.floor(R() * world.pool.length)];
        if (kind === lastKind && R() < 0.6) kind = world.pool[Math.floor(R() * world.pool.length)];
        lastKind = kind;
        var width = 0;
        if (kind === "gap") {
            width = Math.round(32 + d * 14 + R() * 6);
        } else if (kind === "ghost") {
            width = Math.round(28 + d * 10 + R() * 6);
            tGhost(x, x + width);
        } else if (kind === "crumble") {
            width = Math.round(36 + R() * 10);
            var cf = tFloor(x, x + width);
            tTrap(trollStandOn(cf), trollCrumbleNow(cf, Math.round(16 - d * 4)));
        } else if (kind === "spikes") {
            width = Math.round(22 + d * 8);
            tFloor(x, x + width);
            tSpikes(x, width, false);
        } else if (kind === "hspikes") {
            width = Math.round(22 + d * 8);
            tFloor(x, x + width);
            var hs = tSpikes(x, width, true);
            tTrap(trollPastX(x - 34), trollPopNow(hs));
        } else if (kind === "crusher") {
            width = 40;
            tFloor(x, x + width);
            var cr = tFallBlock(x, 40, 44);
            tTrap(trollPastX(x - 48), trollFallNow(cr));
        } else if (kind === "icicle") {
            width = 26;
            tFloor(x, x + width);
            var ic = tIcicle(x + 3);
            tTrap(trollPastX(x - 60), trollIcicleNow(ic));
        } else if (kind === "slider") {
            width = 30;
            tFloor(x, x + width);
            tTrap(trollPastX(x - 60), trollSledNow(3.2 + d * 1.6));
        }
        x += width;
        // A full jump lands 108px past where you took off, so the next trick always
        // starts at least 116px after this one: you land on floor, never on the trap.
        var safe = Math.max(Math.round(58 - d * 6), 116 - (kind === "crumble" ? 0 : width));   // crumble: you may jump from its far edge
        tFloor(x, x + safe);
        x += safe;
    }
    tFloor(x, 400);

    // World twists
    if (w === 7 || (w === 9 && inW % 2 === 0)) tTrap(trollPastX(100), function () { tReverse(); });
    if (w === 8 || (w === 9 && inW >= 5)) {
        if (inW % 2 === 1) {
            tDoor(362, 366);
            tTrap(trollPastX(300), function () { tMoveDoor(20, 366, 40); tSay("COME BACK!"); });
        } else {
            tDecoy(362, 366);
            tDoor(20, 366, true);
            tTrap(trollPastX(300), function () { tShowDoor(); tSay("PSST... BEHIND YOU"); });
        }
    } else {
        tDoor(362, 366);
    }
}

// Little helpers so the generator can make trigger functions in a loop
function trollPastX(px) { return function () { return playerCenterX() > px; }; }
function trollStandOn(s) { return function () { return trollStanding === s; }; }
function trollPopNow(sp) { return function () { tPop(sp); }; }
function trollFallNow(s) { return function () { tFall(s); }; }
function trollIcicleNow(ic) { return function () { tDropIcicle(ic); }; }
function trollCrumbleNow(s, frames) { return function () { tCrumble(s, frames); }; }
function trollSledNow(speed) { return function () { tSlider(400, -speed); }; }

// ---------- Troll Traps menu ----------
function showTrollMenu() {
    neonMenu("TROLL TRAPS", "#e11d48", 70, 340);
    currentAppState = "TROLL_MENU";
    trollBestLevel = Math.max(trollBestLevel, bestScores.TRAPLVL || 1);
    var reached = clamp(trollBestLevel, 1, TROLL_LEVELS);
    var g = [];
    addText("100 LEVELS. 10 WORLDS. TRUST NOTHING.", "9pt Courier", "center", 142, "#fca5a5", g);
    makeButton("trollNew", 80, 160, 240, 44, "#e11d48", "NEW GAME", "13pt Courier", 28, g);
    if (reached > 1) makeButton("trollCont", 80, 216, 240, 44, "#f97316", "CONTINUE: LEVEL " + reached, "11pt Courier", 28, g);
    addText("FURTHEST: LEVEL " + reached + " / " + TROLL_LEVELS, "9pt Courier", "center", 292, "#fde68a", g);
    addText("WORLD " + (trollWorldOf(reached) + 1) + ": " + TROLL_WORLDS[trollWorldOf(reached)].name, "8pt Courier", "center", 308, "#fdba74", g);
    addText(isGuest ? "LOG IN TO SAVE YOUR PROGRESS" : "PROGRESS SAVES AUTOMATICALLY", "8pt Courier", "center", 326, "#9ca3af", g);
    makeButton("back", 80, 350, 240, 40, "#374151", "BACK", "12pt Courier", 26, g);
    popIn(g, 0, 480, 22);
}

function startTrollRun(level) {
    trollLevel = clamp(level, 1, TROLL_LEVELS);
    trollDeaths = 0;
    trollLeft = false; trollRight = false;
    loadTrollLevel(true);
}

// ---------- Leaderboard (everyone who has an account on this computer) ----------
var LEADER_GAMES = [
    ["FLAPPY", "FLAPPY BIRD"], ["SNAKE", "SNAKE"], ["PARKOUR", "PARKOUR (STAGE)"], ["DINO", "DINO RUN"],
    ["ASTRO", "ASTEROID DODGE"], ["TRAPLVL", "TROLL TRAPS (LEVEL)"], ["BLOCKS", "BLOCK DROP"], ["BLASTER", "GALAXY BLASTER"],
    ["PONG", "PONG (WINS VS CPU)"], ["BRICK", "BRICK BREAKER"], ["TANK", "TANK ARENA"], ["G2048", "2048"],
    ["TOWER", "TOWER DEFENSE (WAVE)"], ["BOSS", "BOSS BATTLE (BOSSES BEATEN)"], ["RHYTHM", "RHYTHM RUSH"]
];
var leaderPage = 0;

function leaderTop(key) {
    var db = storageLoad();
    var rows = [];
    if (db) {
        for (var name in db.users) {
            var best = db.users[name].best || {}, top = null;
            for (var k in best) {
                if ((k === key || k.indexOf(key + "_") === 0) && (top === null || best[k] > top)) top = best[k];
            }
            if (top !== null && top > 0) rows.push({name: name, score: top});
        }
    }
    rows.sort(function (a, b) { return b.score - a.score; });
    return rows.slice(0, 3);
}

function showLeaderboard(page) {
    neonMenu("LEADERBOARD", "#facc15", 20, 430);
    currentAppState = "LEADERBOARD";
    var perPage = 4, pages = Math.ceil(LEADER_GAMES.length / perPage);
    leaderPage = clamp(page, 0, pages - 1);
    var g = [];
    addText("TOP PLAYERS ON THIS COMPUTER", "8pt Courier", "center", 84, "#64748b", g);
    var medals = ["#facc15", "#cbd5e1", "#d97706"];
    for (var i = 0; i < perPage; i++) {
        var idx = leaderPage * perPage + i;
        if (idx >= LEADER_GAMES.length) break;
        var y = 104 + i * 76;
        addRect(4, 60, 36, y - 10, "#facc15", g);
        addText(LEADER_GAMES[idx][1], "10pt Courier", 48, y, "#ffffff", g);
        var rows = leaderTop(LEADER_GAMES[idx][0]);
        if (rows.length === 0) addText("NO SCORES YET - LOG IN AND PLAY!", "7pt Courier", 48, y + 18, "#475569", g);
        for (var r = 0; r < rows.length; r++) {
            addCircle(4, 54, y + 14 + r * 15, medals[r], g);
            addText((r + 1) + ". " + rows[r].name, "8pt Courier", 64, y + 18 + r * 15, rows[r].name === playerName ? "#4ade80" : "#cbd5e1", g);
            var sc = addText("" + rows[r].score, "8pt Courier", 0, y + 18 + r * 15, "#fde68a", g);
            sc.setPosition(350 - sc.getWidth(), y + 18 + r * 15);
        }
    }
    addText("PAGE " + (leaderPage + 1) + " OF " + pages, "8pt Courier", "center", 418, "#64748b", g);
    if (leaderPage > 0) makeButton("ldPrev", 40, 400, 70, 26, "#334155", "< PREV", "8pt Courier", 17, g);
    if (leaderPage < pages - 1) makeButton("ldNext", 290, 400, 70, 26, "#334155", "NEXT >", "8pt Courier", 17, g);
    makeButton("back", 120, 432, 160, 22, "#374151", "BACK", "10pt Courier", 16, g);
    popIn(g, 0, 480, 22);
}


// -------------------------------------------------------------
// BLOCK DROP ENGINE (falling blocks: clear full lines)
// -------------------------------------------------------------
var BLK_COLS = 10, BLK_ROWS = 20, BLK_SIZE = 18, BLK_X = 22, BLK_Y = 84;
var BLK_EMPTY = "#0f172a";
var BLK_GHOST = "#334155";
var BLK_SHAPES = {
    I: [[0, 1], [1, 1], [2, 1], [3, 1]],
    O: [[1, 0], [2, 0], [1, 1], [2, 1]],
    T: [[1, 0], [0, 1], [1, 1], [2, 1]],
    S: [[1, 0], [2, 0], [0, 1], [1, 1]],
    Z: [[0, 0], [1, 0], [1, 1], [2, 1]],
    J: [[0, 0], [0, 1], [1, 1], [2, 1]],
    L: [[2, 0], [0, 1], [1, 1], [2, 1]]
};
var BLK_COLORS = {I: "#22d3ee", O: "#facc15", T: "#a855f7", S: "#22c55e", Z: "#ef4444", J: "#3b82f6", L: "#f97316"};
var BLK_TYPES = ["I", "O", "T", "S", "Z", "J", "L"];

var blkGrid = [];          // locked blocks: color string or null
var blkCells = [];         // the Rectangle drawn for each board square
var blkNextCells = [];
var blkPiece = null;
var blkNext = "T";
var blkBag = [];
var blkScore = 0, blkHighScore = 0, blkLines = 0, blkLevel = 1, blkStartLevel = 1;
var blkDropTimer = 0;
var blkSoft = false;
var blkClearing = 0;
var blkClearRows = [];
var blkDirty = true;
var blkScoreText, blkLinesText, blkLevelText, blkBestText;

function initBlocksGame(diff) {
    var theme = cust("BLOCKS", "theme").set;
    for (var t = 0; t < BLK_TYPES.length; t++) BLK_COLORS[BLK_TYPES[t]] = theme[t];
    BLK_EMPTY = cust("BLOCKS", "board").color;
    blkHighScore = Math.max(blkHighScore, bestScores.BLOCKS || 0);
    stopAllGameTimers();
    clearScreen();
    currentAppState = "BLOCKS";

    blkStartLevel = (diff === "EASY") ? 1 : (diff === "MED" ? 4 : 8);
    blkLevel = blkStartLevel;
    blkScore = 0; blkLines = 0; blkDropTimer = 0; blkSoft = false; blkClearing = 0; blkClearRows = [];
    blkBag = [];

    addRect(400, 480, 0, 0, "#0b1020");
    addRect(BLK_COLS * BLK_SIZE + 8, BLK_ROWS * BLK_SIZE + 8, BLK_X - 4, BLK_Y - 4, "#334155");
    addRect(BLK_COLS * BLK_SIZE, BLK_ROWS * BLK_SIZE, BLK_X, BLK_Y, "#020617");

    blkGrid = []; blkCells = [];
    for (var r = 0; r < BLK_ROWS; r++) {
        blkGrid.push([]); blkCells.push([]);
        for (var c = 0; c < BLK_COLS; c++) {
            blkGrid[r].push(null);
            blkCells[r].push(addRect(BLK_SIZE - 1, BLK_SIZE - 1, BLK_X + c * BLK_SIZE, BLK_Y + r * BLK_SIZE, BLK_EMPTY));
        }
    }

    // Side panel
    var px = 222;
    addText("BLOCK DROP", "14pt Courier", px, 35, "#facc15");
    nameTagBadge = addText(playerName, "10pt Courier", px, 55, "#fbbf24");
    addRect(156, 92, px, 84, "#172033");
    addText("NEXT", "10pt Courier", px + 10, 102, "#94a3b8");
    blkNextCells = [];
    for (var nr = 0; nr < 2; nr++) {
        blkNextCells.push([]);
        for (var nc = 0; nc < 4; nc++) {
            blkNextCells[nr].push(addRect(15, 15, px + 46 + nc * 16, 112 + nr * 16, "#172033"));
        }
    }
    addRect(156, 128, px, 186, "#172033");
    blkScoreText = addText("SCORE: 0", "11pt Courier", px + 10, 210, "#ffffff");
    blkLinesText = addText("LINES: 0", "11pt Courier", px + 10, 236, "#ffffff");
    blkLevelText = addText("LEVEL: " + blkLevel, "11pt Courier", px + 10, 262, "#38bdf8");
    blkBestText = addText("BEST: " + blkHighScore, "11pt Courier", px + 10, 288, "#fbbf24");

    var help = ["LEFT/RIGHT  MOVE", "UP      ROTATE", "DOWN    SOFT DROP", "SPACE   HARD DROP", "Q       PAUSE"];
    for (var h = 0; h < help.length; h++) addText(help[h], "8pt Courier", px + 4, 340 + h * 18, "#64748b");
    addMenuButton(px + 47, 436);

    blkNext = blkTakeFromBag();
    blkSpawn();
    setTimer(blocksGameLoop, 20);
}

// "7-bag": every 7 pieces you get one of each shape, so no long droughts
function blkTakeFromBag() {
    if (blkBag.length === 0) {
        blkBag = BLK_TYPES.slice();
        for (var i = blkBag.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var t = blkBag[i]; blkBag[i] = blkBag[j]; blkBag[j] = t;
        }
    }
    return blkBag.pop();
}

function blkSpawn() {
    var type = blkNext;
    blkNext = blkTakeFromBag();
    blkPiece = {type: type, cells: BLK_SHAPES[type].map(function (p) { return [p[0], p[1]]; }), x: 3, y: (type === "I") ? -1 : 0};
    blkDrawNext();
    blkDirty = true;
    if (!blkFits(blkPiece.cells, blkPiece.x, blkPiece.y)) blocksGameOver();
}

function blkFits(cells, ox, oy) {
    for (var i = 0; i < cells.length; i++) {
        var c = cells[i][0] + ox, r = cells[i][1] + oy;
        if (c < 0 || c >= BLK_COLS || r >= BLK_ROWS) return false;
        if (r >= 0 && blkGrid[r][c]) return false;
    }
    return true;
}

function blkMove(dx, dy) {
    if (blkFits(blkPiece.cells, blkPiece.x + dx, blkPiece.y + dy)) {
        blkPiece.x += dx; blkPiece.y += dy;
        blkDirty = true;
        return true;
    }
    return false;
}

// Rotate clockwise; if it bumps something, try nudging sideways ("wall kick")
function blkRotate() {
    if (blkPiece.type === "O") return;
    var size = (blkPiece.type === "I") ? 4 : 3;
    var rotated = blkPiece.cells.map(function (p) { return [size - 1 - p[1], p[0]]; });
    var kicks = [0, -1, 1, -2, 2];
    for (var k = 0; k < kicks.length; k++) {
        if (blkFits(rotated, blkPiece.x + kicks[k], blkPiece.y)) {
            blkPiece.cells = rotated;
            blkPiece.x += kicks[k];
            blkDirty = true;
            return;
        }
    }
}

function blkHardDrop() {
    var dropped = 0;
    while (blkMove(0, 1)) dropped++;
    blkScore += dropped * 2;
    blkLock();
}

function blkLock() {
    var color = BLK_COLORS[blkPiece.type];
    for (var i = 0; i < blkPiece.cells.length; i++) {
        var c = blkPiece.cells[i][0] + blkPiece.x, r = blkPiece.cells[i][1] + blkPiece.y;
        if (r < 0) { blocksGameOver(); return; }
        blkGrid[r][c] = color;
    }
    blkPiece = null;
    blkDirty = true;

    blkClearRows = [];
    for (var row = 0; row < BLK_ROWS; row++) {
        var full = true;
        for (var col = 0; col < BLK_COLS; col++) if (!blkGrid[row][col]) { full = false; break; }
        if (full) blkClearRows.push(row);
    }

    if (blkClearRows.length > 0) {
        var pts = [0, 100, 300, 500, 800][blkClearRows.length];
        blkScore += pts * blkLevel;
        blkLines += blkClearRows.length;
        blkClearing = 14;    // flash before the rows vanish
        for (var k = 0; k < blkClearRows.length; k++) {
            var y = BLK_Y + blkClearRows[k] * BLK_SIZE + 9;
            burst(BLK_X + 45, y, 6, CONFETTI, 3, 0.1);
            burst(BLK_X + 135, y, 6, CONFETTI, 3, 0.1);
        }
        if (blkClearRows.length === 4) showBanner("BLOCK BLAST! +" + (800 * blkLevel), null);
    } else {
        blkSpawn();
    }
    blkUpdateHud();
}

function blkFinishClear() {
    // Remove full rows from the bottom up, adding empty rows on top
    for (var k = 0; k < blkClearRows.length; k++) {
        blkGrid.splice(blkClearRows[k], 1);
        var empty = [];
        for (var c = 0; c < BLK_COLS; c++) empty.push(null);
        blkGrid.unshift(empty);
    }
    blkClearRows = [];
    var newLevel = blkStartLevel + Math.floor(blkLines / 10);
    if (newLevel > blkLevel) {
        blkLevel = newLevel;
        showBanner("LEVEL " + blkLevel + "!", "FASTER...");
    }
    blkUpdateHud();
    blkSpawn();
}

function blkUpdateHud() {
    blkScoreText.setText("SCORE: " + blkScore);
    blkLinesText.setText("LINES: " + blkLines);
    blkLevelText.setText("LEVEL: " + blkLevel);
}

function blkDrawNext() {
    for (var r = 0; r < 2; r++) for (var c = 0; c < 4; c++) blkNextCells[r][c].setColor("#172033");
    var cells = BLK_SHAPES[blkNext];
    for (var i = 0; i < cells.length; i++) {
        var row = (blkNext === "I") ? 0 : cells[i][1];
        blkNextCells[row][cells[i][0]].setColor(BLK_COLORS[blkNext]);
    }
}

function blkRender() {
    for (var r = 0; r < BLK_ROWS; r++) {
        for (var c = 0; c < BLK_COLS; c++) {
            blkCells[r][c].setColor(blkGrid[r][c] || BLK_EMPTY);
        }
    }
    if (!blkPiece) return;
    // Ghost piece shows where it will land
    var gy = blkPiece.y;
    while (blkFits(blkPiece.cells, blkPiece.x, gy + 1)) gy++;
    var i, cc, rr;
    for (i = 0; i < blkPiece.cells.length; i++) {
        cc = blkPiece.cells[i][0] + blkPiece.x; rr = blkPiece.cells[i][1] + gy;
        if (rr >= 0 && cust("BLOCKS", "ghost").name === "ON") blkCells[rr][cc].setColor(BLK_GHOST);
    }
    for (i = 0; i < blkPiece.cells.length; i++) {
        cc = blkPiece.cells[i][0] + blkPiece.x; rr = blkPiece.cells[i][1] + blkPiece.y;
        if (rr >= 0) blkCells[rr][cc].setColor(BLK_COLORS[blkPiece.type]);
    }
}

function blocksKey(code) {
    if (!blkPiece || blkClearing > 0) return;
    if (code == Keyboard.LEFT) blkMove(-1, 0);
    else if (code == Keyboard.RIGHT) blkMove(1, 0);
    else if (code == Keyboard.UP) blkRotate();
    else if (code == Keyboard.DOWN) blkSoft = true;
    else if (code == Keyboard.SPACE) blkHardDrop();
    if (blkDirty && currentAppState === "BLOCKS") { blkRender(); blkDirty = false; }
}

function blocksGameLoop() {
    if (currentAppState !== "BLOCKS") return;

    if (blkClearing > 0) {
        blkClearing--;
        var flash = (blkClearing % 4 < 2) ? "#ffffff" : "#facc15";
        for (var k = 0; k < blkClearRows.length; k++) {
            for (var c = 0; c < BLK_COLS; c++) blkCells[blkClearRows[k]][c].setColor(flash);
        }
        if (blkClearing === 0) blkFinishClear();
        if (currentAppState === "BLOCKS" && blkClearing === 0) { blkRender(); blkDirty = false; }
        return;
    }

    blkDropTimer++;
    var interval = blkSoft ? 2 : Math.max(3, Math.round(40 - (blkLevel - 1) * 3.4));
    if (blkPiece && blkDropTimer >= interval) {
        blkDropTimer = 0;
        if (blkMove(0, 1)) {
            if (blkSoft) { blkScore += 1; blkScoreText.setText("SCORE: " + blkScore); }
        } else {
            blkLock();
            if (currentAppState !== "BLOCKS") return;
        }
    }
    if (blkDirty) { blkRender(); blkDirty = false; }
}

function blocksGameOver() {
    if (currentAppState !== "BLOCKS") return;
    currentAppState = "BLOCKS_OVER";
    stopTimer(blocksGameLoop);
    blkPiece = null;
    var newBest = blkScore > blkHighScore && blkScore > 0;
    if (newBest) blkHighScore = blkScore;
    recordBest("BLOCKS", blkScore);
    showGameOverCard("SCORE: " + blkScore + "  LINES: " + blkLines, "BEST: " + blkHighScore, newBest);
}


// -------------------------------------------------------------
// GALAXY BLASTER ENGINE (shoot the enemy ships)
// -------------------------------------------------------------
var BL_SHIP_Y = 430;
var blShipX = 200;
var blShipParts = [];
var blBullets = [], blEnemyBullets = [], blEnemies = [], blPowerups = [], blStars = [];
var blWave = 0, blScore = 0, blHighScore = 0, blLives = 3;
var blInvuln = 0, blFireCd = 0, blDouble = 0;
var blFormX = 0, blFormY = 0, blFormDir = 1, blFormSpeed = 0.5;
var blFireMult = 1, blDiveTimer = 120;
var blLeft = false, blRight = false, blFire = false;
var blFrame = 0, blTransition = 0, blDying = 0;
var blScoreText, blLivesText, blWaveText, blPowerText;

function initBlasterGame(diff) {
    blHighScore = Math.max(blHighScore, bestScores.BLASTER || 0);
    stopAllGameTimers();
    clearScreen();
    currentAppState = "BLASTER";

    blFireMult = (diff === "EASY") ? 0.6 : (diff === "MED" ? 1 : 1.5);
    blWave = 0; blScore = 0; blLives = 3; blInvuln = 0; blFireCd = 0; blDouble = 0;
    blBullets = []; blEnemyBullets = []; blEnemies = []; blPowerups = []; blStars = [];
    blLeft = false; blRight = false; blFire = false; blFrame = 0; blTransition = 0; blDying = 0;

    addRect(400, 480, 0, 0, "#030712");
    var starColors = ["#1e293b", "#64748b", "#e2e8f0"];
    for (var i = 0; i < 50; i++) {
        var layer = i % 3;
        blStars.push({shape: addRect(layer + 1, layer + 1, rand(0, 400), rand(0, 480), starColors[layer]), speed: 0.6 + layer * 1.1});
    }

    blShipX = 200;
    drawBlasterShip();

    blScoreText = addText("SCORE: 0", "13pt Courier", 20, 30, "#ffffff");
    nameTagBadge = addText(playerName, "9pt Courier", 20, 48, "#fbbf24");
    blWaveText = addText("WAVE 1", "11pt Courier", 160, 30, "#38bdf8");
    blLivesText = addText("LIVES: 3", "11pt Courier", 160, 48, "#f472b6");
    blPowerText = addText("", "9pt Courier", 250, 48, "#facc15");
    addMenuButton(330, 8);

    blStartWave();
    setTimer(blasterGameLoop, 20);
}

function drawBlasterShip(py) {
    blShipParts = [];
    var x = blShipX, y = (py === undefined) ? BL_SHIP_Y : py;
    var body = cust("BLASTER", "body").color, guns = cust("BLASTER", "guns").color, wings = shade(body, 0.55);
    addRect(34, 6, x - 17, y + 2, wings, blShipParts);        // wings
    addRect(4, 12, x - 19, y - 4, guns, blShipParts);         // wing guns
    addRect(4, 12, x + 15, y - 4, guns, blShipParts);
    addRect(12, 24, x - 6, y - 12, body, blShipParts);        // body
    addCircle(6, x, y - 12, body, blShipParts);               // nose
    addCircle(3, x, y - 4, "#0ea5e9", blShipParts);           // cockpit
    addRect(6, 6, x - 3, y + 12, "#f97316", blShipParts);     // engine flame
    var base = [wings, guns, guns, body, body, "#0ea5e9", "#f97316"];
    for (var i = 0; i < blShipParts.length; i++) blShipParts[i].baseColor = base[i];
}

function setShipVisible(v) {
    for (var i = 0; i < blShipParts.length; i++) {
        blShipParts[i].setColor(v ? blShipParts[i].baseColor : "rgba(0,0,0,0)");
    }
}

function blMakeEnemy(type, slotX, slotY) {
    var e = {type: type, hp: 1, pts: 100, slotX: slotX, slotY: slotY, x: slotX + blFormX, y: slotY + blFormY,
             state: "form", vx: 0, vy: 0, flash: 0, shapes: [], body: null, color: "#ef4444", shot: false};
    var x = e.x, y = e.y, s = e.shapes;
    if (type === "tank") {
        e.hp = 3; e.pts = 300; e.color = "#a855f7";
        e.body = addRect(28, 16, x - 14, y - 8, e.color, s);
        addRect(28, 3, x - 14, y - 2, "#6b21a8", s);
        addRect(6, 8, x - 14, y + 8, "#6b21a8", s);
        addRect(6, 8, x + 8, y + 8, "#6b21a8", s);
        addRect(3, 3, x - 6, y - 5, "#ffffff", s);
        addRect(3, 3, x + 3, y - 5, "#ffffff", s);
    } else if (type === "diver") {
        e.pts = 200; e.color = "#facc15";
        e.body = addRect(16, 14, x - 8, y - 7, e.color, s);
        addRect(6, 10, x - 14, y - 5, "#ca8a04", s);
        addRect(6, 10, x + 8, y - 5, "#ca8a04", s);
        addRect(6, 5, x - 3, y + 7, "#ca8a04", s);
        addRect(3, 3, x - 4, y - 3, "#111827", s);
        addRect(3, 3, x + 1, y - 3, "#111827", s);
    } else {
        e.color = "#ef4444";
        e.body = addRect(24, 12, x - 12, y - 6, e.color, s);
        addRect(5, 10, x - 12, y + 4, "#b91c1c", s);
        addRect(5, 10, x + 7, y + 4, "#b91c1c", s);
        addRect(3, 3, x - 5, y - 3, "#ffffff", s);
        addRect(3, 3, x + 2, y - 3, "#ffffff", s);
    }
    blEnemies.push(e);
}

function blStartWave() {
    blWave++;
    blFormX = 0; blFormY = 0; blFormDir = 1;
    blFormSpeed = Math.min(2.2, 0.45 + blWave * 0.12);
    blDiveTimer = 150;
    blWaveText.setText("WAVE " + blWave);
    var rows = Math.min(5, 2 + Math.floor((blWave + 1) / 2));
    for (var r = 0; r < rows; r++) {
        var type = "grunt";
        if (r === 0 && blWave >= 3) type = "tank";
        else if (r === 1 && blWave >= 2) type = "diver";
        for (var c = 0; c < 6; c++) blMakeEnemy(type, 60 + c * 56, 80 + r * 34);
    }
    bringToFront(blShipParts.concat([blScoreText, nameTagBadge, blWaveText, blLivesText, blPowerText], menuBtnShapes));
    showBanner("WAVE " + blWave, blWave === 1 ? "ARROWS MOVE, SPACE SHOOTS" : null);
}

function blShoot() {
    var xs = blDouble > 0 ? [blShipX - 9, blShipX + 9] : [blShipX];
    for (var i = 0; i < xs.length; i++) {
        blBullets.push({shape: addRect(3, 10, xs[i] - 1.5, BL_SHIP_Y - 26, cust("BLASTER", "laser").color), x: xs[i], y: BL_SHIP_Y - 26});
    }
    blFireCd = 9;
}

function blEnemyShoot(e) {
    if (blEnemyBullets.length >= 14) return;
    blEnemyBullets.push({shape: addRect(4, 9, e.x - 2, e.y + 8, "#fb7185"), x: e.x, y: e.y + 8, vy: 3.2 + blWave * 0.15});
}

function blKillEnemy(i) {
    var e = blEnemies[i];
    burst(e.x, e.y, 16, [e.color, "#ffffff", "#f97316"], 3.5, 0.05);
    removeShapes(e.shapes);
    blEnemies.splice(i, 1);
    blScore += e.pts * (e.state === "dive" ? 2 : 1);   // double points for hitting a diver mid-dive
    blScoreText.setText("SCORE: " + blScore);
    var roll = Math.random();
    if (roll < 0.08) blDropPowerup(e.x, e.y, "double");
    else if (roll < 0.105 && blLives < 5) blDropPowerup(e.x, e.y, "life");
}

function blDropPowerup(x, y, kind) {
    var shapes = [];
    addCircle(9, x, y, kind === "double" ? "#facc15" : "#22c55e", shapes);
    addText(kind === "double" ? "2X" : "+1", "7pt Courier", x - 6, y + 3, "#0b1020", shapes);
    blPowerups.push({shapes: shapes, x: x, y: y, kind: kind});
}

function blHitPlayer() {
    if (blInvuln > 0 || blDying > 0) return;
    blLives--;
    blLivesText.setText("LIVES: " + Math.max(0, blLives));
    burst(blShipX, BL_SHIP_Y, 30, ["#38bdf8", "#ffffff", "#f97316"], 4.5, 0.05);
    if (blLives <= 0) {
        blDying = 50;
        setShipVisible(false);
    } else {
        blInvuln = 100;
    }
}

function blasterGameLoop() {
    if (currentAppState !== "BLASTER") return;
    blFrame++;

    for (var s = 0; s < blStars.length; s++) {
        var st = blStars[s];
        st.shape.move(0, st.speed);
        if (st.shape.getY() > 480) st.shape.setPosition(rand(0, 400), -3);
    }

    if (blDying > 0) {
        blDying--;
        if (blDying === 0) { blasterGameOver(); return; }
    } else {
        // Ship movement & shooting
        var dx = (blRight ? 5 : 0) - (blLeft ? 5 : 0);
        var nx = clamp(blShipX + dx, 22, 378);
        moveShapes(blShipParts, nx - blShipX, 0);
        blShipX = nx;
        blShipParts[6].setColor(blInvuln > 0 && blInvuln % 10 < 5 ? "rgba(0,0,0,0)" : (blFrame % 6 < 3 ? "#f97316" : "#facc15"));
        if (blFireCd > 0) blFireCd--;
        if (blFire && blFireCd === 0) blShoot();
        if (blInvuln > 0) {
            blInvuln--;
            setShipVisible(blInvuln === 0 || blInvuln % 10 >= 5);
        }
        if (blDouble > 0) {
            blDouble--;
            blPowerText.setText(blDouble > 0 ? "2X SHOT: " + Math.ceil(blDouble / 50) + "s" : "");
        }
    }

    // Player bullets
    for (var b = blBullets.length - 1; b >= 0; b--) {
        var pb = blBullets[b];
        pb.y -= 9; pb.shape.move(0, -9);
        var hit = false;
        for (var i = blEnemies.length - 1; i >= 0; i--) {
            var e = blEnemies[i];
            if (Math.abs(pb.x - e.x) < 15 && Math.abs(pb.y - e.y) < 12) {
                e.hp--;
                e.flash = 4;
                e.body.setColor("#ffffff");
                if (e.hp <= 0) blKillEnemy(i);
                hit = true;
                break;
            }
        }
        if (hit || pb.y < -12) { remove(pb.shape); blBullets.splice(b, 1); }
    }

    // Formation: slide side to side, step down at the edges
    var minX = 999, maxX = -999;
    for (var m = 0; m < blEnemies.length; m++) {
        if (blEnemies[m].state !== "form") continue;
        minX = Math.min(minX, blEnemies[m].slotX); maxX = Math.max(maxX, blEnemies[m].slotX);
    }
    var speedBoost = 1 + (1 - blEnemies.length / 30) * 0.8;   // fewer ships left = faster
    blFormX += blFormDir * blFormSpeed * speedBoost;
    if (minX < 999 && (minX + blFormX < 20 || maxX + blFormX > 380)) {
        blFormDir = -blFormDir;
        blFormX += blFormDir * blFormSpeed * speedBoost;
        blFormY += 10;
    }

    // Pick a ship to dive-bomb you every so often
    blDiveTimer--;
    if (blDiveTimer <= 0 && blEnemies.length > 0 && blDying === 0) {
        blDiveTimer = Math.max(45, 150 - blWave * 10);
        var pool = blEnemies.filter(function (en) { return en.state === "form" && en.type === "diver"; });
        if (pool.length === 0 || Math.random() < 0.3) pool = blEnemies.filter(function (en) { return en.state === "form"; });
        if (pool.length > 0) {
            var d = pool[Math.floor(Math.random() * pool.length)];
            d.state = "dive"; d.vy = 2.6 + blWave * 0.15; d.vx = 0; d.shot = false;
        }
    }

    for (var k = blEnemies.length - 1; k >= 0; k--) {
        var en = blEnemies[k];
        var oldX = en.x, oldY = en.y;
        if (en.state === "form") {
            en.x = en.slotX + blFormX; en.y = en.slotY + blFormY;
            if (Math.random() < (0.0012 + blWave * 0.0003) * blFireMult) blEnemyShoot(en);
        } else if (en.state === "dive") {
            en.vx = clamp(en.vx + (blShipX > en.x ? 0.09 : -0.09), -3, 3);
            en.x += en.vx; en.y += en.vy;
            if (!en.shot && en.y > 200) { en.shot = true; if (Math.random() < 0.7 * blFireMult) blEnemyShoot(en); }
            if (en.y > 500) { en.y = -20; en.state = "return"; }
        } else {
            var tx = en.slotX + blFormX, ty = en.slotY + blFormY;
            var ddx = tx - en.x, ddy = ty - en.y;
            var dist = Math.sqrt(ddx * ddx + ddy * ddy);
            if (dist < 4) en.state = "form";
            else { en.x += ddx / dist * 3.5; en.y += ddy / dist * 3.5; }
        }
        moveShapes(en.shapes, en.x - oldX, en.y - oldY);
        if (en.flash > 0) { en.flash--; if (en.flash === 0) en.body.setColor(en.color); }

        // Rammed by a diver
        if (blDying === 0 && Math.abs(en.x - blShipX) < 22 && Math.abs(en.y - BL_SHIP_Y) < 18) {
            if (blInvuln === 0) { blHitPlayer(); blKillEnemy(k); continue; }
        }
        // Formation reached the bottom: invasion!
        if (en.state === "form" && en.y > 395 && blDying === 0) {
            blLives = 0; blLivesText.setText("LIVES: 0");
            burst(blShipX, BL_SHIP_Y, 30, ["#38bdf8", "#ffffff", "#f97316"], 4.5, 0.05);
            blDying = 50; setShipVisible(false);
        }
    }

    // Enemy bullets
    for (var q = blEnemyBullets.length - 1; q >= 0; q--) {
        var eb = blEnemyBullets[q];
        eb.y += eb.vy; eb.shape.move(0, eb.vy);
        var gone = eb.y > 490;
        if (!gone && blDying === 0 && Math.abs(eb.x - blShipX) < 14 && eb.y > BL_SHIP_Y - 16 && eb.y < BL_SHIP_Y + 12) {
            if (blInvuln === 0) { blHitPlayer(); gone = true; }
        }
        if (gone) { remove(eb.shape); blEnemyBullets.splice(q, 1); }
    }

    // Power-ups
    for (var u = blPowerups.length - 1; u >= 0; u--) {
        var pu = blPowerups[u];
        pu.y += 2; moveShapes(pu.shapes, 0, 2);
        var taken = blDying === 0 && Math.abs(pu.x - blShipX) < 22 && Math.abs(pu.y - BL_SHIP_Y) < 20;
        if (taken) {
            if (pu.kind === "double") blDouble = 600;
            else { blLives++; blLivesText.setText("LIVES: " + blLives); }
            burst(pu.x, pu.y, 12, ["#facc15", "#22c55e", "#ffffff"], 3, 0.05);
        }
        if (taken || pu.y > 500) { removeShapes(pu.shapes); blPowerups.splice(u, 1); }
    }

    // Wave cleared
    if (blEnemies.length === 0 && blDying === 0) {
        if (blTransition === 0) blTransition = 70;
        blTransition--;
        if (blTransition === 0) {
            blScore += 500 * blWave;
            blScoreText.setText("SCORE: " + blScore);
            blStartWave();
        }
    }
}

function blasterGameOver() {
    currentAppState = "BLASTER_OVER";
    stopTimer(blasterGameLoop);
    var newBest = blScore > blHighScore && blScore > 0;
    if (newBest) blHighScore = blScore;
    recordBest("BLASTER", blScore);
    showGameOverCard("SCORE: " + blScore + "  WAVE: " + blWave, "BEST: " + blHighScore, newBest);
}


// -------------------------------------------------------------
// PONG ENGINE (1 player vs CPU, or 2 players)
// -------------------------------------------------------------
var PONG_TOP = 76, PONG_BOTTOM = 456;
var PADDLE_W = 8, PADDLE_H = 64;
var PONG_WIN = 7;
var pongMode = "CPU";
var pongCpuSpeed = 4.5, pongCpuError = 0;
var pongBallStart = 5, pongBallMax = 11;
var pongLY = 0, pongRY = 0;
var pongBallX = 200, pongBallY = 270, pongBallVX = 0, pongBallVY = 0, pongBallSpeed = 5;
var pongScoreL = 0, pongScoreR = 0;
var pongServeTimer = 0, pongServeDir = 1;
var pongW = false, pongS = false, pongUp = false, pongDown = false;
var pongLeftPaddle, pongRightPaddle, pongBall, pongScoreLText, pongScoreRText, pongMsgText;
var pongCpuWins = 0, pongPlayerWins = 0;
var pongLColor = "#38bdf8", pongRColor = "#f472b6";

function showPongSelect() {
    neonMenu("PONG", "#a3e635", 60, 360);
    currentAppState = "PONG_SELECT";
    var g = [];
    addText("PICK A MODE", "9pt Courier", "center", 122, "#94a3b8", g);
    makeButton("pongBot", 80, 140, 240, 46, "#6366f1", "PLAY AGAINST BOT", "12pt Courier", 29, g);
    addText("first to " + PONG_WIN + "  -  easy, medium or hard", "8pt Courier", "center", 204, "#9ca3af", g);
    makeButton("pong2p", 80, 218, 240, 46, "#a855f7", "PLAY LOCAL (2 PLAYERS)", "11pt Courier", 29, g);
    addText("P1: W/S    P2: UP/DOWN", "8pt Courier", "center", 282, "#9ca3af", g);
    makeButton("pongBrick", 80, 296, 240, 46, "#db2777", "BRICK BREAKER", "12pt Courier", 29, g);
    addText("smash the bricks with your paddle", "8pt Courier", "center", 360, "#9ca3af", g);
    makeButton("back", 80, 372, 240, 36, "#374151", "BACK", "12pt Courier", 24, g);
    popIn(g, 0, 480, 24);
}

function initPongGame(mode, diff) {
    stopAllGameTimers();
    clearScreen();
    currentAppState = "PONG";
    pongMode = mode;
    if (mode === "CPU") {
        pongCpuSpeed = (diff === "EASY") ? 3.2 : (diff === "MED" ? 4.6 : 6.3);
        pongBallStart = (diff === "EASY") ? 4.5 : (diff === "MED" ? 5 : 5.6);
    } else {
        pongBallStart = 5;
    }
    pongScoreL = 0; pongScoreR = 0;
    pongW = false; pongS = false; pongUp = false; pongDown = false;
    pongLY = (PONG_TOP + PONG_BOTTOM) / 2 - PADDLE_H / 2;
    pongRY = pongLY;

    addRect(400, 480, 0, 0, "#0b1020");
    addRect(400, 3, 0, PONG_TOP - 3, "#334155");
    addRect(400, 3, 0, PONG_BOTTOM, "#334155");
    for (var y = PONG_TOP + 6; y < PONG_BOTTOM - 10; y += 24) addRect(4, 12, 198, y, "#1e293b");

    var leftName = (mode === "CPU") ? playerName : "PLAYER 1";
    var rightName = (mode === "CPU") ? "CPU" : "PLAYER 2";
    pongLColor = cust("PONG", "left").color; pongRColor = cust("PONG", "right").color;
    addText(leftName, "9pt Courier", 20, 20, pongLColor);
    var rn = addText(rightName, "9pt Courier", 0, 20, pongRColor);
    rn.setPosition(380 - rn.getWidth(), 20);
    pongScoreLText = addText("0", "28pt Courier", 140, 60, pongLColor);
    pongScoreRText = addText("0", "28pt Courier", 238, 60, pongRColor);
    addMenuButton(169, 4);
    var hint = (mode === "CPU") ? "UP/DOWN OR W/S TO MOVE" : "P1: W/S    P2: UP/DOWN";
    addText(hint, "7pt Courier", "center", 474, "#475569");

    pongLeftPaddle = addRect(PADDLE_W, PADDLE_H, 16, pongLY, pongLColor);
    pongRightPaddle = addRect(PADDLE_W, PADDLE_H, 376, pongRY, pongRColor);
    pongBall = addCircle(6, 200, 270, cust("PONG", "ball").color);
    pongMsgText = addText("", "14pt Courier", "center", 200, "#facc15");

    pongServeDir = Math.random() < 0.5 ? -1 : 1;
    pongResetBall();
    setTimer(pongGameLoop, 20);
}

function pongResetBall() {
    pongBallX = 200; pongBallY = (PONG_TOP + PONG_BOTTOM) / 2;
    pongBallVX = 0; pongBallVY = 0;
    pongBall.setPosition(pongBallX, pongBallY);
    pongServeTimer = 60;
}

function pongLaunch() {
    pongBallSpeed = pongBallStart;
    var angle = rand(-0.5, 0.5);
    pongBallVX = Math.cos(angle) * pongBallSpeed * pongServeDir;
    pongBallVY = Math.sin(angle) * pongBallSpeed;
    pongCpuError = rand(-20, 20);
}

// Bounce off a paddle. Where the ball hits changes its angle (edges = steep shots).
function pongHitPaddle(paddleY, dir) {
    var rel = clamp((pongBallY - (paddleY + PADDLE_H / 2)) / (PADDLE_H / 2), -1, 1);
    var angle = rel * 0.95;      // up to about 55 degrees
    pongBallSpeed = Math.min(pongBallMax, pongBallSpeed + 0.35);
    pongBallVX = Math.cos(angle) * pongBallSpeed * dir;
    pongBallVY = Math.sin(angle) * pongBallSpeed;
    pongCpuError = rand(-26, 26) * (6.5 - pongCpuSpeed) / 3;   // the CPU guesses a bit wrong (less on hard)
    burst(pongBallX, pongBallY, 8, dir > 0 ? [pongLColor, "#ffffff"] : [pongRColor, "#ffffff"], 2.5, 0.02);
}

function pongGameLoop() {
    if (currentAppState !== "PONG") return;

    // Left paddle: W/S always; arrows too when playing the CPU
    var lUp = pongW || (pongMode === "CPU" && pongUp);
    var lDown = pongS || (pongMode === "CPU" && pongDown);
    pongLY = clamp(pongLY + (lDown ? 6 : 0) - (lUp ? 6 : 0), PONG_TOP, PONG_BOTTOM - PADDLE_H);

    if (pongMode === "2P") {
        pongRY = clamp(pongRY + (pongDown ? 6 : 0) - (pongUp ? 6 : 0), PONG_TOP, PONG_BOTTOM - PADDLE_H);
    } else {
        var target = (pongBallVX > 0) ? pongBallY + pongCpuError : (PONG_TOP + PONG_BOTTOM) / 2;
        var center = pongRY + PADDLE_H / 2;
        if (Math.abs(target - center) > 4) pongRY += clamp(target - center, -pongCpuSpeed, pongCpuSpeed);
        pongRY = clamp(pongRY, PONG_TOP, PONG_BOTTOM - PADDLE_H);
    }
    pongLeftPaddle.setPosition(16, pongLY);
    pongRightPaddle.setPosition(376, pongRY);

    if (pongServeTimer > 0) {
        pongServeTimer--;
        pongMsgText.setText(pongServeTimer > 40 ? "3" : (pongServeTimer > 20 ? "2" : (pongServeTimer > 0 ? "1" : "")));
        pongMsgText.setPosition((400 - pongMsgText.getWidth()) / 2, 200);
        if (pongServeTimer === 0) pongLaunch();
        return;
    }

    pongBallX += pongBallVX;
    pongBallY += pongBallVY;

    // Top and bottom walls
    if (pongBallY - 6 < PONG_TOP) { pongBallY = PONG_TOP + 6; pongBallVY = Math.abs(pongBallVY); }
    if (pongBallY + 6 > PONG_BOTTOM) { pongBallY = PONG_BOTTOM - 6; pongBallVY = -Math.abs(pongBallVY); }

    // Paddles
    if (pongBallVX < 0 && pongBallX - 6 <= 16 + PADDLE_W && pongBallX - 6 >= 8 &&
        pongBallY + 6 >= pongLY && pongBallY - 6 <= pongLY + PADDLE_H) {
        pongBallX = 16 + PADDLE_W + 6;
        pongHitPaddle(pongLY, 1);
    }
    if (pongBallVX > 0 && pongBallX + 6 >= 376 && pongBallX + 6 <= 392 &&
        pongBallY + 6 >= pongRY && pongBallY - 6 <= pongRY + PADDLE_H) {
        pongBallX = 376 - 6;
        pongHitPaddle(pongRY, -1);
    }
    pongBall.setPosition(pongBallX, pongBallY);

    // Points
    if (pongBallX < -10) pongPoint("R");
    else if (pongBallX > 410) pongPoint("L");
}

function pongPoint(side) {
    if (side === "L") { pongScoreL++; pongScoreLText.setText("" + pongScoreL); popIn([pongScoreLText], 0, -20, 12); pongServeDir = -1; }
    else { pongScoreR++; pongScoreRText.setText("" + pongScoreR); popIn([pongScoreRText], 0, -20, 12); pongServeDir = 1; }
    burst(side === "L" ? 390 : 10, pongBallY, 18, side === "L" ? [pongLColor, "#ffffff"] : [pongRColor, "#ffffff"], 4, 0.05);

    if (pongScoreL >= PONG_WIN || pongScoreR >= PONG_WIN) { pongGameOver(); return; }
    pongResetBall();
}

function pongGameOver() {
    currentAppState = "PONG_OVER";
    stopTimer(pongGameLoop);
    pongMsgText.setText("");
    var leftWon = pongScoreL > pongScoreR;
    var line1, line2, newBest = false;
    if (pongMode === "CPU") {
        if (leftWon) { pongPlayerWins++; newBest = true; recordBest("PONG", pongPlayerWins); } else pongCpuWins++;
        line1 = (leftWon ? "YOU WIN " : "CPU WINS ") + pongScoreL + "-" + pongScoreR;
        line2 = "YOU " + pongPlayerWins + " - " + pongCpuWins + " CPU";
    } else {
        line1 = (leftWon ? "PLAYER 1 WINS " : "PLAYER 2 WINS ") + pongScoreL + "-" + pongScoreR;
        line2 = "GG!";
    }
    showGameOverCard(line1, line2, newBest);
}


// -------------------------------------------------------------
// 2048 ENGINE (slide tiles, merge matching numbers)
// -------------------------------------------------------------
var G2_SIZE = 4, G2_TILE = 76, G2_GAP = 8, G2_X = 28, G2_Y = 108;
var G2_CLASSIC = {2: "#eee4da", 4: "#ede0c8", 8: "#f2b179", 16: "#f59563", 32: "#f67c5f", 64: "#f65e3b",
                 128: "#edcf72", 256: "#edcc61", 512: "#edc850", 1024: "#edc53f", 2048: "#edc22e"};
var G2_COLORS = G2_CLASSIC;
// Build the tile colors for the chosen theme (blends from a light color to a strong one)
function applyG2Theme() {
    var th = cust("G2048", "theme");
    if (th.name === "CLASSIC") { G2_COLORS = G2_CLASSIC; return; }
    G2_COLORS = {};
    for (var k = 1; k <= 11; k++) G2_COLORS[Math.pow(2, k)] = lerpColor(th.from, th.to, (k - 1) / 10);
}
var g2Board = [];
var g2TileShapes = [];
var g2Score = 0, g2HighScore = 0;
var g2Won = false;
var g2StartBest = 0;
var g2ScoreText, g2BestText;

function initG2048Game() {
    g2HighScore = Math.max(g2HighScore, bestScores.G2048 || 0);
    applyG2Theme();
    stopAllGameTimers();
    clearScreen();
    currentAppState = "G2048";
    g2Score = 0; g2Won = false; g2TileShapes = []; g2StartBest = g2HighScore;
    g2Board = [];
    for (var r = 0; r < G2_SIZE; r++) g2Board.push([0, 0, 0, 0]);

    addRect(400, 480, 0, 0, "#0b1020");
    addText("2048", "26pt Courier", 20, 50, "#edc22e");
    nameTagBadge = addText(playerName, "9pt Courier", 22, 70, "#fbbf24");
    addRect(110, 40, 150, 22, "#1e293b");
    addText("SCORE", "7pt Courier", 160, 36, "#94a3b8");
    g2ScoreText = addText("0", "12pt Courier", 160, 54, "#ffffff");
    addRect(110, 40, 270, 22, "#1e293b");
    addText("BEST", "7pt Courier", 280, 36, "#94a3b8");
    g2BestText = addText("" + g2HighScore, "12pt Courier", 280, 54, "#fbbf24");

    makeButton("g2new", 150, 72, 110, 22, "#334155", "NEW GAME", "8pt Courier", 15);
    makeButton("g2menu", 270, 72, 110, 22, "#334155", "MENU", "8pt Courier", 15);

    var boardSize = G2_SIZE * G2_TILE + (G2_SIZE + 1) * G2_GAP;
    addRect(boardSize, boardSize, G2_X, G2_Y, "#1e293b");
    for (var rr = 0; rr < G2_SIZE; rr++) {
        for (var cc = 0; cc < G2_SIZE; cc++) {
            addRect(G2_TILE, G2_TILE, g2TileX(cc), g2TileY(rr), "#273449");
        }
    }
    addText("ARROW KEYS TO SLIDE - JOIN MATCHING NUMBERS", "7pt Courier", "center", 472, "#475569");

    var a = g2AddRandom(), b = g2AddRandom();
    g2Draw([a, b], []);
}

function g2TileX(c) { return G2_X + G2_GAP + c * (G2_TILE + G2_GAP); }
function g2TileY(r) { return G2_Y + G2_GAP + r * (G2_TILE + G2_GAP); }

// Put a 2 (or sometimes a 4) in a random empty square; returns where it went
function g2AddRandom() {
    var empty = [];
    for (var r = 0; r < G2_SIZE; r++) for (var c = 0; c < G2_SIZE; c++) if (g2Board[r][c] === 0) empty.push([r, c]);
    if (empty.length === 0) return null;
    var spot = empty[Math.floor(Math.random() * empty.length)];
    g2Board[spot[0]][spot[1]] = Math.random() < 0.9 ? 2 : 4;
    return spot;
}

function g2Draw(newSpots, mergedSpots) {
    removeShapes(g2TileShapes);
    g2TileShapes = [];
    for (var r = 0; r < G2_SIZE; r++) {
        for (var c = 0; c < G2_SIZE; c++) {
            var v = g2Board[r][c];
            if (v === 0) continue;
            var x = g2TileX(c), y = g2TileY(r);
            var tile = [];
            addRect(G2_TILE, G2_TILE, x, y, G2_COLORS[v] || "#3c3a32", tile);
            var digits = ("" + v).length;
            var font = digits <= 2 ? "24pt Courier" : (digits === 3 ? "19pt Courier" : "14pt Courier");
            var t = new Text("" + v, font);
            t.setColor(v <= 4 ? "#776e65" : "#ffffff");
            t.setPosition(x + (G2_TILE - t.getWidth()) / 2, y + G2_TILE / 2 + (digits <= 2 ? 11 : (digits === 3 ? 8 : 6)));
            add(t); tile.push(t);
            g2TileShapes = g2TileShapes.concat(tile);
            if (g2HasSpot(newSpots, r, c)) popIn(tile, 0, 14, 10);
            if (g2HasSpot(mergedSpots, r, c)) popIn(tile, 0, -8, 10);
        }
    }
}

function g2HasSpot(list, r, c) {
    for (var i = 0; i < list.length; i++) if (list[i] && list[i][0] === r && list[i][1] === c) return true;
    return false;
}

// Slide one row to the left, merging pairs. Returns {row, gained, mergedIdx}.
function g2SlideRow(row) {
    var nums = row.filter(function (v) { return v !== 0; });
    var out = [], gained = 0, merged = [];
    for (var i = 0; i < nums.length; i++) {
        if (i + 1 < nums.length && nums[i] === nums[i + 1]) {
            out.push(nums[i] * 2);
            gained += nums[i] * 2;
            merged.push(out.length - 1);
            i++;
        } else {
            out.push(nums[i]);
        }
    }
    while (out.length < G2_SIZE) out.push(0);
    return {row: out, gained: gained, merged: merged};
}

// dir: "L", "R", "U", "D". Reads each line in the slide direction, slides it, writes it back.
function g2Move(dir) {
    var moved = false, mergedSpots = [];
    for (var i = 0; i < G2_SIZE; i++) {
        var coords = [];
        for (var j = 0; j < G2_SIZE; j++) {
            if (dir === "L") coords.push([i, j]);
            else if (dir === "R") coords.push([i, G2_SIZE - 1 - j]);
            else if (dir === "U") coords.push([j, i]);
            else coords.push([G2_SIZE - 1 - j, i]);
        }
        var line = coords.map(function (p) { return g2Board[p[0]][p[1]]; });
        var res = g2SlideRow(line);
        for (var k = 0; k < G2_SIZE; k++) {
            var p = coords[k];
            if (g2Board[p[0]][p[1]] !== res.row[k]) moved = true;
            g2Board[p[0]][p[1]] = res.row[k];
        }
        for (var m = 0; m < res.merged.length; m++) mergedSpots.push(coords[res.merged[m]]);
        g2Score += res.gained;
    }
    if (!moved) return;

    var spot = g2AddRandom();
    g2ScoreText.setText("" + g2Score);
    if (g2Score > g2HighScore) { g2HighScore = g2Score; g2BestText.setText("" + g2HighScore); recordBest("G2048", g2Score); }
    g2Draw([spot], mergedSpots);

    for (var s = 0; s < mergedSpots.length; s++) {
        var ms = mergedSpots[s];
        var val = g2Board[ms[0]][ms[1]];
        if (val >= 128) burst(g2TileX(ms[1]) + G2_TILE / 2, g2TileY(ms[0]) + G2_TILE / 2, 10, ["#edc22e", "#ffffff", "#f59563"], 3, 0.08);
        if (val === 2048 && !g2Won) { g2Won = true; showBanner("YOU MADE 2048!", "KEEP GOING FOR A HIGH SCORE"); burst(200, 200, 40, CONFETTI, 5, 0.15); }
    }
    if (!g2CanMove()) g2GameOver();
}

function g2CanMove() {
    for (var r = 0; r < G2_SIZE; r++) {
        for (var c = 0; c < G2_SIZE; c++) {
            var v = g2Board[r][c];
            if (v === 0) return true;
            if (c + 1 < G2_SIZE && g2Board[r][c + 1] === v) return true;
            if (r + 1 < G2_SIZE && g2Board[r + 1][c] === v) return true;
        }
    }
    return false;
}

function g2GameOver() {
    currentAppState = "G2048_OVER";
    var biggest = 0;
    for (var r = 0; r < G2_SIZE; r++) for (var c = 0; c < G2_SIZE; c++) biggest = Math.max(biggest, g2Board[r][c]);
    removeButtonsById(["g2new", "g2menu"]);
    showGameOverCard("SCORE: " + g2Score + "  TILE: " + biggest, "BEST: " + g2HighScore, g2Score > g2StartBest);
}


// -------------------------------------------------------------
// TOWER DEFENSE ENGINE
// -------------------------------------------------------------
var TD_TILE = 40, TD_TOP = 60, TD_COLS = 10, TD_ROWS = 10;
var TD_PATH_PTS = [[-1, 1], [8, 1], [8, 4], [1, 4], [1, 7], [8, 7], [8, 10]];
var TD_TYPES = {
    arrow:  {name: "ARROW",  cost: 50,  range: 95, rate: 22, dmg: 3, color: "#a3e635", shot: "#ecfccb"},
    cannon: {name: "CANNON", cost: 100, range: 85, rate: 55, dmg: 8, color: "#f97316", shot: "#1f2937", splash: 42},
    frost:  {name: "FROST",  cost: 75,  range: 80, rate: 32, dmg: 1, color: "#38bdf8", shot: "#e0f2fe", slow: 70}
};
var TD_MAX_WAVE = 15;
var tdPathTiles = {};
var tdWaypoints = [];
var tdTowers = [], tdEnemies = [], tdShots = [], tdSpawnQueue = [];
var tdMoney = 150, tdLives = 20, tdWave = 0;
var tdHpMult = 1, tdStartMoney = 150;
var tdSpawnTimer = 0, tdBreakTimer = 0, tdPhase = "build";
var tdSelected = "arrow";
var tdHoverShapes = [], tdHoverKey = "";
var tdMoneyText, tdLivesText, tdWaveText, tdInfoText;
var tdFrame = 0;

function initTowerGame(diff) {
    var map = cust("TOWER", "map");
    stopAllGameTimers();
    clearScreen();
    currentAppState = "TOWER";
    tdStartMoney = (diff === "EASY") ? 220 : (diff === "MED" ? 160 : 130);
    tdHpMult = (diff === "EASY") ? 0.8 : (diff === "MED" ? 1 : 1.3);
    tdMoney = tdStartMoney; tdLives = 20; tdWave = 0;
    tdTowers = []; tdEnemies = []; tdShots = []; tdSpawnQueue = [];
    tdPhase = "build"; tdBreakTimer = 600; tdSelected = "arrow"; tdHoverShapes = []; tdHoverKey = ""; tdFrame = 0;

    // Work out which tiles the road covers, and the pixel waypoints enemies walk between
    tdPathTiles = {};
    tdWaypoints = [];
    for (var i = 0; i < TD_PATH_PTS.length; i++) {
        tdWaypoints.push([TD_PATH_PTS[i][0] * TD_TILE + TD_TILE / 2, TD_TOP + TD_PATH_PTS[i][1] * TD_TILE + TD_TILE / 2]);
        if (i === 0) continue;
        var a = TD_PATH_PTS[i - 1], b = TD_PATH_PTS[i];
        var steps = Math.max(Math.abs(b[0] - a[0]), Math.abs(b[1] - a[1]));
        for (var k = 0; k <= steps; k++) {
            var c = a[0] + Math.sign(b[0] - a[0]) * k, r = a[1] + Math.sign(b[1] - a[1]) * k;
            tdPathTiles[c + "," + r] = true;
        }
    }

    addRect(400, 480, 0, 0, "#0b1020");
    addRect(400, TD_ROWS * TD_TILE, 0, TD_TOP, map.a);
    for (var rr = 0; rr < TD_ROWS; rr++) {
        for (var cc = 0; cc < TD_COLS; cc++) {
            var onPath = tdPathTiles[cc + "," + rr];
            if (onPath) addRect(TD_TILE, TD_TILE, cc * TD_TILE, TD_TOP + rr * TD_TILE, map.road);
            else if ((rr + cc) % 2 === 1) addRect(TD_TILE, TD_TILE, cc * TD_TILE, TD_TOP + rr * TD_TILE, map.b);
            if (onPath) addRect(TD_TILE - 8, TD_TILE - 8, cc * TD_TILE + 4, TD_TOP + rr * TD_TILE + 4, map.road2);
            else if ((rr * 7 + cc * 3) % 5 === 0) addCircle(3, cc * TD_TILE + 12, TD_TOP + rr * TD_TILE + 14, map.deco);
        }
    }
    // Castle at the exit
    addRect(40, 16, 320, 452, "#64748b");
    addRect(8, 8, 322, 444, "#64748b"); addRect(8, 8, 338, 444, "#64748b"); addRect(8, 8, 352, 444, "#64748b");

    addRect(400, 60, 0, 0, "#111827");
    tdWaveText = addText("WAVE 0/" + TD_MAX_WAVE, "10pt Courier", 8, 18, "#38bdf8");
    tdMoneyText = addText("$" + tdMoney, "10pt Courier", 140, 18, "#facc15");
    tdLivesText = addText("LIVES " + tdLives, "10pt Courier", 230, 18, "#f472b6");
    tdInfoText = addText("", "7pt Courier", 8, 474, "#cbd5e1");
    makeButton("tdmenu", 340, 5, 54, 18, "#374151", "MENU", "8pt Courier", 13);
    makeButton("tdArrow", 4, 28, 92, 26, TD_TYPES.arrow.color, "ARROW $50", "8pt Courier", 17);
    makeButton("tdCannon", 102, 28, 92, 26, "#334155", "CANNON $100", "8pt Courier", 17);
    makeButton("tdFrost", 200, 28, 92, 26, "#334155", "FROST $75", "8pt Courier", 17);
    makeButton("tdNext", 298, 28, 98, 26, "#e11d48", "START WAVE", "8pt Courier", 17);
    tdSetInfo("PICK A TOWER, CLICK GRASS TO BUILD. CLICK A TOWER TO UPGRADE.");

    setTimer(towerGameLoop, 20);
}

function tdSetInfo(msg) { tdInfoText.setText(msg); }

function tdSelect(type) {
    tdSelected = type;
    getButton("tdArrow").rect.setColor(type === "arrow" ? TD_TYPES.arrow.color : "#334155");
    getButton("tdCannon").rect.setColor(type === "cannon" ? TD_TYPES.cannon.color : "#334155");
    getButton("tdFrost").rect.setColor(type === "frost" ? TD_TYPES.frost.color : "#334155");
    tdClearHover();
}

function tdTowerAt(c, r) {
    for (var i = 0; i < tdTowers.length; i++) if (tdTowers[i].c === c && tdTowers[i].r === r) return tdTowers[i];
    return null;
}

function tdUpgradeCost(t) { return Math.round(TD_TYPES[t.type].cost * 0.8 * t.lvl); }

function tdClick(mX, mY) {
    if (mY < TD_TOP || mY >= TD_TOP + TD_ROWS * TD_TILE) return;
    var c = Math.floor(mX / TD_TILE), r = Math.floor((mY - TD_TOP) / TD_TILE);
    var existing = tdTowerAt(c, r);
    if (existing) {
        if (existing.lvl >= 3) { tdSetInfo("THAT TOWER IS MAXED OUT!"); return; }
        var up = tdUpgradeCost(existing);
        if (tdMoney < up) { tdSetInfo("UPGRADE COSTS $" + up + " - NOT ENOUGH MONEY"); return; }
        tdMoney -= up;
        existing.lvl++;
        existing.pips.push(addRect(6, 4, existing.x - 11 + (existing.lvl - 1) * 8, existing.y + 12, "#facc15"));
        burst(existing.x, existing.y, 12, ["#facc15", "#ffffff"], 2.5, 0.05);
        tdSetInfo(TD_TYPES[existing.type].name + " UPGRADED TO LEVEL " + existing.lvl + "!");
        tdUpdateHud();
        return;
    }
    if (tdPathTiles[c + "," + r]) { tdSetInfo("CAN'T BUILD ON THE ROAD"); return; }
    var info = TD_TYPES[tdSelected];
    if (tdMoney < info.cost) { tdSetInfo(info.name + " COSTS $" + info.cost + " - NOT ENOUGH MONEY"); return; }
    tdMoney -= info.cost;
    var x = c * TD_TILE + TD_TILE / 2, y = TD_TOP + r * TD_TILE + TD_TILE / 2;
    var shapes = [];
    addRect(30, 30, x - 15, y - 15, "#1f2937", shapes);
    addRect(26, 26, x - 13, y - 13, "#374151", shapes);
    addCircle(9, x, y - 2, info.color, shapes);
    var barrel = addRect(4, 12, x - 2, y - 16, "#111827", shapes);
    var t = {type: tdSelected, c: c, r: r, x: x, y: y, lvl: 1, cd: 0, shapes: shapes, barrel: barrel, pips: []};
    t.pips.push(addRect(6, 4, x - 11, y + 12, "#facc15"));
    tdTowers.push(t);
    popIn(shapes, 0, -12, 10);
    tdClearHover();
    tdUpdateHud();
    tdSetInfo(info.name + " BUILT! CLICK IT TO UPGRADE ($" + tdUpgradeCost(t) + ")");
}

function tdClearHover() {
    removeShapes(tdHoverShapes);
    tdHoverShapes = [];
    tdHoverKey = "";
}

// Show where the tower would go and how far it shoots
function tdHover(mX, mY) {
    if (mY < TD_TOP || mY >= TD_TOP + TD_ROWS * TD_TILE) { tdClearHover(); return; }
    var c = Math.floor(mX / TD_TILE), r = Math.floor((mY - TD_TOP) / TD_TILE);
    var key = c + "," + r;
    if (key === tdHoverKey) return;
    tdClearHover();
    tdHoverKey = key;
    var x = c * TD_TILE + TD_TILE / 2, y = TD_TOP + r * TD_TILE + TD_TILE / 2;
    var existing = tdTowerAt(c, r);
    if (existing) {
        var range = tdRange(existing);
        tdHoverShapes.push(addCircle(range, x, y, "rgba(250,204,21,0.15)"));
        return;
    }
    var ok = !tdPathTiles[key] && tdMoney >= TD_TYPES[tdSelected].cost;
    tdHoverShapes.push(addCircle(TD_TYPES[tdSelected].range, x, y, ok ? "rgba(255,255,255,0.12)" : "rgba(239,68,68,0.15)"));
    tdHoverShapes.push(addRect(TD_TILE, TD_TILE, c * TD_TILE, TD_TOP + r * TD_TILE, ok ? "rgba(255,255,255,0.25)" : "rgba(239,68,68,0.35)"));
}

function tdRange(t) { return TD_TYPES[t.type].range + (t.lvl - 1) * 12; }
function tdDamage(t) { return TD_TYPES[t.type].dmg * (1 + (t.lvl - 1) * 0.7); }
function tdRate(t) { return Math.max(8, TD_TYPES[t.type].rate - (t.lvl - 1) * 5); }

function tdUpdateHud() {
    tdMoneyText.setText("$" + tdMoney);
    tdLivesText.setText("LIVES " + tdLives);
    tdWaveText.setText("WAVE " + tdWave + "/" + TD_MAX_WAVE);
}

function tdStartWave() {
    if (tdPhase !== "build") return;
    tdWave++;
    tdPhase = "wave";
    tdSpawnQueue = [];
    var n = 6 + tdWave * 2;
    for (var i = 0; i < n; i++) {
        var kind = "basic";
        if (tdWave >= 3 && i % 3 === 1) kind = "fast";
        if (tdWave >= 5 && i % 4 === 3) kind = "tank";
        tdSpawnQueue.push(kind);
    }
    if (tdWave % 5 === 0) tdSpawnQueue.push("boss");
    tdSpawnTimer = 0;
    setButtonLabel(getButton("tdNext"), "WAVE " + tdWave + "...");
    tdUpdateHud();
    showBanner("WAVE " + tdWave, tdWave % 5 === 0 ? "BOSS INCOMING!" : null);
}

function tdSpawnEnemy(kind) {
    var stats = {
        basic: {hp: 10, speed: 1.0, reward: 5, r: 9, color: "#ef4444", leak: 1},
        fast:  {hp: 6, speed: 1.9, reward: 6, r: 7, color: "#facc15", leak: 1},
        tank:  {hp: 36, speed: 0.6, reward: 12, r: 12, color: "#a855f7", leak: 2},
        boss:  {hp: 160, speed: 0.5, reward: 60, r: 16, color: "#111827", leak: 5}
    }[kind];
    var hp = Math.round(stats.hp * (1 + tdWave * 0.5 + tdWave * tdWave * 0.02) * tdHpMult);
    var x = tdWaypoints[0][0], y = tdWaypoints[0][1];
    var shapes = [];
    addCircle(stats.r + 1, x, y, "#0b1020", shapes);
    var body = addCircle(stats.r, x, y, stats.color, shapes);
    addRect(3, 3, x + 1, y - 3, "#ffffff", shapes);
    var segs = [];
    for (var s = 0; s < 4; s++) segs.push(addRect(5, 3, x - 11 + s * 6, y - stats.r - 7, "#22c55e", shapes));
    if (kind === "boss") addRect(18, 4, x - 9, y - 21, "#facc15", shapes);
    tdEnemies.push({kind: kind, x: x, y: y, wp: 1, hp: hp, maxHp: hp, speed: stats.speed, reward: stats.reward,
                    leak: stats.leak, slow: 0, shapes: shapes, body: body, segs: segs, color: stats.color, progress: 0, litSegs: 4});
}

function tdHurt(e, dmg) {
    e.hp -= dmg;
    var lit = Math.max(0, Math.ceil(e.hp / e.maxHp * 4));
    if (lit !== e.litSegs) {
        e.litSegs = lit;
        for (var s = 0; s < 4; s++) e.segs[s].setColor(s < lit ? (lit <= 1 ? "#ef4444" : "#22c55e") : "#374151");
    }
}

function towerGameLoop() {
    if (currentAppState !== "TOWER") return;
    tdFrame++;

    if (tdPhase === "build") {
        tdBreakTimer--;
        if (tdFrame % 10 === 0) setButtonLabel(getButton("tdNext"), "START (" + Math.ceil(tdBreakTimer / 50) + ")");
        if (tdBreakTimer <= 0) tdStartWave();
    } else if (tdSpawnQueue.length > 0) {
        tdSpawnTimer--;
        if (tdSpawnTimer <= 0) {
            tdSpawnEnemy(tdSpawnQueue.shift());
            tdSpawnTimer = Math.max(14, 40 - tdWave * 2);
        }
    }

    // Enemies walk the road
    for (var i = tdEnemies.length - 1; i >= 0; i--) {
        var e = tdEnemies[i];
        var spd = e.speed * (e.slow > 0 ? 0.5 : 1);
        if (e.slow > 0) { e.slow--; if (e.slow === 0) e.body.setColor(e.color); }
        var target = tdWaypoints[e.wp];
        var dx = target[0] - e.x, dy = target[1] - e.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        var mx, my;
        if (dist <= spd) { mx = dx; my = dy; e.wp++; }
        else { mx = dx / dist * spd; my = dy / dist * spd; }
        e.x += mx; e.y += my; e.progress += spd;
        moveShapes(e.shapes, mx, my);
        if (e.wp >= tdWaypoints.length) {
            tdLives -= e.leak;
            burst(e.x, 455, 10, ["#ef4444", "#ffffff"], 3, 0.1);
            removeShapes(e.shapes);
            tdEnemies.splice(i, 1);
            tdUpdateHud();
            if (tdLives <= 0) { towerGameOver(false); return; }
        }
    }

    // Towers aim at the enemy furthest along the road that's in range
    for (var t = 0; t < tdTowers.length; t++) {
        var tw = tdTowers[t];
        if (tw.cd > 0) { tw.cd--; continue; }
        var range = tdRange(tw), best = null;
        for (var k = 0; k < tdEnemies.length; k++) {
            var en = tdEnemies[k];
            var ddx = en.x - tw.x, ddy = en.y - tw.y;
            if (ddx * ddx + ddy * ddy <= range * range && (!best || en.progress > best.progress)) best = en;
        }
        if (!best) continue;
        tw.cd = tdRate(tw);
        var ang = Math.atan2(best.y - tw.y, best.x - tw.x);
        tw.barrel.setPosition(tw.x - 2 + Math.cos(ang) * 10, tw.y - 2 - 6 + Math.sin(ang) * 10);
        var info = TD_TYPES[tw.type];
        var size = tw.type === "cannon" ? 5 : 3;
        var shot = (tw.type === "cannon") ? addCircle(size, tw.x, tw.y, info.shot) : addRect(size + 1, size + 1, tw.x, tw.y, info.shot);
        tdShots.push({x: tw.x, y: tw.y, target: best, type: tw.type, dmg: tdDamage(tw), shape: shot});
    }

    // Shots home in on their target
    for (var s = tdShots.length - 1; s >= 0; s--) {
        var sh = tdShots[s];
        var tg = sh.target;
        var tx = tg.x - sh.x, ty = tg.y - sh.y;
        var d = Math.sqrt(tx * tx + ty * ty);
        var speed = 8;
        if (d <= speed || tg.hp <= 0) {
            remove(sh.shape);
            tdShots.splice(s, 1);
            if (tg.hp > 0) tdShotHit(sh);
            continue;
        }
        sh.x += tx / d * speed; sh.y += ty / d * speed;
        sh.shape.move(tx / d * speed, ty / d * speed);
    }

    // Remove the defeated
    for (var j = tdEnemies.length - 1; j >= 0; j--) {
        var dead = tdEnemies[j];
        if (dead.hp > 0) continue;
        tdMoney += dead.reward;
        burst(dead.x, dead.y, dead.kind === "boss" ? 30 : 8, [dead.color, "#facc15", "#ffffff"], 2.5, 0.05);
        removeShapes(dead.shapes);
        tdEnemies.splice(j, 1);
        tdUpdateHud();
    }

    // Wave finished?
    if (tdPhase === "wave" && tdSpawnQueue.length === 0 && tdEnemies.length === 0) {
        var bonus = 20 + tdWave * 5;
        tdMoney += bonus;
        tdUpdateHud();
        if (tdWave >= TD_MAX_WAVE) { towerGameOver(true); return; }
        tdPhase = "build";
        tdBreakTimer = 500;
        tdSetInfo("WAVE CLEARED! +$" + bonus + "  BUILD OR UPGRADE, THEN START.");
    }
}

function tdShotHit(sh) {
    var tg = sh.target;
    if (sh.type === "cannon") {
        burst(tg.x, tg.y, 10, ["#f97316", "#facc15", "#78716c"], 2.5, 0.05);
        for (var i = 0; i < tdEnemies.length; i++) {
            var e = tdEnemies[i];
            var dx = e.x - tg.x, dy = e.y - tg.y;
            if (dx * dx + dy * dy <= TD_TYPES.cannon.splash * TD_TYPES.cannon.splash) tdHurt(e, sh.dmg);
        }
    } else {
        tdHurt(tg, sh.dmg);
        if (sh.type === "frost") { tg.slow = TD_TYPES.frost.slow; tg.body.setColor("#7dd3fc"); }
    }
}

function towerGameOver(won) {
    currentAppState = "TOWER_OVER";
    stopTimer(towerGameLoop);
    tdClearHover();
    removeButtonsById(["tdArrow", "tdCannon", "tdFrost", "tdNext", "tdmenu"]);
    if (won) {
        var newBest = towerBestWave < TD_MAX_WAVE;
        towerBestWave = TD_MAX_WAVE;
        recordBest("TOWER", TD_MAX_WAVE);
        showGameOverCard("YOU DEFENDED ALL " + TD_MAX_WAVE + " WAVES!", "LIVES LEFT: " + tdLives, newBest);
        burst(200, 200, 40, CONFETTI, 5, 0.15);
    } else {
        var reached = tdWave;
        var nb = reached > towerBestWave;
        if (nb) towerBestWave = reached;
        recordBest("TOWER", reached);
        showGameOverCard("THE CASTLE FELL ON WAVE " + reached, "BEST: WAVE " + towerBestWave, nb);
    }
}
var towerBestWave = 0;


// -------------------------------------------------------------
// BOSS BATTLE ENGINE (survive the boss's bullet patterns to win)
// -------------------------------------------------------------
var BB_FLOOR = 420;
var BB_GRAVITY = 0.55, BB_JUMP = -11, BB_SPEED = 3.8;
var BB_PLATFORMS = [{x: 30, y: 340, w: 90}, {x: 150, y: 270, w: 90}];

var bbX = 60, bbY = 400, bbVY = 0, bbOnGround = true, bbFacing = 1;
var bbLeft = false, bbRight = false, bbDownHeld = false;
var bbDash = 0, bbDashCd = 0, bbInvuln = 0, bbHP = 3, bbMaxHP = 3, bbDropTimer = 0;
var bbParts = [], bbHearts = [];
var bbBullets = [], bbLasers = [], bbAttacks = [];
var bbPhase = 0, bbPhaseLen = 1100, bbPhaseLeft = 1100, bbBreak = 0;
var bbAttackTimer = 0, bbLastPattern = "";
var bbSpeedMult = 1;
var bbBossX = 320, bbBossY = 290, bbBossBaseY = 290, bbBossParts = [], bbBossBody, bbBossBelly, bbPupils = [];
var bbBossOffsetY = 0;
var bbBarSegs = [];
var bbFrame = 0, bbGrain = [];
var bbWon = 0, bbHits = 0, bbParries = 0;
var bbBestHits = -1;

function initBossGame(diff, bossIdx) {
    bbDef = BOSS_DEFS[bossIdx || 0];
    bbStage = BB_STAGES[bbDef.stage];
    bbHLasers = [];
    stopAllGameTimers();
    clearScreen();
    currentAppState = "BOSS";
    bbMaxHP = (diff === "EASY") ? 5 : (diff === "MED" ? 3 : 2);
    bbSpeedMult = (diff === "EASY") ? 0.8 : (diff === "MED" ? 1 : 1.2);
    bbPhaseLen = (diff === "EASY") ? 900 : (diff === "MED" ? 1100 : 1300);
    bbHP = bbMaxHP; bbPhase = 0; bbPhaseLeft = bbPhaseLen; bbBreak = 100;
    bbX = 60; bbY = BB_FLOOR - 10; bbVY = 0; bbOnGround = true; bbFacing = 1;
    bbLeft = false; bbRight = false; bbDownHeld = false;
    bbDash = 0; bbDashCd = 0; bbInvuln = 0; bbDropTimer = 0;
    bbBullets = []; bbLasers = []; bbAttacks = []; bbAttackTimer = 60; bbLastPattern = "";
    bbFrame = 0; bbWon = 0; bbHits = 0; bbParries = 0; bbBossOffsetY = 0; bbBossY = bbBossBaseY;

    bbDrawStage();

    bbDrawBoss();
    bbDrawPlayer();

    // HUD: boss name + health bar, player hearts
    addText(bbDef.name, "11pt Courier", 20, 22, bbStage.text);
    addRect(262, 12, 18, 30, "#1c1917");
    bbBarSegs = [];
    for (var b = 0; b < 30; b++) bbBarSegs.push(addRect(7, 8, 21 + b * 8.6, 32, "#dc2626"));
    for (var m = 1; m < 3; m++) addRect(2, 12, 18 + m * 87, 30, "#f9e0b0");
    nameTagBadge = addText(playerName, "8pt Courier", 300, 22, bbStage.text);
    bbHearts = [];
    for (var hh = 0; hh < bbMaxHP; hh++) bbHearts.push(addRect(12, 12, 300 + hh * 16, 30, "#e11d48"));
    addText("ARROWS MOVE/JUMP  X DASH  JUMP AT PINK = PARRY", "7pt Courier", "center", 474, bbStage.hint);
    addMenuButton(330, 450);

    // Film grain specks for the old-cartoon look
    bbGrain = [];
    for (var g = 0; g < 26; g++) bbGrain.push(addRect(2, 2, rand(0, 400), rand(0, 480), bbStage.grain));

    showBanner(bbDef.name, "SURVIVE ALL 3 PHASES!");
    setTimer(bossGameLoop, 20);
}

// ---------- The bosses ----------
// Each boss has its own look, stage, colors per phase and attack list per phase.
var BOSS_DEFS = [
    {id: "blob", name: "BARON VON BLOB", tag: "BOUNCY BULLY", stage: "sunset",
     colors: ["#7c3aed", "#dc2626", "#111827"], accents: ["#c4b5fd", "#fca5a5", "#6b7280"],
     shot: "#f59e0b", rain: "#38bdf8", mouth: [-48, 12], hitR: 66,
     phaseNames: ["PHASE 1", "PHASE 2: HE'S ANGRY", "FINAL PHASE"],
     patterns: [["spread", "blobs", "aimed", "spread"],
                ["rain", "aimed", "slam", "spread", "blobs"],
                ["spiral", "lasers", "storm", "slam", "blobs"]]},
    {id: "kraken", name: "CAPTAIN KRAKEN", tag: "TERROR OF THE DEEP", stage: "sea",
     colors: ["#14b8a6", "#0e7490", "#7f1d1d"], accents: ["#99f6e4", "#67e8f9", "#fca5a5"],
     shot: "#7dd3fc", rain: "#a5f3fc", mouth: [-40, 22], hitR: 62,
     phaseNames: ["PHASE 1", "PHASE 2: RISING TIDE", "FINAL PHASE: THE DEEP"],
     patterns: [["bubbles", "aimed", "tentacles", "bubbles"],
                ["tentacles", "spread", "bubbles", "slam", "inkrain"],
                ["whirl", "tentacles", "bubblestorm", "spread", "slam"]]},
    {id: "robot", name: "SIR CLANKSALOT", tag: "THE IRON KNIGHT", stage: "factory",
     colors: ["#94a3b8", "#f59e0b", "#ef4444"], accents: ["#475569", "#78350f", "#7f1d1d"],
     shot: "#fbbf24", rain: "#fbbf24", mouth: [-54, 4], hitR: 64,
     phaseNames: ["PHASE 1", "PHASE 2: OVERCLOCKED", "FINAL PHASE: MELTDOWN"],
     patterns: [["missiles", "gears", "aimed", "spread"],
                ["hlasers", "missiles", "gears", "spread"],
                ["hlasers", "missiles", "lasers", "gears", "storm"]]},
    {id: "sun", name: "MADAME MOONFLARE", tag: "QUEEN OF FLAMES", stage: "volcano",
     colors: ["#f97316", "#dc2626", "#7c3aed"], accents: ["#fde047", "#fb923c", "#f0abfc"],
     shot: "#fb923c", rain: "#f97316", mouth: [-44, 14], hitR: 66,
     phaseNames: ["PHASE 1", "PHASE 2: SUPERNOVA", "FINAL PHASE: ECLIPSE"],
     patterns: [["fireballs", "spread", "firerain", "aimed"],
                ["pillars", "spiral", "fireballs", "firerain"],
                ["pillars", "spiral", "storm", "fireballs", "hlasers"]]}
];
var BB_STAGES = {
    sunset:  {sky: ["#f9e0b0", "#f7d29c", "#f4c088", "#efab74", "#e99566", "#e0805d"], floor: "#6b4423", floorTop: "#3b2414",
              plat: "#8b5a2b", platEdge: "#3b2414", text: "#2b1b0f", hint: "#f9e0b0", barBg: "#5a381c", grain: "rgba(43,27,15,0.35)"},
    sea:     {sky: ["#7dd3fc", "#38bdf8", "#0ea5e9", "#0284c7", "#0369a1", "#075985"], floor: "#d6b370", floorTop: "#a16207",
              plat: "#2dd4bf", platEdge: "#0f766e", text: "#082f49", hint: "#082f49", barBg: "#0c4a6e", grain: "rgba(255,255,255,0.25)"},
    factory: {sky: ["#1f2937", "#273449", "#2d3a4f", "#334155", "#3b4a63", "#475569"], floor: "#4b5563", floorTop: "#111827",
              plat: "#9ca3af", platEdge: "#374151", text: "#e5e7eb", hint: "#e5e7eb", barBg: "#111827", grain: "rgba(0,0,0,0.35)"},
    volcano: {sky: ["#1e1b4b", "#3b0764", "#581c87", "#7f1d1d", "#991b1b", "#c2410c"], floor: "#292524", floorTop: "#f97316",
              plat: "#57534e", platEdge: "#f97316", text: "#fde68a", hint: "#fde68a", barBg: "#292524", grain: "rgba(0,0,0,0.3)"}
};
var bbDef = BOSS_DEFS[0];
var bbStage = BB_STAGES.sunset;
var bbPupilBase = [];
var bbDecor = [];
var bbHLasers = [];
var bbBossBestHits = {};
var bbDiff = "MED";

function bbDrawStage() {
    var st = bbStage, i;
    for (i = 0; i < st.sky.length; i++) addRect(400, 72, 0, i * 70, st.sky[i]);
    bbDecor = [];
    if (bbDef.stage === "sunset") {
        addCircle(60, 70, 130, "#fbe7c6");
        for (i = 0; i < 6; i++) addCircle(70, i * 80, 430, "#c2774e");
    } else if (bbDef.stage === "sea") {
        for (i = 0; i < 4; i++) addRect(26, 420, 30 + i * 95, 0, "rgba(255,255,255,0.08)");
        for (i = 0; i < 9; i++) {
            var sx = 12 + i * 44;
            for (var k = 0; k < 4; k++) addRect(6, 14, sx + (k % 2) * 4, BB_FLOOR - 14 - k * 12, "#15803d");
        }
        for (i = 0; i < 10; i++) bbDecor.push({shape: addCircle(rand(2, 5), rand(0, 400), rand(60, 420), "rgba(255,255,255,0.5)"), vy: -rand(0.4, 1.2)});
    } else if (bbDef.stage === "factory") {
        for (i = 0; i < 4; i++) {
            addCircle(34, 40 + i * 110, 150 + (i % 2) * 90, "#3f4b5f");
            addCircle(12, 40 + i * 110, 150 + (i % 2) * 90, "#273449");
        }
        addRect(400, 10, 0, 90, "#4b5563"); addRect(400, 10, 0, 200, "#4b5563");
        for (i = 0; i < 8; i++) addRect(14, 6, i * 52 + 6, BB_FLOOR + 30, "#facc15");
    } else if (bbDef.stage === "volcano") {
        for (i = 0; i < 30; i++) addRect(2, 2, (i * 71) % 400, (i * 37) % 160, "#f5f3ff");
        for (var v = 0; v < 2; v++) {
            var vx = 60 + v * 220;
            for (var lyr = 0; lyr < 6; lyr++) addRect(160 - lyr * 24, 20, vx - 80 + lyr * 12, BB_FLOOR - 20 - lyr * 20, "#3f1d1d");
            addRect(16, 8, vx - 8, BB_FLOOR - 128, "#f97316");
        }
        for (i = 0; i < 10; i++) bbDecor.push({shape: addRect(3, 3, rand(0, 400), rand(60, 420), "#fb923c"), vy: -rand(0.5, 1.4)});
    }
    addRect(400, 60, 0, BB_FLOOR, st.floor);
    addRect(400, 5, 0, BB_FLOOR, st.floorTop);
    if (bbDef.stage === "sunset") for (i = 0; i < 10; i++) addRect(18, 4, i * 42 + 10, BB_FLOOR + 20 + (i % 2) * 16, "#5a381c");
    if (bbDef.stage === "volcano") for (i = 0; i < 7; i++) addRect(20 + (i % 3) * 8, 3, i * 58 + 8, BB_FLOOR + 18 + (i % 2) * 18, "#f97316");
    for (var p = 0; p < BB_PLATFORMS.length; p++) {
        var pl = BB_PLATFORMS[p];
        addRect(pl.w, 10, pl.x, pl.y, st.platEdge);
        addRect(pl.w - 4, 6, pl.x + 2, pl.y + 1, st.plat);
    }
}

function bbAnimateDecor() {
    for (var i = 0; i < bbDecor.length; i++) {
        var d = bbDecor[i];
        d.shape.move(0, d.vy);
        if (d.shape.getY() < 50) d.shape.setPosition(rand(0, 400), BB_FLOOR - 4);
    }
}

// Draws the boss at (x, y) scaled by s into list P. Sets body/accent/pupils when s = 1 (the real fight).
function bbDrawBossLook(def, x, y, s, P, phaseIdx) {
    var body, accent, pupils = [], pBase = [];
    var c = def.colors[phaseIdx || 0], a = def.accents[phaseIdx || 0];
    var ink = "#1c1917";
    if (def.id === "blob") {
        addCircle(62 * s, x, y, "#2b1b0f", P);
        body = addCircle(58 * s, x, y, c, P);
        accent = addCircle(36 * s, x + 4 * s, y + 18 * s, a, P);
        addCircle(13 * s, x - 22 * s, y - 16 * s, "#ffffff", P);
        addCircle(13 * s, x + 14 * s, y - 16 * s, "#ffffff", P);
        pupils.push(addCircle(5 * s, x - 24 * s, y - 14 * s, "#2b1b0f", P)); pBase.push([-22, -16]);
        pupils.push(addCircle(5 * s, x + 12 * s, y - 14 * s, "#2b1b0f", P)); pBase.push([14, -16]);
        addRect(22 * s, 5 * s, x - 34 * s, y - 34 * s, "#2b1b0f", P);
        addRect(22 * s, 5 * s, x + 4 * s, y - 34 * s, "#2b1b0f", P);
        addRect(36 * s, 10 * s, x - 28 * s, y + 8 * s, "#2b1b0f", P);
        addRect(6 * s, 5 * s, x - 22 * s, y + 8 * s, "#ffffff", P);
        addRect(6 * s, 5 * s, x - 6 * s, y + 8 * s, "#ffffff", P);
        addRect(40 * s, 10 * s, x - 20 * s, y - 66 * s, "#facc15", P);
        addRect(8 * s, 10 * s, x - 20 * s, y - 76 * s, "#facc15", P);
        addRect(8 * s, 10 * s, x - 4 * s, y - 78 * s, "#facc15", P);
        addRect(8 * s, 10 * s, x + 12 * s, y - 76 * s, "#facc15", P);
        addCircle(3 * s, x, y - 61 * s, "#e11d48", P);
    } else if (def.id === "kraken") {
        // Tentacles first so the head sits on top
        for (var t = 0; t < 5; t++) {
            var tx = x - 40 * s + t * 20 * s;
            for (var seg = 0; seg < 4; seg++) addCircle((9 - seg * 1.5) * s, tx + (seg % 2 ? 4 : -4) * s, y + (34 + seg * 13) * s, (seg % 2) ? a : c, P);
        }
        addCircle(54 * s, x, y - 6 * s, ink, P);
        body = addCircle(50 * s, x, y - 6 * s, c, P);
        accent = addCircle(20 * s, x + 18 * s, y - 32 * s, a, P);   // shiny spot
        addCircle(14 * s, x - 20 * s, y - 2 * s, "#ffffff", P);
        addCircle(14 * s, x + 16 * s, y - 2 * s, "#ffffff", P);
        pupils.push(addCircle(6 * s, x - 22 * s, y, ink, P)); pBase.push([-20, -2]);
        pupils.push(addCircle(6 * s, x + 14 * s, y, ink, P)); pBase.push([16, -2]);
        addRect(30 * s, 6 * s, x - 15 * s, y + 20 * s, ink, P);    // frown
        // Captain's hat with an anchor badge
        addRect(80 * s, 10 * s, x - 40 * s, y - 56 * s, "#111827", P);
        addRect(56 * s, 22 * s, x - 28 * s, y - 76 * s, "#111827", P);
        addRect(56 * s, 4 * s, x - 28 * s, y - 60 * s, "#facc15", P);
        addRect(4 * s, 12 * s, x - 2 * s, y - 74 * s, "#facc15", P);
        addRect(12 * s, 3 * s, x - 6 * s, y - 66 * s, "#facc15", P);
    } else if (def.id === "robot") {
        addRect(14 * s, 40 * s, x - 70 * s, y - 10 * s, ink, P);   // arm cannon
        addRect(10 * s, 36 * s, x - 68 * s, y - 8 * s, "#64748b", P);
        addRect(24 * s, 10 * s, x - 82 * s, y + 2 * s, "#475569", P);
        addRect(100 * s, 100 * s, x - 50 * s, y - 40 * s, ink, P);
        body = addRect(94 * s, 94 * s, x - 47 * s, y - 37 * s, c, P);
        accent = addRect(60 * s, 30 * s, x - 30 * s, y + 18 * s, a, P);   // chest plate
        addCircle(8 * s, x, y + 33 * s, "#22d3ee", P);
        addRect(70 * s, 22 * s, x - 35 * s, y - 24 * s, "#111827", P);     // visor
        pupils.push(addRect(12 * s, 8 * s, x - 22 * s, y - 17 * s, "#ef4444", P)); pBase.push([-22, -17]);
        pupils.push(addRect(12 * s, 8 * s, x + 10 * s, y - 17 * s, "#ef4444", P)); pBase.push([10, -17]);
        addRect(4 * s, 22 * s, x - 2 * s, y - 60 * s, ink, P);              // antenna
        addCircle(6 * s, x, y - 62 * s, "#ef4444", P);
        addRect(24 * s, 14 * s, x - 62 * s, y - 46 * s, "#64748b", P);      // shoulders
        addRect(24 * s, 14 * s, x + 38 * s, y - 46 * s, "#64748b", P);
    } else {
        // Madame Moonflare: a fiery star in sunglasses
        for (var f = 0; f < 10; f++) {
            var ang = f * Math.PI / 5;
            addCircle(14 * s, x + Math.cos(ang) * 56 * s, y + Math.sin(ang) * 56 * s, (f % 2) ? "#fde047" : "#fb923c", P);
        }
        addCircle(58 * s, x, y, ink, P);
        body = addCircle(54 * s, x, y, c, P);
        accent = addCircle(38 * s, x, y + 4 * s, a, P);
        addRect(70 * s, 12 * s, x - 35 * s, y - 20 * s, ink, P);           // sunglasses
        pupils.push(addRect(14 * s, 6 * s, x - 26 * s, y - 17 * s, "#f0abfc", P)); pBase.push([-26, -17]);
        pupils.push(addRect(14 * s, 6 * s, x + 8 * s, y - 17 * s, "#f0abfc", P)); pBase.push([8, -17]);
        addRect(28 * s, 6 * s, x - 10 * s, y + 18 * s, ink, P);            // smirk
        addRect(8 * s, 6 * s, x + 14 * s, y + 14 * s, ink, P);
    }
    if (s === 1) { bbBossBody = body; bbBossBelly = accent; bbPupils = pupils; bbPupilBase = pBase; }
}

function bbDrawBoss() {
    bbBossParts = [];
    bbDrawBossLook(bbDef, bbBossX, bbBossY, 1, bbBossParts, 0);
}

// ---------- Boss select screen (after picking difficulty) ----------
function showBossSelect(diff) {
    bbDiff = diff;
    neonMenu("CHOOSE YOUR BOSS", "#f59e0b", 0, 0);
    currentAppState = "BOSS_SELECT";
    var g = [];
    addText("SURVIVE ALL 3 PHASES TO WIN", "8pt Courier", "center", 62, "#64748b", g);
    for (var i = 0; i < BOSS_DEFS.length; i++) {
        var d = BOSS_DEFS[i];
        var x = 24 + (i % 2) * 182, y = 78 + Math.floor(i / 2) * 172;
        var stage = BB_STAGES[d.stage];
        var btn = makeButton("boss" + i, x, y, 170, 160, stage.sky[3], "", "8pt Courier", 10, g);
        var card = [];
        bbDrawBossLook(d, x + 85, y + 62, 0.48, card, 0);
        addRect(170, 46, x, y + 114, "rgba(11,16,32,0.85)", card);
        addText(d.name, "9pt Courier", x + 8, y + 132, "#ffffff", card);
        var best = bbBossBestHits[d.id];
        addText(best === undefined ? d.tag : "BEATEN! BEST: " + best + " HITS", "7pt Courier", x + 8, y + 150, best === undefined ? "#94a3b8" : "#4ade80", card);
        for (var k = 0; k < card.length; k++) g.push(card[k]);
        btn.lift = btn.lift.concat(card);
    }
    makeButton("back", 120, 434, 160, 32, "#374151", "BACK", "11pt Courier", 21, g);
    popIn(g, 0, 480, 22);
}

// ---------- New attack pieces ----------
function bbBubble(x, y, pink) {
    var shapes = [];
    addCircle(10, x, y, "rgba(255,255,255,0.6)", shapes);
    addCircle(8, x, y, pink ? "#f472b6" : "#bae6fd", shapes);
    addCircle(2.5, x - 3, y - 3, "#ffffff", shapes);
    bbBullets.push({kind: "shot", x: x, y: y, vx: -2.1 * bbSpeedMult, vy: 0, r: 8, pink: !!pink, shapes: shapes, g: 0, wob: 1.6, age: rand(0, 50)});
}

function bbMissile(x, y, pink) {
    var shapes = [];
    addCircle(7, x, y, "#1c1917", shapes);
    addCircle(5, x, y, pink ? "#f472b6" : "#ef4444", shapes);
    addCircle(2, x, y, "#ffffff", shapes);
    var a = bbAim(x, y);
    bbBullets.push({kind: "homing", x: x, y: y, vx: Math.cos(a) * 3 * bbSpeedMult, vy: Math.sin(a) * 3 * bbSpeedMult, r: 6, pink: !!pink, shapes: shapes, g: 0, age: 0});
}

function bbGear() {
    var shapes = [];
    var x = bbBossX - 64, y = BB_FLOOR - 14;
    addRect(6, 34, x - 3, y - 17, "#334155", shapes);
    addRect(34, 6, x - 17, y - 3, "#334155", shapes);
    addCircle(14, x, y, "#475569", shapes);
    addCircle(9, x, y, "#94a3b8", shapes);
    addCircle(3, x, y, "#1f2937", shapes);
    bbBullets.push({kind: "roll", x: x, y: y, vx: -3.6 * bbSpeedMult, vy: 0, r: 13, pink: false, shapes: shapes, g: 0});
}

function bbFireball(x, y) {
    var shapes = [];
    addCircle(14, x, y, "#7c2d12", shapes);
    addCircle(12, x, y, "#f97316", shapes);
    addCircle(6, x - 2, y - 2, "#fde047", shapes);
    bbBullets.push({kind: "blob", x: x, y: y, vx: -2.6 * bbSpeedMult, vy: -6, r: 12, pink: false, shapes: shapes, g: 0.3});
}

// Horizontal beams across the arena at floor, low-platform or high-platform height
var BB_BANDS = [{y: 388, h: 32}, {y: 316, h: 26}, {y: 246, h: 26}];
function bbHLaser(band) {
    var b = BB_BANDS[band];
    var warn = addRect(262, 3, 0, b.y + b.h / 2, "rgba(220,38,38,0.5)");
    bbHLasers.push({band: band, t: 0, warn: warn, beam: null});
}



function bbDrawPlayer() {
    bbParts = [];
    addCircle(11, 0, 0, "#2b1b0f", bbParts);
    addCircle(10, 0, 0, cust("BOSS", "body").color, bbParts);
    addRect(16, 3, 0, 0, cust("BOSS", "scarf").color, bbParts);       // scarf
    addRect(3, 5, 0, 0, "#2b1b0f", bbParts);        // eyes
    addRect(3, 5, 0, 0, "#2b1b0f", bbParts);
    bbPositionPlayer();
}

function bbPositionPlayer() {
    var x = bbX, y = bbY, look = bbFacing > 0 ? 2 : -2;
    bbParts[0].setPosition(x, y);
    bbParts[1].setPosition(x, y);
    bbParts[2].setPosition(x - 8, y + 4);
    bbParts[3].setPosition(x - 4 + look, y - 5);
    bbParts[4].setPosition(x + 2 + look, y - 5);
    // Blink while invincible after a hit
    var vis = !(bbInvuln > 0 && bbInvuln % 8 < 4);
    bbParts[1].setColor(vis ? (bbDash > 0 ? "#fde68a" : cust("BOSS", "body").color) : "rgba(0,0,0,0)");
    bbParts[0].setColor(vis ? "#2b1b0f" : "rgba(0,0,0,0)");
}

// ---------- Bullets ----------
function bbShot(x, y, vx, vy, pink) {
    var shapes = [];
    addCircle(7, x, y, "#2b1b0f", shapes);
    addCircle(5.5, x, y, pink ? "#f472b6" : bbDef.shot, shapes);
    bbBullets.push({kind: "shot", x: x, y: y, vx: vx * bbSpeedMult, vy: vy * bbSpeedMult, r: 6, pink: !!pink, shapes: shapes, g: 0});
}

function bbBlob(x, y) {
    var shapes = [];
    addCircle(14, x, y, "#2b1b0f", shapes);
    addCircle(12, x, y, "#22c55e", shapes);
    addRect(3, 4, x - 5, y - 4, "#2b1b0f", shapes);
    addRect(3, 4, x + 1, y - 4, "#2b1b0f", shapes);
    bbBullets.push({kind: "blob", x: x, y: y, vx: -2.4 * bbSpeedMult, vy: -6, r: 12, pink: false, shapes: shapes, g: 0.3});
}

function bbWave() {
    var shapes = [];
    addRect(18, 20, bbBossX - 70, BB_FLOOR - 20, "#2b1b0f", shapes);
    addRect(14, 16, bbBossX - 68, BB_FLOOR - 18, "#facc15", shapes);
    bbBullets.push({kind: "wave", x: bbBossX - 61, y: BB_FLOOR - 10, vx: -4.2 * bbSpeedMult, vy: 0, r: 9, pink: false, shapes: shapes, g: 0});
}

function bbRainDrop(x, pink) {
    var shapes = [];
    addCircle(6, x, -10, "#2b1b0f", shapes);
    addCircle(4.5, x, -10, pink ? "#f472b6" : bbDef.rain, shapes);
    bbBullets.push({kind: "shot", x: x, y: -10, vx: 0, vy: 4.6 * bbSpeedMult, r: 5, pink: !!pink, shapes: shapes, g: 0, delay: 35,
                    warn: addRect(10, 6, x - 5, 46, "#dc2626")});
}

// Vertical beam lanes. style: "laser" (light beam), "tentacle" (from above), "pillar" (fire from the floor)
function bbLaser(x, style) {
    var warn = addRect(4, BB_FLOOR - 50, x - 2, 50, "rgba(220,38,38,0.5)");
    bbLasers.push({x: x, t: 0, warn: warn, beam: null, style: style || "laser"});
}

function bbMouth() { return [bbBossX + bbDef.mouth[0], bbBossY + bbDef.mouth[1]]; }

function bbAim(x, y) {
    var a = Math.atan2(bbY - y, bbX - x);
    return a;
}

// ---------- Attack patterns ----------
// Each pattern runs for a number of frames and fires on certain frames.
function bbStartPattern(name) {
    bbLastPattern = name;
    var p = {name: name, t: 0, len: 60};
    if (name === "spread") p.len = 50;
    else if (name === "aimed") p.len = 40;
    else if (name === "blobs") p.len = 90;
    else if (name === "rain") p.len = 60;
    else if (name === "slam") p.len = 80;
    else if (name === "spiral") p.len = 130;
    else if (name === "lasers") p.len = 90;
    else if (name === "storm") p.len = 100;
    else if (name === "bubbles") p.len = 80;
    else if (name === "tentacles" || name === "pillars") p.len = 90;
    else if (name === "whirl") p.len = 140;
    else if (name === "bubblestorm") p.len = 110;
    else if (name === "inkrain" || name === "firerain") p.len = 60;
    else if (name === "missiles") p.len = 60;
    else if (name === "gears") p.len = 100;
    else if (name === "hlasers") p.len = 90;
    else if (name === "fireballs") p.len = 90;
    bbAttacks.push(p);
}

function bbRunPattern(p) {
    var m = bbMouth(), i, a;
    if (p.name === "spread" && (p.t === 0 || p.t === 30)) {
        var base = bbAim(m[0], m[1]);
        var n = 5 + bbPhase;
        var pinkIdx = Math.floor(Math.random() * n);
        for (i = 0; i < n; i++) {
            a = base + (i - (n - 1) / 2) * 0.2;
            bbShot(m[0], m[1], Math.cos(a) * 3.6, Math.sin(a) * 3.6, i === pinkIdx && Math.random() < 0.6);
        }
    } else if (p.name === "aimed" && p.t % 10 === 0 && p.t <= 20) {
        a = bbAim(m[0], m[1]);
        bbShot(m[0], m[1], Math.cos(a) * 5, Math.sin(a) * 5, p.t === 20 && Math.random() < 0.5);
    } else if (p.name === "blobs" && p.t % 40 === 0) {
        bbBlob(bbBossX - 50, bbBossY + 40);
    } else if (p.name === "rain" && p.t % 6 === 0) {
        bbRainDrop(rand(15, 255), Math.random() < 0.15);
    } else if (p.name === "slam") {
        // Hop up, then slam down and send shockwaves along the floor
        if (p.t < 30) bbBossOffsetY = -p.t * 2;
        else if (p.t < 38) bbBossOffsetY = -60 + (p.t - 30) * 7.5;
        if (p.t === 38) { bbBossOffsetY = 0; bbWave(); burst(bbBossX - 40, BB_FLOOR, 14, ["#facc15", "#6b4423"], 3, 0.15); }
        if (p.t === 62 && bbPhase >= 1) bbWave();
    } else if (p.name === "spiral" && p.t % 5 === 0) {
        a = p.t * 0.13;
        var cx = bbBossX, cy = bbBossY;
        for (i = 0; i < 3; i++) {
            var aa = a + i * Math.PI * 2 / 3;
            bbShot(cx + Math.cos(aa) * 50, cy + Math.sin(aa) * 50, Math.cos(aa) * 2.6, Math.sin(aa) * 2.6, p.t % 40 === 0 && i === 0);
        }
    } else if (p.name === "lasers" && p.t === 0) {
        // 3 of 6 lanes light up; there's always a safe lane
        var lanes = [25, 70, 115, 160, 205, 250];
        var safe = Math.floor(Math.random() * 6);
        var picks = [];
        while (picks.length < 3) {
            var k = Math.floor(Math.random() * 6);
            if (k !== safe && picks.indexOf(k) === -1) picks.push(k);
        }
        for (i = 0; i < picks.length; i++) bbLaser(lanes[picks[i]]);
    } else if (p.name === "bubbles" && p.t % 14 === 0) {
        bbBubble(m[0], m[1] + rand(-20, 20), Math.random() < 0.25);
    } else if ((p.name === "tentacles" || p.name === "pillars") && p.t === 0) {
        var lanes2 = [25, 70, 115, 160, 205, 250];
        var safe2 = Math.floor(Math.random() * 6);
        var count2 = 2 + (bbPhase >= 1 ? 1 : 0);
        var picks2 = [];
        while (picks2.length < count2) {
            var k2 = Math.floor(Math.random() * 6);
            if (k2 !== safe2 && picks2.indexOf(k2) === -1) picks2.push(k2);
        }
        for (i = 0; i < picks2.length; i++) bbLaser(lanes2[picks2[i]], p.name === "tentacles" ? "tentacle" : "pillar");
    } else if (p.name === "whirl" && p.t % 6 === 0) {
        a = -p.t * 0.1;
        for (i = 0; i < 4; i++) {
            var wa = a + i * Math.PI / 2;
            bbShot(bbBossX + Math.cos(wa) * 50, bbBossY + Math.sin(wa) * 50, Math.cos(wa) * 2.2, Math.sin(wa) * 2.2, p.t % 36 === 0 && i === 0);
        }
    } else if (p.name === "bubblestorm") {
        if (p.t % 10 === 0) bbRainDrop(rand(15, 255), Math.random() < 0.2);
        if (p.t % 22 === 0) bbBubble(m[0], m[1] + rand(-30, 30), Math.random() < 0.3);
    } else if ((p.name === "inkrain" || p.name === "firerain") && p.t % 6 === 0) {
        bbRainDrop(rand(15, 255), Math.random() < 0.15);
    } else if (p.name === "missiles" && p.t % 20 === 0) {
        bbMissile(m[0], m[1] - 10 + (p.t / 20) * 10, p.t === 40 && Math.random() < 0.6);
    } else if (p.name === "gears" && (p.t === 0 || (p.t === 50 && bbPhase >= 1))) {
        bbGear();
    } else if (p.name === "hlasers" && p.t === 0) {
        if (bbPhase < 2) bbHLaser(Math.floor(Math.random() * 3));
        else { var pairs = [[0, 2], [1, 2]]; var pr = pairs[Math.floor(Math.random() * 2)]; bbHLaser(pr[0]); bbHLaser(pr[1]); }
    } else if (p.name === "fireballs" && p.t % 40 === 0) {
        bbFireball(bbBossX - 50, bbBossY + 40);
    } else if (p.name === "storm") {
        if (p.t % 9 === 0) bbRainDrop(rand(15, 255), Math.random() < 0.2);
        if (p.t === 20 || p.t === 70) { var b2 = bbAim(m[0], m[1]); for (i = -1; i <= 1; i++) bbShot(m[0], m[1], Math.cos(b2 + i * 0.25) * 4, Math.sin(b2 + i * 0.25) * 4, false); }
    }
}


function bbHurtPlayer() {
    if (bbInvuln > 0 || bbDash > 0) return;
    bbHP--;
    bbHits++;
    bbInvuln = 70;
    burst(bbX, bbY, 16, ["#e11d48", "#fff7e6", "#2b1b0f"], 3.5, 0.15);
    if (bbHearts[bbHP]) bbHearts[bbHP].setColor("#5a381c");
    if (bbHP <= 0) bossGameOver(false);
}

function bbParry() {
    for (var i = 0; i < bbBullets.length; i++) {
        var b = bbBullets[i];
        if (!b.pink || b.delay > 0) continue;
        var dx = b.x - bbX, dy = b.y - bbY;
        if (dx * dx + dy * dy < 30 * 30) {
            removeShapes(b.shapes);
            bbBullets.splice(i, 1);
            bbVY = -9;
            bbInvuln = Math.max(bbInvuln, 12);
            bbParries++;
            bbPhaseLeft = Math.max(1, bbPhaseLeft - 120);   // parries hurt the boss: phase ends sooner
            burst(bbX, bbY, 18, ["#f472b6", "#ffffff", "#fde68a"], 3.5, 0.08);
            var t = addText("PARRY!", "12pt Courier", "center", 120, "#e11d48");
            popIn([t], 0, -40, 12, 0, function () { tweenBy([t], 0, -60, 12, 25, easeInCubic, function () { remove(t); }); });
            return true;
        }
    }
    return false;
}

function bbJumpPressed() {
    if (bbOnGround) {
        if (bbDownHeld && bbY < BB_FLOOR - 15) { bbDropTimer = 14; bbOnGround = false; return; }   // drop through platform
        bbVY = BB_JUMP;
        bbOnGround = false;
    } else {
        bbParry();
    }
}

function bbDashPressed() {
    if (bbDashCd > 0 || bbDash > 0) return;
    bbDash = 10;
    bbDashCd = 45;
    burst(bbX, bbY, 6, ["#fde68a", "#ffffff"], 1.5, 0);
}

function bossGameLoop() {
    if (currentAppState !== "BOSS") return;
    bbFrame++;

    if (bbFrame % 3 === 0) {
        for (var g = 0; g < bbGrain.length; g++) bbGrain[g].setPosition(rand(0, 400), rand(0, 480));
    }

    // Boss bobs, eyes follow you
    var bob = Math.sin(bbFrame * (0.05 + bbPhase * 0.02)) * (6 + bbPhase * 6);
    var nowY = bbBossBaseY + bob + bbBossOffsetY;
    moveShapes(bbBossParts, 0, nowY - bbBossY);
    bbBossY = nowY;      // where the boss is actually drawn right now
    var lookX = clamp((bbX - bbBossX) / 60, -3, 3), lookY = clamp((bbY - nowY) / 60, -3, 3);
    for (var pu = 0; pu < bbPupils.length; pu++) {
        // circles are positioned by their center, rectangles by their corner
        bbPupils[pu].setPosition(bbBossX + bbPupilBase[pu][0] + lookX, nowY + bbPupilBase[pu][1] + lookY);
    }
    bbAnimateDecor();

    // Victory explosion sequence
    if (bbWon > 0) {
        bbWon--;
        if (bbWon % 6 === 0) burst(bbBossX + rand(-50, 50), nowY + rand(-50, 50), 14, ["#facc15", "#f97316", "#ffffff", "#7c3aed"], 4, 0.1);
        if (bbWon === 0) { removeShapes(bbBossParts); bossGameOver(true); }
        return;
    }

    // ---- Player ----
    if (bbDash > 0) {
        bbDash--;
        bbX += bbFacing * 9;
        bbVY = 0;
    } else {
        var vx = (bbRight ? BB_SPEED : 0) - (bbLeft ? BB_SPEED : 0);
        if (vx !== 0) bbFacing = vx > 0 ? 1 : -1;
        bbX += vx;
        bbVY = Math.min(11, bbVY + BB_GRAVITY);
    }
    if (bbDashCd > 0) bbDashCd--;
    if (bbInvuln > 0) bbInvuln--;
    if (bbDropTimer > 0) bbDropTimer--;
    bbX = clamp(bbX, 12, 252);     // the boss's side of the arena is off-limits
    var prevFeet = bbY + 10;
    bbY += bbVY;
    var feet = bbY + 10;
    bbOnGround = false;
    if (feet >= BB_FLOOR) { bbY = BB_FLOOR - 10; bbVY = 0; bbOnGround = true; }
    else if (bbVY >= 0 && bbDropTimer === 0) {
        for (var p = 0; p < BB_PLATFORMS.length; p++) {
            var pl = BB_PLATFORMS[p];
            if (bbX > pl.x - 6 && bbX < pl.x + pl.w + 6 && prevFeet <= pl.y && feet >= pl.y) {
                bbY = pl.y - 10; bbVY = 0; bbOnGround = true;
            }
        }
    }
    bbPositionPlayer();

    // Touching the boss hurts
    var bdx = bbX - bbBossX, bdy = bbY - nowY;
    if (bdx * bdx + bdy * bdy < bbDef.hitR * bbDef.hitR) bbHurtPlayer();
    if (currentAppState !== "BOSS") return;

    // ---- Phase timer ----
    if (bbBreak > 0) {
        bbBreak--;
    } else {
        bbPhaseLeft--;
        if (bbPhaseLeft <= 0) {
            bbPhase++;
            bbClearBullets();
            bbAttacks = [];
            bbBossOffsetY = 0;
            if (bbPhase >= 3) {
                bbWon = 90;
                showBanner("KNOCKOUT!", "YOU OUTLASTED " + bbDef.name + "!");
                return;
            }
            bbPhaseLeft = bbPhaseLen;
            bbBreak = 90;
            bbBossBody.setColor(bbDef.colors[bbPhase]);
            bbBossBelly.setColor(bbDef.accents[bbPhase]);
            burst(bbBossX, nowY, 30, ["#ffffff", bbDef.colors[bbPhase], "#facc15"], 4.5, 0.1);
            showBanner(bbDef.phaseNames[bbPhase], null);
        }

        // Start new attacks
        if (bbAttacks.length === 0) {
            bbAttackTimer--;
            if (bbAttackTimer <= 0) {
                var list = bbDef.patterns[bbPhase];
                var pick = list[Math.floor(Math.random() * list.length)];
                if (pick === bbLastPattern) pick = list[(list.indexOf(pick) + 1) % list.length];
                bbStartPattern(pick);
                bbAttackTimer = Math.round((60 - bbPhase * 12) / bbSpeedMult);
            }
        }
    }
    for (var a = bbAttacks.length - 1; a >= 0; a--) {
        var at = bbAttacks[a];
        bbRunPattern(at);
        at.t++;
        if (at.t >= at.len) bbAttacks.splice(a, 1);
    }

    // Health bar shows how much of the fight is left
    var total = bbPhaseLen * 3;
    var left = (2 - bbPhase) * bbPhaseLen + bbPhaseLeft;
    var lit = Math.ceil(left / total * 30);
    for (var sgi = 0; sgi < bbBarSegs.length; sgi++) bbBarSegs[sgi].setColor(sgi < lit ? "#dc2626" : "#5a381c");

    // ---- Bullets ----
    for (var i = bbBullets.length - 1; i >= 0; i--) {
        var b = bbBullets[i];
        if (b.delay > 0) {
            b.delay--;
            b.warn.setColor(b.delay % 8 < 4 ? "#dc2626" : "#fde68a");
            if (b.delay === 0) remove(b.warn);
            continue;
        }
        b.vy += b.g;
        if (b.kind === "blob" && b.y + b.r >= BB_FLOOR && b.vy > 0) { b.vy = -8.2; }
        if (b.wob) { b.age++; b.vy = Math.cos(b.age * 0.12) * b.wob; }
        if (b.kind === "homing") {
            b.age++;
            if (b.age < 70) {
                // Turn a little toward the player each frame
                var want = Math.atan2(bbY - b.y, bbX - b.x), have = Math.atan2(b.vy, b.vx);
                var diffA = Math.atan2(Math.sin(want - have), Math.cos(want - have));
                have += clamp(diffA, -0.05, 0.05);
                var sp = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
                b.vx = Math.cos(have) * sp; b.vy = Math.sin(have) * sp;
            }
        }
        b.x += b.vx; b.y += b.vy;
        moveShapes(b.shapes, b.vx, b.vy);
        var dx = b.x - bbX, dy = b.y - bbY;
        var hitR = b.r + 6;
        if (dx * dx + dy * dy < hitR * hitR) { bbHurtPlayer(); if (currentAppState !== "BOSS") return; }
        if (b.x < -30 || b.x > 430 || b.y > 500 || b.y < -60) {
            removeShapes(b.shapes);
            bbBullets.splice(i, 1);
        }
    }

    // ---- Lasers: warn, then fire ----
    for (var l = bbLasers.length - 1; l >= 0; l--) {
        var lz = bbLasers[l];
        lz.t++;
        if (lz.t < 50) {
            lz.warn.setColor(lz.t % 8 < 4 ? "rgba(220,38,38,0.6)" : "rgba(220,38,38,0.2)");
        } else if (lz.t === 50) {
            remove(lz.warn);
            if (lz.style === "tentacle") {
                lz.beam = [addRect(30, BB_FLOOR - 50, lz.x - 15, 50, "#0f766e"), addRect(18, BB_FLOOR - 50, lz.x - 9, 50, bbDef.colors[bbPhase])];
                for (var sk = 0; sk < 6; sk++) lz.beam.push(addCircle(4, lz.x, 90 + sk * 55, "#99f6e4"));
            } else if (lz.style === "pillar") {
                lz.beam = [addRect(30, BB_FLOOR - 50, lz.x - 15, 50, "#dc2626"), addRect(18, BB_FLOOR - 50, lz.x - 9, 50, "#f97316"), addRect(6, BB_FLOOR - 50, lz.x - 3, 50, "#fde047")];
            } else {
                lz.beam = [addRect(30, BB_FLOOR - 50, lz.x - 15, 50, "#fde68a"), addRect(14, BB_FLOOR - 50, lz.x - 7, 50, "#ffffff")];
            }
        } else if (lz.t < 78) {
            if (Math.abs(bbX - lz.x) < 22) bbHurtPlayer();
            if (currentAppState !== "BOSS") return;
        } else {
            removeShapes(lz.beam);
            bbLasers.splice(l, 1);
        }
    }

    // ---- Horizontal beams: warn, then fire across one height ----
    for (var hl = bbHLasers.length - 1; hl >= 0; hl--) {
        var h = bbHLasers[hl], band = BB_BANDS[h.band];
        h.t++;
        if (h.t < 55) {
            h.warn.setColor(h.t % 8 < 4 ? "rgba(220,38,38,0.8)" : "rgba(220,38,38,0.25)");
        } else if (h.t === 55) {
            remove(h.warn);
            h.beam = [addRect(262, band.h, 0, band.y, "#fde68a"), addRect(262, band.h - 12, 0, band.y + 6, "#ffffff")];
        } else if (h.t < 80) {
            if (bbY > band.y - 4 && bbY < band.y + band.h + 4) bbHurtPlayer();
            if (currentAppState !== "BOSS") return;
        } else {
            removeShapes(h.beam);
            bbHLasers.splice(hl, 1);
        }
    }

    if (bbFrame % 40 === 0) bringToFront(bbParts.concat(bbGrain));
    if (bbFrame % 40 === 0) bringToFront(bbBarSegs.concat(bbHearts));
}

function bbClearBullets() {
    for (var i = 0; i < bbBullets.length; i++) {
        burst(bbBullets[i].x, bbBullets[i].y, 2, ["#fde68a"], 1, 0);
        removeShapes(bbBullets[i].shapes);
        if (bbBullets[i].warn && bbBullets[i].delay > 0) remove(bbBullets[i].warn);
    }
    bbBullets = [];
    for (var l = 0; l < bbLasers.length; l++) {
        if (bbLasers[l].warn) remove(bbLasers[l].warn);
        if (bbLasers[l].beam) removeShapes(bbLasers[l].beam);
    }
    bbLasers = [];
    for (var h = 0; h < bbHLasers.length; h++) {
        remove(bbHLasers[h].warn);
        if (bbHLasers[h].beam) removeShapes(bbHLasers[h].beam);
    }
    bbHLasers = [];
}

function bossGameOver(won) {
    currentAppState = "BOSS_OVER";
    stopTimer(bossGameLoop);
    if (won) {
        var prev = bbBossBestHits[bbDef.id];
        var newBest = prev === undefined || bbHits < prev;
        if (newBest) bbBossBestHits[bbDef.id] = bbHits;
        var beaten = 0;
        for (var bk in bbBossBestHits) if (bbBossBestHits[bk] !== undefined) beaten++;
        recordBest("BOSS", beaten);
        bbBestHits = bbBossBestHits[bbDef.id];
        var g = [];
        addRect(320, 260, 40, 110, "#2b1b0f", g);
        addText("KNOCKOUT!", "22pt Courier", "center", 150, "#facc15", g);
        addText("PILOT: " + playerName, "11pt Courier", 75, 185, "#fde68a", g);
        addText("HITS TAKEN: " + bbHits + "   PARRIES: " + bbParries, "10pt Courier", 75, 215, "#ffffff", g);
        addText(bbHits === 0 ? "NO-HIT RUN!!" : "BEST: " + bbBestHits + " HITS", "12pt Courier", 75, 242, "#fbbf24", g);
        makeButton("gomenu", 120, 305, 160, 40, "#10b981", "MAIN MENU", "12pt Courier", 26, g);
        popIn(g, 0, -420, 22, 0, function () { burst(110, 140, 30, CONFETTI, 4.5, 0.15); burst(290, 140, 30, CONFETTI, 4.5, 0.15); });
    } else {
        var total = bbPhaseLen * 3;
        var leftPct = Math.round(((2 - bbPhase) * bbPhaseLen + bbPhaseLeft) / total * 100);
        showGameOverCard("REACHED PHASE " + (bbPhase + 1) + " OF 3", "BOSS HAD " + leftPct + "% LEFT", false);
    }
}


// -------------------------------------------------------------
// RHYTHM RUSH ENGINE (dance-arrow game: hit the arrows on the beat)
// -------------------------------------------------------------
var RH_X = [110, 170, 230, 290];                 // lane centers: LEFT, DOWN, UP, RIGHT
var RH_COLORS = ["#f472b6", "#38bdf8", "#4ade80", "#f97316"];
var rhDancerX = 360, rhDancerY = 330;
var RH_DIRS = ["L", "D", "U", "R"];
var RH_RECEPT_Y = 92;
var RH_WINDOWS = {perfect: 2, great: 4, good: 7};  // how many frames early/late still counts
var RH_SONGS = {
    EASY: {name: "NEON NIGHTS", bpm: 100, beats: 96, speed: 4, seed: 11},
    MED:  {name: "PIXEL PULSE", bpm: 128, beats: 128, speed: 5, seed: 22},
    HARD: {name: "OVERDRIVE",   bpm: 150, beats: 150, speed: 6.2, seed: 33}
};

var rhSong = null;
var rhNotes = [];
var rhNextSpawn = 0;
var rhFrame = 0, rhBeatFrames = 30, rhStartFrame = 120, rhEndFrame = 0;
var rhScore = 0, rhCombo = 0, rhMaxCombo = 0, rhLife = 60;
var rhCounts = {perfect: 0, great: 0, good: 0, miss: 0};
var rhReceptors = [], rhFlash = [0, 0, 0, 0], rhLaneBgs = [], rhLifeSegs = [];
var rhScoreText, rhComboText, rhJudgeText, rhProgress;
var rhDancer = [], rhPose = -1, rhPoseTimer = 0, rhMissFace = 0;
var rhBestScore = 0;

// Arrow drawn from rectangles. Built pointing UP, then rotated for the other directions.
function rhArrowRects(dir) {
    var up = [[-12, -2, 24, 5], [-9, -6, 18, 4], [-6, -10, 12, 4], [-3, -14, 6, 4], [-5, 3, 10, 11]];
    var out = [];
    for (var i = 0; i < up.length; i++) {
        var r = up[i], x = r[0], y = r[1], w = r[2], h = r[3];
        if (dir === "U") out.push([x, y, w, h]);
        else if (dir === "D") out.push([x, -y - h, w, h]);
        else if (dir === "L") out.push([y, x, h, w]);
        else out.push([-y - h, x, h, w]);
    }
    return out;
}

function rhDrawArrow(cx, cy, lane, color, list) {
    var rects = rhArrowRects(RH_DIRS[lane]);
    var shapes = [];
    var i;
    for (i = 0; i < rects.length; i++) addRect(rects[i][2] + 4, rects[i][3] + 4, cx + rects[i][0] - 2, cy + rects[i][1] - 2, "#0b1020", shapes);
    for (i = 0; i < rects.length; i++) addRect(rects[i][2], rects[i][3], cx + rects[i][0], cy + rects[i][1], color, shapes);
    if (list) for (i = 0; i < shapes.length; i++) list.push(shapes[i]);
    return shapes;
}

// Make the "song": a seeded pattern of arrows, so each song is the same every time you play it
function rhBuildChart(song) {
    var R = makeRng(song.seed * 1009 + 7);
    var notes = [];
    var last = -1;
    var halfOK = song.bpm >= 128;
    for (var beat = 0; beat < song.beats; beat++) {
        var measurePos = beat % 16;
        if (beat < 4) continue;                              // short intro
        if (measurePos === 15 && R() < 0.5) continue;        // breathers
        var slots = (halfOK && R() < (song.bpm >= 150 ? 0.45 : 0.25)) ? [0, 0.5] : [0];
        for (var s = 0; s < slots.length; s++) {
            if (song.bpm < 110 && R() < 0.2) continue;
            var lane = Math.floor(R() * 4);
            if (lane === last) lane = (lane + 1 + Math.floor(R() * 3)) % 4;
            last = lane;
            var hitF = rhStartFrame + Math.round((beat + slots[s]) * rhBeatFrames);
            notes.push({lane: lane, hitF: hitF, shapes: null, y: 0, done: false});
            // Jumps: two arrows at once, on strong beats in harder songs
            if (slots[s] === 0 && beat % 4 === 0 && song.bpm >= 128 && R() < 0.3) {
                var lane2 = (lane + 2) % 4;
                notes.push({lane: lane2, hitF: hitF, shapes: null, y: 0, done: false});
            }
        }
    }
    notes.sort(function (a, b) { return a.hitF - b.hitF; });
    return notes;
}

function initRhythmGame(diff) {
    RH_COLORS = cust("RHYTHM", "arrows").set.slice();
    rhBestScore = Math.max(rhBestScore, bestScores.RHYTHM || 0);
    rhDancerX = 360; rhDancerY = 330;
    stopAllGameTimers();
    clearScreen();
    currentAppState = "RHYTHM";
    rhSong = RH_SONGS[diff];
    rhBeatFrames = 3000 / rhSong.bpm;      // 50 frames per second
    rhFrame = 0; rhNextSpawn = 0;
    rhScore = 0; rhCombo = 0; rhMaxCombo = 0; rhLife = 60;
    rhCounts = {perfect: 0, great: 0, good: 0, miss: 0};
    rhFlash = [0, 0, 0, 0]; rhPose = -1; rhPoseTimer = 0; rhMissFace = 0;
    rhNotes = rhBuildChart(rhSong);
    rhEndFrame = rhNotes[rhNotes.length - 1].hitF + 90;

    addRect(400, 480, 0, 0, "#0b1020");
    rhLaneBgs = [];
    for (var l = 0; l < 4; l++) {
        rhLaneBgs.push(addRect(56, 480, RH_X[l] - 28, 0, "#111a2e"));
    }
    addRect(240, 2, 80, RH_RECEPT_Y + 22, "#1e293b");
    rhReceptors = [];
    for (var r = 0; r < 4; r++) rhReceptors.push(rhDrawArrow(RH_X[r], RH_RECEPT_Y, r, "#334155"));

    // Life bar on the left
    addText("LIFE", "7pt Courier", 14, 120, "#94a3b8");
    addRect(20, 252, 14, 126, "#1e293b");
    rhLifeSegs = [];
    for (var s = 0; s < 20; s++) rhLifeSegs.push(addRect(14, 10, 17, 366 - s * 12.4, "#22c55e"));

    rhScoreText = addText("0", "13pt Courier", 14, 30, "#ffffff");
    nameTagBadge = addText(playerName, "8pt Courier", 14, 46, "#fbbf24");
    var title = addText(rhSong.name, "9pt Courier", 0, 30, "#a78bfa");
    title.setPosition(388 - title.getWidth(), 30);
    var bpm = addText(rhSong.bpm + " BPM", "8pt Courier", 0, 46, "#64748b");
    bpm.setPosition(388 - bpm.getWidth(), 46);
    rhComboText = addText("", "18pt Courier", "center", 260, "#ffffff");
    rhJudgeText = addText("", "13pt Courier", "center", 170, "#facc15");
    addRect(240, 4, 80, 468, "#1e293b");
    rhProgress = addRect(2, 4, 80, 468, "#a78bfa");
    addText("ARROW KEYS (OR D F J K)", "7pt Courier", "center", 462, "#475569");
    addMenuButton(330, 438);

    rhDrawDancer();
    showBanner(rhSong.name, "HIT THE ARROWS AS THEY REACH THE TOP");
    setTimer(rhythmGameLoop, 20);
}

// A little dancer on the right who strikes a pose for every arrow you hit
function rhDrawDancer() {
    rhDancer = [];
    addCircle(9, 0, 0, "#fde68a", rhDancer);        // 0 head
    addRect(12, 22, 0, 0, cust("RHYTHM", "outfit").color, rhDancer);     // 1 body
    addCircle(5, 0, 0, "#fde68a", rhDancer);        // 2 left hand
    addCircle(5, 0, 0, "#fde68a", rhDancer);        // 3 right hand
    addCircle(5, 0, 0, "#1f2937", rhDancer);        // 4 left foot
    addCircle(5, 0, 0, "#1f2937", rhDancer);        // 5 right foot
    // Face
    addRect(18, 5, 0, 0, cust("RHYTHM", "hair").color, rhDancer);      // 6 hair
    addRect(2, 3, 0, 0, "#1f2937", rhDancer);       // 7 left eye
    addRect(2, 3, 0, 0, "#1f2937", rhDancer);       // 8 right eye
    addRect(6, 2, 0, 0, "#9f1239", rhDancer);       // 9 smile
    addCircle(2.5, 0, 0, "#9f1239", rhDancer);      // 10 open mouth (singing / shocked)
    addCircle(2, 0, 0, "#fda4af", rhDancer);        // 11 left cheek
    addCircle(2, 0, 0, "#fda4af", rhDancer);        // 12 right cheek
    addCircle(2.5, 0, 0, "#7dd3fc", rhDancer);      // 13 sweat drop (after a miss)
    rhSetPose(-1);
}

function rhSetPose(p) {
    var x = rhDancerX, y = rhDancerY + ((p === 1) ? 8 : 0);
    var bounce = (Math.floor((rhFrame - rhStartFrame) / rhBeatFrames) % 2 === 0) ? 0 : 2;
    y += bounce;
    rhDancer[0].setPosition(x, y - 16);
    rhPlaceFace(x, y - 16, p);
    rhDancer[1].setPosition(x - 6, y - 6);
    var lh = [x - 16, y + 4], rh = [x + 16, y + 4], lf = [x - 8, y + 30], rf = [x + 8, y + 30];
    if (p === 0) { lh = [x - 30, y - 2]; lf = [x - 18, y + 28]; }
    else if (p === 1) { lh = [x - 18, y + 14]; rh = [x + 18, y + 14]; lf = [x - 14, y + 22]; rf = [x + 14, y + 22]; }
    else if (p === 2) { lh = [x - 12, y - 30]; rh = [x + 12, y - 30]; }
    else if (p === 3) { rh = [x + 30, y - 2]; rf = [x + 18, y + 28]; }
    rhDancer[2].setPosition(lh[0], lh[1]);
    rhDancer[3].setPosition(rh[0], rh[1]);
    rhDancer[4].setPosition(lf[0], lf[1]);
    rhDancer[5].setPosition(rf[0], rf[1]);
}

// Face follows the head. Hit = singing mouth, miss = shocked face with a sweat drop.
function rhPlaceFace(hx, hy, p) {
    var look = (p === 0) ? -2 : (p === 3 ? 2 : 0);
    var shocked = rhMissFace > 0;
    var singing = !shocked && p >= 0;
    var clear = "rgba(0,0,0,0)";
    rhDancer[6].setPosition(hx - 9, hy - 10);
    rhDancer[7].setPosition(hx - 4 + look, hy - (shocked ? 4 : 3));
    rhDancer[8].setPosition(hx + 2 + look, hy - (shocked ? 4 : 3));
    rhDancer[9].setPosition(hx - 3 + look, hy + 3);
    rhDancer[9].setColor(singing || shocked ? clear : "#9f1239");
    rhDancer[10].setPosition(hx + look, hy + 4);
    rhDancer[10].setColor(singing || shocked ? "#9f1239" : clear);
    rhDancer[11].setPosition(hx - 6, hy + 2);
    rhDancer[12].setPosition(hx + 6, hy + 2);
    rhDancer[11].setColor(shocked ? clear : "#fda4af");
    rhDancer[12].setColor(shocked ? clear : "#fda4af");
    rhDancer[13].setPosition(hx + 11, hy - 6 + (15 - rhMissFace) * 0.4);
    rhDancer[13].setColor(shocked ? "#7dd3fc" : clear);
    if (rhMissFace > 0) rhMissFace--;
}

function rhJudge(text, color) {
    rhJudgeText.setText(text);
    rhJudgeText.setColor(color);
    rhJudgeText.setPosition((400 - rhJudgeText.getWidth()) / 2, 170);
    bringToFront([rhJudgeText, rhComboText]);   // keep the text above the arrows
    popIn([rhJudgeText], 0, 10, 8);
}

function rhUpdateHud() {
    rhScoreText.setText("" + rhScore);
    if (rhCombo >= 4) {
        rhComboText.setText(rhCombo + " COMBO");
        rhComboText.setColor(rhCombo >= 50 ? "#facc15" : (rhCombo >= 20 ? "#4ade80" : "#ffffff"));
        rhComboText.setPosition((400 - rhComboText.getWidth()) / 2, 260);
    } else {
        rhComboText.setText("");
    }
    var lit = Math.ceil(rhLife / 100 * 20);
    for (var s = 0; s < rhLifeSegs.length; s++) {
        rhLifeSegs[s].setColor(s < lit ? (lit <= 5 ? "#ef4444" : (lit <= 10 ? "#facc15" : "#22c55e")) : "#334155");
    }
}

function rhythmKey(code) {
    var lane = -1;
    if (code == Keyboard.LEFT || code == 68) lane = 0;        // D
    else if (code == Keyboard.DOWN || code == 70) lane = 1;   // F
    else if (code == Keyboard.UP || code == 74) lane = 2;     // J
    else if (code == Keyboard.RIGHT || code == 75) lane = 3;  // K
    if (lane < 0) return;

    rhFlash[lane] = 6;
    for (var k = 0; k < rhReceptors[lane].length / 2; k++) rhReceptors[lane][k + rhReceptors[lane].length / 2].setColor(RH_COLORS[lane]);

    // Find the closest un-hit arrow in this lane
    var best = null, bestDiff = 999;
    for (var i = 0; i < rhNotes.length; i++) {
        var n = rhNotes[i];
        if (n.done || n.lane !== lane) continue;
        var diff = Math.abs(n.hitF - rhFrame);
        if (diff < bestDiff) { best = n; bestDiff = diff; }
        if (n.hitF - rhFrame > RH_WINDOWS.good) break;
    }
    if (!best || bestDiff > RH_WINDOWS.good) return;   // pressing with no arrow nearby is free

    var judge, pts, life, color;
    if (bestDiff <= RH_WINDOWS.perfect) { judge = "perfect"; pts = 300; life = 2; color = "#facc15"; }
    else if (bestDiff <= RH_WINDOWS.great) { judge = "great"; pts = 200; life = 1; color = "#4ade80"; }
    else { judge = "good"; pts = 100; life = 0; color = "#38bdf8"; }
    rhCounts[judge]++;
    rhCombo++;
    rhMaxCombo = Math.max(rhMaxCombo, rhCombo);
    rhScore += pts + Math.min(rhCombo, 100) * 2;
    rhLife = Math.min(100, rhLife + life);
    best.done = true;
    if (best.shapes) removeShapes(best.shapes);
    burst(RH_X[lane], RH_RECEPT_Y, judge === "perfect" ? 12 : 7, [RH_COLORS[lane], "#ffffff"], 3, 0.05);
    rhJudge(judge.toUpperCase() + "!", color);
    rhPose = lane; rhPoseTimer = 12;
    rhUpdateHud();
}

function rhythmGameLoop() {
    if (currentAppState !== "RHYTHM") return;
    rhFrame++;

    // Beat pulse on the lanes
    var sinceStart = rhFrame - rhStartFrame;
    var onBeat = sinceStart >= 0 && (sinceStart % rhBeatFrames) < 3;
    for (var l = 0; l < 4; l++) rhLaneBgs[l].setColor(onBeat ? "#16213a" : "#111a2e");

    // Release receptor flashes
    for (var r = 0; r < 4; r++) {
        if (rhFlash[r] > 0) {
            rhFlash[r]--;
            if (rhFlash[r] === 0) {
                var half = rhReceptors[r].length / 2;
                for (var k = 0; k < half; k++) rhReceptors[r][k + half].setColor("#334155");
            }
        }
    }

    // Spawn arrows that are about to come on screen (they start below the bottom edge)
    while (rhNextSpawn < rhNotes.length && (rhNotes[rhNextSpawn].hitF - rhFrame) * rhSong.speed < 420) {
        var ns = rhNotes[rhNextSpawn];
        ns.y = RH_RECEPT_Y + (ns.hitF - rhFrame) * rhSong.speed;
        ns.shapes = rhDrawArrow(RH_X[ns.lane], ns.y, ns.lane, RH_COLORS[ns.lane]);
        rhNextSpawn++;
    }

    // Move arrows and catch misses
    for (var i = 0; i < rhNextSpawn; i++) {
        var n = rhNotes[i];
        if (n.done) continue;
        var ny = RH_RECEPT_Y + (n.hitF - rhFrame) * rhSong.speed;
        moveShapes(n.shapes, 0, ny - n.y);
        n.y = ny;
        if (rhFrame - n.hitF > RH_WINDOWS.good) {
            n.done = true;
            removeShapes(n.shapes);
            rhCounts.miss++;
            rhCombo = 0;
            rhLife -= 8;
            rhJudge("MISS", "#ef4444");
            rhMissFace = 15;
            rhUpdateHud();
            if (rhLife <= 0) { rhythmGameOver(false); return; }
        }
    }

    if (rhPoseTimer > 0) { rhPoseTimer--; if (rhPoseTimer === 0) rhPose = -1; }
    rhSetPose(rhPose);

    var prog = clamp(rhFrame / rhEndFrame, 0, 1);
    rhProgress.setPosition(80 + prog * 236, 468);

    if (rhFrame >= rhEndFrame) rhythmGameOver(true);
}

function rhythmGameOver(cleared) {
    currentAppState = "RHYTHM_OVER";
    stopTimer(rhythmGameLoop);
    var total = rhCounts.perfect + rhCounts.great + rhCounts.good + rhCounts.miss;
    var acc = total > 0 ? (rhCounts.perfect + rhCounts.great * 0.7 + rhCounts.good * 0.4) / total : 0;
    var grade = !cleared ? "F" : (acc >= 0.95 ? "S" : (acc >= 0.85 ? "A" : (acc >= 0.7 ? "B" : (acc >= 0.55 ? "C" : "D"))));
    var newBest = cleared && rhScore > rhBestScore;
    if (newBest) rhBestScore = rhScore;
    recordBest("RHYTHM", rhScore);

    var g = [];
    addRect(320, 300, 40, 90, "#1f2937", g);
    addText(cleared ? "SONG CLEAR!" : "FAILED...", "18pt Courier", "center", 126, cleared ? "#4ade80" : "#ef4444", g);
    var gradeColor = {S: "#facc15", A: "#4ade80", B: "#38bdf8", C: "#a78bfa", D: "#fb923c", F: "#ef4444"}[grade];
    addText(grade, "40pt Courier", 70, 196, gradeColor, g);
    addText("SCORE " + rhScore, "11pt Courier", 140, 150, "#ffffff", g);
    addText("MAX COMBO " + rhMaxCombo, "10pt Courier", 140, 170, "#cbd5e1", g);
    addText("ACCURACY " + Math.round(acc * 100) + "%", "10pt Courier", 140, 190, "#cbd5e1", g);
    addText("PERFECT " + rhCounts.perfect, "9pt Courier", 75, 230, "#facc15", g);
    addText("GREAT   " + rhCounts.great, "9pt Courier", 75, 248, "#4ade80", g);
    addText("GOOD    " + rhCounts.good, "9pt Courier", 210, 230, "#38bdf8", g);
    addText("MISS    " + rhCounts.miss, "9pt Courier", 210, 248, "#ef4444", g);
    addText("BEST SCORE: " + rhBestScore, "10pt Courier", 75, 278, "#fbbf24", g);
    makeButton("gomenu", 120, 320, 160, 40, cleared ? "#10b981" : "#ef4444", "MAIN MENU", "12pt Courier", 26, g);
    popIn(g, 0, -420, 22, 0, function () {
        if (newBest || grade === "S") { burst(110, 120, 25, CONFETTI, 4.5, 0.15); burst(290, 120, 25, CONFETTI, 4.5, 0.15); }
    });
}


// =====================================================================
// NEON RUNTIME (from the Neon Edition arcade): effects, buttons, accounts,
// and the games Brick Breaker, Tank Arena, Trap Run and Asteroid Dodge.
// Those four games run on their own "scene / phase" system inside neonLoop().
// =====================================================================
var W = 400;
var H = 480;
var TICK = 20;
var scene = "HUB";
var phase = "PLAY";
var pausedFrom = "PLAY";
var frame = 0;
var bestScores = {};
var diffs = { ASTRO: "MED" };
var replayFn = null;
var keys = {};
var uiButtons = [];
var nParticles = [];
var popups = [];
var stars = [];
var hubIcons = [];
var menuTitle = null;
var flashRect = null, flashAlpha = 0, flashColor = "#ffffff";
var fadeRect = null, fadeAlpha = 0;
var overlay = null;
var pauseLayer = null;
var MAX_PARTICLES = 90;
var N_CONFETTI = ["#f43f5e", "#facc15", "#38bdf8", "#34d399", "#a855f7", "#fb923c", "#f472b6"];
var GAME_SCENES = ["BRICK", "TANK", "ASTRO"];
var MENU_SCENES = [];

// ---------------------------------------------------------------------
// PLAYER ACCOUNTS (saved in this browser with localStorage)
// ---------------------------------------------------------------------
var STORE_KEY = "codehsArcade_v2";
var isGuest = true;
var saveStatus = "GUEST - PROGRESS NOT SAVED";
var saveStatusColor = "#9ca3af";

function storageLoad() {
    try {
        if (typeof localStorage === "undefined" || !localStorage) return null;
        var raw = localStorage.getItem(STORE_KEY);
        var db = raw ? JSON.parse(raw) : { users: {} };
        if (!db || typeof db !== "object") db = { users: {} };
        if (!db.users) db.users = {};
        return db;
    } catch (e) {
        return null;
    }
}

function storageSave(db) {
    try {
        localStorage.setItem(STORE_KEY, JSON.stringify(db));
        return true;
    } catch (e) {
        return false;
    }
}

// Scrambles the password before it is saved. It's a lock for friends and
// family, not bank-level security, so never use a real password here.
function hashPassword(name, pw) {
    var s = name + "|" + pw + "|arcade-salt", h = 2166136261;
    for (var i = 0; i < s.length; i++) {
        h ^= s.charCodeAt(i);
        h = Math.imul(h, 16777619) >>> 0;
    }
    return h.toString(16);
}

function setStatus(text, color) { saveStatus = text; saveStatusColor = color; }

// Website only: read who signed in on the start page (arcade.html)
function siteLogin() {
    var s = null;
    try { s = JSON.parse(localStorage.getItem("arcadeSession") || "null"); } catch (e) { s = null; }
    if (!s || !s.name) return;
    playerName = String(s.name).toUpperCase().substring(0, 12);
    var db = storageLoad();
    var user = db ? db.users[playerName] : null;
    if (s.auth && user && user.pw === s.auth) {
        isGuest = false;
        applyProfile(user);
        setStatus("\u2713 LOGGED IN - PROGRESS SAVED", "#34d399");
    } else {
        setStatus("NO PASSWORD - PROGRESS NOT SAVED", "#9ca3af");
    }
}

function login() {
    isGuest = true;
    playerName = "GUEST";
    bestScores = {};
    setStatus("GUEST - PROGRESS NOT SAVED", "#9ca3af");
    // On the website the start page already asked for the name (and password), so no prompts here
    if (ON_WEBSITE) { siteLogin(); return; }

    var input = prompt("Enter your Player Name Tag:\n(Leave blank to play as a guest)");
    if (!input || input.trim() === "") return;
    var name = input.trim().toUpperCase().substring(0, 12);
    playerName = name;

    var db = storageLoad();
    if (!db) { setStatus("SAVING NOT AVAILABLE HERE", "#fb923c"); return; }

    var user = db.users[name];
    if (user) {
        var msg = "Welcome back, " + name + "!\nEnter your password:";
        for (var tries = 0; tries < 3; tries++) {
            var pw = prompt(msg);
            if (pw === null) break;
            if (hashPassword(name, pw) === user.pw) {
                isGuest = false;
                applyProfile(user);
                setStatus("\u2713 LOGGED IN - PROGRESS SAVED", "#34d399");
                return;
            }
            msg = "Wrong password for " + name + ".\nTry again (" + (2 - tries) + " left):";
        }
        playerName = "GUEST";
        setStatus("WRONG PASSWORD - PLAYING AS GUEST", "#f87171");
        return;
    }

    var pw1 = prompt("New player: " + name + "!\nCreate a password (don't use a real one):");
    if (pw1 === null || pw1 === "") { setStatus("NO PASSWORD - PROGRESS NOT SAVED", "#9ca3af"); return; }
    var pw2 = prompt("Type the password again to confirm:");
    if (pw2 !== pw1) { setStatus("PASSWORDS DIDN'T MATCH - NOT SAVED", "#f87171"); return; }

    db.users[name] = { pw: hashPassword(name, pw1), best: {}, prefs: {} };
    if (storageSave(db)) {
        isGuest = false;
        saveProfile();
        setStatus("\u2713 ACCOUNT CREATED - PROGRESS SAVED", "#34d399");
    } else {
        setStatus("SAVING NOT AVAILABLE HERE", "#fb923c");
    }
}

function applyProfile(user) {
    bestScores = {};
    var b = user.best || {};
    for (var k in b) bestScores[k] = b[k];
    var p = user.prefs || {};
    if (p.custom && typeof p.custom === "object") {
        customChoices = {};
        for (var g in p.custom) {
            if (!CUSTOM_DEFS[g]) continue;
            customChoices[g] = {};
            for (var key in p.custom[g]) {
                var idx = p.custom[g][key];
                if (typeof idx === "number") customChoices[g][key] = idx;
            }
        }
        // Throw away any saved choice that no longer fits its option list
        for (var g2 in customChoices) {
            var defs = CUSTOM_DEFS[g2];
            for (var d = 0; d < defs.length; d++) {
                var v = customChoices[g2][defs[d].key];
                if (v !== undefined && (v < 0 || v >= defs[d].options.length)) delete customChoices[g2][defs[d].key];
            }
        }
    }
    if (p.diffs && (p.diffs.ASTRO === "EASY" || p.diffs.ASTRO === "MED" || p.diffs.ASTRO === "HARD")) diffs.ASTRO = p.diffs.ASTRO;
    if (bestScores.TRAPLVL !== undefined) bestScores.TRAPLVL = clamp(Number(bestScores.TRAPLVL) || 1, 1, TROLL_LEVELS);
}

function saveProfile() {
    if (isGuest) return;
    var db = storageLoad();
    if (!db || !db.users[playerName]) return;
    var u = db.users[playerName];
    if (!u.best) u.best = {};
    delete u.best.TRAP;
    for (var k in bestScores) {
        if (!(u.best[k] >= bestScores[k])) u.best[k] = bestScores[k];
    }
    u.prefs = { custom: customChoices, diffs: { ASTRO: diffs.ASTRO } };
    storageSave(db);
}

// Our own games report their scores here so they get saved with the account
// and shown under the game's name on the hub.
function recordBest(key, score) {
    if (!(score > 0)) return;
    if (!(bestScores[key] >= score)) { bestScores[key] = score; saveProfile(); }
}

function randInt(a, b) { return Math.floor(a + Math.random() * (b - a + 1)); }
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function isIn(list, v) { return list.indexOf(v) >= 0; }

function toRgb(c) {
    if (c.charAt(0) === "#") {
        var hex = c.substring(1);
        if (hex.length === 3) {
            hex = hex.charAt(0) + hex.charAt(0) + hex.charAt(1) + hex.charAt(1) + hex.charAt(2) + hex.charAt(2);
        }
        var n = parseInt(hex, 16);
        return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
    }
    var m = c.match(/[\d.]+/g);
    return [Number(m[0]), Number(m[1]), Number(m[2])];
}

function rgba(c, a) {
    var v = toRgb(c);
    return "rgba(" + v[0] + "," + v[1] + "," + v[2] + "," + clamp(a, 0, 1).toFixed(3) + ")";
}

// amt > 0 lightens toward white, amt < 0 darkens toward black
function nShade(c, amt) {
    var v = toRgb(c);
    var out = [];
    for (var i = 0; i < 3; i++) {
        var x = amt < 0 ? v[i] * (1 + amt) : v[i] + (255 - v[i]) * amt;
        out.push(Math.round(clamp(x, 0, 255)));
    }
    return "rgb(" + out[0] + "," + out[1] + "," + out[2] + ")";
}

function mix(c1, c2, t) {
    var a = toRgb(c1), b = toRgb(c2);
    return "rgb(" + Math.round(a[0] + (b[0] - a[0]) * t) + "," +
                    Math.round(a[1] + (b[1] - a[1]) * t) + "," +
                    Math.round(a[2] + (b[2] - a[2]) * t) + ")";
}

function hsl(h, s, l) {
    return "hsl(" + Math.round(((h % 360) + 360) % 360) + "," + s + "%," + l + "%)";
}

function hearts(n) {
    var s = "";
    for (var i = 0; i < n; i++) s += "\u2665";
    return s === "" ? "-" : s;
}

// Shape builders (create + add in one line)
function mkRect(x, y, w, h, color) {
    var r = new Rectangle(w, h); r.setPosition(x, y); r.setColor(color); add(r); return r;
}
function mkCirc(x, y, r, color) {
    var c = new Circle(r); c.setPosition(x, y); c.setColor(color); add(c); return c;
}
function mkLine(x1, y1, x2, y2, w, color) {
    var l = new Line(x1, y1, x2, y2); l.setLineWidth(w); l.setColor(color); add(l); return l;
}
function mkText(s, x, y, font, color) {
    var t = new Text(s, font); t.setPosition(x, y); t.setColor(color); add(t); return t;
}
function mkCText(s, cx, y, font, color) {
    var t = new Text(s, font); t.setColor(color); t.setPosition(cx - t.getWidth() / 2, y); add(t); return t;
}
function mkRText(s, rx, y, font, color) {
    var t = new Text(s, font); t.setColor(color); t.setPosition(rx - t.getWidth(), y); add(t); return t;
}
function setCText(t, s, cx) { t.setText(s); t.setPosition(cx - t.getWidth() / 2, t.getY()); }
function setRText(t, s, rx) { t.setText(s); t.setPosition(rx - t.getWidth(), t.getY()); }
function toFront(o) { remove(o); add(o); }
function removeList(arr) { for (var i = 0; i < arr.length; i++) remove(arr[i]); }

function isLeft()  { return keys[37] || keys[65]; }
function isRight() { return keys[39] || keys[68]; }
function isUp()    { return keys[38] || keys[87]; }
function isDown()  { return keys[40] || keys[83]; }
function isJumpKey(k) { return k === 32 || k === 38 || k === 87; }

// ---------------------------------------------------------------------
// SCENE / EFFECT SYSTEM
// ---------------------------------------------------------------------
function nClearScene(keepKeys) {
    var saved = keys;
    stopAllGameTimers();
    clearScreen();
    if (keepKeys) keys = saved;
}

function circleHitsRect(cx, cy, r, rx, ry, rw, rh) {
    var nx = clamp(cx, rx, rx + rw), ny = clamp(cy, ry, ry + rh);
    var dx = cx - nx, dy = cy - ny;
    return dx * dx + dy * dy < r * r;
}

function fadeIn() {
    fadeAlpha = 1;
    fadeRect = mkRect(0, 0, W, H, "rgba(0,0,0,1)");
}

function updateFade() {
    if (!fadeRect) return;
    fadeAlpha -= 0.08;
    if (fadeAlpha <= 0) { remove(fadeRect); fadeRect = null; }
    else fadeRect.setColor("rgba(0,0,0," + fadeAlpha.toFixed(3) + ")");
}

function flash(color, a) {
    flashColor = color;
    flashAlpha = a;
    if (flashRect) toFront(flashRect);
    else flashRect = mkRect(0, 0, W, H, rgba(color, a));
    flashRect.setColor(rgba(color, a));
}

function updateFlash() {
    if (!flashRect) return;
    flashAlpha -= 0.05;
    if (flashAlpha <= 0) { remove(flashRect); flashRect = null; }
    else flashRect.setColor(rgba(flashColor, flashAlpha));
}

// --- Particles: little circles that fly, fall and shrink away
function spawnParticle(x, y, vx, vy, r, color, life, grav) {
    if (nParticles.length >= MAX_PARTICLES) {
        var old = nParticles.shift();
        remove(old.o);
    }
    var o = mkCirc(x, y, r, color);
    nParticles.push({ o: o, x: x, y: y, vx: vx, vy: vy, r: r, life: life, max: life, g: grav || 0 });
}

function nBurst(x, y, color, n, speed, grav, size) {
    for (var i = 0; i < n; i++) {
        var a = Math.random() * Math.PI * 2;
        var s = speed * (0.3 + Math.random() * 0.7);
        spawnParticle(x, y, Math.cos(a) * s, Math.sin(a) * s,
                      (size || 3) * (0.6 + Math.random() * 0.6), color, randInt(18, 34), grav || 0);
    }
}

function nUpdateParticles() {
    for (var i = nParticles.length - 1; i >= 0; i--) {
        var p = nParticles[i];
        p.life--;
        if (p.life <= 0) { remove(p.o); nParticles.splice(i, 1); continue; }
        p.vy += p.g;
        p.vx *= 0.97;
        p.x += p.vx;
        p.y += p.vy;
        p.o.setPosition(p.x, p.y);
        p.o.setRadius(Math.max(0.5, p.r * p.life / p.max));
    }
}

// --- Floating "+100" style text
function popup(s, x, y, color, font) {
    var t = mkCText(s, x, y, font || "bold 12pt Courier", color);
    popups.push({ t: t, life: 40, color: color });
}

function updatePopups() {
    for (var i = popups.length - 1; i >= 0; i--) {
        var p = popups[i];
        p.life--;
        if (p.life <= 0) { remove(p.t); popups.splice(i, 1); continue; }
        p.t.move(0, -0.9);
        if (p.life < 14) p.t.setColor(rgba(p.color, p.life / 14));
    }
}

// --- Animated starfield (menus)
function drawStarfield(bg) {
    mkRect(0, 0, W, H, bg);
    mkCirc(70, 130, 120, "rgba(99,102,241,0.10)");
    mkCirc(340, 380, 150, "rgba(236,72,153,0.08)");
    mkCirc(310, 80, 80, "rgba(56,189,248,0.08)");
    var tints = ["255,255,255", "186,230,253", "233,213,255"];
    for (var i = 0; i < 45; i++) {
        var layer = randInt(1, 3);
        var s = { x: rand(0, W), y: rand(0, H), speed: layer * 0.3, tw: rand(0, 6), tint: pick(tints) };
        s.o = mkCirc(s.x, s.y, layer * 0.6, "rgba(" + s.tint + ",0.8)");
        stars.push(s);
    }
}

function updateStars() {
    for (var i = 0; i < stars.length; i++) {
        var s = stars[i];
        s.y += s.speed;
        if (s.y > H + 3) { s.y = -3; s.x = rand(0, W); }
        s.o.setPosition(s.x, s.y);
        if (frame % 3 === i % 3) {
            var a = 0.35 + 0.65 * Math.abs(Math.sin(frame * 0.05 + s.tw));
            s.o.setColor("rgba(" + s.tint + "," + a.toFixed(2) + ")");
        }
    }
}

// --- Rainbow glowing title
function makeTitle(s, y, size) {
    var font = "bold " + size + "pt Courier";
    var shadow = mkCText(s, W / 2 + 3, y + 3, font, "#000000");
    var main = mkCText(s, W / 2, y, font, "#38bdf8");
    return { main: main, shadow: shadow, baseY: y };
}

function animateTitle(t) {
    var hue = frame * 2;
    var dy = Math.sin(frame * 0.06) * 3;
    t.main.setColor(hsl(hue, 90, 68));
    t.shadow.setColor(hsl(hue + 50, 85, 32));
    t.main.setPosition(t.main.getX(), t.baseY + dy);
    t.shadow.setPosition(t.shadow.getX(), t.baseY + dy + 3);
}

function drawPanel(x, y, w, h, accent) {
    mkRect(x + 6, y + 8, w, h, "rgba(0,0,0,0.45)");
    mkRect(x, y, w, h, "rgba(17,24,39,0.92)");
    mkRect(x, y, w, 4, accent);
    mkRect(x, y + h - 2, w, 2, nShade(accent, -0.4));
}


// ---------------------------------------------------------------------
// BUTTONS (one system for every screen = no more mismatched hitboxes)
// ---------------------------------------------------------------------
function nMakeButton(x, y, w, h, color, label, onClick, size, opts) {
    size = size || 12;
    var b = { x: x, y: y, w: w, h: h, color: color, label: label, onClick: onClick, hover: false, size: size, opts: opts || {} };
    b.shadow = mkRect(x, y + 4, w, h, nShade(color, -0.55));
    b.body = mkRect(x, y, w, h, color);
    b.shine = mkRect(x + 3, y + 3, w - 6, Math.max(2, Math.floor(h * 0.28)), "rgba(255,255,255,0.16)");
    b.txt = new Text(label, "bold " + size + "pt Courier");
    b.txt.setColor("#ffffff");
    add(b.txt);
    centerButtonText(b);
    uiButtons.push(b);
    return b;
}

function centerButtonText(b) {
    var o = b.opts, cx = o.textCx !== undefined ? o.textCx : b.w / 2;
    var ty = o.textY !== undefined ? o.textY : b.h / 2 + b.size * 0.45;
    b.txt.setPosition(b.x + cx - b.txt.getWidth() / 2, b.y + ty);
}

function nSetButtonLabel(b, label) {
    b.label = label;
    b.txt.setText(b.hover && !b.opts.noArrows ? "> " + label + " <" : label);
    centerButtonText(b);
}

function setHover(b, on) {
    if (b.hover === on) return;
    b.hover = on;
    b.body.setColor(on ? nShade(b.color, 0.22) : b.color);
    b.txt.setColor(on ? "#fef08a" : "#ffffff");
    nSetButtonLabel(b, b.label);
}

function moveButton(b, dy) {
    b.y += dy;
    b.shadow.move(0, dy); b.body.move(0, dy); b.shine.move(0, dy); b.txt.move(0, dy);
}

function removeButton(b) {
    remove(b.shadow); remove(b.body); remove(b.shine); remove(b.txt);
    var i = uiButtons.indexOf(b);
    if (i >= 0) uiButtons.splice(i, 1);
}

function inButton(b, x, y) {
    return x >= b.x && x <= b.x + b.w && y >= b.y && y <= b.y + b.h + 4;
}


// ---------------------------------------------------------------------
function nMouseMove(e) {
    var mx = e.getX(), my = e.getY();
    for (var i = 0; i < uiButtons.length; i++) setHover(uiButtons[i], inButton(uiButtons[i], mx, my));

    if (scene === "BRICK" && phase === "PLAY") {
        brPadX = clamp(mx - BR_PAD_W / 2, 4, W - 4 - BR_PAD_W);
    }
}

function nMouseClick(e) {
    var mx = e.getX(), my = e.getY();
    for (var i = uiButtons.length - 1; i >= 0; i--) {
        var b = uiButtons[i];
        if (inButton(b, mx, my)) {
            nBurst(mx, my, b.color, 10, 3, 0, 2.5);
            b.onClick();
            return;
        }
    }
    if (phase === "PAUSED") return;
    if (scene === "BRICK") brickLaunch();
}

function nKeyDown(e) {
    var k = e.keyCode;
    if (isIn([32, 37, 38, 39, 40], k) && e.preventDefault) e.preventDefault();
    var repeat = keys[k] === true;
    keys[k] = true;

    if (k === 81 || k === 80 || k === 27) { nTogglePause(); return; }   // Q, P, ESC
    if (phase === "PAUSED") return;
    if (k === 13 && phase === "OVER" && replayFn) { replayFn(); return; } // ENTER = play again

    if (scene === "BRICK") {
        if (k === 32 || k === 38 || k === 87) brickLaunch();
    } else if (scene === "TANK" && phase === "PLAY") {
        if (k === 37 || k === 65) tk.dir = "left";
        else if (k === 39 || k === 68) tk.dir = "right";
        else if (k === 38 || k === 87) tk.dir = "up";
        else if (k === 40 || k === 83) tk.dir = "down";
        if (k === 32) fireTank();
    }
}

function nKeyUp(e) {
    var k = e.keyCode;
    keys[k] = false;
    // Variable jump height: let go early = shorter hop
}


// ---------------------------------------------------------------------
// ARCADE HUB
function drawHubIcon(key, x, y) {
    var o = [];
    if (key === "FLAPPY") {
        o.push(mkCirc(x, y, 10, "#facc15"));
        o.push(mkRect(x - 11, y, 8, 5, "#ca8a04"));
        o.push(mkCirc(x + 4, y - 3, 3.5, "#ffffff"));
        o.push(mkRect(x + 7, y, 8, 4, "#f97316"));
    } else if (key === "PONG") {
        o.push(mkRect(x - 12, y - 9, 4, 18, "#38bdf8"));
        o.push(mkRect(x + 8, y - 9, 4, 18, "#f43f5e"));
        o.push(mkCirc(x, y + 2, 3.5, "#facc15"));
    } else if (key === "SNAKE") {
        o.push(mkRect(x - 13, y + 1, 7, 7, "#047857"));
        o.push(mkRect(x - 6, y + 1, 7, 7, "#059669"));
        o.push(mkRect(x + 1, y - 6, 7, 7, "#059669"));
        o.push(mkRect(x + 1, y + 1, 7, 7, "#059669"));
        o.push(mkRect(x + 8, y - 6, 8, 8, "#34d399"));
        o.push(mkRect(x + 12, y - 4, 2, 2, "#000000"));
    } else if (key === "ASTRO") {
        o.push(mkCirc(x - 6, y + 3, 9, "#475569"));
        o.push(mkCirc(x - 6, y + 2, 8, "#cbd5e1"));
        o.push(mkCirc(x - 6, y - 2, 4, "#38bdf8"));
        o.push(mkCirc(x + 9, y - 8, 6, "#78716c"));
        o.push(mkCirc(x + 8, y - 9, 1.6, "#57534e"));
    } else if (key === "TANK") {
        o.push(mkRect(x - 11, y - 9, 22, 4, "#1e293b"));
        o.push(mkRect(x - 11, y + 5, 22, 4, "#1e293b"));
        o.push(mkRect(x - 9, y - 6, 18, 12, "#f59e0b"));
        o.push(mkRect(x, y - 2, 13, 4, "#fde68a"));
        o.push(mkCirc(x, y, 4.5, "#b45309"));
    } else if (key === "PARKOUR") {
        o.push(mkCirc(x, y - 10, 4, "#22d3ee"));
        o.push(mkLine(x, y - 6, x, y + 3, 2, "#22d3ee"));
        o.push(mkLine(x - 7, y - 4, x + 7, y - 2, 2, "#22d3ee"));
        o.push(mkLine(x, y + 3, x - 6, y + 11, 2, "#22d3ee"));
        o.push(mkLine(x, y + 3, x + 6, y + 10, 2, "#22d3ee"));
    } else if (key === "DINO") {
        o.push(mkRect(x - 14, y, 6, 4, "#15803d"));
        o.push(mkRect(x - 9, y - 3, 14, 10, "#22c55e"));
        o.push(mkRect(x + 1, y - 11, 11, 8, "#22c55e"));
        o.push(mkRect(x + 8, y - 9, 2, 2, "#ffffff"));
        o.push(mkRect(x - 6, y - 6, 3, 3, "#f97316"));
        o.push(mkRect(x - 6, y + 7, 3, 4, "#15803d"));
        o.push(mkRect(x + 1, y + 7, 3, 4, "#15803d"));
    } else if (key === "BLOCKS") {
        var bc = ["#22d3ee", "#facc15", "#a855f7", "#22c55e"];
        o.push(mkRect(x - 12, y - 10, 7, 7, bc[0])); o.push(mkRect(x - 12, y - 3, 7, 7, bc[0])); o.push(mkRect(x - 12, y + 4, 7, 7, bc[0]));
        o.push(mkRect(x - 4, y + 4, 7, 7, bc[1])); o.push(mkRect(x + 3, y + 4, 7, 7, bc[1])); o.push(mkRect(x - 4, y - 3, 7, 7, bc[1]));
        o.push(mkRect(x + 3, y - 3, 7, 7, bc[2])); o.push(mkRect(x + 10, y - 3, 7, 7, bc[2])); o.push(mkRect(x + 10, y + 4, 7, 7, bc[3]));
    } else if (key === "BLASTER") {
        o.push(mkRect(x - 10, y + 2, 20, 4, "#64748b"));
        o.push(mkRect(x - 4, y - 8, 8, 14, "#e2e8f0"));
        o.push(mkCirc(x, y - 8, 4, "#e2e8f0"));
        o.push(mkRect(x - 1, y - 16, 2, 6, "#67e8f9"));
        o.push(mkRect(x - 12, y - 14, 10, 6, "#ef4444"));
    } else if (key === "BRICK") {
        var rc = ["#ef4444", "#f97316", "#facc15"];
        for (var br = 0; br < 3; br++) for (var bc2 = 0; bc2 < 3; bc2++) o.push(mkRect(x - 14 + bc2 * 10, y - 12 + br * 6, 9, 5, rc[br]));
        o.push(mkRect(x - 8, y + 10, 16, 3, "#38bdf8"));
        o.push(mkCirc(x, y + 5, 3, "#ffffff"));
    } else if (key === "G2048") {
        o.push(mkRect(x - 13, y - 13, 12, 12, "#eee4da")); o.push(mkRect(x + 1, y - 13, 12, 12, "#f2b179"));
        o.push(mkRect(x - 13, y + 1, 12, 12, "#f59563")); o.push(mkRect(x + 1, y + 1, 12, 12, "#edc22e"));
    } else if (key === "TOWER") {
        o.push(mkRect(x - 12, y - 4, 24, 14, "#4b5563"));
        o.push(mkRect(x - 12, y - 10, 6, 6, "#4b5563")); o.push(mkRect(x - 3, y - 10, 6, 6, "#4b5563")); o.push(mkRect(x + 6, y - 10, 6, 6, "#4b5563"));
        o.push(mkRect(x - 3, y, 6, 10, "#1f2937"));
        o.push(mkCirc(x + 11, y - 12, 4, "#ef4444"));
    } else if (key === "BOSS") {
        o.push(mkCirc(x, y + 1, 12, "#7c3aed"));
        o.push(mkCirc(x - 4, y - 2, 3, "#ffffff")); o.push(mkCirc(x + 4, y - 2, 3, "#ffffff"));
        o.push(mkCirc(x - 4, y - 2, 1.5, "#000000")); o.push(mkCirc(x + 4, y - 2, 1.5, "#000000"));
        o.push(mkRect(x - 8, y - 14, 16, 4, "#facc15"));
        o.push(mkRect(x - 5, y + 5, 10, 2, "#2b1b0f"));
    } else if (key === "RHYTHM") {
        var ac = ["#f472b6", "#38bdf8", "#4ade80", "#f97316"];
        for (var ai = 0; ai < 4; ai++) { o.push(mkRect(x - 14 + ai * 8, y - 2, 5, 10, ac[ai])); o.push(mkRect(x - 15 + ai * 8, y - 6, 7, 4, ac[ai])); }
    } else if (key === "TRAP") {
        o.push(mkRect(x - 6, y - 11, 3, 4, "#7c2d12"));
        o.push(mkRect(x + 3, y - 11, 3, 4, "#7c2d12"));
        o.push(mkRect(x - 7, y - 7, 14, 14, "#fb923c"));
        o.push(mkRect(x - 4, y - 3, 3, 4, "#ffffff"));
        o.push(mkRect(x + 1, y - 3, 3, 4, "#ffffff"));
        o.push(mkRect(x - 11, y + 9, 22, 2, "#e5e7eb"));
    }
    return o;
}

function bestFor(key) {
    if (key === "TRAP") return bestScores.TRAPLVL ? bestScores.TRAPLVL : null;
    var best = null;
    for (var k in bestScores) {
        var match = k.indexOf(key + "_") === 0 || k === key ||
                    (key === "PONG" && (k.indexOf("BRICK") === 0));
        if (match && (best === null || bestScores[k] > best)) best = bestScores[k];
    }
    return best;
}
function startMenuScene(name, title, accent) {
    nClearScene();
    scene = name; phase = "PLAY";
    drawStarfield("#05050f");
    drawPanel(40, 80, 320, 340, accent);
    menuTitle = makeTitle(title, 122, 16);
}

function updateMenu() {
    updateStars();
    if (menuTitle) animateTitle(menuTitle);
}
// =====================================================================
var BR_PAD_W = 78, BR_PAD_Y = 420, BR_R = 7, BR_TOP = 50;
var brPad, brPadGlow, brPadShine, brBall, brCore, brTrail, brHist, brBricks;
var brX, brY, brVX, brVY, brSpeed, brScore, brLives, brScoreTxt, brLivesTxt, brLaunched, brCombo, brHint, brPadX, brPulse;

function initBrickBreakerGame() {
    nClearScene();
    scene = "BRICK"; phase = "PLAY"; replayFn = initBrickBreakerGame;

    mkRect(0, 0, W, H, "#05050f");
    for (var s = 0; s < 35; s++) mkCirc(rand(0, W), rand(BR_TOP, H), rand(0.5, 1.3), "rgba(255,255,255," + rand(0.15, 0.5).toFixed(2) + ")");
    mkCirc(200, 470, 160, "rgba(236,72,153,0.06)");

    var rowColors = ["#94a3b8", "#ef4444", "#f97316", "#facc15", "#10b981", "#6366f1"];
    brBricks = [];
    for (var r = 0; r < 6; r++) {
        for (var c = 0; c < 8; c++) {
            var b = { x: 17 + c * 46, y: 68 + r * 22, w: 44, h: 16, hp: r === 0 ? 2 : 1, color: rowColors[r], alive: true };
            b.body = mkRect(b.x, b.y, b.w, b.h, b.color);
            b.shine = mkRect(b.x + 2, b.y + 2, b.w - 4, 3, "rgba(255,255,255,0.35)");
            b.edge = mkRect(b.x, b.y + b.h - 3, b.w, 3, nShade(b.color, -0.35));
            brBricks.push(b);
        }
    }

    brPadX = W / 2 - BR_PAD_W / 2;
    brPadGlow = mkRect(brPadX - 6, BR_PAD_Y - 6, BR_PAD_W + 12, 26, "rgba(236,72,153,0.22)");
    brPad = mkRect(brPadX, BR_PAD_Y, BR_PAD_W, 14, "#ec4899");
    brPadShine = mkRect(brPadX + 3, BR_PAD_Y + 2, BR_PAD_W - 6, 3, "rgba(255,255,255,0.45)");

    brTrail = []; brHist = [];
    for (var i = 0; i < 6; i++) brTrail.push(mkCirc(-50, -50, 6 - i * 0.8, "rgba(56,189,248," + (0.35 * (1 - i / 6)).toFixed(2) + ")"));
    brBall = mkCirc(-50, -50, BR_R, "#38bdf8");
    brCore = mkCirc(-50, -50, 3, "#e0f2fe");

    mkRect(0, 0, W, BR_TOP - 6, "#0b0b1e");
    mkRect(0, BR_TOP - 6, W, 2, "#ec4899");
    brScoreTxt = mkText("SCORE 0", 12, 28, "bold 12pt Courier", "#ffffff");
    brLivesTxt = mkRText(hearts(3), W - 12, 28, "bold 14pt Courier", "#ef4444");
    mkCText(playerName, W / 2, 28, "9pt Courier", "#fbbf24");
    brHint = mkCText("SPACE / CLICK TO LAUNCH", W / 2, 380, "bold 10pt Courier", "#f9a8d4");

    brSpeed = 4.4; brLaunched = false; brCombo = 0; brScore = 0; brLives = 3; brPulse = 0;
    fadeIn();
}

function brickLaunch() {
    if (scene !== "BRICK" || phase !== "PLAY" || brLaunched) return;
    brLaunched = true;
    var a = rand(-0.5, 0.5);
    brVX = brSpeed * Math.sin(a);
    brVY = -brSpeed * Math.cos(a);
    brHint.setText("");
}

function updateBrick() {
    if (phase !== "PLAY") return;

    if (isLeft()) brPadX -= 8;
    if (isRight()) brPadX += 8;
    brPadX = clamp(brPadX, 4, W - 4 - BR_PAD_W);
    if (brPulse > 0) brPulse--;
    brPad.setPosition(brPadX, BR_PAD_Y);
    brPadShine.setPosition(brPadX + 3, BR_PAD_Y + 2);
    brPadGlow.setSize(BR_PAD_W + 12 + brPulse * 2, 26 + brPulse);
    brPadGlow.setPosition(brPadX - 6 - brPulse, BR_PAD_Y - 6 - brPulse / 2);

    if (!brLaunched) {
        brX = brPadX + BR_PAD_W / 2;
        brY = BR_PAD_Y - BR_R - 1;
        brHist = [];
        brHint.setColor(frame % 30 < 15 ? "#f9a8d4" : "#ec4899");
        placeBrickBall();
        return;
    }

    brX += brVX; brY += brVY;

    if (brX - BR_R < 4) { brX = 4 + BR_R; brVX = Math.abs(brVX); }
    if (brX + BR_R > W - 4) { brX = W - 4 - BR_R; brVX = -Math.abs(brVX); }
    if (brY - BR_R < BR_TOP) { brY = BR_TOP + BR_R; brVY = Math.abs(brVY); }

    // Paddle (only when falling)
    if (brVY > 0 && brY + BR_R >= BR_PAD_Y && brY + BR_R <= BR_PAD_Y + 14 + brVY &&
        brX >= brPadX - BR_R && brX <= brPadX + BR_PAD_W + BR_R) {
        brY = BR_PAD_Y - BR_R;
        var off = clamp((brX - (brPadX + BR_PAD_W / 2)) / (BR_PAD_W / 2), -1, 1);
        var a = off * 1.05;
        brVX = brSpeed * Math.sin(a);
        brVY = -brSpeed * Math.cos(a);
        brCombo = 0;
        brPulse = 6;
        nBurst(brX, BR_PAD_Y, "#f9a8d4", 6, 2.5);
    }

    // Bricks: one hit per frame, bounce off the side we actually hit
    for (var i = 0; i < brBricks.length; i++) {
        var b = brBricks[i];
        if (!b.alive || !circleHitsRect(brX, brY, BR_R, b.x, b.y, b.w, b.h)) continue;

        var overlapX = Math.min(brX + BR_R - b.x, b.x + b.w - (brX - BR_R));
        var overlapY = Math.min(brY + BR_R - b.y, b.y + b.h - (brY - BR_R));
        if (overlapX < overlapY) brVX = (brX < b.x + b.w / 2) ? -Math.abs(brVX) : Math.abs(brVX);
        else brVY = (brY < b.y + b.h / 2) ? -Math.abs(brVY) : Math.abs(brVY);

        b.hp--;
        brCombo++;
        if (b.hp > 0) {
            b.body.setColor("#475569");
            nBurst(brX, brY, "#cbd5e1", 6, 2.5);
            brScore += 50;
            popup("+50", b.x + b.w / 2, b.y, "#cbd5e1", "bold 9pt Courier");
        } else {
            b.alive = false;
            remove(b.body); remove(b.shine); remove(b.edge);
            nBurst(b.x + b.w / 2, b.y + b.h / 2, b.color, 14, 3.5, 0.12, 3);
            var pts = 100 * brCombo;
            brScore += pts;
            popup(brCombo > 1 ? "+" + pts + " x" + brCombo : "+" + pts, b.x + b.w / 2, b.y, b.color, "bold 10pt Courier");
            brSpeed = Math.min(8.5, brSpeed * 1.015);
            var cur = Math.sqrt(brVX * brVX + brVY * brVY);
            brVX = brVX / cur * brSpeed;
            brVY = brVY / cur * brSpeed;
        }
        brScoreTxt.setText("SCORE " + brScore);
        break;
    }

    // Lost the ball
    if (brY - BR_R > H) {
        brLives--;
        setRText(brLivesTxt, hearts(brLives), W - 12);
        flash("#ef4444", 0.4);
        nBurst(brX, H - 5, "#38bdf8", 14, 4);
        if (brLives <= 0) {
            showGameOver({ title: "GAME OVER", color: "#ef4444", score: brScore, key: "BRICK",
                           lines: [["BRICKS LEFT: " + bricksLeft(), "#e5e7eb"]] });
            return;
        }
        brLaunched = false;
        brCombo = 0;
        brSpeed = Math.max(4.4, brSpeed * 0.9);
        brHint.setText("SPACE / CLICK TO LAUNCH");
        return;
    }

    if (bricksLeft() === 0) {
        flash("#ffffff", 0.6);
        var bonus = brLives * 500;
        showGameOver({ title: "ALL CLEAR!", color: "#34d399", score: brScore + bonus, key: "BRICK", win: true,
                       lines: [["LIVES BONUS: +" + bonus, "#fbbf24"]] });
        return;
    }

    brHist.unshift({ x: brX, y: brY });
    if (brHist.length > brTrail.length) brHist.pop();
    placeBrickBall();
}

function placeBrickBall() {
    for (var i = 0; i < brTrail.length; i++) {
        var h = brHist.length ? brHist[Math.min(i, brHist.length - 1)] : { x: brX, y: brY };
        brTrail[i].setPosition(h.x, h.y);
    }
    brBall.setPosition(brX, brY);
    brCore.setPosition(brX - 1.5, brY - 1.5);
}

function bricksLeft() {
    var n = 0;
    for (var i = 0; i < brBricks.length; i++) if (brBricks[i].alive) n++;
    return n;
}


// =====================================================================
// TANK ARENA
// =====================================================================
var TANK_TOP = 60;
var tk = { x: 200, y: 260, dir: "right", inv: 0, cool: 0, tread: 0, flash: 0 };
var tkTrackL, tkTrackR, tkTreadsL, tkTreadsR, tkHull, tkHullTop, tkTurret, tkBarrel, tkMuzzle;
var tankBullets, tankEnemies, tankEnemyBullets, tankScore, tankLives, tankKills, tankSpawn;
var tankScoreTxt, tankLivesTxt, tankHud;
function initTankGame() {
    nClearScene();
    scene = "TANK"; phase = "PLAY"; replayFn = initTankGame;

    tk = { x: 200, y: 270, dir: "right", inv: 60, cool: 0, tread: 0, flash: 0 };
    tankBullets = []; tankEnemies = []; tankEnemyBullets = [];
    tankScore = 0; tankLives = 3; tankKills = 0; tankSpawn = 0;

    mkRect(0, 0, W, H, "#06060f");
    for (var gx = 0; gx <= W; gx += 40) mkLine(gx, TANK_TOP, gx, H, 1, "rgba(245,158,11,0.07)");
    for (var gy = TANK_TOP; gy <= H; gy += 40) mkLine(0, gy, W, gy, 1, "rgba(245,158,11,0.07)");
    mkCirc(200, 270, 150, "rgba(245,158,11,0.04)");
    mkRect(0, TANK_TOP, W, 2, "rgba(245,158,11,0.6)");
    mkRect(0, H - 2, W, 2, "rgba(245,158,11,0.6)");
    mkRect(0, TANK_TOP, 2, H - TANK_TOP, "rgba(245,158,11,0.6)");
    mkRect(W - 2, TANK_TOP, 2, H - TANK_TOP, "rgba(245,158,11,0.6)");

    tkTrackL = mkRect(0, 0, 28, 6, "#0f172a");
    tkTrackR = mkRect(0, 0, 28, 6, "#0f172a");
    tkTreadsL = []; tkTreadsR = [];
    for (var i = 0; i < 3; i++) {
        tkTreadsL.push(mkRect(0, 0, 3, 6, "#475569"));
        tkTreadsR.push(mkRect(0, 0, 3, 6, "#475569"));
    }
    tkHull = mkRect(0, 0, 22, 18, "#38bdf8");
    tkHullTop = mkRect(0, 0, 22, 4, "#7dd3fc");
    tkBarrel = mkRect(0, 0, 14, 6, "#facc15");
    tkTurret = mkCirc(0, 0, 8, "#0284c7");
    tkMuzzle = mkCirc(0, 0, 6, "rgba(0,0,0,0)");
    placeTank();

    mkRect(0, 0, W, TANK_TOP, "#0b0b1e");
    tankScoreTxt = mkText("SCORE 0", 12, 26, "bold 12pt Courier", "#34d399");
    tankLivesTxt = mkRText(hearts(3), W - 12, 26, "bold 14pt Courier", "#ef4444");
    var badge = mkText(playerName + " \u00b7 TANK ARENA", 12, 48, "9pt Courier", "#fbbf24");
    var hint = mkRText("MOVE: WASD  FIRE: SPACE", W - 12, 48, "8pt Courier", "#9ca3af");
    tankHud = [tankScoreTxt, tankLivesTxt, badge, hint];
    fadeIn();
}

function placeTank() {
    var x = tk.x, y = tk.y, i, off;
    var horiz = tk.dir === "left" || tk.dir === "right";
    if (horiz) {
        tkTrackL.setSize(28, 6); tkTrackL.setPosition(x - 14, y - 14);
        tkTrackR.setSize(28, 6); tkTrackR.setPosition(x - 14, y + 8);
        for (i = 0; i < 3; i++) {
            off = (i * 10 + tk.tread) % 27;
            tkTreadsL[i].setSize(3, 6); tkTreadsL[i].setPosition(x - 14 + off, y - 14);
            tkTreadsR[i].setSize(3, 6); tkTreadsR[i].setPosition(x - 14 + off, y + 8);
        }
        tkHull.setSize(22, 18); tkHull.setPosition(x - 11, y - 9);
        tkHullTop.setSize(22, 4); tkHullTop.setPosition(x - 11, y - 9);
    } else {
        tkTrackL.setSize(6, 28); tkTrackL.setPosition(x - 14, y - 14);
        tkTrackR.setSize(6, 28); tkTrackR.setPosition(x + 8, y - 14);
        for (i = 0; i < 3; i++) {
            off = (i * 10 + tk.tread) % 27;
            tkTreadsL[i].setSize(6, 3); tkTreadsL[i].setPosition(x - 14, y - 14 + off);
            tkTreadsR[i].setSize(6, 3); tkTreadsR[i].setPosition(x + 8, y - 14 + off);
        }
        tkHull.setSize(18, 22); tkHull.setPosition(x - 9, y - 11);
        tkHullTop.setSize(18, 4); tkHullTop.setPosition(x - 9, y - 11);
    }

    if (tk.dir === "right") { tkBarrel.setSize(16, 6); tkBarrel.setPosition(x, y - 3); tkMuzzle.setPosition(x + 19, y); }
    else if (tk.dir === "left") { tkBarrel.setSize(16, 6); tkBarrel.setPosition(x - 16, y - 3); tkMuzzle.setPosition(x - 19, y); }
    else if (tk.dir === "up") { tkBarrel.setSize(6, 16); tkBarrel.setPosition(x - 3, y - 16); tkMuzzle.setPosition(x, y - 19); }
    else { tkBarrel.setSize(6, 16); tkBarrel.setPosition(x - 3, y); tkMuzzle.setPosition(x, y + 19); }
    tkTurret.setPosition(x, y);

    var blink = tk.inv > 0 && frame % 8 < 4;
    tkHull.setColor(blink ? "#f8fafc" : "#38bdf8");
    tkMuzzle.setColor(tk.flash > 0 ? "rgba(253,224,71,0.95)" : "rgba(0,0,0,0)");
}

function fireTank() {
    if (tk.cool > 0 || phase !== "PLAY") return;
    tk.cool = 9;
    tk.flash = 3;
    var vx = 0, vy = 0, w = 10, h = 4, bx, by;
    if (tk.dir === "right") { vx = 12; bx = tk.x + 16; by = tk.y - 2; }
    else if (tk.dir === "left") { vx = -12; bx = tk.x - 26; by = tk.y - 2; }
    else if (tk.dir === "up") { vy = -12; w = 4; h = 10; bx = tk.x - 2; by = tk.y - 26; }
    else { vy = 12; w = 4; h = 10; bx = tk.x - 2; by = tk.y + 16; }
    var o = mkRect(bx, by, w, h, "#fde047");
    tankBullets.push({ o: o, x: bx, y: by, w: w, h: h, vx: vx, vy: vy });
    spawnParticle(bx + w / 2, by + h / 2, -vx * 0.05 + rand(-0.5, 0.5), -vy * 0.05 + rand(-0.5, 0.5), 3, "rgba(148,163,184,0.7)", 16, 0);
}

function spawnEnemy() {
    var r = Math.random(), type = "BASIC";
    if (tankScore >= 2000 && r < 0.2) type = "HEAVY";
    else if (tankScore >= 800 && r < 0.45) type = "FAST";

    var e;
    if (type === "BASIC") e = { size: 22, color: "#f43f5e", speed: 1.2, hp: 1, fire: 90, pts: 100 };
    else if (type === "FAST") e = { size: 18, color: "#a855f7", speed: 2.0, hp: 1, fire: 120, pts: 150 };
    else e = { size: 28, color: "#f97316", speed: 0.8, hp: 3, fire: 70, pts: 300 };

    var side = randInt(0, 3);
    if (side === 0) { e.x = 20; e.y = rand(TANK_TOP + 20, H - 20); }
    else if (side === 1) { e.x = W - 20; e.y = rand(TANK_TOP + 20, H - 20); }
    else if (side === 2) { e.x = rand(20, W - 20); e.y = TANK_TOP + 20; }
    else { e.x = rand(20, W - 20); e.y = H - 20; }

    var s = e.size;
    e.timer = randInt(0, 40);
    e.hit = 0;
    e.shadow = mkRect(e.x - s / 2 + 3, e.y - s / 2 + 3, s, s, "rgba(0,0,0,0.4)");
    e.body = mkRect(e.x - s / 2, e.y - s / 2, s, s, e.color);
    e.top = mkRect(e.x - s / 2, e.y - s / 2, s, 4, nShade(e.color, 0.3));
    e.barrel = mkLine(e.x, e.y, e.x + s * 0.7, e.y, 4, nShade(e.color, -0.5));
    e.turret = mkCirc(e.x, e.y, s * 0.28, nShade(e.color, -0.35));
    nBurst(e.x, e.y, e.color, 10, 2.5);
    tankEnemies.push(e);
    for (var i = 0; i < tankHud.length; i++) toFront(tankHud[i]);
}

function removeEnemy(e) {
    remove(e.shadow); remove(e.body); remove(e.top); remove(e.barrel); remove(e.turret);
}

function explodeEnemy(e) {
    nBurst(e.x, e.y, "#fde047", 10, 4);
    nBurst(e.x, e.y, e.color, 12, 3.5, 0.05, 3.5);
    nBurst(e.x, e.y, "rgba(148,163,184,0.6)", 6, 1.5, -0.02, 5);
    removeEnemy(e);
}

function damagePlayer() {
    if (tk.inv > 0 || phase !== "PLAY") return;
    tankLives--;
    tk.inv = 60;
    setRText(tankLivesTxt, hearts(tankLives), W - 12);
    flash("#ef4444", 0.45);
    nBurst(tk.x, tk.y, "#38bdf8", 12, 3.5);
    if (tankLives <= 0) {
        nBurst(tk.x, tk.y, "#fde047", 20, 5);
        nBurst(tk.x, tk.y, "#f97316", 20, 4, 0.05, 4);
        showGameOver({ title: "DESTROYED", color: "#ef4444", score: tankScore, key: "TANK",
                       lines: [["ENEMIES DESTROYED: " + tankKills, "#e5e7eb"]] });
    }
}

function updateTank() {
    if (phase !== "PLAY") return;
    var i, j;

    if (tk.cool > 0) tk.cool--;
    if (tk.flash > 0) tk.flash--;
    if (tk.inv > 0) tk.inv--;

    // Movement (the original auto-fire while moving is kept; SPACE fires too)
    var spd = 4.2, moved = false;
    if (isLeft()) { tk.x -= spd; moved = true; }
    if (isRight()) { tk.x += spd; moved = true; }
    if (isUp()) { tk.y -= spd; moved = true; }
    if (isDown()) { tk.y += spd; moved = true; }
    tk.x = clamp(tk.x, 20, W - 20);
    tk.y = clamp(tk.y, TANK_TOP + 18, H - 18);

    // If the facing key was released, face whatever key is still held
    var held = { left: isLeft(), right: isRight(), up: isUp(), down: isDown() };
    if (!held[tk.dir]) {
        if (held.left) tk.dir = "left"; else if (held.right) tk.dir = "right";
        else if (held.up) tk.dir = "up"; else if (held.down) tk.dir = "down";
    }
    if (moved) { tk.tread = (tk.tread + 1) % 27; fireTank(); }
    if (keys[32]) fireTank();
    placeTank();

    // Spawning ramps up with score
    tankSpawn++;
    var interval = Math.max(22, 55 - Math.floor(tankScore / 250) * 3);
    if (tankSpawn >= interval && tankEnemies.length < 12) { tankSpawn = 0; spawnEnemy(); }

    // Player bullets
    for (i = tankBullets.length - 1; i >= 0; i--) {
        var b = tankBullets[i];
        b.x += b.vx; b.y += b.vy;
        b.o.setPosition(b.x, b.y);
        if (b.x < -10 || b.x > W + 10 || b.y < TANK_TOP || b.y > H + 10) {
            remove(b.o); tankBullets.splice(i, 1); continue;
        }
        var bcx = b.x + b.w / 2, bcy = b.y + b.h / 2;
        for (j = tankEnemies.length - 1; j >= 0; j--) {
            var e = tankEnemies[j];
            if (Math.abs(bcx - e.x) < e.size / 2 + 3 && Math.abs(bcy - e.y) < e.size / 2 + 3) {
                remove(b.o); tankBullets.splice(i, 1);
                e.hp--;
                e.hit = 5;
                nBurst(bcx, bcy, "#fde047", 5, 2.5);
                if (e.hp <= 0) {
                    explodeEnemy(e);
                    tankEnemies.splice(j, 1);
                    tankScore += e.pts;
                    tankKills++;
                    tankScoreTxt.setText("SCORE " + tankScore);
                    popup("+" + e.pts, e.x, e.y - 12, e.color, "bold 10pt Courier");
                }
                break;
            }
        }
    }

    // Enemies chase, aim and shoot
    for (i = tankEnemies.length - 1; i >= 0; i--) {
        var en = tankEnemies[i];
        var dx = tk.x - en.x, dy = tk.y - en.y;
        var dist = Math.max(1, Math.sqrt(dx * dx + dy * dy));
        en.x += dx / dist * en.speed;
        en.y += dy / dist * en.speed;
        var hs = en.size / 2;
        en.shadow.setPosition(en.x - hs + 3, en.y - hs + 3);
        en.body.setPosition(en.x - hs, en.y - hs);
        en.top.setPosition(en.x - hs, en.y - hs);
        en.turret.setPosition(en.x, en.y);
        en.barrel.setPosition(en.x, en.y);
        en.barrel.setEndpoint(en.x + dx / dist * en.size * 0.75, en.y + dy / dist * en.size * 0.75);
        if (en.hit > 0) { en.hit--; en.body.setColor(en.hit > 0 ? "#ffffff" : en.color); }

        if (dist < hs + 12) {
            explodeEnemy(en);
            tankEnemies.splice(i, 1);
            damagePlayer();
            if (phase !== "PLAY") return;
            continue;
        }

        en.timer++;
        if (en.timer >= en.fire) {
            en.timer = 0;
            var bs = en.size >= 28 ? 4 : 5;
            var tipX = en.x + dx / dist * en.size * 0.75, tipY = en.y + dy / dist * en.size * 0.75;
            var eb = mkCirc(tipX, tipY, 4, "#fb7185");
            tankEnemyBullets.push({ o: eb, x: tipX, y: tipY, vx: dx / dist * bs, vy: dy / dist * bs });
        }
    }

    // Enemy bullets
    for (i = tankEnemyBullets.length - 1; i >= 0; i--) {
        var q = tankEnemyBullets[i];
        q.x += q.vx; q.y += q.vy;
        q.o.setPosition(q.x, q.y);
        if (q.x < -10 || q.x > W + 10 || q.y < TANK_TOP || q.y > H + 10) {
            remove(q.o); tankEnemyBullets.splice(i, 1); continue;
        }
        if (Math.abs(q.x - tk.x) < 13 && Math.abs(q.y - tk.y) < 13) {
            remove(q.o); tankEnemyBullets.splice(i, 1);
            damagePlayer();
            if (phase !== "PLAY") return;
        }
    }
}


function nBoxesOverlap(a, b) {
    return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
}

// =====================================================================
// ASTEROID DODGE (rocks fly in from every side)
// =====================================================================
var ASTRO_TOP = 44;
var ship, astRocks, astWarn, astPickups, astTime, astBonus, astLives, astSpawnT, astPickT, astNear;
var astBase, astInterval, astMinInterval, astScoreTxt, astLivesTxt, astPowerTxt, astHud, astDeadT;
var ROCK_COLORS = ["#78716c", "#a8a29e", "#57534e", "#92400e", "#6b7280"];
function initAsteroidGame() {
    nClearScene();
    scene = "ASTRO"; phase = "PLAY"; replayFn = initAsteroidGame;
    var d = diffs.ASTRO;
    if (d === "EASY") { astBase = 2.0; astInterval = 44; astMinInterval = 18; }
    else if (d === "MED") { astBase = 2.6; astInterval = 34; astMinInterval = 12; }
    else { astBase = 3.2; astInterval = 26; astMinInterval = 9; }

    drawStarfield("#02010a");
    astRocks = []; astWarn = []; astPickups = [];
    astTime = 0; astBonus = 0; astLives = 3; astSpawnT = 50; astPickT = 420; astNear = 0; astDeadT = 0;

    ship = { x: W / 2, y: 270, vx: 0, vy: 0, inv: 60, shield: 0, slow: 0 };
    buildShip();

    mkRect(0, 0, W, ASTRO_TOP, "rgba(3,3,12,0.9)");
    mkRect(0, ASTRO_TOP - 2, W, 2, "#38bdf8");
    astScoreTxt = mkText("SCORE 0", 12, 22, "bold 12pt Courier", "#7dd3fc");
    astLivesTxt = mkRText(hearts(3), W - 12, 22, "bold 14pt Courier", "#ef4444");
    var badge = mkText(playerName + " / " + d, 12, 38, "9pt Courier", "#fbbf24");
    astPowerTxt = mkRText("", W - 12, 38, "bold 9pt Courier", "#67e8f9");
    astHud = [astScoreTxt, astLivesTxt, badge, astPowerTxt];
    fadeIn();
}

function buildShip() {
    ship.parts = [];
    function part(o, dx, dy) { ship.parts.push({ o: o, dx: dx, dy: dy }); return o; }
    ship.bubble = part(mkCirc(0, 0, 21, "rgba(103,232,249,0)"), 0, 0);
    ship.glow = part(mkCirc(0, 0, 17, "rgba(56,189,248,0.12)"), 0, 0);
    part(mkCirc(0, 0, 13, "#475569"), 0, 2);
    ship.body = part(mkCirc(0, 0, 12, "#cbd5e1"), 0, 1);
    part(mkRect(0, 0, 24, 3, "#64748b"), -12, 1);
    ship.dome = part(mkCirc(0, 0, 6.5, "#38bdf8"), 0, -4);
    part(mkCirc(0, 0, 2, "#e0f2fe"), -2, -6);
    ship.lights = [];
    var lx = [-9, -3, 3, 9];
    for (var i = 0; i < 4; i++) ship.lights.push(part(mkCirc(0, 0, 1.6, "#fde047"), lx[i], 6));
    placeShip();
}

function placeShip() {
    for (var i = 0; i < ship.parts.length; i++) {
        var p = ship.parts[i];
        p.o.setPosition(ship.x + p.dx, ship.y + p.dy);
    }
}

function shipToFront() { for (var i = 0; i < ship.parts.length; i++) toFront(ship.parts[i].o); }

function astSlowFactor() { return ship.slow > 0 ? 0.45 : 1; }

function queueRock() {
    var side = randInt(0, 3), x, y, r = rand(10, 26);
    if (side === 0) { x = -r - 8; y = rand(ASTRO_TOP + 10, H - 10); }
    else if (side === 1) { x = W + r + 8; y = rand(ASTRO_TOP + 10, H - 10); }
    else if (side === 2) { x = rand(10, W - 10); y = ASTRO_TOP - r - 8; }
    else { x = rand(10, W - 10); y = H + r + 8; }
    var mx = clamp(x, 8, W - 8), my = clamp(y, ASTRO_TOP + 8, H - 8);
    var marker = mkCirc(mx, my, 6, "rgba(239,68,68,0.9)");
    var bang = mkCText("!", mx, my + 5, "bold 10pt Courier", "#ffffff");
    astWarn.push({ x: x, y: y, r: r, t: 32, marker: marker, bang: bang, mx: mx, my: my });
}

function launchRock(w) {
    var tx = ship.x + rand(-90, 90), ty = ship.y + rand(-90, 90);
    var dx = tx - w.x, dy = ty - w.y, dist = Math.max(1, Math.sqrt(dx * dx + dy * dy));
    var speed = astBase * rand(0.8, 1.3) * (1 + astTime / 3000) * (w.r > 20 ? 0.8 : 1);
    var color = pick(ROCK_COLORS);
    var rk = { x: w.x, y: w.y, r: w.r, vx: dx / dist * speed, vy: dy / dist * speed, ang: rand(0, 6.28), spin: rand(-0.06, 0.06), near: false };
    rk.edge = mkCirc(rk.x, rk.y, rk.r + 2, nShade(color, -0.45));
    rk.body = mkCirc(rk.x, rk.y, rk.r, color);
    rk.craters = [];
    for (var i = 0; i < 3; i++) {
        rk.craters.push({ o: mkCirc(rk.x, rk.y, rk.r * rand(0.16, 0.28), nShade(color, -0.3)), dist: rk.r * rand(0.25, 0.55), a: i * 2.1 + rand(0, 0.8) });
    }
    astRocks.push(rk);
    placeRock(rk);
}

function placeRock(rk) {
    rk.edge.setPosition(rk.x, rk.y);
    rk.body.setPosition(rk.x, rk.y);
    for (var i = 0; i < rk.craters.length; i++) {
        var c = rk.craters[i];
        c.o.setPosition(rk.x + Math.cos(rk.ang + c.a) * c.dist, rk.y + Math.sin(rk.ang + c.a) * c.dist);
    }
}

function removeRock(rk) {
    remove(rk.edge); remove(rk.body);
    for (var i = 0; i < rk.craters.length; i++) remove(rk.craters[i].o);
}

function spawnPickup() {
    var type = pick(["SHIELD", "SLOW", "STAR"]);
    var color = type === "SHIELD" ? "#22d3ee" : (type === "SLOW" ? "#a855f7" : "#facc15");
    var letter = type === "SHIELD" ? "S" : (type === "SLOW" ? "T" : "\u2605");
    var pk2 = { type: type, x: rand(40, W - 40), y: rand(ASTRO_TOP + 40, H - 40), life: 420, color: color };
    pk2.ring = mkCirc(pk2.x, pk2.y, 13, rgba(color, 0.3));
    pk2.orb = mkCirc(pk2.x, pk2.y, 9, color);
    pk2.txt = mkCText(letter, pk2.x, pk2.y + 4, "bold 9pt Courier", "#0f172a");
    astPickups.push(pk2);
    nBurst(pk2.x, pk2.y, color, 10, 2.5);
}

function astHit(rk) {
    nBurst(rk.x, rk.y, "#a8a29e", 12, 3.5, 0, 3);
    nBurst(ship.x, ship.y, "#fde047", 10, 4);
    astLives--;
    ship.inv = 90;
    setRText(astLivesTxt, hearts(astLives), W - 12);
    flash("#ef4444", 0.45);
    if (astLives <= 0) {
        phase = "DYING";
        astDeadT = 45;
        nBurst(ship.x, ship.y, "#38bdf8", 24, 5, 0, 3.5);
        nBurst(ship.x, ship.y, "#f97316", 18, 4, 0, 3);
        ship.x = -100; ship.y = -100;
        placeShip();
    }
}

function astScore() { return Math.floor(astTime / 5) + astBonus; }

function updateAsteroid() {
    var i;
    updateStars();

    if (phase === "DYING") {
        astDeadT--;
        if (astDeadT <= 0) {
            showGameOver({ title: "SHIP DOWN", color: "#ef4444", score: astScore(), key: "ASTRO_" + diffs.ASTRO,
                           lines: [["SURVIVED: " + (astTime / 50).toFixed(1) + " SEC", "#e5e7eb"], ["NEAR MISSES: " + astNear, "#fde68a"]] });
        }
    }
    if (phase !== "PLAY" && phase !== "DYING") return;
    var alive = phase === "PLAY";

    if (alive) {
        astTime++;
        // Ship: smooth 8-way flying with a little drift
        var ix = (isRight() ? 1 : 0) - (isLeft() ? 1 : 0), iy = (isDown() ? 1 : 0) - (isUp() ? 1 : 0);
        ship.vx = (ship.vx + ix * 0.6) * 0.88;
        ship.vy = (ship.vy + iy * 0.6) * 0.88;
        ship.x = clamp(ship.x + ship.vx, 16, W - 16);
        ship.y = clamp(ship.y + ship.vy, ASTRO_TOP + 16, H - 16);
        if ((ix || iy) && frame % 2 === 0) {
            spawnParticle(ship.x - ix * 12, ship.y - iy * 12 + 6, -ix * 2 + rand(-0.5, 0.5), -iy * 2 + rand(-0.5, 0.5), 2.5, pick(["#f97316", "#fde047", "#fb7185"]), 12, 0);
        }
        if (ship.inv > 0) ship.inv--;
        if (ship.shield > 0) ship.shield--;
        if (ship.slow > 0) ship.slow--;
        ship.body.setColor(ship.inv > 0 && frame % 8 < 4 ? "#f8fafc" : "#cbd5e1");
        var showShield = ship.shield > 60 || (ship.shield > 0 && frame % 8 < 4);
        ship.bubble.setColor(showShield ? "rgba(103,232,249," + (0.25 + Math.sin(frame * 0.2) * 0.1).toFixed(2) + ")" : "rgba(103,232,249,0)");
        for (i = 0; i < ship.lights.length; i++) ship.lights[i].setColor((Math.floor(frame / 6) + i) % 4 === 0 ? "#f43f5e" : "#fde047");
        placeShip();

        var power = "";
        if (ship.shield > 0) power = "SHIELD " + Math.ceil(ship.shield / 50) + "s";
        if (ship.slow > 0) power += (power ? "  " : "") + "SLOW-MO " + Math.ceil(ship.slow / 50) + "s";
        setRText(astPowerTxt, power, W - 12);

        // Spawning gets faster over time
        astSpawnT--;
        if (astSpawnT <= 0) {
            astSpawnT = Math.max(astMinInterval, astInterval - astTime / 90);
            queueRock();
            if (astTime > 1500 && Math.random() < 0.2) queueRock();   // double trouble later on
        }
        astPickT--;
        if (astPickT <= 0) { astPickT = randInt(450, 700); spawnPickup(); }
    }

    // Edge warnings, then launch
    for (i = astWarn.length - 1; i >= 0; i--) {
        var w = astWarn[i];
        w.t--;
        w.marker.setRadius(5 + (w.t % 8 < 4 ? 2 : 0));
        if (w.t <= 0) {
            remove(w.marker); remove(w.bang);
            astWarn.splice(i, 1);
            if (alive) launchRock(w);
        }
    }

    // Rocks
    var sf = astSlowFactor();
    for (i = astRocks.length - 1; i >= 0; i--) {
        var rk = astRocks[i];
        rk.x += rk.vx * sf; rk.y += rk.vy * sf; rk.ang += rk.spin * sf;
        placeRock(rk);
        if (rk.x < -90 || rk.x > W + 90 || rk.y < -90 || rk.y > H + 90) { removeRock(rk); astRocks.splice(i, 1); continue; }
        if (!alive) continue;
        var dx = rk.x - ship.x, dy = rk.y - ship.y, dist = Math.sqrt(dx * dx + dy * dy);
        if (ship.shield > 0 && dist < rk.r + 20) {
            removeRock(rk); astRocks.splice(i, 1);
            nBurst(rk.x, rk.y, "#67e8f9", 12, 3.5);
            astBonus += 50;
            popup("SMASH +50", rk.x, rk.y, "#67e8f9", "bold 9pt Courier");
            continue;
        }
        if (dist < rk.r + 10 && ship.inv <= 0) {
            removeRock(rk); astRocks.splice(i, 1);
            astHit(rk);
            if (phase !== "PLAY") alive = false;
            continue;
        }
        if (!rk.near && dist < rk.r + 26 && ship.inv <= 0) {
            rk.near = true;
            astNear++;
            astBonus += 25;
            popup("CLOSE! +25", ship.x, ship.y - 24, "#fde68a", "bold 9pt Courier");
        }
    }

    // Power-ups
    for (i = astPickups.length - 1; i >= 0; i--) {
        var pu = astPickups[i];
        pu.life--;
        var bob = Math.sin(frame * 0.1 + i) * 0.4;
        pu.orb.move(0, bob); pu.ring.move(0, bob); pu.txt.move(0, bob); pu.y += bob;
        pu.ring.setRadius(12 + Math.sin(frame * 0.15) * 3);
        if (pu.life < 100) pu.orb.setColor(frame % 10 < 5 ? pu.color : "rgba(255,255,255,0.2)");
        var gone = pu.life <= 0;
        if (alive && Math.abs(pu.x - ship.x) < 22 && Math.abs(pu.y - ship.y) < 22) {
            gone = true;
            nBurst(pu.x, pu.y, pu.color, 16, 3.5);
            if (pu.type === "SHIELD") { ship.shield = 360; popup("SHIELD!", pu.x, pu.y - 16, "#67e8f9", "bold 11pt Courier"); }
            else if (pu.type === "SLOW") { ship.slow = 300; popup("SLOW-MO!", pu.x, pu.y - 16, "#d8b4fe", "bold 11pt Courier"); }
            else { astBonus += 250; popup("+250", pu.x, pu.y - 16, "#fde047", "bold 12pt Courier"); }
        }
        if (gone) { remove(pu.orb); remove(pu.ring); remove(pu.txt); astPickups.splice(i, 1); }
    }

    if (alive) {
        astScoreTxt.setText("SCORE " + astScore());
        shipToFront();
        for (i = 0; i < astHud.length; i++) toFront(astHud[i]);
    }
}


// =====================================================================
// PAUSE + GAME OVER OVERLAYS
function nTogglePause() {
    if (!isIn(GAME_SCENES, scene)) return;
    if (phase === "PAUSED") {
        closePause();
        phase = pausedFrom;
    } else if (phase === "PLAY" || phase === "READY") {
        pausedFrom = phase;
        phase = "PAUSED";
        openPause();
    }
}

function openPause() {
    var objs = [];
    objs.push(mkRect(0, 0, W, H, "rgba(3,7,18,0.78)"));
    objs.push(mkRect(76, 148, 260, 240, "rgba(0,0,0,0.5)"));
    objs.push(mkRect(70, 140, 260, 240, "#111827"));
    objs.push(mkRect(70, 140, 260, 4, "#fbbf24"));
    var title = mkCText("PAUSED", W / 2, 192, "bold 24pt Courier", "#fbbf24");
    objs.push(title);
    var b1 = nMakeButton(100, 214, 200, 40, "#10b981", "RESUME", nTogglePause, 12);
    var b2 = nMakeButton(100, 264, 200, 40, "#3b82f6", "RESTART", function () { replayFn(); }, 12);
    var b3 = nMakeButton(100, 314, 200, 40, "#ef4444", "MAIN MENU", showArcadeHub, 12);
    objs.push(mkCText("PRESS Q TO RESUME", W / 2, 373, "8pt Courier", "#9ca3af"));
    pauseLayer = { objs: objs, buttons: [b1, b2, b3], title: title };
}

function closePause() {
    if (!pauseLayer) return;
    removeList(pauseLayer.objs);
    for (var i = 0; i < pauseLayer.buttons.length; i++) removeButton(pauseLayer.buttons[i]);
    pauseLayer = null;
}

function showGameOver(o) {
    phase = "OVER";
    var prev = bestScores[o.key] || 0;
    var newBest = o.score > prev;
    if (newBest) bestScores[o.key] = o.score;
    saveProfile();
    var best = Math.max(prev, o.score);

    mkRect(0, 0, W, H, "rgba(0,0,0,0.55)");
    var off = -340, cx = 40, cy = 88 + off, objs = [];
    objs.push(mkRect(cx + 6, cy + 8, 320, 304, "rgba(0,0,0,0.5)"));
    objs.push(mkRect(cx, cy, 320, 304, "#111827"));
    objs.push(mkRect(cx, cy, 320, 5, o.color));
    objs.push(mkCText(o.title, W / 2, cy + 48, "bold 22pt Courier", o.color));
    objs.push(mkCText("PILOT: " + playerName, W / 2, cy + 76, "10pt Courier", "#34d399"));

    var ly = cy + 102;
    var lines = o.lines || [];
    for (var i = 0; i < lines.length; i++) {
        objs.push(mkCText(lines[i][0], W / 2, ly, "10pt Courier", lines[i][1] || "#cbd5e1"));
        ly += 20;
    }
    ly = cy + 150;
    if (o.medal) {
        objs.push(mkCirc(cx + 44, ly - 6, 16, nShade(o.medal.color, -0.3)));
        objs.push(mkCirc(cx + 44, ly - 6, 12, o.medal.color));
        objs.push(mkCText("\u2605", cx + 44, ly, "bold 12pt Courier", "#ffffff"));
    }
    var scoreT = mkCText("SCORE: 0", W / 2, ly, "bold 15pt Courier", "#ffffff");
    objs.push(scoreT);
    objs.push(mkCText("BEST: " + best, W / 2, ly + 24, "11pt Courier", "#fbbf24"));
    var banner = null;
    if (newBest && o.score > 0) {
        banner = mkCText("\u2605 NEW BEST! \u2605", W / 2, ly + 48, "bold 11pt Courier", "#facc15");
        objs.push(banner);
    }

    var b1 = nMakeButton(110, cy + 214, 180, 36, "#10b981", "PLAY AGAIN", function () { replayFn(); }, 11);
    var b2 = nMakeButton(110, cy + 258, 180, 34, "#ef4444", "MAIN MENU", showArcadeHub, 11);

    overlay = { objs: objs, buttons: [b1, b2], slide: -off, scoreT: scoreT, target: o.score, shown: 0,
                banner: banner, confetti: (o.win || (newBest && o.score > 0)) ? 80 : 0 };
}

function updateOverlay() {
    if (!overlay) return;
    var i;
    if (overlay.slide > 0) {
        var step = overlay.slide > 3 ? overlay.slide * 0.18 : overlay.slide;
        overlay.slide -= step;
        for (i = 0; i < overlay.objs.length; i++) overlay.objs[i].move(0, step);
        for (i = 0; i < overlay.buttons.length; i++) moveButton(overlay.buttons[i], step);
    }
    if (overlay.shown < overlay.target) {
        overlay.shown = Math.min(overlay.target, overlay.shown + Math.max(1, Math.ceil((overlay.target - overlay.shown) * 0.12)));
        setCText(overlay.scoreT, "SCORE: " + overlay.shown, W / 2);
    }
    if (overlay.banner) overlay.banner.setColor(frame % 20 < 10 ? "#facc15" : "#f97316");
    if (overlay.confetti > 0) {
        overlay.confetti--;
        if (frame % 2 === 0) {
            spawnParticle(rand(20, W - 20), -5, rand(-1, 1), rand(1.5, 3), rand(2.5, 4), pick(N_CONFETTI), 90, 0.04);
        }
    }
}

// -------------------------------------------------------------
// SHARED PAUSE & GAME OVER OVERLAYS
// -------------------------------------------------------------
function gameLoopInfo(game) {
    if (game === "FLAPPY") return {fn: flappyGameLoop, ms: 20};
    if (game === "SNAKE") return {fn: snakeGameLoop, ms: gameSpeed};
    if (game === "PARKOUR") return {fn: parkourGameLoop, ms: 20};
    if (game === "DINO") return {fn: dinoGameLoop, ms: 20};
    if (game === "TROLL") return {fn: trollGameLoop, ms: 20};
    if (game === "BLOCKS") return {fn: blocksGameLoop, ms: 20};
    if (game === "BLASTER") return {fn: blasterGameLoop, ms: 20};
    if (game === "PONG") return {fn: pongGameLoop, ms: 20};
    if (game === "TOWER") return {fn: towerGameLoop, ms: 20};
    if (game === "BOSS") return {fn: bossGameLoop, ms: 20};
    if (game === "RHYTHM") return {fn: rhythmGameLoop, ms: 20};
    return null;
}

// Every game pauses the same way: stop its loop, then restart it on resume.
function togglePause() {
    var s = currentAppState;
    var i = s.indexOf("_PAUSE");
    var info;
    if (i !== -1) {
        var game = s.substring(0, i);
        info = gameLoopInfo(game);
        removePauseOverlay();
        currentAppState = game;
        setTimer(info.fn, info.ms);
    } else {
        info = gameLoopInfo(s);
        if (!info) return;
        currentAppState = s + "_PAUSE";
        stopTimer(info.fn);
        showPauseOverlay();
    }
}

function showPauseOverlay() {
    pauseShapes = [];
    addRect(400, 480, 0, 0, "#111827", pauseShapes);
    var g = [];
    addText("PAUSED", "22pt Courier", "center", 160, "#fbbf24", g);
    makeButton("resume", 100, 200, 200, 45, "#10b981", "RESUME", "14pt Courier", 28, g);
    makeButton("pmenu", 100, 260, 200, 45, "#ef4444", "MAIN MENU", "14pt Courier", 28, g);
    pauseShapes = pauseShapes.concat(g);
    popIn(g, 0, 320, 18);
}

function removePauseOverlay() {
    removeShapes(pauseShapes);
    pauseShapes = [];
    removeButtonsById(["resume", "pmenu"]);
}

function showGameOverCard(line1, line2, newBest) {
    var g = [];
    addRect(320, 260, 40, 110, "#1f2937", g);
    addText("GAME OVER", "22pt Courier", "center", 145, "#ef4444", g);
    addText("PILOT: " + playerName, "11pt Courier", 75, 180, "#34d399", g);
    addText(line1, "12pt Courier", 75, 215, "#ffffff", g);
    addText(line2, "12pt Courier", 75, 240, "#fbbf24", g);
    makeButton("gomenu", 120, 305, 160, 40, "#ef4444", "MAIN MENU", "12pt Courier", 26, g);

    // Card drops in from above; a NEW BEST badge pops out after it lands
    popIn(g, 0, -420, 22, 0, function () {
        if (!newBest) return;
        var badge = [];
        addRect(110, 22, 235, 222, "#facc15", badge);
        addText("NEW BEST!", "11pt Courier", 247, 239, "#000000", badge);
        popIn(badge, 200, 0, 14);
        burst(110, 140, 25, CONFETTI, 4.5, 0.15);
        burst(290, 140, 25, CONFETTI, 4.5, 0.15);
    });
}
