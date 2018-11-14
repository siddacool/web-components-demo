import '../components/Bla.Webcomponent';

export default function () {
  const wrapper = document.getElementById('wrapper');
  fetch('https://jsonplaceholder.typicode.com/todos/2')
    .then(response => response.json())
    .then((json) => {
      const blaBla = document.createElement('bla-bla');
      blaBla.markup = json;
      wrapper.appendChild(blaBla);
    });
}
