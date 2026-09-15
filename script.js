const scenes = {
    start: {
        description: "You find yourself at the edge of a magical forest. Three paths lead deeper into the forest.",
        choices: [
            { text: "Take the left path.", nextScene: "leftPath" },
            { text: "Take the middle path.", nextScene: "middlePath" },
            { text: "Take the right path.", nextScene: "rightPath" }
        ]
    },
    leftPath: {
        description: "You discover an enchanted pond with colorful fish and a friendly frog.",
        choices: [
            { text: "Talk to the frog.", nextScene: "talkToFrog" },
            { text: "Throw a pebble into the pond.", nextScene: "throwPebble" },
            { text: "Sit by the pond.", nextScene: "sitByPond" }
        ]
    },
    middlePath: {
        description: "A hidden treehouse appears above you. A squirrel watches from the top.",
        choices: [
            { text: "Climb the rope ladder.", nextScene: "climbLadder" },
            { text: "Call to the squirrel.", nextScene: "callSquirrel" },
            { text: "Search for hidden treasure.", nextScene: "lookForTreasures" }
        ]
    },
    rightPath: {
        description: "You enter a colorful flower meadow filled with butterflies and a rainbow.",
        choices: [
            { text: "Chase the butterflies.", nextScene: "chaseButterflies" },
            { text: "Pick some flowers.", nextScene: "pickFlowers" },
            { text: "Watch the clouds.", nextScene: "watchClouds" }
        ]
    },
    talkToFrog: { description: "The frog tells you a secret about the forest. Your adventure continues!", choices: [] },
    throwPebble: { description: "Ripples spread across the magical pond. Your adventure continues!", choices: [] },
    sitByPond: { description: "You enjoy the peaceful sounds of nature. Your adventure continues!", choices: [] },
    climbLadder: { description: "You climb into the treehouse and discover an old map. Your adventure continues!", choices: [] },
    callSquirrel: { description: "The squirrel approaches and drops a mysterious acorn. Your adventure continues!", choices: [] },
    lookForTreasures: { description: "You discover a small hidden treasure beneath the tree. Your adventure continues!", choices: [] },
    chaseButterflies: { description: "The butterflies lead you toward a hidden clearing. Your adventure continues!", choices: [] },
    pickFlowers: { description: "You admire the meadow and discover a path hidden among the flowers. Your adventure continues!", choices: [] },
    watchClouds: { description: "You relax beneath the rainbow and enjoy the peaceful meadow. Adventure complete!", choices: [] }
};

function startAdventure() {
    document.getElementById("start-button").style.display = "none";
    document.getElementById("story").classList.remove("hidden");
    showScene("start");
}

function showScene(scene) {
    const sceneData = scenes[scene];
    const description = document.getElementById("scene-description");
    const choicesElement = document.getElementById("choices");

    description.textContent = sceneData.description;
    choicesElement.innerHTML = "";

    sceneData.choices.forEach((choice) => {
        const button = document.createElement("button");
        button.textContent = choice.text;
        button.addEventListener("click", () => showScene(choice.nextScene));
        choicesElement.appendChild(button);
    });
}
