const boxContainer=document.getElementById("boxContainer")
let boxItem=document.getElementById("boxItem");
let allButton=document.querySelectorAll(".readStory")
let currentIndex=0
heroes=[
    {
        name: "Ibrahim Hamadtou",
        img: "ابراهيم حميدتو.jpg",
        description1: "Ibrahim was born in Egypt in 1973. At age 10, he lost both his arms in a train accident. Many thought his life was over, but Ibrahim decided to be stronger than his pain.",
        description2: "He loved Table Tennis, so he invented his own way to play! He held the paddle in his mouth and practiced very hard until he became a pro. He didn't just play; he became a champion representing Egypt.",
        description3: "He competed in the Rio 2016 Paralympics, showing the world that 'where there's a will, there's a way.' His story reminds us that true strength comes from inside."
    },
    {
        name: "Yassin El-Zoghby",
        img: "ياسين الزغبي.jpg",
        description1: "Yassin is a brave young man who lost his leg in an accident when he was a child. It was a big shock, but he refused to let it stop his dreams or his life.",
        description2: "He started training in sports with great passion. He believed that even if he lost a limb, he would never lose his will. He became an amazing athlete and raised Egypt's name high in big competitions.",
        description3: "Yassin’s story gives hope to everyone. It reminds us that real power isn't in our hands or legs, but in our heart and belief in ourselves. You can reach your dreams no matter what."
    },
    {
        name: "Taha Hussein",
        img: "طه حسين.jpg",
        description1: "Taha Hussein was born in 1889. He lost his eyesight as a child due to illness. Despite the hard times, he loved learning. He studied at Al-Azhar and then at the Egyptian University.",
        description2: "He traveled to France and earned a PhD. He returned to Egypt as a great writer and thinker. He became known as the 'Dean of Arabic Literature' for his amazing books and ideas.",
        description3: "His life is a message of hope. He proved that losing sight doesn't mean losing vision. He became a minister and helped make education a right for everyone."
    },
    {
        name: "Sherif Osman",
        img: "شريف عثمان.jpg",
        description1: "Sherif is a world-famous weightlifter from Egypt. He had polio as a child, which affected his legs. But instead of giving up, he started a journey of challenge and success.",
        description2: "Sherif practiced hard and won Gold medals in three Paralympics: Beijing 2008, London 2012, and Rio 2016. He even broke world records in weightlifting!",
        description3: "His story shows that hard work is the key to success. He stayed determined to reach his goals and inspired people everywhere to never stop dreaming."
    },
    {
        name: "Rania Saleh",
        img: "الطفلة المعجزة.png",
        description1: "Rania is a brilliant girl called the 'Miracle Child.' She has Down Syndrome, which makes learning slower for some, but Rania showed everyone that she is a tech genius!",
        description2: "She loved computers since she was little. She learned coding and became the first person in the world with Down Syndrome to get the ICDL certificate.",
        description3: "Rania didn't stop there; she won many coding competitions and created educational apps for kids. She proves that talent has no limits."
    },
    {
        name: "Fatma Omar",
        img: "فاطمة عمر.jpg",
        description1: "Fatma is an Egyptian legend in Paralympic weightlifting. She had polio as a child, but she used that challenge as a motivation to show her incredible strength.",
        description2: "She became one of the strongest women in the world. She won many Paralympic gold medals and made all Egyptians very proud of her achievements.",
        description3: "Fatma teaches us that strength is about patience and determination. She is a great example of how you can reach the stars if you never give up."
    }
]
function showStory(index) {
    boxItem.innerHTML=`` 
    let story=`
        <button type="button" onclick="btnBack()" class="absolute top-6 start-6 md:top-10 md:start-10 text-blue-900 hover:text-orange-500 transition-all text-3xl">
            <i class="fa-solid fa-circle-xmark"></i>
        </button>
        <div class="flex flex-col md:flex-row items-center gap-10 w-full">
            <div class="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white shadow-xl overflow-hidden">
                <img src="images/${heroes[index].img}" alt="بطل" class="w-full h-full object-cover">
            </div>
            <div class="text-center md:text-start flex-1">
                <h3 class="text-3xl md:text-5xl font-black text-blue-900 mb-6">${heroes[index].name}</h3>
                <p class="text-gray-700 text-lg md:text-2xl font-medium leading-relaxed italic">"${heroes[index].description1}"</p>
                <p class="text-gray-700 text-lg md:text-2xl font-medium leading-relaxed italic">"${heroes[index].description2}"</p>
                <p class="text-gray-700 text-lg md:text-2xl font-medium leading-relaxed italic">"${heroes[index].description3}"</p>
            </div>
        </div>
    `
    boxItem.innerHTML=story
}
allButton.forEach((button,index)=>{
    button.addEventListener("click",function(e){
        boxContainer.classList.remove("hidden");
        boxContainer.classList.add("flex");
        currentIndex=index;
        showStory(currentIndex);
    });
});
function btnBack(){
    boxContainer.classList.remove("flex");
    boxContainer.classList.add("hidden");
}
boxContainer.addEventListener("click",function(event){
    if (event.target===boxContainer) {
        boxContainer.classList.remove("flex");
        boxContainer.classList.add("hidden");
    };
});

const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});