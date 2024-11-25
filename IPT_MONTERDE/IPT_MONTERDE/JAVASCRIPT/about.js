// Default Content
let environmentalTitle = 'UZUMAKI';
let environmentalPar = `
    Uzumaki by Junji Ito is a horror manga that takes place in the cursed town of Kurouzu-cho, 
    where residents become obsessed with spiral shapes. Kirie Goshima and her boyfriend, Shuichi Saito, 
    witness bizarre and horrifying events as the spiral manifests in everything—from whirlwinds and snail-like 
    transformations to grotesque human contortions. Shuichi's parents fall victim to the curse, his father driven 
    to madness and his mother to paranoia. The town deteriorates into chaos as the spirals intensify, engulfing 
    people and the environment in a terrifying vortex. Despite their efforts to escape, Kirie and Shuichi are 
    ultimately consumed by the spiral’s power.
`;

// Gallery Hover Elements
const image1Hover = document.querySelector('.image1');
const image2Hover = document.querySelector('.image2');
const image3Hover = document.querySelector('.image3');
const image4Hover = document.querySelector('.image4');

// Function to update text content
function updateContent(title, paragraph) {
    document.querySelector('.environmental-title').innerHTML = title;
    document.querySelector('.environmental-par').innerHTML = paragraph;
}

// Function to reset text content to default
function resetContent() {
    updateContent(environmentalTitle, environmentalPar);
}

// ---- IMAGE 1: UZUMAKI ----
image1Hover.addEventListener('mouseenter', () => {
    updateContent(
        'UZUMAKI',
        `
        Uzumaki by Junji Ito is a horror manga that takes place in the cursed town of Kurouzu-cho, 
        where residents become obsessed with spiral shapes. Kirie Goshima and her boyfriend, Shuichi Saito, 
        witness bizarre and horrifying events as the spiral manifests in everything—from whirlwinds and snail-like 
        transformations to grotesque human contortions. Shuichi's parents fall victim to the curse, his father driven 
        to madness and his mother to paranoia. The town deteriorates into chaos as the spirals intensify, engulfing 
        people and the environment in a terrifying vortex. Despite their efforts to escape, Kirie and Shuichi are 
        ultimately consumed by the spiral’s power.
        `
    );
});
image1Hover.addEventListener('mouseleave', resetContent);

// ---- IMAGE 2: JONAXX ----
image2Hover.addEventListener('mouseenter', () => {
    updateContent(
        'JONAXX',
        `
        Jonaxx stories revolve around deeply emotional, character-driven narratives often set in the Philippines. 
        Her works explore themes of love, heartbreak, family ties, and personal growth. Each story features strong, 
        multi-dimensional characters, typically a fierce yet vulnerable female lead and a determined male counterpart. 
        The conflicts stem from misunderstandings, societal expectations, or painful pasts, creating tension and suspense. 
        Her writing style vividly captures the settings, from cozy provincial towns to bustling cityscapes, grounding the 
        characters in relatable situations. The romances are slow-burn, filled with heartfelt dialogues and raw emotions that 
        resonate with readers, making them feel immersed in the characters' journeys.
        `
    );
});
image2Hover.addEventListener('mouseleave', resetContent);

// ---- IMAGE 3: THE MUSEUM OF ORDINARY PEOPLE ----
image3Hover.addEventListener('mouseenter', () => {
    updateContent(
        'THE MUSEUM OF ORDINARY PEOPLE',
        `
        The Museum of Ordinary People tells the story of Jess, a young woman navigating grief after her mother’s sudden death. 
        She stumbles upon a museum dedicated to preserving everyday objects that hold extraordinary memories. Intrigued, Jess 
        explores the displays—scrapbooks, toys, and love letters—all imbued with deeply personal stories. As she reflects on 
        her own keepsakes, particularly a worn-out encyclopedia her mother cherished, she connects with the curator, Alex. 
        Together, they uncover how ordinary objects narrate profound tales of love, loss, and legacy. The journey helps Jess 
        process her emotions, transforming her grief into a celebration of her mother’s life.
        `
    );
});
image3Hover.addEventListener('mouseleave', resetContent);

// ---- IMAGE 4: THE MAN WHO DIDN'T CALL ----
image4Hover.addEventListener('mouseenter', () => {
    updateContent(
        'THE MAN WHO DIDN’T CALL',
        `
        Once there was a man who shared a magical day with a woman. They talked for hours, laughed over shared jokes, 
        and felt an instant connection that made her heart race. Before parting, he promised to call. She waited eagerly, 
        replaying their moments in her mind. Days turned into weeks, and still, no call came. Confusion and sadness crept in—had 
        she imagined their connection? Unknown to her, he never forgot. Tragedy struck him that day; an accident left him unable 
        to reach out. Years later, their paths crossed again, and the truth unveiled, bittersweet yet filled with what-ifs.
        `
    );
});
image4Hover.addEventListener('mouseleave', resetContent);