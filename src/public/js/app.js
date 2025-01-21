document.addEventListener("DOMContentLoaded", () => {
    
    const tabCard = document.querySelectorAll('.list_card_container');
    const btnTabCard = document.querySelectorAll('.tab_item');

    btnTabCard.forEach((btn, index) => {
        let tab = tabCard[index];
        btn.addEventListener('click', () => {
            document.querySelector('.list_card_container.active').classList.remove('active');
            document.querySelector('.tab_item.active').classList.remove('active')

            btn.classList.add('active')
            tab.classList.add('active');
            indexSate = index;
        })
    })
    function starts(){
        getProductForCop();
        getProductForDien();
        getProductForInox();
    }
    starts();
    async function getProductForCop() {
        const sategoryProduct = await fetch(`${window.env.SERVER}/products/api/getcop`);
        const product = await sategoryProduct.json();
        
        const copList = [
            document.querySelector('.cop-list-1'),
            document.querySelector('.cop-list-2'),
        ];
        let copChuck = [];
        for (let i = 0; i < product.length; i += 4) {
            copChuck.push(product.slice(i, i + 4));
        }
        copChuck.forEach(function (chuck, index) {
            let htmls = chuck.map(function (product) {
                    return `
                    <li class="item_card">
                        <a href="/products/${product.slug}" class="wrapper_img">
                            <img class="fade-in" src=${product.thumbnail_main} alt="">
                            <i class="bi bi-plus"></i>
                        </a>
                        <div class="title_product">
                            <h3>
                                <a href="/products/${product.slug}">
                                    ${product.name}
                                </a>
                            </h3>
                        </div>
                    </li>`;
                })
                .join('');
            if (copList[index]) {
                copList[index].innerHTML = htmls;
            }
            const newImages = document.querySelectorAll('.fade-in');
            newImages.forEach(img => observer.observe(img));
        });
    
    }
    async function getProductForDien() {
        const sategoryProduct = await fetch(`${window.env.SERVER}/products/api/getdien`);
        const product = await sategoryProduct.json();
        
        const dienList = [
            document.querySelector('.dien-list-1'),
            document.querySelector('.dien-list-2'),
        ];
        let dienChuck = [];
        for (let i = 0; i < product.length; i += 4) {
            dienChuck.push(product.slice(i, i + 4));
        }
        dienChuck.forEach(function (chuck, index) {
            let htmls = chuck.map(function (product) {
                    return `
                    <li class="item_card">
                        <a href="/products/${product.slug}" class="wrapper_img">
                            <img class="fade-in" src=${product.thumbnail_main} alt="">
                            <i class="bi bi-plus"></i>
                        </a>
                        <div class="title_product">
                            <h3>
                                <a href="/products/${product.slug}">
                                    ${product.name}
                                </a>
                            </h3>
                        </div>
                    </li>`;
                })
                .join('');
            if (dienList[index]) {
                dienList[index].innerHTML = htmls;
            }
            const newImages = document.querySelectorAll('.fade-in');
            newImages.forEach(img => observer.observe(img));
        });
    
    }
    async function getProductForInox() {
        const sategoryProduct = await fetch(`${window.env.SERVER}/products/api/getinox`);
        const product = await sategoryProduct.json();
        const inoxList = [
            document.querySelector('.inox-list-1'),
            document.querySelector('.inox-list-2'),
        ];
        let inoxChuck = [];
        for (let i = 0; i < product.length; i += 4) {
            inoxChuck.push(product.slice(i, i + 4));
        }
        inoxChuck.forEach(function (chuck, index) {
            let htmls = chuck.map(function (product) {
                    return `
                    <li class="item_card">
                        <a href="/products/${product.slug}" class="wrapper_img">
                            <img class="fade-in" src=${product.thumbnail_main} alt="">
                            <i class="bi bi-plus"></i>
                        </a>
                        <div class="title_product">
                            <h3>
                                <a href="/products/${product.slug}">
                                    ${product.name}
                                </a>
                            </h3>
                        </div>
                    </li>`;
                })
                .join('');
            if (inoxList[index]) {
                inoxList[index].innerHTML = htmls;
            }
            const newImages = document.querySelectorAll('.fade-in');
            newImages.forEach(img => observer.observe(img));
        });
    
    }

    const imgRight = document.querySelectorAll('.animation-right');
    const imgTop = document.querySelectorAll('.animation-top');
    const fadeIn = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    });
    imgRight.forEach(img => {
        observer.observe(img);
    });
    imgTop.forEach(img => {
        observer.observe(img);
    });
    fadeIn.forEach(img => {
        observer.observe(img);
    });
    btnTabCard.forEach((btn, index) => {
        let tab = tabCard[index];
        btn.addEventListener('click', () => {
            document.querySelector('.list_card_container.active').classList.remove('active');
            document.querySelector('.tab_item.active').classList.remove('active')

            btn.classList.add('active')
            tab.classList.add('active');
            indexSate = index;
        })
    })
    const navbar = document.querySelector(".header_wrapp");

    function updateNavbarBackground() {
        const currentPath = window.location.pathname;

        if (currentPath === "/") {
            navbar.classList.add("on-backgr");
        } else {
            navbar.classList.remove("on-backgr");
        }
    }

    updateNavbarBackground();

    function tabActive() {
        const currentPath = window.location.pathname;
        
        if(currentPath === "/") {
            document.querySelector('.tab-1').classList.add('active');
            document.querySelector('.tab-2').classList.remove('active');
            document.querySelector('.tab-3').classList.remove('active');
            document.querySelector('.tab-4').classList.remove('active');
            document.querySelector('.tab-5').classList.remove('active');
        }
        else if(currentPath.startsWith("/products")) {
            document.querySelector('.tab-1').classList.remove('active');
            document.querySelector('.tab-2').classList.add('active');
            document.querySelector('.tab-3').classList.remove('active');
            document.querySelector('.tab-4').classList.remove('active');
            document.querySelector('.tab-5').classList.remove('active');
        }
        else if(currentPath.startsWith("/news")) {
            document.querySelector('.tab-1').classList.remove('active');
            document.querySelector('.tab-2').classList.remove('active');
            document.querySelector('.tab-3').classList.add('active');
            document.querySelector('.tab-4').classList.remove('active');
            document.querySelector('.tab-5').classList.remove('active');
        }
        else if(currentPath.startsWith("/about-us")) {
            document.querySelector('.tab-1').classList.remove('active');
            document.querySelector('.tab-2').classList.remove('active');
            document.querySelector('.tab-3').classList.remove('active');
            document.querySelector('.tab-4').classList.add('active');
            document.querySelector('.tab-5').classList.remove('active');
        }
        else if(currentPath.startsWith("/contact")) {
            document.querySelector('.tab-1').classList.remove('active');
            document.querySelector('.tab-2').classList.remove('active');
            document.querySelector('.tab-3').classList.remove('active');
            document.querySelector('.tab-4').classList.remove('active');
            document.querySelector('.tab-5').classList.add('active');
        }
    }
    tabActive();
    window.addEventListener("popstate", updateNavbarBackground);

    const items = document.querySelectorAll(".item_aside");

    items.forEach(item => {
        const icon = item.querySelector(".btn_drop");

        icon.addEventListener("click", function (event) {
            items.forEach(otherItem => {
                const otherIcon = otherItem.querySelector('.btn_drop');
                console.log(otherIcon);
                if (otherItem !== item) {
                    if (otherIcon) {
                        otherIcon.classList.add("bi-chevron-up");
                        otherIcon.classList.remove("bi-chevron-down");
                    }
                    otherItem.classList.remove("click");
                }
                
            });
            if (item.classList.contains("click")) {
                icon.classList.add("bi-chevron-up");
                icon.classList.remove("bi-chevron-down");
            } else {
                icon.classList.remove("bi-chevron-up");
                icon.classList.add("bi-chevron-down");
            }
                
            item.classList.toggle("click");
        });
    });

    async function sliderHome() {
        try{
            const slider = document.querySelector('.slider_banner');
            const slides = document.querySelectorAll('.item_slider');
            let currentIndex = 0; // Lưu trữ chỉ số của ảnh hiện tại
            const totalSlides = slides.length; // Tổng số ảnh
            const slideWidth = slides[0].offsetWidth; // Chiều rộng của mỗi ảnh

            // Hàm chuyển đổi ảnh
            function changeSlide() {
                // Tính toán vị trí của ảnh tiếp theo
                currentIndex = (currentIndex + 1) % totalSlides;
                const offset = currentIndex * slideWidth;

                // Cuộn đến ảnh tiếp theo
                slider.scrollTo({
                    left: offset,
                    behavior: 'smooth' // Thêm hiệu ứng cuộn mượt mà
                });
            }

            setInterval(changeSlide, 5000);

            slider.scrollTo({ right: 0, behavior: 'smooth' });
        }
        catch(error){
            console.log(`Error: ${error}`)
        }
    }
    sliderHome();

    function changeImageProduct() {
        const listImage = document.querySelectorAll('.img-js-product');
        const imgMain = document.querySelector('.img-js-product-main');
        listImage.forEach((li, index) => {
            li.addEventListener('click', () => {
                const img = li.querySelector('img');
                imgMain.src = img.src;
                img.style.border = '1px solid #DBDBDB;'
            })
        })
    }
    
    const formEmail = document.querySelectorAll('.form_contact');
    (function() {
        if (!window.env || !window.env.YOUR_USER_ID) {
          console.error("Config not loaded properly.");
          return;
        }
        emailjs.init(window.env.YOUR_USER_ID);
      })();
    formEmail.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            emailjs.sendForm(window.env.YOUR_SERVICE_ID, window.env.YOUR_TEMPLATE_ID , this)
                .then(function() {
                  alert("Email sent successfully!");
                }, function(error) {
                  alert("Failed to send email: " + error);
                });
        });
    })

    const iconSearch = document.querySelector('.btn_search');
    const searchMobie = document.querySelector('.search_mobie');
    const btnClose = document.querySelector('.btn-close-search');
    const screenWidthQuery = window.matchMedia('(max-width: 1228px)');
    iconSearch.addEventListener('click', () => {
        if(screenWidthQuery.matches){
            searchMobie.classList.add('active');
        }
        isDisplay = !isDisplay;
    })
    if(btnClose){
        btnClose.addEventListener('click', () => {
            searchMobie.classList.remove('active');
        })
    }

    const model = document.querySelector('.model');
    const closeNav = document.querySelector('.close_mobie_bar');

    const menuBtn = document.querySelector('.menu_nav_bar');
    menuBtn.addEventListener('click', () => {
        model.classList.add('active');
    })
    closeNav.addEventListener('click', () => {
        model.classList.remove('active');
    })
    const itemsPage = 12;
    let pageCurrent = 1;

    async function fetchProduct(page, itemsPage) {
        try{
            const response = await fetch(`${window.env.SERVER}/products/api/getproductsfe/?page=${page}&limit=${itemsPage}`);
            if(!response.ok){
                throw new Error('Không thể lấy dữ liệu từ server');
            }
            const data = await response.json();
            return data;
        }
        catch(error){
            console.log(error);
        }
    }

    async function displayProduct(page){
        const sategoryProduct = await fetch(`${window.env.SERVER}/products/api/getproductsfe/?page=${page}&limit=${itemsPage}`);
        const {product, totalItem} = await sategoryProduct.json();
        const productList = [
            document.querySelector('.arrow_card_1'),
            document.querySelector('.arrow_card_2'),
            document.querySelector('.arrow_card_3'),
        ];
        let productChuck = [];
        for (let i = 0; i < product.length; i += 4) {
            productChuck.push(product.slice(i, i + 4));
        }
        
        productChuck.forEach(function (chuck, index) {
            let htmls = chuck.map(function (product) {
                    return `<li class="item_card">
                    <a href="/products/${product.slug}" class="wrapper_img">
                        <img src="${product.thumbnail_main}" alt="">
                    </a>
                    <div class="title_product">
                        <h3>
                            <a href="#">
                                ${product.name}
                            </a>
                        </h3>
                    </div>
                </li>`;
                })
                .join('');
            if (productList[index]) {
                productList[index].innerHTML = htmls;
            }
            const newImages = document.querySelectorAll('.fade-in');
            newImages.forEach(img => observer.observe(img));
        });
        displayPagination(totalItem, itemsPage);
    }

    function displayPagination(totalItem, itemsPage) {
        const pageBar = document.querySelector('.page_bar');
        const totalPage = Math.ceil(totalItem / itemsPage);

        pageBar.innerHTML = `<button class="next previous"> <i class="bi bi-chevron-double-left"></i></button>
                <button class="next previous"> <i class="bi bi-chevron-left"></i> Previous</button>`;
        for(let i = 1; i <= totalPage; i++){
            const button = document.createElement("button");
            button.className = `number_page ${i === pageCurrent ? "active" : ""}`;
            button.textContent = i;
            button.addEventListener("click", async () => {
                pageCurrent = i;
                const { product, totalItem } = await fetchProduct(pageCurrent, itemsPage);
                displayProduct(pageCurrent);
                displayPagination(totalItem, itemsPage); 
            });
            pageBar.appendChild(button);
        }
        const nextButton = document.createElement("button");
        nextButton.className = "next";
        nextButton.innerHTML = `Next <i class="bi bi-chevron-right"></i>`;
        nextButton.addEventListener("click", () => {
            pageCurrent = Math.min(pageCurrent + 1, totalPage); // Điều chỉnh pageCurrent
            const { product, totalItem } = fetchProduct(pageCurrent, itemsPage);
            displayProduct(pageCurrent);
            displayPagination(totalItem, itemsPage);
        });
        pageBar.appendChild(nextButton); // Thêm nút next vào pageBar

        const nextAllButton = document.createElement("button");
        nextAllButton.className = "next_all";
        nextAllButton.innerHTML = `<i class="bi bi-chevron-double-right"></i>`;
        pageBar.appendChild(nextAllButton); // Thêm nút next_all vào pageBar

        const currentButton = document.createElement("button");
        currentButton.className = "current";
        currentButton.textContent = `Page ${pageCurrent} / ${totalPage}`;
        pageBar.appendChild(currentButton); // Thêm nút current vào pageBar
        const btnPrevious = document.querySelectorAll('.previous');
        if(pageCurrent !== 1){
            btnPrevious.forEach(btn => {
                btn.style.display = 'block';
                btn.addEventListener('click', () => {
                    pageCurrent = Math.min(pageCurrent - 1, totalPage); // Điều chỉnh pageCurrent
                    const { product, totalItem } = fetchProduct(pageCurrent, itemsPage);
                    displayProduct(pageCurrent);
                    displayPagination(totalItem, itemsPage);
                })
            })
        }else{
            btnPrevious.forEach(btn => {
                btn.style.display = 'none';
            })
        }
    }
    displayProduct(pageCurrent);

    async function getDeatail(){
        const slug = window.location.pathname.split('/').pop();
        const detailProduct = await fetch(`${window.env.SERVER}/products/api/getdetailproduct/${slug}`);

        const product = await detailProduct.json();

        const html = `<img class="img-js-product-main" src="${product.thumbnail_main}" alt="">`;
        const thumbnailMain = document.querySelector('.wrapper_img_product');
        thumbnailMain.innerHTML = html;

        const listThumbnail = `<li class="img-js-product" ><img  src="${product.thumbnail_main}" alt=""></li>
                <li class="img-js-product" ><img  src="${product.thumbnail_1}" alt=""></li>
                <li class="img-js-product" ><img  src="${product.thumbnail_2}" alt=""></li>
                <li class="img-js-product" ><img  src="${product.thumbnail_3}" alt=""></li>`;
        document.querySelector('.wrapper_list_img_product').innerHTML = listThumbnail;
        changeImageProduct();

        document.querySelector('.name_product').innerHTML = product.name;
        document.querySelector('.sub_heading').innerHTML = product.description;

        const iamgeDisplay = `<img src="${product.thumbnail_main}" alt="">
                <img src="${product.thumbnail_2}" alt="">
                <img src="${product.thumbnail_3}" alt="">`;
        document.querySelector('.list_img_detail').innerHTML = iamgeDisplay;

        document.querySelector('.description_product').innerHTML = product.description;
        document.querySelector('.number_stock').innerHTML = `Số lượng tồn kho: ${product.stock}`;
    }
    getDeatail();
    async function getArticle() {
        const response = await fetch(`${window.env.SERVER}/articles/getall`);
        const articles = await response.json();
        const html = articles.map(article => {
            return `
                <li class="item_news is-between">
                    <a href="#" class="link_news">
                        <img src="${article.thumbnail}" alt="">
                    </a>
                    <div class="content_news">
                        <a href="/news/${article.slug}" class="heading_title">
                            ${article.subject}
                        </a>
                        <time>by ${article.author} on ${article.formatedDate}</time>
                        <p>
                            ${article.content}
                        </p>
                        <a href="/news/${article.slug}" class="read_more">read more</a>
                    </div>
                </li>`;
        })
        document.querySelector('.list_news').innerHTML = html.join('');
    }
    getArticle();

    async function getDetailArticle(){
        const slug = window.location.pathname.split('/').pop();
        const response = await fetch(`${window.env.SERVER}/articles/getdetail/${slug}`);

        const article = await response.json();
        document.querySelector('.subject_article_detail').innerHTML = article.subject;
        document.querySelector('.article_thumbnail_1').innerHTML = `<img src="${article.thumbnail}" alt="">`;
        formatContent = article.content.replace(/\n/g, '<br>');
        document.querySelector('.detail_content_new').innerHTML = formatContent;
        document.querySelector('.time_news_detail').innerHTML = `Cập nhật lúc: ${article.formatedDate} <br> Người đăng: ${article.author}`;

    }
    getDetailArticle();

    async function getProductThep(){
        const response = await fetch(`${window.env.SERVER}/products/api/getthep`);
        const product = await response.json();
        const thepList = [
            document.querySelector('.thep-list-1'),
            document.querySelector('.thep-list-2'),
        ];
        let thepChuck = [];
        for (let i = 0; i < product.length; i += 4) {
            thepChuck.push(product.slice(i, i + 4));
        }
        console.log(`product: ${product}`);
        thepChuck.forEach(function (chuck, index) {
            let htmls = chuck.map(function (product) {
                return `
                    <li class="item_card">
                        <a href="/products/${product.slug}" class="wrapper_img">
                            <img class="fade-in" src=${product.thumbnail_main} alt="">
                            <i class="bi bi-plus"></i>
                        </a>
                        <div class="title_product">
                            <h3>
                                <a href="/products/${product.slug}">
                                    ${product.name}
                                </a>
                            </h3>
                        </div>
                    </li>`;}).join('');
            if (thepList[index]) {
                thepList[index].innerHTML = htmls;
            }
            const newImages = document.querySelectorAll('.fade-in');
            newImages.forEach(img => observer.observe(img));
        });
    }
    getProductThep();
    async function productSuggest() {
        const response = await fetch(`${window.env.SERVER}/products/api/suggestproduct`);
        const product = await response.json();

        const html = product.map(pro => {
            return `
                <li class="item_card">
                    <a href="/products/${pro.slug}" class="wrapper_img">
                        <img src="${pro.thumbnail_main}" alt="">
                    </a>
                    <div class="title_product">
                        <h3>
                            <a href="/products/${pro.slug}">
                                ${pro.name}
                            </a>
                        </h3>
                    </div>
                </li>`;
        });
        document.querySelector('.suggest_detail').innerHTML = html.join('');
    }
    productSuggest();
});
