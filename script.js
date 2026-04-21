function buy() {
  alert("Cảm ơn bạn đã quan tâm sản phẩm Mộc Miên!");
}

function searchSite() {
  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  if (!query) {
    alert('Vui lòng nhập nội dung cần tìm.');
    return;
  }

  const elements = Array.from(document.querySelectorAll('.product-item h3, .section h2, .section p'));
  const match = elements.find(el => el.textContent.toLowerCase().includes(query));

  if (match) {
    match.scrollIntoView({ behavior: 'smooth', block: 'start' });
    match.classList.add('search-highlight');
    setTimeout(() => match.classList.remove('search-highlight'), 2200);
  } else {
    alert('Không tìm thấy nội dung phù hợp. Vui lòng thử lại với từ khóa khác.');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');

  if (searchButton) {
    searchButton.addEventListener('click', searchSite);
  }

  if (searchInput) {
    searchInput.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        searchSite();
      }
    });
  }
});