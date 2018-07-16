//Creates all objects
const fido = Object.create({}, {
    business: {
        value: "Fido"
    },
    employmentStart: {
        value: "04-14-2016"
    },
    employmentEnd: {
        value: "I currently work here"
    },
})

const stringjoy = Object.create({}, {
    business: {
        value: "Stringjoy Guitar Strings"
    },
    employmentStart: {
        value: "09-20-2016"
    },
    employmentEnd: {
        value: "06-30-2018"
    },
})

const fenwicks = Object.create({}, {
    business: {
        value: "Fenwicks 300"
    },
    employmentStart: {
        value: "12-15-2015"
    },
    employmentEnd: {
        value: "03-30-2017"
    },
})

const wholeFoods = Object.create({}, {
    business: {
        value: "Whole Foods Market"
    },
    employmentStart: {
        value: "09-01-2015"
    },
    employmentEnd: {
        value: "11-23-2015"
    },
})

const tomatoHead = Object.create({}, {
    business: {
        value: "The Tomato Head"
    },
    employmentStart: {
        value: "02-01-2015"
    },
    employmentEnd: {
        value: "08-15-2015"
    },
})


//Function to create more job objects
const jobMaker = (business, employmentStart, employmentEnd) => {
    const theObjectYouBuilt = Object.create({}, {
        business: {
            value: business
        },
        employmentStart: {
            value: employmentStart
        },
        employmentEnd: {
            value: employmentEnd
        },
    })
    return theObjectYouBuilt
}

//Array of all jobs
let jobs = [fido, stringjoy, fenwicks, wholeFoods, tomatoHead];


for (let i = 0; i < jobs.length; i++) {
    //Sets a counter to loop through the jobs in the array
    let count = jobs[i];
    //Creates an article element
    let article = document.createElement('article');
    //Gets the value of the business name from the array
    let idName = count.business;
    //Sets the id value of each article to the name of the business
    article.setAttribute("id", idName);
    //Attaches the article to the body of the HTML
    document.body.appendChild(article);
}
