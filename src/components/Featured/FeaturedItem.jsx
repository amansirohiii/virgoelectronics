import './FeaturedSlider.css';
import { items } from '../AllData';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function FeaturedItem() {
  const filteredItems = items.filter((item) => item.id >= 1);
  return (
    <>
      {filteredItems.map((item) => (
        <div key={item.id} className="row-item">
          <Link onClick={() => window.top(0, 0)} to={`/categories/product/${item.id}`}>
            <div className="item-header">
              <LazyLoadImage src={item.img} alt="product" effect="blur" />
            </div>
            <div className="item-description">
              <p>{item.description}</p>
              {/* <p className="item-price">{item.price}$</p> */}
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}
