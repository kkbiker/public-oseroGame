'use strict';

{
    const osero = document.querySelector('.osero');
    const btn = document.querySelector('.setbtn');
    const turnwhite = document.querySelector('.turnwhite');
    const turnblack = document.querySelector('.turnblack');
    const cpu = document.querySelector('.cpu');
    const finalmodal = document.querySelector('.finalmodal');
    const finalwhite = document.querySelector('.finalwhite');
    const finalblack = document.querySelector('.finalblack');
    const alarmmodal = document.querySelector('.alarmmodal');



    ////////オセロのますを設置////////
    for (let i = 0; i < 10; i++) {
        const oserocol = document.createElement('div');
        oserocol.classList.add("oserocol");
        oserocol.setAttribute('data-col', i);
        osero.appendChild(oserocol);
        for (let j = 0; j < 10; j++) {
            const oserorow = document.createElement('div');
            oserorow.classList.add("oserorow");
            oserorow.setAttribute('data-row', j)
            oserocol.appendChild(oserorow);
        }
    }



    ////////オセロのますを取得////////
    const oserocol = document.querySelectorAll('.oserocol');
    const oserorow = document.querySelectorAll('.oserorow');
    
    
    
    ////////オセロを初期化////////
    function setOsero() {
        oserocol[4].children[4].classList.add("white");
        oserocol[5].children[5].classList.add("white");
        oserocol[4].children[5].classList.add("black");
        oserocol[5].children[4].classList.add("black");
    }
    
    btn.addEventListener('click', () => {
        if (turnwhite.classList.contains("current") || turnblack.classList.contains("current")) {
            oserorow.forEach(e => {
                e.classList.remove("white");
                e.classList.remove("black");
                e.classList.remove("set");
            });
            btn.textContent = "set game";
            turnwhite.classList.remove("current");
            turnblack.classList.remove("current");
        }else {
            setOsero();
            btn.textContent = "reset game";
            turnwhite.classList.add("current");
            beforereverve();
        }
    });



    turnblack.addEventListener('click', () => {
        if (turnwhite.classList.contains("current")) {
            turnwhite.classList.remove("current");
            turnblack.classList.add("current");
            beforereverve();
            setTimeout(() => {
                cputurn();
            }, 500)
        }
    });



    ////////cpu対戦にするかの処理////////
    cpu.addEventListener('click', () => {
        if (turnwhite.classList.contains("current") || turnblack.classList.contains("current")) { return; }
        
        cpu.classList.toggle("true");
    });



    ////////cpuが駒を置く処理////////
    function cputurn() {
        cpu.classList.add("current");
        const oseroset = document.querySelectorAll('.set');
        const num = Math.floor(Math.random() * oseroset.length);

        const col = oseroset[num].parentElement.getAttribute('data-col');
        const row = oseroset[num].getAttribute('data-row');

        if (turnwhite.classList.contains("current")) {
            reverse(col, row, "white", "black");
        }else if (turnblack.classList.contains("current")) {
            reverse(col, row, "black", "white");
        }
        cpu.classList.remove("current");
    }



    ////////駒を置く処理////////
    oserorow.forEach(e => {
        e.addEventListener('click', () => {
            if (e.classList.contains("set")) {
                const col = e.parentElement.getAttribute('data-col');
                const row = e.getAttribute('data-row');

                if (turnwhite.classList.contains("current")) {
                    reverse(col, row, "white", "black");
                }else if (turnblack.classList.contains("current")) {
                    reverse(col, row, "black", "white");
                }

                const oseroset = document.querySelectorAll('.set');
                if (cpu.classList.contains("true") && oseroset.length > 0) {
                    setTimeout(() => {
                        cputurn();
                        finalresult();
                    }, 500);
                }

                finalresult();
            }
        });
    });

    function reverse(col, row, current, notcurrent) {
        // row-方向の判定
        for (let i = 1; i < 10; i++) {
            if (row - i <= 0) { break; }
            if (oserocol[col].children[row - i].classList.contains(notcurrent)) {
                if (oserocol[col].children[row - i - 1].classList.contains(current)) {
                    for (let j = 1; j < i + 1; j++) {
                        oserocol[col].children[row - j].classList.remove(notcurrent);
                        oserocol[col].children[row - j].classList.add(current);
                        oserocol[col].children[row].classList.add(current);
                    }
                }
            }else {
                break;
            }
        }

        // row+方向の判定
        for (let i = 1; i < 10; i++) {
            if (Number(row) + i >= 9) { break; }
            if (oserocol[col].children[Number(row) + i].classList.contains(notcurrent)) {
                if (oserocol[col].children[Number(row) + i + 1].classList.contains(current)) {
                    for (let j = 1; j < i + 1; j++) {
                        oserocol[col].children[Number(row) + j].classList.remove(notcurrent);
                        oserocol[col].children[Number(row) + j].classList.add(current);
                        oserocol[col].children[row].classList.add(current);
                    }
                }
            }else {
                break;
            }
        }
        
        // col-方向の判定
        for (let i = 1; i < 10; i++) {
            if (col - i <= 0) { break; }
            if (oserocol[col - i].children[row].classList.contains(notcurrent)) {
                if (oserocol[col - i - 1].children[row].classList.contains(current)) {
                    for (let j = 1; j < i + 1; j++) {
                        oserocol[col - j].children[row].classList.remove(notcurrent);
                        oserocol[col - j].children[row].classList.add(current);
                        oserocol[col].children[row].classList.add(current);
                    }
                }
            }else {
                break;
            }
        }

        // col+方向の判定
        for (let i = 1; i < 10; i++) {
            if (Number(col) + i >= 9) { break; }
            if (oserocol[Number(col) + i].children[row].classList.contains(notcurrent)) {
                if (oserocol[Number(col) + i + 1].children[row].classList.contains(current)) {
                    for (let j = 1; j < i + 1; j++) {
                        oserocol[Number(col) + j].children[row].classList.remove(notcurrent);
                        oserocol[Number(col) + j].children[row].classList.add(current);
                        oserocol[col].children[row].classList.add(current);
                    }
                }
            }else {
                break;
            }
        }

        // row- col-方向の判定
        for (let i = 1; i < 10; i++) {
            if (col - i <= 0 || row - i <= 0) { break; }
            if (oserocol[col - i].children[row - i].classList.contains(notcurrent)) {
                if (oserocol[col - i - 1].children[row - i - 1].classList.contains(current)) {
                    for (let j = 1; j < i + 1; j++) {
                        oserocol[col - j].children[row - j].classList.remove(notcurrent);
                        oserocol[col - j].children[row - j].classList.add(current);
                        oserocol[col].children[row].classList.add(current);
                    }
                }
            }else {
                break;
            }
        }

        // row+ col+方向の判定
        for (let i = 1; i < 10; i++) {
            if (Number(col) + i >= 9 || Number(row) + i >= 9) { break; }
            if (oserocol[Number(col) + i].children[Number(row) + i].classList.contains(notcurrent)) {
                if (oserocol[Number(col) + i + 1].children[Number(row) + i + 1].classList.contains(current)) {
                    for (let j = 1; j < i + 1; j++) {
                        oserocol[Number(col) + j].children[Number(row) + j].classList.remove(notcurrent);
                        oserocol[Number(col) + j].children[Number(row) + j].classList.add(current);
                        oserocol[col].children[row].classList.add(current);
                    }
                }
            }else {
                break;
            }
        }

        // row- col+方向の判定
        for (let i = 1; i < 10; i++) {
            if (Number(col) + i >= 9 || row - i <= 0) { break; }
            if (oserocol[Number(col) + i].children[row - i].classList.contains(notcurrent)) {
                if (oserocol[Number(col) + i + 1].children[row - i - 1].classList.contains(current)) {
                    for (let j = 1; j < i + 1; j++) {
                        oserocol[Number(col) + j].children[row - j].classList.remove(notcurrent);
                        oserocol[Number(col) + j].children[row - j].classList.add(current);
                        oserocol[col].children[row].classList.add(current);
                    }
                }
            }else {
                break;
            }
        }

        // row+ col-方向の判定
        for (let i = 1; i < 10; i++) {
            if (col - i <= 0 || Number(row) + i >= 9) { break; }
            if (oserocol[col - i].children[Number(row) + i].classList.contains(notcurrent)) {
                if (oserocol[col - i - 1].children[Number(row) + i + 1].classList.contains(current)) {
                    for (let j = 1; j < i + 1; j++) {
                        oserocol[col - j].children[Number(row) + j].classList.remove(notcurrent);
                        oserocol[col - j].children[Number(row) + j].classList.add(current);
                        oserocol[col].children[row].classList.add(current);
                    }
                }
            }else {
                break;
            }
        }

        if (oserocol[col].children[row].classList.contains("white")) {
            oserocol[col].children[row].classList.remove("set");
            turnwhite.classList.remove("current");
            turnblack.classList.add("current");
            beforereverve();
            return;
        }else if (oserocol[col].children[row].classList.contains("black")) {
            oserocol[col].children[row].classList.remove("set");
            turnwhite.classList.add("current");
            turnblack.classList.remove("current");
            beforereverve();
            return;
        }
    }



    ////////置ける駒の位置を表示する処理////////
    function beforereverve() {
        oserorow.forEach(e => {
            e.classList.remove("set");
        });

        const white = document.querySelectorAll('.white');
        const black = document.querySelectorAll('.black');

        if (turnwhite.classList.contains("current")) {
            white.forEach(e => {
                const whitecol = e.parentElement.getAttribute('data-col');
                const whiterow = e.getAttribute('data-row');
                setreserve(whitecol, whiterow, "white", "black");
            });
        }else if (turnblack.classList.contains("current")) {
            black.forEach(e => {
                const blackcol = e.parentElement.getAttribute('data-col');
                const blackrow = e.getAttribute('data-row');
                setreserve(blackcol, blackrow, "black", "white");
            });
        }

        // 駒が置けない場合の処理
        const oseroset = document.querySelectorAll('.set'); 
        if (white.length + black.length < 100) { 
            if (oseroset.length == 0) {
                alarmmodal.classList.add("true");
                if (turnwhite.classList.contains("current")) {
                    alarmmodal.getElementsByTagName('h2')[0].textContent = "white can't set";
                    turnwhite.classList.remove("current");
                    turnblack.classList.add("current");
                }else if (turnblack.classList.contains("current")) {
                    alarmmodal.getElementsByTagName('h2')[0].textContent = "black can't set";
                    turnblack.classList.remove("current");
                    turnwhite.classList.add("current");
                }
                setTimeout(() => {
                    alarmmodal.classList.remove("true");
                    beforereverve();
                    if (cpu.classList.contains("current")) {
                        cputurn();
                    }
                }, 3000);
            }
        }
    }

    function setreserve(col, row, current, notcurrent) {
        // +col方向の処理
        for (let i = 1; i < 10; i++) {
            if (Number(col) + i >= 9) { break; }
            if (oserocol[Number(col) + i].children[row].classList.contains(notcurrent)) {
                if (oserocol[Number(col) + i + 1].children[row].classList.contains(current) ||
                    oserocol[Number(col) + i + 1].children[row].classList.contains(notcurrent)) {
                }else {
                    oserocol[Number(col) + i + 1].children[row].classList.add("set");
                }
            }else {
                break;
            }
        }

        // -col方向の処理
        for (let i = 1; i < 10; i++) {
            if (col - i <= 0) { break; }
            if (oserocol[col - i].children[row].classList.contains(notcurrent)) {
                if (oserocol[col - i - 1].children[row].classList.contains(current) ||
                    oserocol[col - i - 1].children[row].classList.contains(notcurrent)) {
                }else {
                    oserocol[col - i - 1].children[row].classList.add("set");
                }
            }else {
                break;
            }
        }

        // +row方向の処理
        for (let i = 1; i < 10; i++) {
            if (Number(row) + i >= 9) { break; }
            if (oserocol[col].children[Number(row) + i].classList.contains(notcurrent)) {
                if (oserocol[col].children[Number(row) + i + 1].classList.contains(current) ||
                    oserocol[col].children[Number(row) + i + 1].classList.contains(notcurrent)) {
                }else {
                    oserocol[col].children[Number(row) + i + 1].classList.add("set");
                }
            }else {
                break;
            }
        }

        // -row方向の処理
        for (let i = 1; i < 10; i++) {
            if (row - i <= 0) { break; }
            if (oserocol[col].children[row - i].classList.contains(notcurrent)) {
                if (oserocol[col].children[row - i - 1].classList.contains(current) ||
                    oserocol[col].children[row - i - 1].classList.contains(notcurrent)) {
                }else {
                    oserocol[col].children[row - i - 1].classList.add("set");
                }
            }else {
                break;
            }
        }

        // +col +row方向の処理
        for (let i = 1; i < 10; i++) {
            if (Number(col) + i >= 9 || Number(row) + i >= 9) { break; }
            if (oserocol[Number(col) + i].children[Number(row) + i].classList.contains(notcurrent)) {
                if (oserocol[Number(col) + i + 1].children[Number(row) + i + 1].classList.contains(current) ||
                    oserocol[Number(col) + i + 1].children[Number(row) + i + 1].classList.contains(notcurrent)) {
                }else {
                    oserocol[Number(col) + i + 1].children[Number(row) + i + 1].classList.add("set");
                }
            }else {
                break;
            }
        }

        // -col -row方向の処理
        for (let i = 1; i < 10; i++) {
            if (col - i <= 0 || row - i <= 0) { break; }
            if (oserocol[col - i].children[row - i].classList.contains(notcurrent)) {
                if (oserocol[col - i - 1].children[row - i - 1].classList.contains(current) ||
                    oserocol[col - i - 1].children[row - i - 1].classList.contains(notcurrent)) {
                }else {
                    oserocol[col - i - 1].children[row - i - 1].classList.add("set");
                }
            }else {
                break;
            }
        }

        // +col -row方向の処理
        for (let i = 1; i < 10; i++) {
            if (Number(col) + i >= 9 || row - i <= 0) { break; }
            if (oserocol[Number(col) + i].children[row - i].classList.contains(notcurrent)) {
                if (oserocol[Number(col) + i + 1].children[row - i - 1].classList.contains(current) ||
                    oserocol[Number(col) + i + 1].children[row - i - 1].classList.contains(notcurrent)) {
                }else {
                    oserocol[Number(col) + i + 1].children[row - i - 1].classList.add("set");
                }
            }else {
                break;
            }
        }

        // -col +row方向の処理
        for (let i = 1; i < 10; i++) {
            if (col - i <= 0 || Number(row) + i >= 9) { break; }
            if (oserocol[col - i].children[Number(row) + i].classList.contains(notcurrent)) {
                if (oserocol[col - i - 1].children[Number(row) + i + 1].classList.contains(current) ||
                    oserocol[col - i - 1].children[Number(row) + i + 1].classList.contains(notcurrent)) {
                }else {
                    oserocol[col - i - 1].children[Number(row) + i + 1].classList.add("set");
                }
            }else {
                break;
            }
        }
    }



    function finalresult() {
        const white = document.querySelectorAll('.white');
        const black = document.querySelectorAll('.black');
        if (white.length + black.length == 100) {
            if (white.length > black.length) {
                finalmodal.getElementsByTagName('h2')[0].textContent = "white win !!";
            }else if (white.length < black.length) {
                finalmodal.getElementsByTagName('h2')[0].textContent = "blakc win !!";
            }else {
                finalmodal.getElementsByTagName('h2')[0].textContent = "draw";
            }
            finalwhite.getElementsByTagName('span')[0].textContent = white.length;
            finalblack.getElementsByTagName('span')[0].textContent = black.length;
            finalmodal.classList.add("true");
        }
    }



    ////////結果のモーダルをしまう////////
    finalmodal.getElementsByTagName('button')[0].addEventListener('click', () => {
        finalmodal.classList.remove("true");
    });
}
