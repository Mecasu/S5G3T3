// Menü'de kullanacağımız haber başlıkları menuelemanlari isimli dizide, aşağıda.
let menuElemanlari = [
  'Gündem',
  'Dünya',
  'Ekonomi',
  'Yazarlar',
  'Burç Yorumları',
  'Diğer',
];

/*
Adım 1: menuelemanları isimli dizideki haber başlıklarını içeren bir menü oluşturmak için 'MenuYapici' adlı bir bileşen yazın.
Bu 'MenuYapici' fonksiyonu menü elemanları dizisini tek argüman olarak alıp aşağıdaki yapıda bir öğe döndürecek.

<div class="menu">
  <ul>
    {tüm menü elemanları <li> içlerine}
  </ul>
</div>

Adım 2: Fonksiyonun içinde, argüman olarak gelen diziyi kullanarak bir döngü yapın ve bir liste öğesi(<li>) <ul>'ye ekleyin

Adım 3: Hala fonksiyon içindeyiz, DOM'dan menü butonunu seçin (`index.html` içinde `menu-button` sınıfına sahip element) ve buna  bir `click` event listener ekleyin. Butona her tıklanıldığında div.menu classına('menu' class'ına sahip olan div) `menu--open` ekleyip/silecek(toggle).

Adım 4: 'MenuYapici' fonksiyonunda oluştrulan div.menu'yü döndürmeyi unutmayın.

Adım 5: 'MenuYapici' fonksiyonunu ve 'menuElemanlari' dizisini kullanarak menüyü oluşturun, ve döndürülen menüyü header class'ına sahip div'e ekleyin.
*/
const menuYapici = (dizi) => {
  const div1 = document.createElement('div');
  div1.classList.add('menu');
  const unorderedList = document.createElement('ul');
  div1.appendChild(unorderedList);

  dizi.forEach((list) => {
    const list1 = document.createElement('li');
    list1.textContent = list;
    unorderedList.appendChild(list1);
  });

  document.querySelector('.menu-button').addEventListener('click', () => {
    div1.classList.toggle('menu--open');
  });
  return div1;
};

document.querySelector('.header').appendChild(menuYapici(menuElemanlari));
