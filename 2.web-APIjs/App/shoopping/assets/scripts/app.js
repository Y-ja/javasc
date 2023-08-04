class Dog {
    constructor(name, age, injection, favorite) {
      this.name = name;
      this.age = age;
      this.injection = injection;
      this.favorite = favorite;
    }
    walkInPark() {
      console.log(`${this.name}이 산책합니다.`);
    }
  }
  const d1 = new Dog('뽀삐');
  const d2 = new Dog('초코');
  
  d1.walkInPark();
  d2.walkInPark();
  
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
    "https://mblogthumb-phinf.pstatic.net/MjAyMDA2MjRfMTYw/MDAxNTkyOTc0MDMyMzg1.o5sHEB6oFc3dXYv0sq2S7gChprDq53kNTF8P2xabotMg.WcvwGpwKWfr1aAgGo5hx_rUxm8GU0H9dgNafD2gPiFIg.JPEG.090525_/IMG_0545.JPG?type=w800",
    7000,
    "쩝쩝꿀꿀박사님 점심을 추천해주세요~"
  );
  console.log(p2);
  //한개의 li태그를 생성하는 컴포턴트 클래스 설계
  class ProductItem{
    constructor(product){
        this.product = product;
    }
    rendor(){
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
        return $prod;
    }
}

  // 상품 목록에 대한 객체
  const productList = {
    products: [
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
        "맛있는 맹고~ 당장 사먹어야지~",
      ),
    ],
  
    render() {
      // console.log('render!!', this);
      const $app = document.getElementById("app");
      const $prodList = document.createElement("ul");
      $prodList.classList.add("product-list");
      this.products.forEach((prod) => {
        //{product : {title : ' ','imageUrl:' '}}
        const productItem = new ProductItem(prod);
        // console.log(productItem);
        $prodList.appendChild(productItem.rendor());
      });
      $app.appendChild($prodList);
    },
  };
  
  // 렌더링 명령
  productList.render();
  
  