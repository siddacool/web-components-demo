function renderView(markup, rootContainer) {
  const wrapper = rootContainer ? document.querySelector(rootContainer) : document.getElementById('wrapper');

  wrapper.innerHTML = markup;
}

export default renderView;
