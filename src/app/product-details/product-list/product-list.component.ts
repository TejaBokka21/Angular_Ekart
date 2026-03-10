import { Component, Input } from '@angular/core';
import { product } from 'src/app/Models/product';

@Component({
  selector: 'product-items',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  selectProduct: product;
  items = [
    {
      _id: '1',
      name: 'Nike Air Zoom Pegasus 41',
      brand: 'Nike',
      gender: 'Men',
      category: 'Running',
      size: [7, 8, 9, 10, 11],
      colors: ['Black', 'White'],
      itemsLeft: 12,
      price: 129.99,
      is_Avilable: true,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL7v5qwkXDHAkzLm7cra136dR7EnADq1Nqdg&s',
      discount: 20,
      discountPrice: 103.99,
      description:
        'The Pegasus 41 offers lightweight cushioning and breathable mesh for daily running performance.',
      rating: 4.7,
      reviews: 120,
    },
    {
      _id: '2',
      name: 'Adidas Ultraboost 23',
      brand: 'Adidas',
      gender: 'Women',
      category: 'Running',
      size: [5, 6, 7, 8, 9],
      colors: ['Pink', 'Gray'],
      itemsLeft: 8,
      price: 180.0,
      is_Avilable: false,
      imageUrl:
        'https://images.prodirectsport.com/ProductImages/Main/1027906_Main_2008592.jpg',
      description:
        'Premium running shoes with Boost midsole cushioning for unmatched energy return and comfort.',
      rating: 4.6,
      reviews: 88,
    },
    {
      _id: '3',
      name: 'Converse Chuck Taylor All Star',
      brand: 'Converse',
      gender: 'Unisex',
      category: 'Casual',
      size: [6, 7, 8, 9, 10, 11],
      colors: ['Black', 'Red', 'White'],
      itemsLeft: 20,
      price: 59.99,
      is_Avilable: true,
      imageUrl:
        'https://static.nike.com/a/images/t_default/90f458e7-38ac-4132-bb32-0aff816f891b/W+AIR+ZOOM+PEGASUS+41.png',
      description:
        'Classic canvas sneakers with a timeless design, perfect for casual wear.',
      rating: 4.5,
      reviews: 310,
    },
    {
      _id: '4',
      name: 'Vans Classic Slip‑On',
      brand: 'Vans',
      gender: 'Unisex',
      category: 'Skateboarding',
      size: [6, 7, 8, 9, 10, 11, 12],
      colors: ['Checkerboard', 'White'],
      itemsLeft: 15,
      price: 54.5,
      is_Avilable: true,
      imageUrl: 'https://www.18montrose.com/images/products/27621704_mm.jpg',
      description:
        'Iconic slip-on skate shoes with padded collars and elastic side accents.',
      rating: 4.4,
      reviews: 270,
    },
    {
      _id: '5',
      name: 'Nike React Infinity Run Flyknit 3',
      brand: 'Nike',
      gender: 'Women',
      category: 'Running',
      size: [6, 7, 8, 9, 10],
      colors: ['Blue', 'Gray'],
      itemsLeft: 10,
      price: 160.0,
      is_Avilable: false,
      discount: 10,
      discountPrice: 144.0,
      imageUrl:
        'https://images.prodirectsport.com/ProductImages/Gallery_1/1019109_Gallery_1_1837592.jpg',
      description:
        'Engineered with Flyknit for breathability and React foam for soft landings.',
      rating: 4.3,
      reviews: 75,
    },
    {
      _id: '7',
      name: 'New Balance 574 Core',
      brand: 'New Balance',
      gender: 'Unisex',
      category: 'Casual',
      size: [6, 7, 8, 9, 10, 11, 12],
      colors: ['Gray', 'Navy'],
      itemsLeft: 14,
      price: 79.99,
      is_Avilable: true,
      discount: 15,
      discountPrice: 67.99,
      imageUrl:
        'data:image/jpeg;base64,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',
      description:
        'Retro running-inspired shoes with durable suede and EVA cushioning.',
      rating: 4.4,
      reviews: 145,
    },
    {
      _id: '12',
      name: 'Reebok Club C 85',
      brand: 'Reebok',
      gender: 'Unisex',
      category: 'Casual',
      size: [6, 7, 8, 9, 10, 11],
      colors: ['White', 'Green'],
      itemsLeft: 17,
      price: 75.0,
      is_Avilable: true,
      discount: 25,
      discountPrice: 56.25,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ctevprWZjpSuowVSY-P24TkaZbO6dz_mvg&s',
      description:
        'A clean and timeless court shoe with soft leather and a minimalist design.',
      rating: 4.5,
      reviews: 148,
    },
    {
      _id: '15',
      name: 'On Cloudswift',
      brand: 'On',
      gender: 'Unisex',
      category: 'Running',
      size: [7, 8, 9, 10, 11],
      colors: ['White', 'Silver'],
      itemsLeft: 10,
      price: 169.95,
      is_Avilable: true,
      discount: 30,
      discountPrice: 118.97,
      imageUrl: 'https://www.18montrose.com/images/products/27621704_mm.jpg',
      description:
        'Stylish urban running shoe with Helion™ superfoam for enhanced performance and flexibility.',
      rating: 4.6,
      reviews: 98,
    },
    {
      _id: '17',
      name: 'Jordan Air 1 Mid',
      brand: 'Nike',
      gender: 'Unisex',
      category: 'Lifestyle',
      size: [7, 8, 9, 10, 11, 12],
      colors: ['Black', 'Gym Red'],
      itemsLeft: 6,
      price: 125.0,
      is_Avilable: true,
      discount: 10,
      discountPrice: 112.5,
      imageUrl:
        'https://images.prodirectsport.com/ProductImages/Gallery_2/1007006_Gallery_2_1664592.jpg',
      description:
        'Iconic mid-top sneakers combining vintage style and modern streetwear appeal.',
      rating: 4.8,
      reviews: 200,
    },
    {
      _id: '21',
      name: 'Crocs Classic Clog',
      brand: 'Crocs',
      gender: 'Unisex',
      category: 'Comfort',
      size: [6, 7, 8, 9, 10, 11, 12],
      colors: ['Black', 'Navy', 'Lime'],
      itemsLeft: 25,
      price: 49.99,
      is_Avilable: true,
      discount: 5,
      discountPrice: 47.49,
      imageUrl:
        'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/9cfbf32b65ab4d83ad48019628c2f7d9_9366/vs-pace-2.0-shoes.jpg',
      description:
        'Iconic lightweight clogs with ventilation ports and pivoting heel straps for secure fit.',
      rating: 4.3,
      reviews: 180,
    },
    {
      _id: '22',
      name: 'Birkenstock Arizona Essentials',
      brand: 'Birkenstock',
      gender: 'Unisex',
      category: 'Sandals',
      size: [6, 7, 8, 9, 10, 11],
      colors: ['Black', 'White'],
      itemsLeft: 18,
      price: 49.95,
      is_Avilable: true,
      imageUrl:
        'data:image/jpeg;base64,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',
      description:
        'Classic double-strap sandal made from lightweight EVA material for everyday comfort.',
      rating: 4.5,
      reviews: 210,
    },
    {
      _id: '23',
      name: 'Columbia Newton Ridge Plus II',
      brand: 'Columbia',
      gender: 'Men',
      category: 'Hiking',
      size: [8, 9, 10, 11, 12],
      colors: ['Brown', 'Black'],
      itemsLeft: 7,
      price: 89.99,
      is_Avilable: true,
      imageUrl:
        'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/f9bee73636df43139dd176f83d16b759_9366/court-team-bounce-2.0-shoes.jpg',
      description:
        'Durable, waterproof hiking boots built for rugged trails and tough terrain.',
      rating: 4.6,
      reviews: 176,
    },
    {
      _id: '24',
      name: 'Adidas Samba OG',
      brand: 'Adidas',
      gender: 'Unisex',
      category: 'Lifestyle',
      size: [6, 7, 8, 9, 10, 11],
      colors: ['Black', 'White', 'Gum'],
      itemsLeft: 10,
      price: 100.0,
      is_Avilable: true,
      imageUrl:
        'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/3c9b44c0661445b29bf5cf0da3f2bc75_9366/dropset-4-training-shoes.jpg',
      description:
        'Timeless low-top sneaker with a leather upper and gum rubber outsole for classic appeal.',
      rating: 4.7,
      reviews: 240,
    },
    {
      _id: '25',
      name: 'Merrell Moab 3',
      brand: 'Merrell',
      gender: 'Men',
      category: 'Hiking',
      size: [8, 9, 10, 11],
      colors: ['Earth', 'Olive'],
      itemsLeft: 8,
      price: 120.0,
      is_Avilable: true,
      imageUrl:
        'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/fb1380db0adc4c21bfc24e76f72ce18f_9366/energy-flux-shoes.jpg',
      description:
        'Versatile trail shoes with Vibram soles and breathable mesh for all-day hikes.',
      rating: 4.5,
      reviews: 101,
    },
    {
      _id: '26',
      name: 'Allbirds Tree Runners',
      brand: 'Allbirds',
      gender: 'Unisex',
      category: 'Casual',
      size: [7, 8, 9, 10, 11],
      colors: ['Gray', 'Navy'],
      itemsLeft: 14,
      price: 98.0,
      is_Avilable: true,
      imageUrl:
        'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-HQ2414-001_1.jpg?rnd=20200526195200&tr=w-512',
      description:
        'Sustainable and breathable sneakers made from eucalyptus tree fibers.',
      rating: 4.4,
      reviews: 87,
    },
    {
      _id: '27',
      name: 'Nike Air Max 270',
      brand: 'Nike',
      gender: 'Unisex',
      category: 'Lifestyle',
      size: [6, 7, 8, 9, 10, 11, 12],
      colors: ['White', 'Crimson'],
      itemsLeft: 6,
      price: 150.0,
      is_Avilable: true,
      discount: 15,
      discountPrice: 127.5,
      imageUrl:
        'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-HJ8485-500_1.jpg?tr=cm-pad_resize,w-500,h-500',
      description:
        'Stylish sneakers featuring the tallest Air unit in the heel for superior comfort.',
      rating: 4.6,
      reviews: 158,
    },
    {
      _id: '28',
      name: 'Vans Sk8-Hi',
      brand: 'Vans',
      gender: 'Unisex',
      category: 'Skateboarding',
      size: [6, 7, 8, 9, 10, 11],
      colors: ['Black/White'],
      itemsLeft: 11,
      price: 75.0,
      is_Avilable: true,
      imageUrl:
        'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-FD2722-118_1.jpg?tr=cm-pad_resize,w-500,h-500',
      description:
        'High-top skate shoes with durable canvas and padded ankle support.',
      rating: 4.5,
      reviews: 199,
    },
    {
      _id: '29',
      name: 'UGG Neumel Boot',
      brand: 'UGG',
      gender: 'Men',
      category: 'Casual',
      size: [7, 8, 9, 10, 11, 12],
      colors: ['Chestnut', 'Black'],
      itemsLeft: 5,
      price: 139.95,
      is_Avilable: true,
      imageUrl:
        'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-HM9594-004_1.jpg?tr=cm-pad_resize,w-500,h-500',
      description:
        'Chukka-style boots lined with soft wool for premium comfort and warmth.',
      rating: 4.7,
      reviews: 92,
    },
    {
      _id: '30',
      name: 'DC Court Graffik',
      brand: 'DC Shoes',
      gender: 'Men',
      category: 'Skateboarding',
      size: [8, 9, 10, 11],
      colors: ['Black', 'Red'],
      itemsLeft: 10,
      price: 65.0,
      is_Avilable: true,
      imageUrl:
        'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-FD2722-016_1.jpg?tr=cm-pad_resize,w-500,h-500',
      description:
        'Bold skate shoes with padded collars and durable leather construction.',
      rating: 4.3,
      reviews: 73,
    },
    {
      _id: '31',
      name: 'Toms Alpargata',
      brand: 'Toms',
      gender: 'Women',
      category: 'Casual',
      size: [6, 7, 8, 9, 10],
      colors: ['Canvas Black', 'Gray'],
      itemsLeft: 9,
      price: 54.95,
      is_Avilable: true,
      imageUrl:
        'https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/33d6f8d4-a863-437b-ab3d-c6307831cdd9/NIKE+VOMERO+PREMIUM.png',
      description:
        'Lightweight slip-ons made with canvas and elastic v-panel for easy wear.',
      rating: 4.4,
      reviews: 64,
    },
  ];

  allProducts = this.items.length;
  productAvilable = this.items.filter((p) => p.is_Avilable === true).length;
  productNotAvilable = this.items.filter((p) => p.is_Avilable === false).length;
  selectedFilterButton: string = 'all';
  filterChanged(value: string) {
    console.log(value);
    this.selectedFilterButton = value;
  }
  @Input()
  searchtext: string = '';
}
