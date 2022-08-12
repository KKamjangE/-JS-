const quotes = [
    {
        quote: "날지 않는 돼지는 그냥 돼지일 뿐이야",
        author: "<붉은돼지, 1992>",
    },
    {
        quote: "살아라, 그대는 아름답다.",
        author: "<모모노케 히메, 1997>",
    },
    {
        quote: "한 번 만난 인연은 잊혀지는 것이 아니라 잊고 있을 뿐이야.",
        author: "<센과 치히로의 행방불명, 2001>",
    },
    {
        quote: "너무 겉모습에만 신경 쓰지 마 중요한 건 마음가짐이야.",
        author: "<마녀배달부 키키, 1989>",
    },
    {
        quote: "오늘이 안되면 내일이 있다, 언제라도 내일은 있다.",
        author: "<추억은 방울방울, 1991>",
    },
    {
        quote: "원하는 걸 포기한다면 그것은 원하는 게 아니다.",
        author: "<폼포코 너구리 대작전, 1994>",
    },
    {
        quote: "자기 안의 원석을 찾아내서 오랜 시간 다듬어 가는 거란다. 시간이 많이 드는 일이지.",
        author: "<귀를 기울이면, 1995>",
    },
    {
        quote: "난 이미 충분히 도망쳐 왔어. 이제야 지켜야만 하는 것이 생겼어... 바로 너야.",
        author: "<하울의 움직이는 성, 2004>",
    },
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todayQuote.quote
author.innerText = todayQuote.author