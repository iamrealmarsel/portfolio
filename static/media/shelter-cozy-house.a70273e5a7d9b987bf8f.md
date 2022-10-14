# Shelter Cozy House

Shelter - это адаптивный сайт из двух страниц с **динамичным** слайдером и пагинацией.

## Моя роль

Разработал сайт по макету из фигмы с учетом всех UX/UI и технических требований.

## Стек

- ванильный JavaScript
- EJS
- SCSS
- BEM
- Webpack

## UX/UI требования

Сайт состоит из двух страниц **Main** и **Our Pets**, необходимо сверстать адаптивный сайт в Pixel Perfect, а также разработать функционал, описанный далее. Макет сайта предоставлен в фигме.

### Main

**Burger menu**

- Бургер меню будет на странице только при width < 768px.
- При нажатии на бургер меню, с правой стороны будет выезжать блок шириной 320px, и высотой во всю высоту окна браузера, в котором будут вертикально расположенные и центрированные элементы меню. Должна присутствовать анимация выезда (slide-in).
- В элементах действуют те же правила активности и неактивности, как и в меню на большей ширине экрана. Например, при нажатии на `Contacts`, нас должно перебросить на блок _Footer_, а меню должно закрыться.
- Область, выступающая за 320px должна быть затемнена. Свойство затемнения описано в дизайне макета Figma.
- При открытии меню, сама иконка меню поворачивается на 90 градусов. Должна присутствовать анимация поворота (rotate). Вертикальный скролл должен стать неактивным.
- При нажатии вне границ меню, на затемненную область, или на кнопку с иконкой бургер меню, меню должно заехать обратно. Должна присутствовать анимация заезда (slide-out).
- При закрытии меню, сама иконка меню поворачивается обратно на 90 градусов. Должна присутствовать анимация поворота (rotate). Вертикальный скролл должен стать вновь активным.
- Логотип в бургер меню дублируется с основным. При этом допускается сделать так, чтобы при открытии бургер меню логотип самой страницы исчезал или переносился на свое место в бургер меню.

**Carousel**

- Слайдер должен быть реализован со стрелками, при нажатии на которые случается переход на новый блок элементов.
- Слайдер бесконечный, не имеет границ, т.е. можно нажимать влево и вправо сколько угодно раз, и каждый раз контент в блоках будет новый. В нашем случае, каждый новый слайд будет содержать **псевдослучайный** набор питомцев, т.е. генерироваться из исходных объектов в случайном порядке, с двумя условиями. Во-первых, в самом блоке слайда карточки с питомцами повторяться не будут. Во-вторых, в следующем блоке, дублирующихся карточек с карточками текущего блока, не будет. Например в слайдере из 3 элементов, следующий выезжающий слайд будет содержать 3 новых карточки питомца, таких, каких не было среди 3х карточек на предыдущем уехавшем слайде.
- Допускается реализация любого из двух сценариев:
  - При нажатии кнопки "влево" или "вправо", независимо от последовательности нажатия, всегда генерируется новый контент.
  - Допускается сохранение одного предшествующего слайда, т.е. при нажатии последовательно "влево", "вправо", "влево" (или обратная последовательность) возвращается тот контент, который был перед первым нажатием "влево" (или "вправо" при обратной последовательности). Все остальные слайды генерируют новый контент.
- При обновлении страницы карточки могут быть любыми, а не только теми, что на дизайне figma.
- При 1280px <= width в блоке слайда 3 питомца.
- При 768px <= width < 1280px в блоке слайда 2 питомца.
- При width < 768px в блоке слайда 1 питомец.
- Переключение поведения карточек животных при изменении ширины делать не нужно. Проверка на разной ширине окна браузера будет осуществляться с перезагрузкой страницы.

**Popup**

- Попап - это модальное окно, отдельный элемент, который всплывает поверх страницы при нажатии на любое место карточки с описанием конкретного питомца, и центрируется. Остальная часть страницы затемняется. Цвет тени, форма попапа, кнопка его закрытия определены в дизайне макета Figma.
- При открытии попапа вертикальный скролл должен стать неактивным.
- При нажатии на окно (блок) попапа ничего не происходит.
- При нажатии вне границ попапа, на затемненную область, или на кнопку с крестиком, попап и затемнение должны исчезнуть.
- При наведении мышкой на затемненную область или кнопку с крестиком, т.е. при событии `hover`, кнопка должна получить эффект наведения. Другими словами: кнопка интерактивная. При этом при наведении на окно (блок) самого попапа ничего не происходит.
- При закрытии попапа вертикальный скролл должен стать вновь активным.
- При 768px <= width в дизайне попапа есть картинка питомца.
- При width < 768px в дизайне попапа картинки питомца нет.

### Our Pets

**Burger menu**

- Бургер меню будет на странице только при width < 768px.
- При нажатии на бургер меню, с правой стороны будет выезжать блок шириной 320px, и высотой во всю высоту окна браузера, в котором будут вертикально расположенные и центрированные элементы меню. Должна присутствовать анимация выезда (slide-in).
- Цвет шрифта и фон такие же, как у меню в блоке _header_.
- Область, выступающая за 320px должна быть затемнена. Свойство затемнения описано в дизайне макета Figma.
- В элементах действуют те же правила активности и неактивности, как и в меню на большей ширине экрана. Например, при нажатии на `Contacts`, нас должно перебросить на блок _Footer_, а меню должно закрыться.
- При открытии меню, сама иконка меню поворачивается на 90 градусов. Должна присутствовать анимация поворота (rotate). Вертикальный скролл должен стать неактивным.
- При нажатии вне границ меню, на затемненную область, или на кнопку с иконкой бургер меню, меню должно заехать обратно. Должна присутствовать анимация заезда (slide-out).
- При закрытии меню, сама иконка меню поворачивается обратно на 90 градусов. Должна присутствовать анимация поворота (rotate). Вертикальный скролл должен стать вновь активным.
- Логотип в бургер меню дублируется с основным. При этом допускается сделать так, чтобы при открытии бургер меню логотип самой страницы исчезал или переносился на свое место в бургер меню.

**Popup**

- Попап - это модальное окно, отдельный элемент, который всплывает поверх страницы при нажатии на любое место карточки с описанием конкретного питомца, и центрируется. Остальная часть страницы затемняется. Цвет тени, форма попапа, кнопка его закрытия определены в дизайне макета Figma.
- При открытии попапа вертикальный скролл должен стать неактивным.
- При нажатии на окно (блок) попапа ничего не происходит.
- При нажатии вне границ попапа, на затемненную область, или на кнопку с крестиком, попап и затемнение должны исчезнуть.
- При наведении мышкой на затемненную область или кнопку с крестиком, т.е. при событии `hover`, кнопка должна получить эффект наведения. Другими словами: кнопка интерактивная. При этом при наведении на окно (блок) самого попапа ничего не происходит.
- При закрытии попапа вертикальный скролл должен стать вновь активным.
- При 768px <= width в дизайне попапа есть картинка питомца.
- При width < 768px в дизайне попапа картинки питомца нет.

**Pagination**

- Пагинация представляет из себя переключение страниц (таблиц или слайдов), путем перерисовки одних данных на другие, эффекты при этом могут быть разные: slide, fade. При этом всегда есть первая страница и последняя.
- Самое важное: _при неизменных размерах области пагинации, возвращаясь на страницу под определенным номером, контент на ней всегда будет одинаков_.
- При загрузке `Our Pets` должен быть сформирован массив из 48 элементов псевдо-случайным образом. Каждый из 8 приведенных на макете питомцев должен встречаться ровно 6 раз. При этом каждые 8, каждые 6, и каждые 3, питомца на странице не должны повторяться. Т.е. на одной странице пагинации не может быть одновременно два одинаковых питомца.
- При загрузке, или перезагрузке окна браузера, в `Our Pets` всегда должна быть активной первая страница.
- Кнопка `<<` всегда открывает первую страницу.
- Кнопка `<` открывает предыдущую до текущей страницы.
- Кнопка `>` открывает следующую после текущей страницы.
- Кнопка `>>` всегда открывает последнюю страницу.
- В кружке по центру указан номер текущей страницы.
- Если открыта первая страница, кнопки `<<` и `<` - неактивны.
- Если открыта последняя страница, кнопки `>` и `>>` - неактивны.
- При 1280px <= width на странице одновременно показаны 8 питомцев, а самих страниц 6. Т.е. при нажатии `>>` открывается шестая страница.
- При 768px <= width < 1280px на странице одновременно показаны 6 питомцев, а самих страниц 8. Т.е. при нажатии `>>` открывается восьмая страница.
- При width < 768px на странице одновременно показаны 3 питомца, а самих страниц 16. Т.е. при нажатии `>>` открывается шестнадцатая страница.
- Переключение поведения карточек животных при изменении ширины делать не нужно. Проверка на разной ширине окна браузера будет осуществляться с перезагрузкой страницы.

### Адаптивность

### 1280px <= width

### Main

1. **Header** (`<header>` содержит только логотип и панель навигации)

   - Интерактивная панель навигации:
     - по умолчанию должен быть подсвечен элемент `About the shelter`;
     - подсвеченный элемент `About the shelter` может не иметь hover-эффектов.
   - Нажатие на `Our pets` перебрасывает нас на страницу _our pets_.
   - Нажатие на `Help the shelter` перебрасывает нас на блок _Help_, расположенный на этой же странице (якорная ссылка).
   - Нажатие на `Contacts` перебрасывает нас на блок _Footer_, расположенный на этой же странице (якорная ссылка).
   - Логотип находится слева. Логотип состоит из текстовых элементов (т.е. не картинка). Нажатие на логотип оставляет нас на текущей странице.
   - На странице обязательно должен присутствовать один элемент `<h1>`. Можно сделать его с текстом `Cozy House`.
   - Хедер "липким" делать не нужно. Т.е. при скролле он остается на своей позиции.

2. Блок **Not only**

   - Кнопка `Make a Friend` должна быть интерактивной.
   - Нажатие на `Make a Friend` перебрасывает нас на блок _Our Friends_, расположенный на этой же странице (якорная ссылка).
   - Фон блоков можно сделать градиентом.
   - Картинка собаки и текст - разные блоки, которые не должны накладываться.

3. Блок **About**

- Внимательно посмотрите, какого вида здесь кавычки.

4. Блок **Our Friends**

   - Кнопки "влево" и "вправо" должны быть интерактивными.
   - Карточки с питомцами должны быть интерактивными при наведении на любую область карточки. Наведение на карточку меняет курсор, делает подсветку кнопки `Learn more` и меняет фон.
   - Кнопки `Learn more` должны быть интерактивными.
   - Кнопка `Get to know the rest` должна быть интерактивной.
   - Нажатие на `Get to know the rest` перебрасывает нас на страницу _our pets_.

5. Блок **Help**

   - Для позиционирования элементов блока используется сеточная верстка (flexbox или grid).
   - Расположение элементов: обязательно 5 сверху, 4 снизу.

6. Блок **In addition**

   - Интерактивный блок с номером банковского счета. Номер должен быть ссылкой, которая никуда не ведет.

7. **Footer** (`<footer>` содержит контакты, адрес и изображение):

   - При нажатии на email или его иконку должен открываться почтовый сервис.
   - При нажатии на телефон или его иконку должен открываться набор номера.
   - При нажатии на локацию должна открываться страница с google maps в отдельном окне с любой локацией на ваш выбор.
   - Изображение собаки, адрес и контакты - разные блоки, которые не должны накладываться друг на друга.
   - Фон блока можно сделать градиентом.

### Our Pets

1. **Header** (`<header>` содержит только логотип и панель навигации)

   - Интерактивная панель навигации:
     - по умолчанию должен быть подсвечен элемент `Our pets`;
     - подсвеченный элемент `Our pets` может не иметь hover-эффектов.
   - Нажатие на `About the shelter` перебрасывает нас на страницу _main_.
   - Нажатие на `Help the shelter` перебрасывает нас на блок _Help_, расположенный на странице _main_ (якорная ссылка).
   - Нажатие на `Contacts` перебрасывает нас на блок _Footer_, расположенный на этой же странице (якорная ссылка).
   - Логотип находится слева. Логотип состоит из текстовых элементов (т.е. не картинка). Нажатие на логотип перебрасывает нас на страницу _main_.
   - На странице обязательно должен присутствовать один элемент `<h1>`. Можно сделать его с текстом `Cozy House`.
   - Хедер должен быть "липким". Т.е. при скролле он всегда показан на странице сверху, сохраняя свою позицию.

2. Блок **Our Friends**

   - Четырехколоночный макет.
   - Карточки с питомцами должны быть интерактивными при наведении на любую область карточки. Наведение на карточку меняет курсор, делает подсветку кнопки `Learn more` и меняет фон.
   - Делать открытие модального окна при нажатии на данном этапе не нужно.
   - Пагинация должна быть интерактивной на доступных кнопках. Это значит, что с позиции (1) мы не можем уйти левее, т.е. в меньшую сторону. У серых кнопок должен присутствовать атрибут `disabled`, `data-disabled` или класс-модификатор.

3. **Footer** (`<footer>` содержит контакты, адрес и изображение):

   - При нажатии на email или его иконку должен открываться почтовый сервис.
   - При нажатии на телефон или его иконку должен открываться набор номера.
   - При нажатии на локацию должна открыться страница с google maps в отдельном окне с любой локацией на ваш выбор.
   - Картинка собаки и текст - разные блоки, которые не должны накладываться друг на друга.
   - Фон блока можно сделать градиентом.

### 768px <= width < 1280px

### Main

1. **Header** (`<header>` содержит только логотип и панель навигации)

   - Логотип прибивается ближе к верху страницы.
   - Отступы слева от логотипа и справа от меню навигации должны быть заданы жестко, как на макете `768px`.
   - Хедер "липким" делать не нужно. Т.е. при скролле он остается на своей позиции.

2. Блок **Not only**

   - Заголовок с текстом "Not only people need a house" должен быть расположен как указано на макете. Т.е. перенос строк должен быть соответствующим макету. Для этого можно сделать дополнительную обертку, которую и центрировать относительно основных блоков. Только отступы могут быть `responsive`, но отступ слева должен совпадать с отступом последующего блока текста.
   - Блок с текстом "We offer to give..." должен быть центрирован с равными отступами по краям. Блок с текстом и отступы могут быть `responsive`.
   - Кнопка "Make a Friend" должна быть центрирована и иметь жесткие размеры, как на макете `768px`.
   - Картинка собаки может быть `responsive`, но смещение должно оставаться в правую сторону пропорциональным, т.е. отступы до правого края могут быть так же `responsive`.

3. Блок **About**

   - Заголовок с текстом "About the shelter..." должен быть расположен как указано на макете. Т.е. перенос строк должен быть соответствующим макету. Для этого можно сделать дополнительную обертку, которую и центрировать относительно основных блоков. Только отступы могут быть `responsive`, но отступ слева должен совпадать с отступом последующего блока текста.
   - Блоки с текстом "Currently..." и "We feed our..." должны быть центрированы с равными отступами по краям. Блок с текстом и отступы могут быть `responsive`.
   - Картинка кошки и собаки ее отступы могут быть `responsive`. Главное, чтобы картинка была центрирована.

4. Блок **Our Friends**

   - Заголовок блока должен быть центрирован. Блок с текстом и отступы могут быть `responsive`.
   - Вместо трех блоков с питомцами, теперь должно быть два. Блоки с питомцами имеют жесткие размеры, как на макете `assets`. При этом отступы между блоками, стрелками слайдера или краями экрана могут быть `responsive`.
   - Кнопка "Get to know the rest" должна быть центрирована и иметь жесткие размеры, как на макете `768px`.

5. Блок **Help**

   - Заголовок блока должен быть центрирован. Блок с текстом и отступы могут быть `responsive`.
   - Элементы расположены сеткой, 3 х 3. Либо сетка увеличивается пропорционально размерам экрана, либо отступы между элементами и краями экрана можно сделать `responsive`. Структура сетки меняться не должна.

6. Блок **In addition**

   - Блок с текстом "You can..." должен быть расположен как указано на макете. Т.е. перенос строк должен быть соответствующим макету. Для этого можно сделать дополнительную обертку, которую и центрировать относительно основных блоков. Только отступы могут быть `responsive`, но отступ слева должен совпадать с отступом последующего блока текста.
   - Блок с текстом "Name of the bank..." должен быть расположен как указано на макете. Для этого можно сделать дополнительную обертку, которую и центрировать относительно основных блоков. Только отступы могут быть `responsive`, но отступ слева должен совпадать с отступом последующей кнопки.
   - Кнопка с номером счета в банке должна быть расположена, как указано на макете, и иметь жесткие размеры, как на макете `768px`. Для этого можно сделать дополнительную обертку, которую и центрировать относительно основных блоков. Только отступы могут быть `responsive`, но отступ слева должен совпадать с отступом последующего блока текста.
   - Блок с текстом "Legal information..." должен быть центрирован с равными отступами по краям. Блок с текстом и отступы могут быть `responsive`.
   - Картинка собаки и отступы могут быть `responsive`. Главное, чтобы картинка была центрирована.

7. **Footer** (`<footer>` содержит контакты, адрес и изображение):

   - Тут идет сетка из двух колонок. Обратите внимание, что сам блок с сеткой должен быть центрирован. Т.е. расстояние слева до первой колонки совпадает с расстоянием справа до второй колонки. При этом сами колонки и отступы могут быть `responsive`.
   - Картинка собаки и отступы могут быть `responsive`. Главное, чтобы картинка была центрирована.

### Our Pets

1. **Header** (`<header>` содержит только логотип и панель навигации)

   - Логотип прибивается ближе к верху страницы.
   - Отступы слева от логотипа и справа от меню навигации должны быть заданы жестко, как на макете `768px`.
   - Хедер должен быть "липким". Т.е. при скролле он всегда показан на странице сверху, сохраняя свою позицию.

2. Блок **Our Friends**

   - Заглавный текст должен быть центрирован. Блок с текстом и отступы могут быть `responsive`.
   - Сетка становится 2 х 3. Блоки с питомцами имеют жесткие размеры, как на макете `assets`. При этом отступы между блоками или краями экрана могут быть `responsive`.
   - Блок с кнопками должен быть центрирован. Размеры кнопок и расстояния между ними заданы жестко, как на `assets`, или как на макете `768px`. Отступы до краев экрана могут быть `responsive`.

3. **Footer** (`<footer>` содержит контакты, адрес и изображение):

   - Тут идет сетка из двух колонок. Обратите внимание, что сам блок с сеткой, должен быть центрирован. Т.е. расстояние слева до первой колонки совпадает с расстоянием справа до второй колонки. При этом сами колонки и отступы могут быть `responsive`.
   - Картинка собаки и отступы могут быть `responsive`. Главное, чтобы картинка была центрирована.

### 320px <= width < 768px

### Main

1. **Header** (`<header>` содержит только логотип и бургер меню)

   - Меню навигации преобразовывается в так называемое бургер меню, которое будет открываться по нажатию и предлагать привычную нам панель навигации. Логотип дублируется в открытом меню, хотя на макете этого не видно. Однако, если вы сделали так, что меню открывается, а логотип с основной страницы пропадает - это не ошибка, баллы сниматься не будут.
   - Отступ слева от логотипа может быть `responsive`. Отступ справа от меню навигации должен быть задан жестко, как на макете `320px`.
   - Хедер "липким" делать не нужно. Т.е. при скролле он остается на своей позиции.

2. Блок **Not only**

   - Заголовок с текстом "Not only people need a house" должен быть центрирован с равными отступами по краям. Блок с текстом и отступы могут быть `responsive`.
   - Блок с текстом "We offer to give..." должен быть центрирован с равными отступами по краям. Блок с текстом и отступы могут быть `responsive`.
   - Кнопка "Make a Friend" должна быть центрирована и иметь жесткие размеры, как на макете `320px`.
   - Картинка собаки может быть `responsive`, но смещение должно оставаться в правую сторону пропорциональным, т.е. отступы до правого края могут быть так же `responsive`.

3. Блок **About**

   - Заголовок с текстом "About the shelter..." должен быть центрирован с равными отступами по краям. Блок с текстом и отступы могут быть `responsive`.
   - Блоки с текстом "Currently..." и "We feed our..." должны быть центрированы с равными отступами по краям. Блок с текстом и отступы могут быть `responsive`.
   - Картинка кошки и собаки и отступы могут быть `responsive`. Главное, чтобы картинка была центрирована.

4. Блок **Our Friends**

   - Заголовок блока должен быть центрирован. Блок с текстом и отступы могут быть `responsive`.
   - Вместо двух блоков с питомцами, теперь должен быть один. Блок с питомцами имеет жесткие размеры, как на макете `assets`. При этом отступы между стрелками слайдера или краями экрана могут быть `responsive`.
   - Кнопка "Get to know the rest" должна быть центрирована и иметь жесткие размеры, как на макете `320px`.

5. Блок **Help**

   - Заголовок блока должен быть центрирован. Блок с текстом и отступы могут быть `responsive`.
   - Элементы расположены сеткой, 2 х 5. Либо сетка увеличивается пропорционально размерам экрана, либо отступы между элементами и краями экрана можно сделать `responsive`. Структура сетки меняться не должна. Последний, девятый элемент сетки должен находиться в сетке слева.

6. Блок **In addition**

   - Блок с текстом "You can..." должен быть центрирован. Блок с текстом и отступы могут быть `responsive`.
   - Блок с текстом "Name of the bank..." должен быть центрирован. Блок с текстом и отступы могут быть `responsive`.
   - Кнопка с номером счета в банке должна быть центрирована. Сама кнопка, как и отступы до краев экрана, могут быть `responsive`.
   - Блок с текстом "Legal information..." должен быть центрирован с равными отступами по краям. Блок с текстом и отступы могут быть `responsive`.
   - Картинка собаки и отступы могут быть `responsive`. Главное, чтобы картинка была центрирована.

7. **Footer** (`<footer>` содержит текст, логотип и панель навигации):

   - Одна единственная колонка. Отступы всех элементов до краев экрана должны совпадать. Сама колонка должна быть центрирована. При этом, как сама колонка, так и отступы до краев экрана, могут быть `responsive`.
   - Картинка собаки и отступы могут быть `responsive`. Главное, чтобы картинка была центрирована.

### Our Pets

1. **Header** (`<header>` содержит только логотип и бургер меню)

   - Меню навигации преобразовывается в так называемое бургер меню, которое будет открываться по нажатию и предлагать привычную нам панель навигации. Логотип дублируется в открытом меню, хотя на макете этого не видно. Однако, если вы сделали так, что меню открывается, а логотип с основной страницы пропадает - это не ошибка, баллы сниматься не будут.
   - Отступ слева от логотипа может быть `responsive`. Отступ справа от меню навигации должны быть задан жестко, как на макете `320px`.
   - Хедер должен быть "липким". Т.е. при скролле он всегда показан на странице сверху, сохраняя свою позицию.

2. Блок **Our Friends**

   - Заголовок блока должен быть центрирован. Блок с текстом и отступы могут быть `responsive`.
   - Сетка становится 1 х 3. Блоки с питомцами имеют жесткие размеры, как на макете `assets`. При этом отступы между блоками или краями экрана могут быть `responsive`.
   - Блок с кнопками должен быть центрирован. Размеры кнопок и расстояния между ними заданы жестко, как на `assets`, или как на макете `320px`. Отступы до краев экрана могут быть `responsive`.

3. **Footer** (`<footer>` содержит контакты, адрес и изображение):

   - Одна единственная колонка. Отступы всех элементов до краев экрана должны совпадать. Сама колонка должна быть центрирована. При этом, как сама колонка, так и отступы до краев экрана, могут быть `responsive`.
   - Картинка собаки и отступы могут быть `responsive`. Главное, чтобы картинка была центрирована.

### width < 320px

Минимальная ширина макета = 320px. После порогового значения расположение верстки значения не имеет. Структура верстки остается такой же, как при ширине 320px.

## Технические требования

- **Запрещается** использование CSS-фреймворков (bootstrap, foundation и т.д.)
- **Запрещается** использование JS-фреймворков (Angular, React, Vue и т.д.)
- **Запрещается** использование устаревших библиотек (jQuery и т.д.)
- **Разрешается** использование актуальных библиотек с набором вспомогательных функций (lodash). Lodash пользоваться можно, как и утилитами для создания слайдера, пагинации, попапов. Однако, рекомендуется пользоваться чистым, или _ванильным_ JavaScript
- **Разрешается** использование иконочных шрифтов, CSS препроцессоров (scss)
- **Рекомендуется** использование `normalize.css`

Каждый из питомцев будет представлять из себя объект с набором данных, например:

```javascript
const pet = {
  name: 'Jennifer',
  img: '../../assets/images/jennifer.png',
  type: 'Dog',
  breed: 'Labrador',
  description:
    "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
  age: '2 months',
  inoculations: ['none'],
  diseases: ['none'],
  parasites: ['none'],
};
```

Каждый DOM-объект (блок) с описанием питомца, будь то слайдер, пагинация или попап, будет генерироваться из данных объекта. В объекте могут быть поля, которые вы придумаете и назовете сами, выше приведен лишь пример.