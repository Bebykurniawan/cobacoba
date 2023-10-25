// const judul = document.getElementById('judul')
// judul.style.color = 'red'

// const paragraf = document.getElementsByTagName('p')[0]
// paragraf.style.color = 'red' 

// const p4 = document.querySelector('#b p ')
// p4.style.backgroundColor = 'red'
// const p = document.querySelector('p ')
// p.style.backgroundColor = 'blue'

const headingBaru = document.createElement('h1')
const textHeadingNew = document.createTextNode("New Heading.")

headingBaru.appendChild(textHeadingNew)

const sectionA = document.getElementById('a')

sectionA.appendChild(headingBaru)

const liNew = document.createElement('li')
const textLiNew = document.createTextNode('Li neww')
liNew.appendChild(textLiNew)

const ulParent = document.querySelector("section#b ul")
const li2 = ulParent.querySelector('li:nth-child(3)')

ulParent.insertBefore(liNew,li2)

const sectionB = document.getElementById('b')
const p4 = sectionB.querySelector('p')

const h2New = document.createElement("h2")
const textH2New = document.createTextNode("Holaaaaa")
h2New.appendChild(textH2New)

sectionB.replaceChild(h2New,p4)