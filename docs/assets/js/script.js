const cards = document.querySelectorAll('.card')

const showObserver = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		entry.target.classList.toggle('show', entry.isIntersecting)

	})
}, {
	threshold: 0.7,
})


cards.forEach(card => showObserver.observe(card))