
document.addEventListener("DOMContentLoaded", () => {
    const backToTopBtn = document.querySelector('.btn_back_top');
    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY; 
        const viewportHeight = window.innerHeight; 
        const documentHeight = document.documentElement.scrollHeight; 
    
        if (scrollPosition > viewportHeight && scrollPosition < documentHeight - viewportHeight) {
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth", // Hiệu ứng cuộn mượt
            });
        });
    });

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
    async function getProductForCop() {
        const sategoryProduct = await fetch(`${window.env.SERVER}/products/api/getcop`);
        const product = await sategoryProduct.json();
        
        const copList =  document.querySelector('.cop-list-1');
        
        const htmls = product.map(function (pro) {
            return `
            <li class="item_card">
                <a href="/products/detail/${pro.slug}" class="wrapper_img" title="${pro.name}">
                    <img class="fade-in" src=${pro.thumbnail_main} alt="">
                    <i class="bi bi-plus"></i>
                </a>
                <div class="title_product">
                    <h3>
                        <a href="/products/detail/${pro.slug}" title="${pro.name}">
                            ${pro.name}
                        </a>
                    </h3>
                </div>
            </li>`;
        })
        copList.innerHTML = htmls.join('');
        const newImages = document.querySelectorAll('.fade-in');
        newImages.forEach(img => observer.observe(img));
            
    }
    async function getProductForDien() {
        const sategoryProduct = await fetch(`${window.env.SERVER}/products/api/getdien`);
        const product = await sategoryProduct.json();
        
        const dienList = document.querySelector('.dien-list-1');
        const htmls = product.map(function (pro) {
            return `
            <li class="item_card">
                <a href="/products/detail/${pro.slug}" class="wrapper_img" title="${pro.name}">
                    <img class="fade-in" src=${pro.thumbnail_main} alt="">
                    <i class="bi bi-plus"></i>
                </a>
                <div class="title_product">
                    <h3>
                        <a href="/products/detail/${pro.slug}" title="${pro.name}">
                            ${pro.name}
                        </a>
                    </h3>
                </div>
            </li>`;
        })
        dienList.innerHTML = htmls.join('');
        const newImages = document.querySelectorAll('.fade-in');
        newImages.forEach(img => observer.observe(img));
    }
    async function getProductForInox() {
        const sategoryProduct = await fetch(`${window.env.SERVER}/products/api/getinox`);
        const product = await sategoryProduct.json();
        
        const dienList = document.querySelector('.inox-list-1');
        const htmls = product.map(function (pro) {
            return `
            <li class="item_card">
                <a href="/products/detail/${pro.slug}" class="wrapper_img" title="${pro.name}">
                    <img class="fade-in" src=${pro.thumbnail_main} alt="">
                    <i class="bi bi-plus"></i>
                </a>
                <div class="title_product">
                    <h3>
                        <a href="/products/detail/${pro.slug}" title="${pro.name}">
                            ${pro.name}
                        </a>
                    </h3>
                </div>
            </li>`;
        })
        dienList.innerHTML = htmls.join('');
        const newImages = document.querySelectorAll('.fade-in');
        newImages.forEach(img => observer.observe(img));
    }
    async function getProductThep(){
        const response = await fetch(`${window.env.SERVER}/products/api/getthep`);
        const product = await response.json();
        const dienList = document.querySelector('.thep-list-1');
        const htmls = product.map(function (pro) {
            return `
            <li class="item_card">
                <a href="/products/detail/${pro.slug}" class="wrapper_img" title="${pro.name}">
                    <img class="fade-in" src=${pro.thumbnail_main} alt="">
                    <i class="bi bi-plus"></i>
                </a>
                <div class="title_product">
                    <h3>
                        <a href="/products/detail/${pro.slug}" title="${pro.name}">
                            ${pro.name}
                        </a>
                    </h3>
                </div>
            </li>`;
        })
        dienList.innerHTML = htmls.join('');
        const newImages = document.querySelectorAll('.fade-in');
        newImages.forEach(img => observer.observe(img));
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

    
    window.addEventListener("popstate", updateNavbarBackground);

    function dropDownAside() {
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
    }
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

    


    
    const imgDetal = document.querySelector('.wrapper_img_product');
    const imgModel = document.querySelector('.img_model');
    const modelImg = document.querySelector('.model_image');
    const btnCloseModelImg = document.querySelector('.close_img_model');
    if(imgDetal){
        imgDetal.addEventListener('click', () => {
            modelImg.classList.add('active');
            imgModel.src = imgDetal.querySelector('.img-js-product-main').src;
        })
        btnCloseModelImg.addEventListener('click', () => {
            modelImg.classList.remove('active');
        })
    }
    function menuModel() {
        const divModel = document.querySelectorAll('.model_level_menu');
        const btnModel = document.querySelectorAll('.btn_level_menu');
        btnModel.forEach((btn,index) => {
            btn.addEventListener('click', (event) => {
                event.stopPropagation();
                divModel.forEach((div,idx) => {
                    if(index === idx){
                        div.classList.toggle('active');
                    }
                })
            })
        })
        document.addEventListener('click', (event) => {
            divModel.forEach((div) => {
                if (!div.contains(event.target)) {
                    div.classList.remove('active');
                }
            });
        });
    }
    menuModel();
    async function getDeatail(){
        const slug = window.location.pathname.split('/').pop();
        const detailProduct = await fetch(`${window.env.SERVER}/products/api/getdetailproduct/${slug}`);

        const product = await detailProduct.json();

        const html = `<img class="img-js-product-main" src="${product.thumbnail_main}" alt="${product.name}">`;
        const thumbnailMain = document.querySelector('.wrapper_img_product');
        thumbnailMain.innerHTML = html;

        const listThumbnail = `<li class="img-js-product" ><img  src="${product.thumbnail_main}" alt="${product.name}"></li>
                <li class="img-js-product" ><img  src="${product.thumbnail_1}" alt="${product.name}"></li>
                <li class="img-js-product" ><img  src="${product.thumbnail_2}" alt="${product.name}"></li>
                <li class="img-js-product" ><img  src="${product.thumbnail_3}" alt="${product.name}"></li>`;
        document.querySelector('.wrapper_list_img_product').innerHTML = listThumbnail;
        changeImageProduct();

        document.querySelector('.name_product').innerHTML = product.name;
        // document.querySelector('.sub_heading').innerHTML = product.description;

        const iamgeDisplay = `<img src="${product.thumbnail_main}" alt="">
                <img src="${product.thumbnail_2}" alt="${product.name}">
                <img src="${product.thumbnail_3}" alt="${product.name}">`;
        document.querySelector('.list_img_detail').innerHTML = iamgeDisplay;

        document.querySelector('.description_product').innerHTML = product.description;
        document.querySelector('.number_stock').innerHTML = `Số lượng tồn kho: ${product.stock}`;
        document.querySelector('.stock').innerHTML = product.stock;
        document.querySelector('.price').innerHTML = `${product.price} VNĐ`;
        const original = product.price * product.sale + product.price;
        document.querySelector('.original').innerHTML = `${original} VNĐ`;
        document.querySelector('.discount').innerHTML = `${product.sale} %`;
        
        const imgDetal = document.querySelector('.img-js-product-main');
        const modelImg = document.querySelector('.model_image');
        const btnCloseModelImg = document.querySelector('.close_img_model');
        imgDetal.addEventListener('click', () => {
            modelImg.classList.add('active');
        })
        btnCloseModelImg.addEventListener('click', () => {
            modelImg.classList.remove('active');
        })
    }
    async function getArticle() {
        const response = await fetch(`${window.env.SERVER}/articles/getall`);
        const articles = await response.json();
        const html = articles.map(article => {
            return `
                <li class="item_news is-between">
                    <a href="/news/${article.slug}" class="link_news" title="${article.subject}">
                        <img src="${article.thumbnail}" alt="${article.subject}">
                    </a>
                    <div class="content_news">
                        <a href="/news/${article.slug}" class="heading_title" title="${article.subject}">
                            ${article.subject}
                        </a>
                        <time>by ${article.author} on ${article.formatedDate}</time>
                        <p>
                            ${article.content}
                        </p>
                        <a href="/news/${article.slug}" class="read_more" title="${article.subject}">read more</a>
                    </div>
                </li>`;
        })
        document.querySelector('.list_news').innerHTML = html.join('');
    }
    async function getDetailArticle(){
        const slug = window.location.pathname.split('/').pop();
        const response = await fetch(`${window.env.SERVER}/articles/getdetail/${slug}`);
        const article = await response.json();
        document.querySelector('.subject_article_detail').innerHTML = article.subject;
        document.querySelector('.article_thumbnail_1').innerHTML = `<img src="${article.thumbnail}" alt="${article.name}">`;
        formatContent = article.content.replace(/\n/g, '<br>');
        document.querySelector('.detail_content_new').innerHTML = formatContent;
        document.querySelector('.time_news_detail').innerHTML = `Cập nhật lúc: ${article.formatedDate} <br> Người đăng: ${article.author}`;
    }
    
    async function productSuggest() {
        const response = await fetch(`${window.env.SERVER}/products/api/suggestproduct`);
        const product = await response.json();

        const html = product.map(pro => {
            return `
                <li class="item_card">
                    <a href="/products/${pro.slug}" class="wrapper_img" title="${pro.name}">
                        <img src="${pro.thumbnail_main}" alt="${pro.name}">
                    </a>
                    <div class="title_product">
                        <h3>
                            <a href="/products/${pro.slug}" title="${pro.name}">
                                ${pro.name}
                            </a>
                        </h3>
                    </div>
                </li>`;
        });
        document.querySelector('.suggest_detail').innerHTML = html.join('');
    }

    async function getArticleLatest() {
        const firstInner = document.querySelector('.inner_frist');
        const secondInner = document.querySelector('.inner_second');
        const response = await fetch(`${window.env.SERVER}/articles/api/latest`);
        const listArticle = await response.json();
        const firstArticle = listArticle[0];
        const secondArticle = listArticle[1];
        const htmlFirst = `
            <div class="img_inner is-center img_artle">
                <div class="frame_skew ">
                    <a href="/news/${firstArticle.slug}" class="is-center" title="${firstArticle.subject}">
                        <img src="${firstArticle.thumbnail}" alt="${firstArticle.subject}">
                    </a>
                </div>
            </div>
            <div class="text_inner">
                <div class="item_time">
                    ${firstArticle.formatedDate}
                </div>
                <div class="item_question">
                    ${firstArticle.subject}
                </div>
                <p>
                    ${firstArticle.content}
                </p>
            </div>
            <div class="img_inner is-center img_inner_frist">
                <div class="frame_skew ">
                    <a href="/news/${firstArticle.slug}" class="is-center" title="${firstArticle.subject}">
                        <img src="${firstArticle.thumbnail}" alt="${firstArticle.subject}">
                    </a>
                </div>
            </div>`;
        firstInner.innerHTML = htmlFirst;

        const htmlSecond = `
            <div class="img_inner is-center">
                <div class="frame_skew skew_opposite">
                    <a href="/news/${secondArticle.slug}" class="is-center" title="${secondArticle.subject}">
                        <img src="${secondArticle.thumbnail}" alt="${secondArticle.subject}">
                    </a>
                </div>
            </div>
            <div class="text_inner" style="text-align: left;">
                <div class="item_time">
                    ${secondArticle.formatedDate}
                </div>
                <div class="item_question">
                    ${secondArticle.subject}
                </div>
                <p>
                    ${secondArticle.content}
                </p>
            </div>`;
        secondInner.innerHTML = htmlSecond;
    }

    function upLoadImage() {
        const btnUpload = document.querySelector('.btn_upload');
        if(btnUpload){
            btnUpload.addEventListener('click', () => {
                const inputFile = document.getElementById("inputFile");
                inputFile.click();
    
                inputFile.addEventListener('change', () => {
                    const file = inputFile.files[0];
                    if (file) {
                        const validTypes = ["image/jpeg", "image/png"];
                        if (validTypes.includes(file.type)) {
                            renderImage(URL.createObjectURL(file));
                            inputFile.value = ""; 
                        } else {
                            alert("Vui lòng chọn file ảnh hợp lệ (.jpg, .jpeg, .png)!");
                            inputFile.value = "";
                        }
                    }
                })   
            })
        }
    }
    function renderImage(src){
        const wrapper = document.querySelector('#avatar_profile_change');
        wrapper.src = src
    }
    upLoadImage();

    function tabUiProfile() {
        const asideTab = document.querySelectorAll('.level_young');
        const tab = document.querySelectorAll('.content_profile');

        asideTab.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                const main = tab[index];
                document.querySelector('.level_young.active').classList.remove('active');
                document.querySelector('.content_profile.active').classList.remove('active');

                main.classList.add('active');
                btn.classList.add('active');
            })
        })
    }
    tabUiProfile();

    function tabUiOrder() {
        const itemTab = document.querySelectorAll('.item_tab_ui');
        const mainTab = document.querySelectorAll('.main_ui_order');
        
        if(itemTab){
            itemTab.forEach((item, index) => {
                item.addEventListener('click', () => {
                    const main = mainTab[index];
                    document.querySelector('.item_tab_ui.active').classList.remove('active');
                    document.querySelector('.main_ui_order.active').classList.remove('active');
    
                    main.classList.add('active');
                    item.classList.add('active');
                })
            })
        }
    }
    tabUiOrder();

    async function getCategoryProduct() {
        const response = await fetch(`${window.env.SERVER}/category/product/all`);
        const categorys = await response.json();

        const html = categorys.map(category => {
            return `
            <ul class="list_drop_header">
                <li>
                    <div class="skew"></div>
                    <a href="/products/${category.slug}" title="${category.name}">${category.name}</a>
                </li>
            </ul>`;
        })
        document.querySelector('.list_category').innerHTML = html.join('');
        const htmls = categorys.map(category => {
            return `
                <li class="item_aside">
                    <div class="header_item_aside">
                        <a href="/products/${category.slug}">${category.name}</a>
                        <i class="bi bi-chevron-down btn_drop"></i>
                    </div>
                    <ul class="dropdown">
                        <li><a href="#">COP</a></li>
                        <li><a href="#">LOP</a></li>
                        <li><a href="#">Sạc không dây</a></li>
                        <li><a href="#">Elevator smartphone</a></li>
                    </ul>
                </li>`;
        })
        document.querySelector('.list_aside').innerHTML = htmls.join('');
        dropDownAside();
    }
    getCategoryProduct();

    async function getProductForCategory() {
        const slug = window.location.pathname.split('/').pop();
        const response = await fetch(`${window.env.SERVER}/category/product/${slug}`);
        const products = await response.json();
        console.log(products);
        const dienList = document.querySelector('.cate-list-1');
        
        let htmls = products.map(function (product) {
            return `
            <li class="item_card">
                <a href="/products/detail/${product.slug}" class="wrapper_img" title="${product.name}">
                    <img class="fade-in" src=${product.thumbnail_main} alt="">
                    <i class="bi bi-plus"></i>
                </a>
                <div class="title_product">
                    <h3>
                        <a href="/products/detail/${product.slug}" title="${product.name}">
                            ${product.name}
                        </a>
                    </h3>
                </div>
            </li>`;
        })
        if(dienList){
            dienList.innerHTML = htmls.join('');
        }
        const newImages = document.querySelectorAll('.fade-in');
        newImages.forEach(img => observer.observe(img));
    }

    function tabActive() {
        const currentPath = window.location.pathname;
        
        if(currentPath === "/") {
            document.querySelector('.tab-1').classList.add('active');
            document.querySelector('.tab-2').classList.remove('active');
            document.querySelector('.tab-3').classList.remove('active');
            document.querySelector('.tab-4').classList.remove('active');
            document.querySelector('.tab-5').classList.remove('active');
            getProductForCop();
            getProductForDien();
            getProductForInox();
            getProductThep();
            getArticleLatest();
        }
        else if(currentPath.startsWith("/products")) {
            document.querySelector('.tab-1').classList.remove('active');
            document.querySelector('.tab-2').classList.add('active');
            document.querySelector('.tab-3').classList.remove('active');
            document.querySelector('.tab-4').classList.remove('active');
            document.querySelector('.tab-5').classList.remove('active');
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
                const response = await fetch(`${window.env.SERVER}/products/api/getproductsfe/?page=${page}&limit=${itemsPage}`);
                const {product, totalItem} = await response.json();
                const productList = document.querySelector('.arrow_card_1');
                const html = product.map(pro => {
                    return `
                        <li class="item_card">
                            <a href="/products/detail/${pro.slug}" class="wrapper_img" title="${pro.name}">
                                <img src="${pro.thumbnail_main}" alt="${pro.name}">
                            </a>
                            <div class="title_product">
                                <h3>
                                    <a href="/products/detail/${pro.slug}" title="${pro.name}">
                                        ${pro.name}
                                    </a>
                                </h3>
                            </div>
                        </li>
                    `
                })
                productList.innerHTML = html.join('');
                const newImages = document.querySelectorAll('.fade-in');
                newImages.forEach(img => observer.observe(img));
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
            getDeatail();
            productSuggest();
            getProductForCategory();
        }
        else if(currentPath.startsWith("/news")) {
            document.querySelector('.tab-1').classList.remove('active');
            document.querySelector('.tab-2').classList.remove('active');
            document.querySelector('.tab-3').classList.add('active');
            document.querySelector('.tab-4').classList.remove('active');
            document.querySelector('.tab-5').classList.remove('active');
            getArticle();
            getDetailArticle();
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
});
