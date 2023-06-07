// // Create an array of Objects (At least 3 Objects). Each object should have a URL Link to an image.
// // Set your array in localStorage.
// // Get your array from localStorage and store it in a variable called "Information"
// // Display/Write the content of the variable "Information" on the document and make sure the images are displayed

let persons = [
    {
        name: 'John',
        image: 'https://wallpapers.com/images/hd/cute-anime-boys-n5u101511vmw1hm4.jpg'
    },
    {
        name: 'Keeno',
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d73f8e0e-5b18-4d3f-9f8b-6974faaacabe/dfob3av-a77403f6-ecb5-46f6-b1af-293220122d27.jpg/v1/fill/w_735,h_728,q_75,strp/cool_anime_boy__by_yash33455_dfob3av-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzI4IiwicGF0aCI6IlwvZlwvZDczZjhlMGUtNWIxOC00ZDNmLTlmOGItNjk3NGZhYWFjYWJlXC9kZm9iM2F2LWE3NzQwM2Y2LWVjYjUtNDZmNi1iMWFmLTI5MzIyMDEyMmQyNy5qcGciLCJ3aWR0aCI6Ijw9NzM1In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.FKYWuMXxYmMBVTiFddI2O9eKApt_0I38DxpiV1fXWLA'
    },
    {
        name: 'Codi',
        image: 'https://imgix.ranker.com/list_img_v2/18020/2378020/original/2378020-u1?fit=crop&fm=pjpg&q=60&dpr=2&w=1200&h=720'
    },
    {
        name: 'Masood',
        image: 'https://e0.pxfuel.com/wallpapers/842/831/desktop-wallpaper-cute-anime-boys-cute-wolf-boy-anime.jpg' 
    }
]

localStorage.setItem('People', JSON.stringify(persons))
let peeps = JSON.parse(localStorage.getItem('information'))
document.write(localStorage.getItem('People'))

let people = document.querySelector('#list');
persons.forEach((persons)=> {
    people.innerHTML += `
    <div class="card">
        <h4 class="display-4">${persons.name}</h4>
        <div class="card-body">
            <img id="sizing" src="${persons.image}" alt"${persons.name}" loading="lazy">
        </div>
    </div>
    `
})

