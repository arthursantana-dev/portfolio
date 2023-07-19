const cards = document.querySelectorAll('.card')
const header = document.querySelector('header.header')
const hero = document.querySelector('section.hero')

const showObserver = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		entry.target.classList.toggle('show', entry.isIntersecting)

	})
}, {
	threshold: 0.4,
})

const headerGlassObserver = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		header.classList.toggle('glass', entry.isIntersecting)
		console.log('hero in viewport');
	})
}, {
	threshold: 0.4
})


cards.forEach(card => showObserver.observe(card))
headerGlassObserver.observe(hero)

const goToAboutMe = () => {
	const aboutMe = document.querySelector('section.sobre-mim')
	aboutMe.scrollIntoView({behavior: 'smooth', block: 'nearest'})
}


const backToTop = () => {
	const aboutMe = document.querySelector('h2.card__title')
	aboutMe.scrollIntoView({behavior: 'smooth', block: 'nearest'})
}