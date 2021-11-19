let input = document.getElementById('search');
function result() {
    if (input.value === null || input.value === '') {
        location.reload();
        document.querySelector('img').src = 'https://source.unsplash.com/user/erondu/500x300';
    }
    document.querySelector('.container').innerHTML = `<img src="https://source.unsplash.com/500x300/?${input.value}">`;
    input.value = '';
}
window.onload = () => {
    document.querySelector('.loading_animation').style.display = 'none';
}