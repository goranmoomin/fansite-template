let albums = [{
    title: "TIGER EYES",
    albumImgSrc: "https://goranmoomin.github.io/sujeonglove-website/img/album.png",
    albumInfo: {
        "앨범종류": "Ryu Sujeong 1st MINI ALBUM",
        "장르": "R & B",
        "음반사": "Woolim Entertainment",
        "발매사": "kakaoM",
        "발매일": "2020.05.21"
    },
    description: "허스키한 목소리와 류수정의 더욱 특별해진 음색! 'TIGER EYES'",
    detailedDescription: "'TIGER EYES'는 펑키한 멜로디에 류수정의 매력적인 음색과 반복적인 비트가 조화롭게 어우러진 R＆B 곡으로, 운명을 '호랑이'로 비유하여 사랑에 대한 감정을 색다르게 표현하여 색다른 반전 매력을 느낄 수 있다.",
    tracks: [{
        title: "Be Cautious",
        duration: "1:03",
        writer: "빅싼초 / Goodvibes",
        description: "인트로곡임에도 불구하고 작사가가 등록되어있으며, 러블리즈 미니 1집 [Lovelyz8] 이후 오랜만에 1번 트랙 인트로와 2번 타이틀곡의 작곡, 편곡가가 다르다."
    }, {
        title: "Tiger Eyes",
        duration: "3:37",
        writer: "서지음/ Mayu Wakisaka/ Phul schwan/ Sean Michael Alexander/ Phill Schwan",
        description: "'류수정'이란 이름으로 첫 번째로 선보이는 솔로 앨범의 타이틀곡 [Tiger Eyes]는 매력적인 이성의 눈빛을 Tiger Eyes]에 비유, 이를 바라보며 깊게 빠져 들어가는 과정을 맹수의 나른하고 서늘한 움직임으로 묘사한 감각적인 가사가 인상적이다. POP을 기반으로 EDM 요소를 적절히 녹여 세련된 느낌을 주었으며, 류수정의 매력적인 보이스와 몽환적인 느낌이 잘 어우러져 색다른 느낌을 선보였다."
    }]
}, {
    title: "아이돌 드라마 공작단 OST Part.2",
    albumImgSrc: "https://goranmoomin.github.io/sujeonglove-website/img/album2.png",
    albumInfo: {
        "앨범종류": "DRAMA OST",
        "장르": "댄스,국내 드라마",
        "음반사": "KOONG Entertainment",
        "발매사": "(주)다날엔터테인먼트",
        "발매일": "2017.06.14"
    },
    description: "'아이돌 드라마 공작단', 출연자 여돌 7인이 직접 참여한 두번째 OST!",
    detailedDescription: "'아이돌 드라마 공작단', 그 두번째 OST \"딥 블루 아이즈 (Deep Blue Eyes)\"는 프로그램에 출연하는 걸그룹 맴버 7인이 직접 참여하여 불렀다. 트로피컬이 가미된 딥 하우스 장르의 이번 곡은 '마마무 문별'과 '소나무 디애나'가 직접 랩 메이킹을 맡았으며 'B1A4 진영'이 작사, 작곡, 프로듀싱으로 참여해 화제를 모았다.",
    tracks: [{
        title: "Deep Blue Eyes (Prod. By 진영)",
        duration: "3:30",
        writer: "진영/ 문별/ 디애나",
        description: "상대의 깊고 맑은 눈빛에 반한 자신의 마음을 적극적으로 표현하는 노래이며 '같은 곳에서','벚꽃이 지면' 등의 아이돌 노래를 작곡하며 만능돌로 인정받고 있는 'B1A4의 리더 진영'이 작사, 작곡, 프로듀싱으로 참여해 팬들의 이목을 모았다."
    }, {
        title: "Tiger Eyes",
        duration: "3:37",
        writer: "서지음/ Mayu Wakisaka/ Phul schwan/ Sean Michael Alexander/ Phill Schwan",
        description: "'류수정'이란 이름으로 첫 번째로 선보이는 솔로 앨범의 타이틀곡 [Tiger Eyes]는 매력적인 이성의 눈빛을 Tiger Eyes]에 비유, 이를 바라보며 깊게 빠져 들어가는 과정을 맹수의 나른하고 서늘한 움직임으로 묘사한 감각적인 가사가 인상적이다. POP을 기반으로 EDM 요소를 적절히 녹여 세련된 느낌을 주었으며, 류수정의 매력적인 보이스와 몽환적인 느낌이 잘 어우러져 색다른 느낌을 선보였다."
    }]
}];

let selectedAlbumIndex = 0;

function albumBackgroundEl(album) {
    let el = $("<div>");
    el.css({
        position: "absolute",
        "z-index": -1,
        width: "100%",
        height: "100%",
        "background-image": `url("${album.albumImgSrc}")`,
        "background-size": "cover",
        filter: "blur(20px)",
        transform: "scale(1.1)"
    });
    return el;
}

function leftAlbumItemEl(album) {
    return $(`
<div class="album-item">
    <div class="album-cover">
        <h2>${album.title}</h2>
        <img src="${album.albumImgSrc}">
        <table class="album-table">
            <tbody>
                ${Object.entries(album.albumInfo).map(([key, value]) => `<tr><td>${key}</td><td>${value}</td></tr>`).join("")}
            </tbody>
        </table>
    </div>
</div>
`);
}

function rightAlbumItemEl(album) {
    return $(`
<div class="album-item">
    <h3>${album.description}</h3>
    <p>${album.detailedDescription}</p>
    <h3>Track List</h3>
    <ol>
        ${album.tracks.map(track => `<li>
             <details>
                 <summary>
                     <div class="album-tracklist-summary">
                         <div class="album-tracklist-title">${track.title}</div>
                         <div>${track.duration}</div>
                     </div>
                 </summary>
                 ${track.writer}
                 ${track.description}
            </details>
        </li>`).join("")}
    </ol>
</div>
`);
}

// Create new .album-items with position: absolute with the same dimentions
// and animate it left or right

function updateAlbum(selectedAlbum, albumContainer, leftAlbumItem, rightAlbumItem) {
    albumContainer.find(".album-container-background").css({
        "background-image": `url(${selectedAlbum.albumImgSrc})`
    });
    leftAlbumItem.find("h2").text(selectedAlbum.title);
    leftAlbumItem.find("img").attr("src", selectedAlbum.albumImgSrc);
    let albumTableTbodyHtml = "";
    for (let [key, value] of Object.entries(selectedAlbum.albumInfo)) {
        let escapedKey = $("<div>").text(key).html();
        let escapedValue = $("<div>").text(value).html();
        albumTableTbodyHtml += `<tr><td>${escapedKey}</td><td>${escapedValue}</td></tr>`;
    }
    leftAlbumItem.find(".album-table > tbody").html(albumTableTbodyHtml);
    rightAlbumItem.find("h3").first().text(selectedAlbum.description);
    rightAlbumItem.find("p").first().text(selectedAlbum.detailedDescription);
    let trackListHtml = "";
    for (let { title, duration, writer, description } of selectedAlbum.tracks) {
        trackListHtml += `<li><details><summary>
<div class="album-tracklist-summary">
<div class="album-tracklist-title">${title}</div>
<div>${duration}</div></div>
</summary>
${writer}
${description}
</details></li>`;
    }
    rightAlbumItem.find("ol").html(trackListHtml);
}

$(document).ready(function () {
    let albumContainer = $(".album-container").first();
    let realLeftAlbumItem = $(".album-item").first();
    let realRightAlbumItem = $(".album-item").last();
    updateAlbum(albums[0], albumContainer, realLeftAlbumItem, realRightAlbumItem);
    $(".album-button").click(function () {
        albumContainer.addClass("animating");
        let fakeOriginalAlbumBackground = albumBackgroundEl(albums[selectedAlbumIndex]);
        fakeOriginalAlbumBackground.css({ left: 0, top: 0 });
        $(document.body).append(fakeOriginalAlbumBackground);
        fakeOriginalAlbumBackground.animate({ left: -$(document).width() }, 500, () => {
            fakeOriginalAlbumBackground.remove();
        });

        realLeftAlbumItem.addClass("animating");
        realRightAlbumItem.addClass("animating");
        let albumItemWidth = realLeftAlbumItem.width();
        let { left: realLeftAlbumItemLeftOffset, top: realLeftAlbumItemTopOffset } = realLeftAlbumItem.offset();
        let { left: realRightAlbumItemLeftOffset, top: realRightAlbumItemTopOffset } = realRightAlbumItem.offset();
        let fakeOriginalLeftAlbumItem = leftAlbumItemEl(albums[selectedAlbumIndex]);
        let fakeOriginalRightAlbumItem = rightAlbumItemEl(albums[selectedAlbumIndex]);
        fakeOriginalLeftAlbumItem.css({ position: "absolute", left: realLeftAlbumItemLeftOffset, top: realLeftAlbumItemTopOffset });
        fakeOriginalRightAlbumItem.css({ position: "absolute", left: realRightAlbumItemLeftOffset, top: realRightAlbumItemTopOffset });
        fakeOriginalLeftAlbumItem.width(albumItemWidth);
        fakeOriginalRightAlbumItem.width(albumItemWidth);
        $(document.body).append(fakeOriginalLeftAlbumItem);
        $(document.body).append(fakeOriginalRightAlbumItem);
        fakeOriginalLeftAlbumItem.animate({ left: -albumItemWidth, opacity: 0 }, 500, () => {
            fakeOriginalLeftAlbumItem.remove();
        });
        fakeOriginalRightAlbumItem.animate({ left: $(document).width(), opacity: 0 }, 500, () => {
            fakeOriginalRightAlbumItem.remove();
        });
        selectedAlbumIndex += albums.length;
        if ($(this).text() == "next") {
            selectedAlbumIndex++;
        } else if ($(this).text() == "prev") {
            selectedAlbumIndex--;
        } else {
            console.log($(this).text());
        }
        selectedAlbumIndex %= albums.length;

        let fakeNewAlbumBackground = albumBackgroundEl(albums[selectedAlbumIndex]);
        fakeNewAlbumBackground.css({ left: $(document).width(), top: 0 });
        $(document.body).append(fakeNewAlbumBackground);
        fakeNewAlbumBackground.animate({ left: 0 }, 500, () => {
            fakeNewAlbumBackground.remove();
            albumContainer.removeClass("animating");
        });
        let fakeNewLeftAlbumItem = leftAlbumItemEl(albums[selectedAlbumIndex]);
        let fakeNewRightAlbumItem = rightAlbumItemEl(albums[selectedAlbumIndex]);
        fakeNewLeftAlbumItem.css({ position: "absolute", left: -albumItemWidth, top: realLeftAlbumItemTopOffset, opacity: 0 });
        fakeNewRightAlbumItem.css({ position: "absolute", left: $(document).width(), top: realRightAlbumItemTopOffset, opacity: 0 });
        fakeNewLeftAlbumItem.width(albumItemWidth);
        fakeNewRightAlbumItem.width(albumItemWidth);
        $(document.body).append(fakeNewLeftAlbumItem);
        $(document.body).append(fakeNewRightAlbumItem);
        fakeNewLeftAlbumItem.animate({ left: realLeftAlbumItemLeftOffset, opacity: 100 }, 500, () => {
            fakeNewLeftAlbumItem.remove();
            realLeftAlbumItem.removeClass("animating");
        });
        fakeNewRightAlbumItem.animate({ left: realRightAlbumItemLeftOffset, opacity: 100 }, 500, () => {
            fakeNewRightAlbumItem.remove();
            realRightAlbumItem.removeClass("animating");
        });
        updateAlbum(albums[selectedAlbumIndex], albumContainer, realLeftAlbumItem, realRightAlbumItem);
    });
});
