const characters = [{
        name: "Luke Skywalker",
        height: 177,
        gender: "male",
        mass: 77,
        eye_color: "brown",
    },
    {
        name: "Leia Organa",
        height: 160,
        gender: "female",
        mass: 56,
        eye_color: "blue",
    },
    {
        name: "Han Solo",
        height: 180,
        gender: "male",
        mass: 80,
        eye_color: "brown",
    },
    {
        name: "Chewie",
        height: 222,
        gender: "male",
        mass: 190,
        eye_color: "black",
    },
    {
        name: "Kevin",
        height: 106,
        gender: "male",
        mass: 32.2,
        eye_color: "red",
    },
];


const massMoreThan75 = characters.filter((c) => c.mass > 75).map((c) => c.name);
console.log(massMoreThan75);


const eyeColorShorter180 = characters.filter((c) => c.height < 180).map((c) => c.eye_color);
console.log(eyeColorShorter180);


const heightBetween = characters.filter((c) => c.height > 150 && c.height < 210);
console.log(heightBetween);


const females = characters.filter((c) => c.gender === "female");
console.log(females);


const eyeColors = characters.map((c) => c.eye_color);
console.log(eyeColors);


const masses = characters.map((c) => c.mass);
console.log(masses);



const sortedByName = characters.sort((a, b) => a.name.localeCompare(b.name));
console.log(sortedByName);


const sortedByHeight = characters.sort((a, b) => a.height - b.height);
console.log(sortedByHeight);


const allHeightAbove100 = characters.every((c) => c.height > 100);
console.log(allHeightAbove100);


const allMassBelow200 = characters.every((c) => c.mass < 200);
console.log(allMassBelow200);


const hasBlackEyes = characters.some((c) => c.eye_color === "black");
console.log(hasBlackEyes);


const hasHeight177 = characters.some((c) => c.height === 177);
console.log(hasHeight177);