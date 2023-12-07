const people = [
    {
        name: "Jonas",
        age: 25,
        city: "Vilnius"
    },
    {
        name: "Tomas",
        age: 15,
        city: "Kaunas"
    },
    {
        name: "Domas",
        age: 26,
        city: "Vilnius"
    },
    {
        name: "Rokas",
        age: 40,
        city: "Klaipeda"
    },
    {
        name: "Jonas",
        age: 15,
        city: "Utena"
    },
    {
        name: "Dominykas",
        age: 66,
        city: "Kaunas"
    }
]

function createPersonListItem(personObject, personId)
{
    let personListItem = document.createElement("li")
    let personDataHolder = document.createElement("ul")
    personListItem.classList.add("person" + personId)
    let personNameLabel = document.createElement("h3")
    personNameLabel.textContent = personObject.name

    let ageLabel = document.createElement("li")
    ageLabel.textContent = personObject.age + " metų"
    personDataHolder.appendChild(ageLabel)

    let cityLabel = document.createElement("li")
    cityLabel.textContent = "Iš: " + personObject.city
    personDataHolder.appendChild(cityLabel)

    personListItem.appendChild(personNameLabel)
    personListItem.appendChild(personDataHolder)
    return personListItem
}

function filterCheck(personObject, filterObject)
{
    if(personObject.name.toLowerCase().includes(filterObject.name.toLowerCase())
        && (personObject.age == filterObject.age || filterObject.age == '')
        && personObject.city.toLowerCase().includes(filterObject.city.toLowerCase())){
            return true
        }
    return false
}

function createInputEventListener(objectId)
{
    document.getElementById(objectId).addEventListener('input', ()=>{
        filter[objectId] = document.getElementById(objectId).value
        filterPersonElements(filter)
    });
}

function filterPersonElements(filter)
{
    //gets all personListItems
    let peopleListElement = document.querySelector(".peopleList");
    let peopleNodeList = peopleListElement.children;
    for(let i = 0; i < peopleNodeList.length; i++)
    {
        let listItemClassNumber = peopleNodeList[i].classList[0].slice(6) // gets the listItem's id from class
        if(filterCheck(people[listItemClassNumber], filter))
        {
            peopleNodeList[i].style.display = "block"
        }
        else
        {
            peopleNodeList[i].style.display = "none"
        }
    }
}

let filter = {
    name: '',
    age: '',
    city: ''
}
createInputEventListener("name")
createInputEventListener("age")
createInputEventListener("city")

let peopleList = document.querySelector(".peopleList")
for(let i = 0; i < people.length; i++)
{
    peopleList.appendChild(createPersonListItem(people[i], i))
}