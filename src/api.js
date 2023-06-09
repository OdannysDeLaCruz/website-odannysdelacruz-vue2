function getProjects() {
	return fetch('/store/resources.json')
	.then(response => response.json())
	.then(data => data.projects)
}
function getSkills() {
	return fetch('/store/resources.json')
	.then(response => response.json())
	.then(data => data.skills)
}

export default {
	getProjects,
	getSkills
}