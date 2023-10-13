fish('.site-header-text').addEventListener('click', e => {
	e.preventDefault();
	publish.graph.onGlobalGraph();
});