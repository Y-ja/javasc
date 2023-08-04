// 하나의 상품 객체에 대한 설계도
class Product {
    // 객체를 만들 때 초기값을 세팅하는 용도
    constructor(title, image, price, desc) {
      this.title = title;
      this.imageUrl = image;
      this.price = price;
      this.description = desc;
    }
  }
  // 객체 생성
  const p1 = new Product(
    "냠냠이",
    "https://mblogthumb-phinf.pstatic.net/MjAxNzAxMTdfMTQy/MDAxNDg0NjMxMzkwODE5.CuY3PCiQL66H6KAog0TtFOFq5Wo8VZOC_9x9GJfDg_Ag.xGrlIHTm-Rn7-HpQk5y0pbSaFuPT73nNlqRYaEphkcwg.JPEG.ansrud0995/%ED%95%98%EC%A0%95%EC%9A%B0_%EB%A8%B9%EB%B0%A9.jpg?type=w800",
    2000,
    "냠냠박사님 맛있게 밥을 먹어주세요~"
  );
  console.log(p1);
  const p2 = new Product(
    "쩝쩝이",
    "https://blog.kakaocdn.net/dn/ZUIle/btrv0PIfT4N/48ioWXIFULnPuWH088TgAk/img.jpg",
    "쩝쩝꿀꿀박사님 점심을 추천해주세요~"
  );
  console.log(p2);
  
  //화면 상단부 장바구니
class ShoppingCart{
    constructor(){
        //장바구니 담은 제품저장
        this.cartItem = [];
    }
    render(){
        const $cart = document.createElement('section');
        $cart.classList.add('cart');
        $cart.innerHTML=`
        <h2>총액 0원</h2>
        <button>주문하기</button>  
        `;
        return $cart;
    }
}

  // 한개의 LI태그를 생성하는 컴포넌트 클래스 설계
  class ProductItem {
    constructor(product) {
      this.product = product;
    }
  //담기버튼 클릭 이벤트 핸들러
  addToCarHandler(){
    console.log('장바구니 상품추가');
    //상품정보
    console.log(this.product);
  }
    render() {
      const $prod = document.createElement("li");
      $prod.classList.add("product-item");
      $prod.innerHTML = `
          <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}">
            <div class="product-item__content">
              <h2>${this.product.title}</h2>
              <h3>${this.product.price}원</h3>
              <p>${this.product.description}</p>
              <button>담기</button>
            </div>
          </div>
        `;
        const $addCarBtn = $prod.querySelector('button');
        // $addCarBtn.addEventListener('click',this.addToCarHandler.bind(this));
        $addCarBtn.addEventListener('click',( )=> this.addToCarHandler());
        return $prod;
    }
  }
  
  // 한 개의 UL을 생성하는 클래스
  class ProductList {
    constructor() {
      // 상품들을 모아 놓은 배열
      this.products = [
        p1,
        p2,
        new Product(
          "햄버거",
          "https://images.chosun.com/resizer/5jStJ5InVS4u3iHvEzB8y_tGrr8=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/HV765ADF7VF4FLG5KISDNFMUJ4.PNG",
          16900,
          "꽈뜨로 맥씨멈 스테카 버거~"
        ),
        new Product(
          "애플워치",
          "https://img.danawa.com/prod_img/500000/535/481/img/15481535_1.jpg?_v=20211215103510",
          400000,
          "APPLE watch 2세대 2022"
        ),
        new Product(
          "애플망고",
          "https://m.thegiboon.com/web/product/big/202104/ea08c22e8939ab1977487abc826b8ab8.jpg",
          60000,
          "맛있는 맹고~ 당장 사먹어야지~"
        ),
      ]
    } // end constructor
  
    render() {
      // console.log('render!!', this);
    
      const $prodList = document.createElement("ul");
      $prodList.classList.add("product-list");
      this.products.forEach((prod) => {
        const productItem = new ProductItem(prod);
        // console.log(productItem);
        $prodList.appendChild(productItem.render());
      });
     return $prodList;
    }
  }
//쇼핑카드와 프로덕트리스트 렌덩링
class Shop{
    constructor(){
      this.render();
    }
    render(){
        const $app = document.getElementById('app');
        $app.appendChild(new ShoppingCart().render());
        $app.appendChild(new ProductList().render());
    }
}

  // 렌더링 명령
new Shop();
