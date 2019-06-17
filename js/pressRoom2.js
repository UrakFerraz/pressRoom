document.querySelector('.compartilhar').addEventListener('click', function() {
	var x = document.querySelector('.compartilharBtns');
	if (x.style.display == 'none') {
		x.style.display = 'block';
	} else {
		x.style.display = 'none';
	}
});