export var HTML_TEMPLATE = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Selamat Hari Raya Idul Fitri</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Poppins:wght@300;400;600&family=Amiri:wght@400;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --gold: #FFD700;
            --gold-light: #ffea75;
            --gold-dark: #b8860b;
            --emerald-dark: #01170b;
            --emerald-light: #04381d;
            --glass-bg: rgba(4, 56, 29, 0.5);
            --glass-border: rgba(255, 215, 0, 0.5);
        }
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body, html {
            width: 100%;
            height: 100%;
            overflow: hidden;
            font-family: 'Poppins', sans-serif;
            background-color: var(--emerald-dark);
            overscroll-behavior: none;
        }
        .background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            background-image: 
                radial-gradient(circle at center, rgba(1, 23, 11, 0.6) 0%, rgba(1, 10, 5, 0.95) 100%),
                url('https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
            background-size: cover;
            background-position: center;
            background-blend-mode: multiply;
            filter: contrast(1.2) brightness(1.1);
            will-change: transform;
        }
        .light-beam {
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 100vw;
            height: 50vh;
            background: radial-gradient(ellipse at bottom, rgba(0, 255, 128, 0.15) 0%, transparent 70%);
            transform: translateX(-50%);
            z-index: 1;
            pointer-events: none;
        }
        .stars {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 2;
        }
        .star {
            position: absolute;
            background: #ffffff;
            border-radius: 50%;
            animation: twinkle 3.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite alternate;
            box-shadow: 0 0 5px #ffffff;
            will-change: transform, opacity;
            backface-visibility: hidden;
        }
        #particles {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 3;
            pointer-events: none;
            will-change: transform;
        }
        .scene {
            position: relative;
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10;
        }
        .ornament-container {
            position: absolute;
            top: -20px;
            z-index: 4;
            display: flex;
            flex-direction: column;
            align-items: center;
            transform-origin: top center;
            animation: swing 6s cubic-bezier(0.34, 0.02, 0.39, 0.99) infinite alternate;
            will-change: transform;
            backface-visibility: hidden;
        }
        .ornament-chain {
            width: 2px;
            background: linear-gradient(to bottom, #b38728, #fbf5b7, #b38728);
            box-shadow: 0 0 8px var(--gold);
        }
        .ornament-star {
            width: 45px;
            height: 45px;
            background: linear-gradient(135deg, #FFD700, #b8860b);
            position: relative;
            transform: rotate(22.5deg);
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
            margin-top: -5px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 2px solid #fff;
        }
        .ornament-star::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #FFD700, #b8860b);
            transform: rotate(45deg);
            border: 2px solid #fff;
            z-index: -1;
        }
        .ornament-star::after {
            content: '';
            position: absolute;
            width: 20px;
            height: 20px;
            background: #01170b;
            border-radius: 50%;
            z-index: 1;
            box-shadow: inset 0 0 5px #000;
        }
        .ornament-crescent {
            width: 50px;
            height: 50px;
            fill: url(#goldGradient);
            filter: drop-shadow(0 0 15px rgba(255,215,0,0.8));
            margin-top: 15px;
            transform: rotate(-15deg);
        }
        .o1 { left: 15%; animation-delay: 0s; }
        .o1 .ornament-chain { height: 150px; }
        .o2 { right: 15%; animation-delay: 1s; }
        .o2 .ornament-chain { height: 200px; }
        .ketupat-wrapper {
            position: absolute;
            top: -20px;
            z-index: 5;
            display: flex;
            flex-direction: column;
            align-items: center;
            transform-origin: top center;
            animation: swing 5.5s cubic-bezier(0.34, 0.02, 0.39, 0.99) infinite alternate;
            will-change: transform;
            backface-visibility: hidden;
        }
        .ketupat-rope {
            width: 4px;
            background: linear-gradient(to bottom, #5d4e37, #8b7355, #5d4e37, #8b7355, #5d4e37);
            border-radius: 2px;
            box-shadow: 1px 0 2px rgba(0,0,0,0.3);
        }
        .ketupat-svg {
            filter: drop-shadow(0 15px 25px rgba(0,0,0,0.6));
            margin-top: -5px;
        }
        .k1 { left: 28%; animation-delay: 0.3s; }
        .k1 .ketupat-rope { height: 220px; }
        .k1 .ketupat-svg { width: 90px; height: 110px; }
        .k2 { right: 26%; animation-delay: 1.8s; }
        .k2 .ketupat-rope { height: 130px; }
        .k2 .ketupat-svg { width: 70px; height: 85px; }
        .k3 { left: 8%; animation-delay: 0.8s; }
        .k3 .ketupat-rope { height: 320px; }
        .k3 .ketupat-svg { width: 110px; height: 135px; }
        .k4 { right: 6%; animation-delay: 1.4s; top: 10%; }
        .k4 .ketupat-rope { height: 180px; }
        .k4 .ketupat-svg { width: 85px; height: 105px; }
        .glass-card {
            background: linear-gradient(145deg, rgba(4, 56, 29, 0.6), rgba(1, 23, 11, 0.7));
            backdrop-filter: blur(25px);
            -webkit-backdrop-filter: blur(25px);
            border: 3px solid transparent;
            border-image: linear-gradient(135deg, var(--gold), var(--gold-dark), var(--gold)) 1;
            border-radius: 25px;
            padding: 30px 45px;
            text-align: center;
            box-shadow: 
                0 25px 60px rgba(0,0,0,0.8),
                0 0 50px rgba(255,215,0,0.15),
                inset 0 0 50px rgba(255,215,0,0.1),
                inset 0 1px 0 rgba(255,255,255,0.1);
            transform: translateY(30px);
            opacity: 0;
            animation: cardEntrance 2s cubic-bezier(0.23, 1, 0.32, 1) forwards;
            max-width: 480px;
            position: relative;
            overflow: visible;
            will-change: transform, opacity;
            backface-visibility: hidden;
            transform-style: preserve-3d;
        }
        .glass-card::before {
            content: '';
            position: absolute;
            top: 10px;
            left: 10px;
            right: 10px;
            bottom: 10px;
            border: 1px solid rgba(255,215,0,0.3);
            border-radius: 18px;
            pointer-events: none;
        }
        .glass-card::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -100%;
            width: 60%;
            height: 200%;
            background: linear-gradient(
                90deg,
                transparent,
                rgba(255,255,255,0.1),
                transparent
            );
            transform: rotate(25deg);
            animation: shimmer 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
            pointer-events: none;
        }
        .corner-ornament {
            position: absolute;
            width: 40px;
            height: 40px;
            opacity: 0.8;
            will-change: transform;
        }
        .corner-ornament svg {
            width: 100%;
            height: 100%;
            fill: var(--gold);
            filter: drop-shadow(0 0 8px rgba(255,215,0,0.5));
        }
        .corner-tl { top: -5px; left: -5px; }
        .corner-tr { top: -5px; right: -5px; transform: rotate(90deg); }
        .corner-bl { bottom: -5px; left: -5px; transform: rotate(-90deg); }
        .corner-br { bottom: -5px; right: -5px; transform: rotate(180deg); }
        .bismillah {
            font-family: 'Amiri', serif;
            font-size: 1.4rem;
            color: var(--gold);
            text-shadow: 0 0 15px rgba(255,215,0,0.5);
            margin-bottom: 8px;
            letter-spacing: 2px;
            animation: glow 4s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite alternate;
            will-change: text-shadow;
        }
        .subtitle {
            font-size: 0.95rem;
            letter-spacing: 4px;
            color: var(--gold-light);
            margin-bottom: -5px;
            text-shadow: 0 0 12px rgba(255, 234, 117, 0.6);
            text-transform: uppercase;
            font-weight: 300;
        }
        h1 {
            font-family: 'Playfair Display', serif;
            font-size: 3.4rem;
            background: linear-gradient(135deg, #FFD700, #fff8dc, #FFD700, #b8860b);
            background-size: 200% 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: goldShift 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
            text-shadow: none;
            filter: drop-shadow(0 8px 20px rgba(0,0,0,0.8));
            line-height: 1.1;
            margin-bottom: 5px;
            will-change: background-position;
        }
        .date {
            font-size: 0.9rem;
            letter-spacing: 3px;
            color: rgba(255,255,255,0.9);
            margin-bottom: 12px;
            font-weight: 300;
        }
        .divider {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            margin: 15px auto;
        }
        .divider-line {
            width: 55px;
            height: 1px;
            background: linear-gradient(90deg, transparent, var(--gold), transparent);
        }
        .divider-diamond {
            width: 6px;
            height: 6px;
            background: var(--gold);
            transform: rotate(45deg);
            box-shadow: 0 0 12px rgba(255,215,0,0.6);
        }
        .message {
            font-size: 0.9rem;
            font-weight: 300;
            line-height: 1.8;
            color: rgba(255,255,255,0.9);
            margin-bottom: 15px;
            text-shadow: 0 2px 4px rgba(0,0,0,0.8);
        }
        .maaf-section {
            margin: 20px 0;
            padding: 15px 0;
            position: relative;
        }
        .maaf-ornament {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            margin-bottom: 10px;
        }
        .maaf-ornament-line {
            width: 40px;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--gold));
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .maaf-ornament-line:last-child {
            background: linear-gradient(90deg, var(--gold), transparent);
        }
        .maaf-ornament-star {
            font-size: 1rem;
            color: var(--gold);
            animation: pulse 2.5s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
            will-change: transform, opacity;
        }
        .maaf-text {
            font-family: 'Playfair Display', serif;
            font-style: italic;
            font-size: 1.8rem;
            font-weight: 600;
            background: linear-gradient(135deg, var(--gold), #fff8dc, var(--gold));
            background-size: 200% 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: goldShift 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
            text-shadow: none;
            filter: drop-shadow(0 4px 10px rgba(255,215,0,0.3));
            margin-bottom: 6px;
            will-change: background-position;
            letter-spacing: 1px;
        }
        .maaf-subtitle {
            font-size: 0.8rem;
            color: rgba(255,255,255,0.8);
            letter-spacing: 2px;
            font-weight: 300;
        }
        .cta-link {
            text-decoration: none;
            display: inline-block;
        }
        .cta-button {
            background: linear-gradient(135deg, #FFD700, #d4af37, #b8860b);
            color: #1a1001;
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            font-size: 0.85rem;
            padding: 12px 35px;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            text-transform: uppercase;
            letter-spacing: 2px;
            box-shadow: 
                0 8px 25px rgba(255, 215, 0, 0.4),
                0 0 0 2px rgba(255,255,255,0.2),
                inset 0 2px 4px rgba(255,255,255,0.5);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
            overflow: hidden;
            will-change: transform, box-shadow;
            transform-style: preserve-3d;
        }
        .cta-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            transition: left 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .cta-button:hover::before {
            left: 100%;
        }
        .cta-button:hover {
            transform: translateY(-4px) scale(1.05);
            box-shadow: 
                0 15px 40px rgba(255, 215, 0, 0.6),
                0 0 0 3px rgba(255,255,255,0.3),
                inset 0 2px 5px rgba(255,255,255,0.8);
            color: #000;
        }
        @keyframes twinkle {
            0% { opacity: 0.3; transform: scale(0.7) translateZ(0); }
            100% { opacity: 1; transform: scale(1.1) translateZ(0); box-shadow: 0 0 15px #ffffff; }
        }
        @keyframes swing {
            0% { transform: rotate(3deg) translateZ(0); }
            100% { transform: rotate(-3deg) translateZ(0); }
        }
        @keyframes cardEntrance {
            0% { opacity: 0; transform: translateY(30px) scale(0.95) translateZ(0); }
            100% { opacity: 1; transform: translateY(0) scale(1) translateZ(0); }
        }
        @keyframes shimmer {
            0% { left: -100%; opacity: 0; }
            50% { opacity: 1; }
            100% { left: 150%; opacity: 0; }
        }
        @keyframes goldShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }
        @keyframes glow {
            0% { text-shadow: 0 0 12px rgba(255,215,0,0.4), 0 0 20px rgba(255,215,0,0.2); }
            100% { text-shadow: 0 0 25px rgba(255,215,0,0.7), 0 0 40px rgba(255,215,0,0.4); }
        }
        @keyframes pulse {
            0%, 100% { transform: scale(1) translateZ(0); opacity: 0.9; }
            50% { transform: scale(1.15) translateZ(0); opacity: 1; }
        }
        @media (max-width: 768px) {
            h1 { font-size: 2.6rem; }
            .subtitle { font-size: 0.85rem; letter-spacing: 3px; }
            .glass-card { padding: 25px 20px; width: 92%; max-width: 92%; }
            .message { font-size: 0.85rem; line-height: 1.7; }
            .cta-button { padding: 12px 30px; font-size: 0.8rem; }
            .k3, .o1 { display: none; }
            .k1 .ketupat-rope { height: 120px; }
            .k1 .ketupat-svg { width: 70px; height: 85px; }
            .o2 .ornament-chain { height: 100px; }
            .bismillah { font-size: 1.2rem; }
            .maaf-text { font-size: 1.5rem; }
            .corner-ornament { width: 35px; height: 35px; }
            .divider-line { width: 45px; }
        }
        @media (prefers-reduced-motion: reduce) {
            * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }
    </style>
</head>
<body>

    <audio id="bgMusic" src="https://files.catbox.moe/1a01tk.mp3" autoplay loop style="display:none;"></audio>

    <svg style="width:0;height:0;position:absolute;" aria-hidden="true" focusable="false">
        <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#FFD700" />
                <stop offset="50%" stop-color="#d4af37" />
                <stop offset="100%" stop-color="#b8860b" />
            </linearGradient>
            <linearGradient id="janurBase" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#a8b060" />
                <stop offset="30%" stop-color="#8a9a48" />
                <stop offset="60%" stop-color="#7a8a3a" />
                <stop offset="100%" stop-color="#6b7a2e" />
            </linearGradient>
            <linearGradient id="janurLight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#c4d070" />
                <stop offset="50%" stop-color="#b0c058" />
                <stop offset="100%" stop-color="#98a848" />
            </linearGradient>
            <linearGradient id="janurMid" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#98a848" />
                <stop offset="50%" stop-color="#889838" />
                <stop offset="100%" stop-color="#788828" />
            </linearGradient>
            <linearGradient id="janurDark" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#788828" />
                <stop offset="50%" stop-color="#687818" />
                <stop offset="100%" stop-color="#586810" />
            </linearGradient>
            <linearGradient id="janurDry" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#c9b896" />
                <stop offset="30%" stop-color="#b5a882" />
                <stop offset="60%" stop-color="#a09570" />
                <stop offset="100%" stop-color="#8a8060" />
            </linearGradient>
            <linearGradient id="janurTail" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#889838" />
                <stop offset="50%" stop-color="#708020" />
                <stop offset="100%" stop-color="#586810" />
            </linearGradient>
            <symbol id="cornerOrnament" viewBox="0 0 100 100">
                <path d="M0,0 L40,0 C30,0 20,10 20,20 L20,20 C20,10 10,0 0,0 Z" />
                <path d="M0,0 L0,40 C0,30 10,20 20,20 L20,20 C10,20 0,10 0,0 Z" />
                <circle cx="25" cy="25" r="5" />
                <path d="M15,35 Q25,25 35,35 Q25,45 15,35 Z" opacity="0.7" />
                <path d="M35,15 Q25,25 35,35 Q45,25 35,15 Z" opacity="0.7" />
            </symbol>
            <symbol id="ketupat" viewBox="0 0 100 130">
                <polygon points="50,8 92,50 50,92 8,50" fill="url(#janurBase)" stroke="#5a6a20" stroke-width="1.5"/>
                <g stroke="url(#janurLight)" stroke-width="4.5" fill="none" stroke-linecap="round">
                    <line x1="18" y1="38" x2="38" y2="18"/>
                    <line x1="22" y1="54" x2="54" y2="22"/>
                    <line x1="28" y1="68" x2="68" y2="28"/>
                    <line x1="38" y1="78" x2="78" y2="38"/>
                    <line x1="54" y1="78" x2="78" y2="54"/>
                    <line x1="68" y1="72" x2="72" y2="68"/>
                </g>
                <g stroke="url(#janurMid)" stroke-width="4.5" fill="none" stroke-linecap="round">
                    <line x1="82" y1="38" x2="62" y2="18"/>
                    <line x1="78" y1="54" x2="46" y2="22"/>
                    <line x1="72" y1="68" x2="32" y2="28"/>
                    <line x1="62" y1="78" x2="22" y2="38"/>
                    <line x1="46" y1="78" x2="22" y2="54"/>
                    <line x1="32" y1="72" x2="28" y2="68"/>
                </g>
                <g stroke="url(#janurDark)" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.6">
                    <line x1="35" y1="35" x2="50" y2="20"/>
                    <line x1="35" y1="50" x2="60" y2="25"/>
                    <line x1="40" y1="65" x2="75" y2="30"/>
                    <line x1="50" y1="75" x2="85" y2="40"/>
                </g>
                <g stroke="url(#janurDark)" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.6">
                    <line x1="65" y1="35" x2="50" y2="20"/>
                    <line x1="65" y1="50" x2="40" y2="25"/>
                    <line x1="60" y1="65" x2="25" y2="30"/>
                    <line x1="50" y1="75" x2="15" y2="40"/>
                </g>
                <polygon points="50,8 92,50 50,92 8,50" fill="none" stroke="#c4d070" stroke-width="0.8" opacity="0.4"/>
                <polygon points="50,15 85,50 50,85 15,50" fill="none" stroke="#a8b060" stroke-width="1" opacity="0.3"/>
                <g fill="url(#janurTail)" stroke="#4a5a10" stroke-width="0.8">
                    <path d="M43,92 C41,102 38,115 36,125 C38,115 41,102 44,92 Z"/>
                    <path d="M50,92 C50,105 51,118 52,128 C51,118 50,105 50,92 Z"/>
                    <path d="M57,92 C59,102 62,115 64,125 C62,115 59,102 56,92 Z"/>
                </g>
                <g fill="url(#janurMid)" stroke="#5a6a20" stroke-width="0.5">
                    <path d="M40,92 C36,100 32,110 30,118 C34,108 38,98 41,92 Z"/>
                    <path d="M60,92 C64,100 68,110 70,118 C66,108 62,98 59,92 Z"/>
                </g>
                <ellipse cx="50" cy="50" rx="6" ry="6" fill="#586810" opacity="0.5"/>
                <g stroke="#c4d070" stroke-width="1.2" fill="none" opacity="0.5">
                    <line x1="32" y1="50" x2="38" y2="44"/>
                    <line x1="50" y1="32" x2="56" y2="38"/>
                    <line x1="68" y1="50" x2="62" y2="56"/>
                    <line x1="50" y1="68" x2="44" y2="62"/>
                </g>
                <g fill="none" stroke="#4a5a10" stroke-width="0.5" opacity="0.3">
                    <path d="M20,50 Q35,35 50,50 Q65,65 80,50"/>
                    <path d="M50,20 Q65,35 50,50 Q35,65 50,80"/>
                </g>
            </symbol>
        </defs>
    </svg>

    <div class="background"></div>
    <div class="light-beam"></div>
    <div class="stars" id="stars"></div>
    <canvas id="particles"></canvas>

    <div class="ornament-container o1">
        <div class="ornament-chain"></div>
        <div class="ornament-star"></div>
    </div>
    
    <div class="ornament-container o2">
        <div class="ornament-chain"></div>
        <svg class="ornament-crescent" viewBox="0 0 512 512">
            <path d="M416.3 381.1c-91.1 0-165-73.9-165-165 0-38.3 13.1-73.5 35-101.4-78.1 19-136.3 89.2-136.3 172.9 0 98.6 79.9 178.5 178.5 178.5 83.7 0 153.9-58.3 172.9-136.3-27.9 21.9-63.1 35-101.4 35z"/>
        </svg>
    </div>

    <div class="ketupat-wrapper k1">
        <div class="ketupat-rope"></div>
        <svg class="ketupat-svg"><use href="#ketupat"/></svg>
    </div>
    <div class="ketupat-wrapper k2">
        <div class="ketupat-rope"></div>
        <svg class="ketupat-svg"><use href="#ketupat"/></svg>
    </div>
    <div class="ketupat-wrapper k3">
        <div class="ketupat-rope"></div>
        <svg class="ketupat-svg"><use href="#ketupat"/></svg>
    </div>
    <div class="ketupat-wrapper k4">
        <div class="ketupat-rope"></div>
        <svg class="ketupat-svg"><use href="#ketupat"/></svg>
    </div>

    <div class="scene">
        <div class="glass-card">
            <div class="corner-ornament corner-tl">
                <svg><use href="#cornerOrnament"/></svg>
            </div>
            <div class="corner-ornament corner-tr">
                <svg><use href="#cornerOrnament"/></svg>
            </div>
            <div class="corner-ornament corner-bl">
                <svg><use href="#cornerOrnament"/></svg>
            </div>
            <div class="corner-ornament corner-br">
                <svg><use href="#cornerOrnament"/></svg>
            </div>
            
            <p class="bismillah">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
            <p class="subtitle">Selamat Hari Raya</p>
            <h1>IDUL FITRI</h1>
            <p class="date">1 Syawal 1447 H</p>
            
            <div class="divider">
                <div class="divider-line"></div>
                <div class="divider-diamond"></div>
                <div class="divider-line"></div>
            </div>
            
            <p class="message">Mari kembali fitrah dengan menyucikan hati,<br>mempererat silaturahmi, dan membuka<br>lembaran baru yang lebih baik.</p>
            
            <div class="maaf-section">
                <div class="maaf-ornament">
                    <div class="maaf-ornament-line"></div>
                    <span class="maaf-ornament-star">✦</span>
                    <div class="maaf-ornament-line"></div>
                </div>
                <p class="maaf-text">Mohon Maaf Lahir & Batin</p>
                <p class="maaf-subtitle">Taqabbalallahu Minna Wa Minkum</p>
            </div>
            
            <a href="https://lebarantiba.my.id/" class="cta-link" target="_blank">
                <button class="cta-button">KLIK DISINI</button>
            </a>
        </div>
    </div>

    <script>
        const bgMusic = document.getElementById('bgMusic');
        
        function tryPlay() {
            bgMusic.play().catch(() => {});
        }
        
        window.addEventListener('DOMContentLoaded', tryPlay);
        window.addEventListener('load', tryPlay);
        document.addEventListener('click', tryPlay, { once: true });
        document.addEventListener('touchstart', tryPlay, { once: true });

        const starsContainer = document.getElementById('stars');
        const starCount = window.innerWidth < 768 ? 60 : 120;
        
        for (let i = 0; i < starCount; i++) {
            let star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + 'vw';
            star.style.top = Math.random() * 100 + 'vh';
            let size = Math.random() * 2.5 + 0.5;
            star.style.width = size + 'px';
            star.style.height = size + 'px';
            star.style.animationDuration = (Math.random() * 2.5 + 2.5) + 's';
            star.style.animationDelay = Math.random() * 3 + 's';
            starsContainer.appendChild(star);
        }

        const canvas = document.getElementById('particles');
        const ctx = canvas.getContext('2d');
        ctx.imageSmoothingEnabled = false;
        let particles = [];
        let animationId;

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        
        window.addEventListener('resize', () => {
            cancelAnimationFrame(animationId);
            resize();
            init();
            animate();
        });
        resize();

        class Particle {
            constructor() {
                this.reset();
            }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = canvas.height + Math.random() * 50;
                this.size = Math.random() * 2.5 + 0.8;
                this.speedX = (Math.random() - 0.5) * 0.8;
                this.speedY = Math.random() * 0.6 + 0.4;
                this.opacity = Math.random() * 0.6 + 0.3;
                this.life = 1;
            }
            update(delta) {
                this.x += this.speedX * delta * 60;
                this.y -= this.speedY * delta * 60;
                this.size *= 0.995;
                this.opacity *= 0.998;
                this.life -= 0.005;
                if (this.life <= 0 || this.y < 0 || this.x < 0 || this.x > canvas.width || this.size < 0.2) {
                    this.reset();
                }
            }
            draw() {
                ctx.save();
                ctx.globalAlpha = this.opacity;
                ctx.fillStyle = '#FFD700';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowColor = '#FFD700';
                ctx.shadowBlur = 8;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                ctx.fill();
                ctx.restore();
            }
        }

        function init() {
            particles = [];
            let pCount = window.innerWidth < 768 ? 35 : 65;
            for (let i = 0; i < pCount; i++) {
                particles.push(new Particle());
            }
        }

        let lastTime = 0;
        function animate(time = 0) {
            const delta = (time - lastTime) / 1000;
            lastTime = time;
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update(delta);
                p.draw();
            });
            animationId = requestAnimationFrame(animate);
        }

        init();
        animate();
    </script>
</body>
</html>`;
